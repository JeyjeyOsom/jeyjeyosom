import { motion, useReducedMotion } from "framer-motion"
import ZoneHeader from "./ZoneHeader"
import runData from "../../data/run-data.json"

// Run Data is a baked snapshot from the Huawei Health privacy export,
// refreshed via scripts/import-huawei-data.mjs — never fetched live by
// visitors (see CONTEXT.md).

const STAT_TILES: Array<[string, string]> = [
  ["TOTAL DISTANCE", `${runData.totals.distanceKm.toLocaleString()} KM`],
  ["RUNS LOGGED", `${runData.totals.runs}`],
  ["ELEVATION GAIN", `${runData.totals.elevationM.toLocaleString()} M`],
  ["TIME ON FEET", `${runData.totals.movingTimeHours} H`],
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

interface Race {
  name: string
  date: string
  distanceKm: number
  time: string
}
const races: Race[] = runData.races

// Dates are optional on hand-kept PRs; hide the column until one exists
const hasPrDates = runData.prs.some((pr) => pr.date !== "")

// Records Screen — the Running Zone: PRs, mileage, and races as a game
// records table, fed by Run Data.
export default function RecordsScreen() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="running"
      aria-label="Records screen"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-6" title="RECORDS" />

        {runData.totalsPlaceholder && (
          <p className="mb-10 inline-flex items-center gap-2 bg-dusk-900 px-3 py-2 font-arcade text-[8px] md:text-[9px] tracking-wider text-sunset-400">
            <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-sunset-500" />
            SAMPLE TOTALS · WATCH SYNC PENDING
          </p>
        )}

        {/* Stat tiles */}
        <motion.dl
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-1"
        >
          {STAT_TILES.map(([label, value]) => (
            <div key={label} className="pixel-border bg-dusk-900 p-5 md:p-6">
              <dt className="font-arcade text-[8px] md:text-[9px] text-gold-400">{label}</dt>
              <dd className="mt-3 font-pixel font-bold text-2xl md:text-3xl text-cream-100">
                {value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <p className="mt-4 px-1 font-arcade text-[8px] md:text-[9px] tracking-wider text-mist-300">
          THIS YEAR: {runData.ytd.runs} RUNS · {runData.ytd.distanceKm.toLocaleString()} KM
        </p>

        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Best times — the high-score table */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pixel-border bg-dusk-900 mx-1 p-6 md:p-8"
          >
            <h3 className="font-pixel font-bold text-xl md:text-2xl text-cream-100">
              BEST TIMES
            </h3>
            <table className="mt-6 w-full">
              <thead>
                <tr className="text-left">
                  <th scope="col" className="pb-3 font-arcade text-[8px] md:text-[9px] font-normal text-gold-400">DIST</th>
                  <th scope="col" className="pb-3 font-arcade text-[8px] md:text-[9px] font-normal text-gold-400">TIME</th>
                  {hasPrDates && (
                    <th scope="col" className="pb-3 font-arcade text-[8px] md:text-[9px] font-normal text-gold-400 text-right">DATE</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {runData.prs.map((pr) => (
                  <tr key={pr.label} className="border-t-2 border-dusk-800">
                    <td className="py-3 font-body text-sm md:text-base font-semibold text-cream-100">{pr.label}</td>
                    <td className="py-3 font-pixel text-lg md:text-xl text-gold-300">{pr.time}</td>
                    {hasPrDates && (
                      <td className="py-3 font-body text-xs md:text-sm text-mist-300 text-right">
                        {pr.date ? formatDate(pr.date) : ""}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Race results */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pixel-border bg-dusk-900 mx-1 p-6 md:p-8"
          >
            <h3 className="font-pixel font-bold text-xl md:text-2xl text-cream-100">
              RACE RESULTS
            </h3>
            {races.length === 0 ? (
              <p className="mt-6 flex items-center gap-2 font-arcade text-[8px] md:text-[9px] tracking-wider text-mist-300">
                <span aria-hidden="true" className="animate-blink inline-block w-2 h-2 bg-dusk-700" />
                RACE LOG AWAITING ITS FIRST ENTRY
              </p>
            ) : (
              <ol className="mt-6 space-y-5">
                {races.map((race) => (
                  <li key={`${race.name}-${race.date}`} className="border-t-2 border-dusk-800 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="font-body text-sm md:text-base font-semibold text-cream-100">
                        {race.name}
                      </span>
                      <span className="font-pixel text-lg md:text-xl text-gold-300">{race.time}</span>
                    </div>
                    <p className="mt-1 font-body text-xs md:text-sm text-mist-300">
                      {race.distanceKm} km · {formatDate(race.date)}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
