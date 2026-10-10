import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { APPS, BRAND } from "../lib/content"
import { IconCheck } from "./icons"

export function ThreeApps() {
  const [active, setActive] = useState(0)
  const app = APPS[active]

  return (
    <section id="rejoindre" className="relative mx-auto max-w-6xl px-4 py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono-tnum text-xs tracking-widest text-bronze-500"
      >
        Une plateforme, trois apps
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 max-w-xl text-balance font-display text-4xl font-semibold text-ink sm:text-5xl"
      >
        Réservez, livrez ou lavez avec BanToo.
      </motion.h2>
      <p className="mt-4 max-w-lg text-sm text-ink-muted sm:text-base">
        BanToo relie ceux qui ont du linge sale, ceux qui le lavent et ceux qui le livrent. Choisissez votre
        place.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {APPS.map((a, i) => (
          <button
            key={a.key}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === i ? "bg-bamboo-950 text-stone-50" : "bg-white text-ink-muted ring-1 ring-ink/10 hover:text-ink"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div className="relative mt-6 min-h-[300px] overflow-hidden rounded-[28px] bg-bamboo-950 p-8 text-stone-50 sm:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={app.key}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <p className="font-display text-2xl font-semibold">{app.name}</p>
              <p className="mt-2 max-w-md text-stone-50/65">{app.tagline}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {app.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-stone-50/80">
                    <IconCheck className="h-3.5 w-3.5 shrink-0 text-bronze-400" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold">Bientôt sur l'App Store</span>
              <span className="rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold">Disponible sur Google Play</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-6 text-center text-xs text-ink-muted/70">
        Vous tenez un pressing ? Écrivez-nous à{" "}
        <a href={`mailto:${BRAND.partnerEmail}`} className="font-semibold text-bamboo-700 underline underline-offset-2">
          {BRAND.partnerEmail}
        </a>
      </p>
    </section>
  )
}
