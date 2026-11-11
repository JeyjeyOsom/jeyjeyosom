#!/usr/bin/env node
// Bakes data/run-data.json (the Run Data snapshot) from a Huawei Health
// privacy export. Visitors never hit any API; re-run this on a fresh export
// whenever the Records Screen should update.
//
// Getting the export (free, no developer account):
//   1. Huawei Health app → Me → tap your profile → Privacy center
//      → "Request your data" → select the Health app → Send.
//   2. Huawei emails a download link for a zip (can take up to a few days).
//   3. Run:  node scripts/import-huawei-data.mjs ~/Downloads/HiHealth*.zip
//      (a Windows path like 'C:\Users\me\Downloads\x.zip' also works in WSL)
//
// Races and official PRs: Huawei doesn't flag races, so list them by hand in
// data/run-overrides.json — they're merged into the snapshot on every run.
//
// Options:
//   --sport-type N[,N...]  treat these sportType codes as runs (the script
//                          prints a histogram of all codes it saw; use that
//                          to correct detection if your runs are missed)

import { readFileSync, writeFileSync, readdirSync, statSync, mkdtempSync, existsSync } from "node:fs"
import { resolve, join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { tmpdir } from "node:os"
import { execFileSync } from "node:child_process"

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const OUT = resolve(ROOT, "data/run-data.json")
const OVERRIDES = resolve(ROOT, "data/run-overrides.json")

// sportType codes seen in Huawei Health exports for running (outdoor and
// indoor/treadmill); the histogram output helps correct this per export.
const DEFAULT_RUN_TYPES = [2, 102, 258, 264]

const args = process.argv.slice(2)
if (args.length === 0 || args[0].startsWith("--")) {
  console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("\n").slice(1, 22).map((l) => l.replace(/^\/\/ ?/, "")).join("\n"))
  process.exit(args.length === 0 ? 1 : 0)
}

let input = args[0]
// Accept a Windows path pasted into WSL
if (/^[A-Za-z]:[\\/]/.test(input)) {
  input = "/mnt/" + input[0].toLowerCase() + input.slice(2).replaceAll("\\", "/")
}
input = resolve(input)
if (!existsSync(input)) {
  console.error(`Not found: ${input}`)
  process.exit(1)
}

const typeArg = args.indexOf("--sport-type")
const RUN_TYPES = typeArg > -1 ? args[typeArg + 1].split(",").map(Number) : DEFAULT_RUN_TYPES

// --- unpack zip if needed ---
let dir = input
if (input.endsWith(".zip")) {
  dir = mkdtempSync(join(tmpdir(), "huawei-export-"))
  try {
    execFileSync("unzip", ["-o", "-q", input, "-d", dir])
  } catch {
    console.error("Couldn't unzip (is `unzip` installed? try: sudo apt install unzip),")
    console.error("or extract the zip yourself and pass the folder instead.")
    process.exit(1)
  }
  console.log(`Extracted to ${dir}`)
}

// --- find workout records by content, not filename (filenames are localized) ---
function* jsonFiles(d) {
  for (const name of readdirSync(d)) {
    const p = join(d, name)
    const st = statSync(p)
    if (st.isDirectory()) yield* jsonFiles(p)
    else if (name.toLowerCase().endsWith(".json")) yield p
  }
}

const looksLikeWorkout = (o) =>
  o && typeof o === "object" && "sportType" in o &&
  ("totalDistance" in o || "distance" in o || "totalTime" in o)

function extractWorkouts(node, found) {
  if (Array.isArray(node)) {
    for (const item of node) extractWorkouts(item, found)
  } else if (node && typeof node === "object") {
    if (looksLikeWorkout(node)) found.push(node)
    else for (const v of Object.values(node)) extractWorkouts(v, found)
  }
}

const workouts = []
let scanned = 0
for (const file of jsonFiles(dir)) {
  scanned++
  try {
    extractWorkouts(JSON.parse(readFileSync(file, "utf8")), workouts)
  } catch {
    /* not valid JSON or too exotic; skip */
  }
}
console.log(`Scanned ${scanned} JSON files, found ${workouts.length} workout records`)
if (workouts.length === 0) {
  console.error("No workout records found. Is this the Health app export?")
  process.exit(1)
}

