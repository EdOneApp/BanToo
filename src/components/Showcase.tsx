import { motion } from "framer-motion"
import { AuroraBackground } from "./AuroraBackground"
import { WashingMachine } from "./WashingMachine"
import { DeliveryCard } from "./DeliveryCard"

export function Showcase() {
  return (
    <section className="relative overflow-hidden py-24">
      <AuroraBackground className="opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-bamboo-600"
        >
          En direct
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 max-w-xl text-balance font-display text-3xl font-bold text-bamboo-950 sm:text-4xl"
        >
          De la machine à votre porte.
        </motion.h2>
        <p className="mt-3 max-w-lg text-sm text-bamboo-900/60 sm:text-base">
          Votre linge tourne chez nos pressings partenaires pendant que votre carte de livraison se met à jour en
          direct, étape par étape.
        </p>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72"
          >
            <WashingMachine className="h-full w-full" />
          </motion.div>

          <div className="flex justify-center">
            <DeliveryCard />
          </div>
        </div>
      </div>
    </section>
  )
}
