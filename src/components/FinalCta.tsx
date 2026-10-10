import { motion } from "framer-motion"
import { LiquidBlob } from "./LiquidBlob"
import { SoapBubbles } from "./SoapBubbles"
import { MagneticButton } from "./MagneticButton"
import { BRAND } from "../lib/content"

export function FinalCta() {
  return (
    <section id="telecharger" className="relative overflow-hidden px-4 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-bamboo-950 px-6 py-16 text-center text-paper-100 sm:px-12">
        <LiquidBlob tone="bamboo" className="-left-20 -top-20 h-72 w-72 opacity-40" />
        <LiquidBlob tone="gold" reverse className="-right-16 bottom-0 h-64 w-64 opacity-30" />
        <SoapBubbles count={9} tone="light" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-balance font-display text-3xl font-bold sm:text-5xl"
        >
          Votre linge propre
          <br />
          est à <span className="shimmer-text">3 clics.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-4 max-w-md text-paper-100/70"
        >
          Téléchargez BanToo, entrez votre adresse et laissez-vous livrer. Aucun abonnement, aucun frais caché.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-bamboo-950 shadow-lg"
          >
            Bientôt sur l'App Store
          </MagneticButton>
          <MagneticButton
            href="#"
            className="rounded-full bg-bamboo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Disponible sur Google Play
          </MagneticButton>
        </motion.div>

        <p className="relative mt-6 text-xs text-paper-100/50">
          Pas envie d'installer l'app ?{" "}
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
            className="font-semibold text-bamboo-400 underline underline-offset-2"
          >
            Réservez sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