// --- tolerant field readers ---
const num = (v) => (typeof v === "string" ? Number(v) : v)
const distanceMeters = (w) => {
  const d = num(w.totalDistance ?? w.distance ?? 0)
  return d < 100 ? d * 1000 : d // small values are km
}
const durationSeconds = (w) => {
  const t = num(w.totalTime ?? w.totalDuration ?? w.duration ?? 0)
  return t > 50000 ? t / 1000 : t // large values are ms
}
const startDate = (w) => {
  const t = num(w.startTime ?? w.beginTime ?? 0)
  if (!t || Number.isNaN(t)) return null
  return new Date(t > 1e12 ? t : t * 1000)
}
const climbMeters = (w) => num(w.totalAltitude ?? w.totalClimb ?? w.climb ?? 0) || 0

// --- histogram so misdetection is visible ---
const histogram = {}
for (const w of workouts) {
  const t = num(w.sportType)
  const km = distanceMeters(w) / 1000
  histogram[t] ??= { count: 0, km: 0 }
  histogram[t].count++
  histogram[t].km += km
}
console.log("sportType histogram (code: workouts, total km):")
for (const [t, { count, km }] of Object.entries(histogram)) {
  const mark = RUN_TYPES.includes(Number(t)) ? "← counted as runs" : ""
  console.log(`  ${t}: ${count} workouts, ${km.toFixed(1)} km ${mark}`)
}

const runs = workouts
  .filter((w) => RUN_TYPES.includes(num(w.sportType)))
  .map((w) => ({
    date: startDate(w),
    meters: distanceMeters(w),
    seconds: durationSeconds(w),
    climb: climbMeters(w),
  }))
  .filter((r) => r.date && r.meters > 100 && r.seconds > 60)

if (runs.length === 0) {
  console.error("No runs matched. Pass --sport-type with a code from the histogram above.")
  process.exit(1)
}

// --- aggregate ---
const thisYear = new Date().getFullYear()
const sum = (xs, f) => xs.reduce((a, x) => a + f(x), 0)
const ytdRuns = runs.filter((r) => r.date.getFullYear() === thisYear)

function fmtTime(totalSeconds) {
  const s = Math.round(totalSeconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    : `${m}:${String(sec).padStart(2, "0")}`
}

// Best efforts from whole-run summaries: fastest run whose total distance
// falls inside a standard-distance window. (The export's summaries can't
// split a longer run, so these are honest per-run bests; official race PRs
// belong in data/run-overrides.json.)
const PR_WINDOWS = [
  ["5K", 5000, 5500],
  ["10K", 10000, 10800],
  ["HALF MARATHON", 21097, 22200],
  ["MARATHON", 42195, 44000],
]
const prs = []
for (const [label, min, max] of PR_WINDOWS) {
  const candidates = runs.filter((r) => r.meters >= min && r.meters <= max)
  if (candidates.length === 0) continue
  const best = candidates.reduce((a, b) => (a.seconds < b.seconds ? a : b))
  prs.push({ label, time: fmtTime(best.seconds), date: best.date.toISOString().slice(0, 10) })
}

// --- merge manual overrides (races, official PRs, corrections) ---
// Overrides come first in their curated order; computed per-run bests only
// fill in distances the overrides don't cover.
let overrides = { prs: [], races: [], totals: {} }
if (existsSync(OVERRIDES)) {
  overrides = { ...overrides, ...JSON.parse(readFileSync(OVERRIDES, "utf8")) }
}
const mergedPrs = [
  ...overrides.prs,
  ...prs.filter((p) => !overrides.prs.some((o) => o.label === p.label)),
]

const snapshot = {
  totalsPlaceholder: false,
  source: "huawei-health-export",
  generatedAt: new Date().toISOString(),
  totals: {
    runs: runs.length,
    distanceKm: Math.round(sum(runs, (r) => r.meters) / 1000),
    elevationM: Math.round(sum(runs, (r) => r.climb)),
    movingTimeHours: Math.round(sum(runs, (r) => r.seconds) / 3600),
    ...overrides.totals,
  },
  ytd: {
    runs: ytdRuns.length,
    distanceKm: Math.round(sum(ytdRuns, (r) => r.meters) / 1000),
  },
  prs: mergedPrs,
  races: overrides.races,
}

writeFileSync(OUT, JSON.stringify(snapshot, null, 2) + "\n")
console.log(`\nWrote ${OUT}`)
console.log(`  ${snapshot.totals.runs} runs · ${snapshot.totals.distanceKm} km lifetime · ${snapshot.ytd.distanceKm} km this year`)
console.log(`  PRs: ${mergedPrs.map((p) => `${p.label} ${p.time}`).join(" · ") || "none detected"}`)
if (overrides.races.length === 0) {
  console.log("  No races listed — add them to data/run-overrides.json and re-run.")
}
