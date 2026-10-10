import { motion } from "framer-motion"
import { STEPS } from "../lib/content"
import { OrderScreen, PhoneMockup } from "./PhoneMockup"

export function Steps() {
  return (
    <section id="comment" className="relative overflow-hidden bg-bamboo-950 py-24 text-paper-100">
      <div className="mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-bamboo-400"
        >
          Comment ça marche
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 max-w-lg text-balance font-display text-3xl font-bold sm:text-4xl"
        >
          Réserver, c'est 4 gestes.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          <div className="space-y-14">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="flex gap-5"
              >
                <span className="font-display text-sm font-semibold text-bamboo-500">Étape {step.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-paper-100/60 sm:text-base">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-28 self-start">
            <PhoneMockup>
              <OrderScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  )
}
