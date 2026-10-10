import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { WashingMachine } from "./WashingMachine"

const PHASES = [
  {
    range: [0, 0.22] as const,
    label: "Collecte",
    title: "On vient chercher votre linge.",
    body: "Un coursier BanToo passe chez vous au créneau choisi. Sac pesé, étiqueté, scellé devant vous.",
  },
  {
    range: [0.22, 0.52] as const,
    label: "Lavage",
    title: "Chaque pièce traitée avec soin.",
    body: "Nos pressings partenaires trient par matière et par couleur. Produits doux, cycles adaptés, rien n'est mélangé au hasard.",
  },
  {
    range: [0.52, 0.76] as const,
    label: "Repassage",
    title: "Plié, sur cintre, impeccable.",
    body: "Repassage à la pièce, pliage soigné ou mise sur cintre selon le vêtement. Prêt à ranger directement.",
  },
  {
    range: [0.76, 1] as const,
    label: "Livraison",
    title: "De retour chez vous en 24h.",
    body: "Votre coursier revient, sac par sac. Vous signez, c'est fini — jusqu'à la prochaine fois.",
  },
]

export function WashCycleSection() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.76, 1],
    ["#0f1a12", "#0f1a12", "#15291a"],
  )

  const [activePhase, setActivePhase] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = PHASES.findIndex((p) => v >= p.range[0] && v < p.range[1])
    const resolved = index === -1 ? (v >= 1 ? PHASES.length - 1 : 0) : index
    setActivePhase((prev) => (prev === resolved ? prev : resolved))
  })

  if (prefersReducedMotion) {
    return (
      <section className="bg-bamboo-950 px-4 py-24 text-stone-50">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono-tnum text-xs tracking-widest text-bronze-400">Le cycle BanToo</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            De la collecte à la livraison, un cycle pensé pour durer.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
            {PHASES.map((phase) => (
              <div key={phase.label}>
                <p className="font-mono-tnum text-xs tracking-widest text-bronze-400">{phase.label}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{phase.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-stone-50/60">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <motion.section ref={containerRef} style={{ backgroundColor }} className="relative h-[380vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden text-stone-50">
        <div className="grain absolute inset-0 opacity-60" />

        <div className="relative z-10 px-4 pt-28">
          <p className="mx-auto max-w-6xl font-mono-tnum text-xs tracking-widest text-bronze-400">
            Le cycle BanToo
          </p>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 px-4 md:grid-cols-[1fr_auto]">
          <div className="relative h-[280px]">
            <AnimatePresence mode="wait">
              <PhaseCopy key={activePhase} phase={PHASES[activePhase]} />
            </AnimatePresence>
          </div>

          <div className="mx-auto h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
            <WashingMachine className="h-full w-full" progress={scrollYProgress} />
          </div>
        </div>

        <ProgressRail scrollYProgress={scrollYProgress} />
      </div>
    </motion.section>
  )
}

function PhaseCopy({ phase }: { phase: (typeof PHASES)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <p className="font-mono-tnum text-xs tracking-widest text-bronze-400">{phase.label}</p>
      <h3 className="mt-3 max-w-md text-balance font-display text-3xl font-semibold sm:text-4xl">{phase.title}</h3>
      <p className="mt-4 max-w-sm text-sm text-stone-50/60 sm:text-base">{phase.body}</p>
    </motion.div>
  )
}

function ProgressRail({ scrollYProgress }: { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  return (
    <div className="relative z-10 mx-auto mb-10 flex w-full max-w-6xl items-center gap-2 px-4">
      {PHASES.map((phase) => (
        <RailSegment key={phase.label} phase={phase} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}

function RailSegment({
  phase,
  scrollYProgress,
}: {
  phase: (typeof PHASES)[number]
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const [start, end] = phase.range
  const fill = useTransform(scrollYProgress, [start, end], ["0%", "100%"])

  return (
    <div className="flex-1">
      <div className="h-[2px] w-full overflow-hidden bg-stone-50/15">
        <motion.div className="h-full bg-bronze-400" style={{ width: fill }} />
      </div>
      <p className="mt-2 font-mono-tnum text-[10px] tracking-widest text-stone-50/50">{phase.label}</p>
    </div>
  )
}
