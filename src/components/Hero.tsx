import { type MouseEvent } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { LiquidBlob } from "./LiquidBlob"
import { SoapBubbles } from "./SoapBubbles"
import { MagneticButton } from "./MagneticButton"
import { PhoneMockup, TrackingScreen } from "./PhoneMockup"
import { PAYMENT_METHODS } from "../lib/content"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 })
  const sx2 = useTransform(sx, (v) => v * -0.7)
  const sy2 = useTransform(sy, (v) => v * -0.7)

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return
    const { innerWidth, innerHeight } = window
    mx.set((e.clientX / innerWidth - 0.5) * 50)
    my.set((e.clientY / innerHeight - 0.5) * 50)
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <motion.div style={prefersReducedMotion ? undefined : { x: sx, y: sy }}>
        <LiquidBlob tone="bamboo" className="-left-32 -top-20 h-[420px] w-[420px]" />
      </motion.div>
      <motion.div style={prefersReducedMotion ? undefined : { x: sx2, y: sy2 }}>
        <LiquidBlob tone="gold" reverse className="-right-24 top-40 h-[320px] w-[320px]" />
      </motion.div>
      <SoapBubbles count={8} className="opacity-70" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-bamboo-100 px-3 py-1 text-xs font-semibold text-bamboo-700">
            🧺 L'app de pressing à domicile d'Abidjan
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-bamboo-950 sm:text-5xl lg:text-6xl">
            Linge sale&nbsp;?
            <br />
            BanToo le lave en{" "}
            <span className="shimmer-text">24 heures.</span>
          </h1>

          <p className="mt-5 max-w-md text-balance text-base text-bamboo-900/70 sm:text-lg">
            Lavage, repassage et nettoyage à sec, collectés chez vous et livrés propres en 24h. Commandez en 3
            clics, payez par Mobile Money et suivez votre coursier en direct.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#telecharger"
              className="group inline-flex items-center gap-2 rounded-full bg-bamboo-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-bamboo-950/20"
            >
              <AppleGlyph />
              <span>
                Bientôt sur <br className="hidden sm:block" />
                <span className="font-display text-base">l'App Store</span>
              </span>
            </MagneticButton>
            <MagneticButton
              href="#telecharger"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-bamboo-950 shadow-lg shadow-bamboo-950/10 ring-1 ring-bamboo-950/10"
            >
              <PlayGlyph />
              <span>
                Disponible sur <br className="hidden sm:block" />
                <span className="font-display text-base">Google Play</span>
              </span>
            </MagneticButton>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-bamboo-900/50">
            <span className="font-medium text-bamboo-900/70">Payez avec</span>
            {PAYMENT_METHODS.map((m) => (
              <span key={m.name} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.color }} />
                {m.name}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative flex justify-center">
          <PhoneMockup>
            <TrackingScreen />
          </PhoneMockup>
        </div>
      </div>
    </section>
  )
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M16.365 1.43c0 1.14-.44 2.1-1.32 2.9-1.05.95-2.2 1.5-3.35 1.4-.12-1.1.45-2.25 1.32-3.05.86-.78 2.3-1.35 3.35-1.25zM20.6 17.1c-.56 1.3-.83 1.88-1.56 3.03-1.02 1.6-2.46 3.6-4.24 3.62-1.58.02-1.98-1.03-4.12-1.02-2.14.01-2.58 1.04-4.16 1.02-1.78-.02-3.14-1.82-4.16-3.42C-.47 15.9-.9 10.4 1.6 7.5c1.26-1.46 3.14-2.38 5.1-2.4 1.64-.02 3.18 1.1 4.16 1.1.98 0 2.86-1.37 4.82-1.17.82.03 3.12.33 4.6 2.5-2.34 1.4-2.72 4.86.32 6.57-.6 1.03-.9 1.49-2 3z" />
    </svg>
  )
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M3.6 2.2c-.4.3-.6.8-.6 1.4v17c0 .6.2 1 .6 1.4l9.5-9.9-9.5-9.9z" fill="#00c3ff" />
      <path d="M17 10.1 13.9 12l3.1 1.9 3.9-2.3c.6-.4.6-1.3 0-1.7L17 10.1z" fill="#ffcf00" />
      <path d="M3.6 2.2 13.9 12l3.1-1.9L5.5 3.1c-.5-.3-1.3-.4-1.9-.9z" fill="#00f076" />
      <path d="M3.6 21.8c.6-.5 1.4-.6 1.9-.9l11.5-7-3.1-1.9-10.3 9.8z" fill="#ff3a44" />
    </svg>
  )
}
