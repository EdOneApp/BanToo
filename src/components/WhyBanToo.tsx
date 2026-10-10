import { motion } from "framer-motion"
import { STATS, WHY_BANTOO, PAYMENT_METHODS } from "../lib/content"
import { Counter } from "./Counter"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function WhyBanToo() {
  return (
    <section id="avantages" className="relative mx-auto max-w-6xl px-4 py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-semibold uppercase tracking-widest text-bamboo-600"
      >
        Pourquoi BanToo
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-2 max-w-xl text-balance font-display text-3xl font-bold text-bamboo-950 sm:text-4xl"
      >
        Pensé pour Abidjan, du linge sale au linge plié.
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {WHY_BANTOO.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="group rounded-3xl bg-white p-7 shadow-sm shadow-bamboo-950/5 ring-1 ring-bamboo-950/5 transition-shadow hover:shadow-md"
          >
            <h3 className="font-display text-xl font-bold text-bamboo-950">{f.title}</h3>
            <p className="mt-2 text-sm text-bamboo-900/60">{f.body}</p>

            {f.kind === "stat" && (
              <p className="mt-4 font-display text-5xl font-bold text-bamboo-600">
                <Counter value={f.value} />
                <span className="ml-1 text-xl font-semibold text-bamboo-900/40">{f.unit}</span>
              </p>
            )}

            {f.kind === "payments" && (
              <div className="mt-4 flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((m) => (
                  <span
                    key={m.name}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${m.dark ? "text-bamboo-950" : "text-white"}`}
                    style={{ backgroundColor: m.color }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-bamboo-950 px-8 py-10 text-paper-100 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={item} className="text-center sm:text-left">
            <p className="font-display text-4xl font-bold text-bamboo-400">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-xs text-paper-100/60">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
