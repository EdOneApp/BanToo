import { motion } from "framer-motion"
import { STATS, PAYMENT_METHODS } from "../lib/content"
import { Counter } from "./Counter"
import { DeliveryCard } from "./DeliveryCard"
import { IconClock, IconMapPin, IconSparkle } from "./icons"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

function Tile({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={item}
      className={`group rounded-[28px] bg-white p-6 shadow-[0_20px_60px_-32px_rgba(15,26,18,0.35)] ring-1 ring-ink/5 transition-shadow hover:shadow-[0_24px_70px_-28px_rgba(15,26,18,0.4)] sm:p-7 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function WhyBanToo() {
  return (
    <section id="avantages" className="relative mx-auto max-w-6xl px-4 py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono-tnum text-xs tracking-widest text-bronze-500"
      >
        Pourquoi BanToo
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 max-w-xl text-balance font-display text-4xl font-semibold text-ink sm:text-5xl"
      >
        Pensé pour Abidjan, exécuté sans compromis.
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto]"
      >
        <Tile className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
          <div>
            <IconClock className="h-6 w-6 text-bamboo-700" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Rapide. Vraiment.</h3>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Délai moyen visé entre la collecte de votre linge et sa livraison, propre et plié.
            </p>
          </div>
          <p className="mt-8 font-mono-tnum text-7xl font-semibold text-bamboo-700">
            <Counter value={24} />
            <span className="ml-2 text-xl font-medium text-ink-muted">heures</span>
          </p>
        </Tile>

        <Tile className="lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <IconMapPin className="h-6 w-6 text-bamboo-700" />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">Suivi en temps réel</h3>
              <p className="mt-2 max-w-sm text-sm text-ink-muted">
                Suivez votre coursier rue par rue, de la collecte jusqu'au retour du linge propre.
              </p>
            </div>
          </div>
        </Tile>

        <Tile>
          <DeliveryCard className="h-full" />
        </Tile>

        <Tile>
          <h3 className="font-display text-xl font-semibold text-ink">Payez comme vous voulez</h3>
          <p className="mt-2 text-sm text-ink-muted">Mobile Money en un geste, ou espèces à la collecte.</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {PAYMENT_METHODS.map((m) => (
              <span
                key={m.name}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${m.dark ? "text-ink" : "text-stone-50"}`}
                style={{ backgroundColor: m.color }}
              >
                {m.name}
              </span>
            ))}
          </div>
        </Tile>

        <Tile>
          <IconSparkle className="h-6 w-6 text-bamboo-700" />
          <h3 className="mt-4 font-display text-xl font-semibold text-ink">Soin garanti</h3>
          <p className="mt-2 text-sm text-ink-muted">
            Pressings partenaires vérifiés, sacs scellés et étiquetés, produits doux pour vos tissus.
          </p>
        </Tile>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-5 grid grid-cols-2 gap-5 rounded-[28px] bg-bamboo-950 px-8 py-10 text-stone-50 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={item} className="text-center sm:text-left">
            <p className="font-mono-tnum text-4xl font-semibold text-bronze-400">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1.5 text-xs text-stone-50/55">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
