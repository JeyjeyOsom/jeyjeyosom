#!/usr/bin/env node
// Bakes data/run-data.json from the Strava API (the Run Data snapshot).
// Visitors never hit Strava; this runs locally (or on a schedule) and the
// result is committed with the site.
//
// Credentials come from .env (see scripts/strava-setup.sh for first-time
// setup): STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN.
//
// Usage: node scripts/fetch-run-data.mjs [--max-detail N]
//   --max-detail N  how many recent runs to scan for best efforts (PRs).
//                   Each costs one API call; Strava allows 100 reads/15min.
//                   Default 80. Pass 0 to skip the PR scan.

import { readFileSync, writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const OUT = resolve(ROOT, "data/run-data.json")

// --- tiny .env loader (no dependency) ---
function loadEnv() {
  try {
    const text = readFileSync(resolve(ROOT, ".env"), "utf8")
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "")
    }
  } catch {
    /* .env optional; env vars may come from the shell */
  }
}
loadEnv()

const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env
if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
  console.error(
    "Missing Strava credentials. Run scripts/strava-setup.sh first, or set\n" +
      "STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET and STRAVA_REFRESH_TOKEN."
  )
  process.exit(1)
}

const maxDetailArg = process.argv.indexOf("--max-detail")
const MAX_DETAIL = maxDetailArg > -1 ? Number(process.argv[maxDetailArg + 1]) : 80

const API = "https://www.strava.com/api/v3"

async function getAccessToken() {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  })
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status} ${await res.text()}`)
  const json = await res.json()
  if (json.refresh_token && json.refresh_token !== STRAVA_REFRESH_TOKEN) {
    console.warn(
      "Strava issued a new refresh token. Update STRAVA_REFRESH_TOKEN in .env to:\n" +
        `  ${json.refresh_token}`
    )
  }
  return json.access_token
}

async function api(token, path) {
  const res = await fetch(`${API}${path}`, { headers: { Authorization: `Bearer ${token}` } })
  if (res.status === 429) throw new Error("Strava rate limit hit (429). Try again in 15 minutes.")
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status} ${await res.text()}`)
  return res.json()
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function fmtTime(totalSeconds) {
  const s = Math.round(totalSeconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${m}:${String(sec).padStart(2, "0")}`
}

async function listAllRuns(token) {
  const runs = []
  for (let page = 1; ; page++) {
    const batch = await api(token, `/athlete/activities?per_page=200&page=${page}`)
    if (batch.length === 0) break
    runs.push(...batch.filter((a) => a.type === "Run"))
    if (batch.length < 200) break
    await sleep(300)
  }
  return runs
}

// PR labels Strava reports as best_efforts, mapped to our display names.
const PR_EFFORTS = {
  "1k": "1K",
  "5k": "5K",
  "10k": "10K",
  "Half-Marathon": "HALF MARATHON",
  "Marathon": "MARATHON",
}

async function main() {
  const token = await getAccessToken()
  const athlete = await api(token, "/athlete")
  console.log(`Authenticated as ${athlete.firstname} ${athlete.lastname}`)

  const stats = await api(token, `/athletes/${athlete.id}/stats`)
  const all = stats.all_run_totals
  const ytd = stats.ytd_run_totals

  console.log("Listing activities…")
  const runs = await listAllRuns(token)
  console.log(`${runs.length} runs found`)

  // Races: Strava workout_type 1 = race
  const races = runs
    .filter((a) => a.workout_type === 1)
    .sort((a, b) => b.start_date.localeCompare(a.start_date))
    .map((a) => ({
      name: a.name,
      date: a.start_date.slice(0, 10),
      distanceKm: Math.round(a.distance / 100) / 10,
      time: fmtTime(a.moving_time),
    }))
  console.log(`${races.length} races flagged`)

  // PRs: scan recent runs' best_efforts (one detail call each)
  const best = {}
  const toScan = MAX_DETAIL > 0 ? runs.slice(0, MAX_DETAIL) : []
  console.log(`Scanning ${toScan.length} runs for best efforts…`)
  for (const [i, run] of toScan.entries()) {
    const detail = await api(token, `/activities/${run.id}`)
    for (const effort of detail.best_efforts ?? []) {
      const label = PR_EFFORTS[effort.name]
      if (!label) continue
      if (!best[label] || effort.elapsed_time < best[label].seconds) {
        best[label] = {
          seconds: effort.elapsed_time,
          date: run.start_date.slice(0, 10),
        }
      }
    }
    if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${toScan.length}`)
    await sleep(700) // stay well under 100 reads / 15 min
  }

  const prs = Object.entries(best)
    .sort((a, b) => a[1].seconds - b[1].seconds)
    .map(([label, v]) => ({ label, time: fmtTime(v.seconds), date: v.date }))

  const snapshot = {
    placeholder: false,
    generatedAt: new Date().toISOString(),
    totals: {
      runs: all.count,
      distanceKm: Math.round(all.distance / 1000),
      elevationM: Math.round(all.elevation_gain),
      movingTimeHours: Math.round(all.moving_time / 3600),
    },
    ytd: {
      runs: ytd.count,
      distanceKm: Math.round(ytd.distance / 1000),
    },
    prs,
    races,
  }

  writeFileSync(OUT, JSON.stringify(snapshot, null, 2) + "\n")
  console.log(`Wrote ${OUT}`)
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
