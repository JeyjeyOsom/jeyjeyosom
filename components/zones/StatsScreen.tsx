import { motion, useReducedMotion } from "framer-motion"
import ZoneHeader from "./ZoneHeader"
import { PixelRects, RUNNER_SHARED, RUNNER_STANDING, RUNNER_VIEWBOX } from "./sprites"

const STATS: Array<[string, string]> = [
  ["CLASS", "Full Stack Developer"],
  ["EXP", "3+ years in production"],
  ["FOCUS", "AI engineering & agentic apps"],
  ["STATUS", "Open to work"],
]

// Stats Screen — the About Zone, framed as a character card. Template Zone:
// later Zones copy its header/panel structure.
export default function StatsScreen() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-label="Stats screen"
      className="scanlines relative overflow-hidden bg-dusk-950 py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ZoneHeader code="ZONE 1-2 · STATS SCREEN" title="PLAYER STATS" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Character card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="pixel-border bg-dusk-900 p-6 md:p-8 mx-1">
              {/* Portrait */}
              <div
                aria-hidden="true"
                className="pixel-border bg-dusk-800 mx-1 mt-1 mb-6 flex items-end justify-center pt-6"
              >
                <svg
                  viewBox={RUNNER_VIEWBOX}
                  className="crisp w-24 md:w-28"
                  shapeRendering="crispEdges"
                >
                  <PixelRects rects={[...RUNNER_SHARED, ...RUNNER_STANDING]} />
                </svg>
              </div>

              <h3 className="font-pixel font-bold text-2xl md:text-3xl text-cream-100">
                JUAN DEJON
              </h3>

              <dl className="mt-6 space-y-4">
                {STATS.map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-3">
                    <dt className="font-arcade text-[8px] md:text-[9px] text-gold-400 w-16 shrink-0">
                      {label}
                    </dt>
                    <dd className="font-body text-sm md:text-base text-cream-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7 lg:col-span-8 space-y-8"
          >
            <p className="font-body text-xl md:text-2xl leading-snug text-cream-100">
              I'm Juan Dejon, a{" "}
              <span className="text-sunset-400 font-semibold">Full Stack Developer</span>{" "}
              passionate about building scalable software, modern backend systems,
              and intelligent applications that solve real-world problems.
            </p>

            <div className="space-y-6 font-body text-base md:text-lg leading-relaxed text-mist-300 max-w-xl">
              <p>
                With over{" "}
                <span className="text-cream-100 font-semibold">
                  3 years of professional experience
                </span>
                , I've built production-ready web applications across healthcare,
                public relations, and business management. I enjoy designing
                scalable backend architectures while creating intuitive user
                experiences that deliver real value.
              </p>

              <p>
                My core stack includes{" "}
                <span className="text-cream-100 font-medium">
                  React, Vue, AdonisJS, FastAPI, PostgreSQL, Redis, Docker, AWS,
                  and TypeScript
                </span>
                . I love turning complex business requirements into clean,
                maintainable, and high-performing software through thoughtful
                architecture and collaboration.
              </p>

              <p>
                Outside of professional work, I'm constantly exploring emerging
                technologies. My current focus is on{" "}
                <span className="text-cream-100 font-medium">
                  AI engineering, LLM-powered applications, automation, and
                  agentic workflows
                </span>
                . I'm committed to continuous learning and enjoy experimenting
                with modern tools that help developers build faster, smarter,
                and more reliable software.
              </p>
            </div>

            {/* Motto */}
            <div className="pt-8 border-t border-dusk-700 flex items-baseline gap-4">
              <div className="font-arcade text-[8px] md:text-[9px] text-gold-400 shrink-0">
                MOTTO
              </div>
              <p className="font-body text-sm md:text-base italic text-mist-300">
                Keep learning. Build with purpose. Leverage modern technologies
                and AI to create software that makes a meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
