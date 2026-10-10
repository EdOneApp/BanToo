import { type MouseEvent } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { AuroraBackground } from "./AuroraBackground"
import { MagneticButton } from "./MagneticButton"
import { PhoneMockup, TrackingScreen } from "./PhoneMockup"
import { PAYMENT_METHODS } from "../lib/content"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 })

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return
    const { innerWidth, innerHeight } = window
    mx.set((e.clientX / innerWidth - 0.5) * 24)
    my.set((e.clientY / innerHeight - 0.5) * 24)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-bamboo-950 pt-36 pb-24 text-stone-50 md:pt-44"
    >
      <AuroraBackground tone="dark" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono-tnum text-xs tracking-widest text-bronze-400">
            Pressing &amp; blanchisserie à domicile — Abidjan
          </p>

          <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Votre linge,
            <br />
            traité comme il le
            <br />
            <span className="shimmer-text">mérite.</span>
          </h1>

          <p className="mt-6 max-w-md text-balance text-base text-stone-50/65 sm:text-lg">
            Collecte, lavage, repassage et livraison en 24h, par des pressings vérifiés. Payez par Mobile
            Money, suivez chaque étape en direct.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#telecharger"
              className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-6 py-3.5 text-sm font-semibold text-bamboo-950 shadow-xl shadow-bamboo-950/40"
            >
              Télécharger l'app
            </MagneticButton>
            <MagneticButton
              href="#cycle"
              className="inline-flex items-center gap-2 rounded-full border border-stone-50/25 px-6 py-3.5 text-sm font-semibold text-stone-50"
            >
              Découvrir le cycle ↓
            </MagneticButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-stone-50/10 pt-6 text-xs text-stone-50/45">
            <span className="font-mono-tnum tracking-widest">PAIEMENT</span>
            {PAYMENT_METHODS.map((m) => (
              <span key={m.name} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: m.color }} />
                {m.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { x: sx, y: sy }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          <PhoneMockup>
            <TrackingScreen />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  )
}
