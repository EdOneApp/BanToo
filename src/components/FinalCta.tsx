import { motion } from "framer-motion"
import { AuroraBackground } from "./AuroraBackground"
import { MagneticButton } from "./MagneticButton"
import { BRAND } from "../lib/content"

export function FinalCta() {
  return (
    <section id="telecharger" className="relative overflow-hidden px-4 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-bamboo-950 px-6 py-20 text-center text-stone-50 sm:px-12">
        <AuroraBackground tone="dark" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-balance font-display text-4xl font-semibold sm:text-6xl"
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
          className="relative mx-auto mt-5 max-w-md text-stone-50/65"
        >
          Téléchargez BanToo, entrez votre adresse et laissez-vous livrer. Aucun abonnement, aucun frais caché.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#" className="rounded-full bg-stone-50 px-6 py-3.5 text-sm font-semibold text-bamboo-950 shadow-xl">
            Bientôt sur l'App Store
          </MagneticButton>
          <MagneticButton href="#" className="rounded-full border border-stone-50/25 px-6 py-3.5 text-sm font-semibold text-stone-50">
            Disponible sur Google Play
          </MagneticButton>
        </motion.div>

        <p className="relative mt-7 text-xs text-stone-50/45">
          Pas envie d'installer l'app ?{" "}
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
            className="font-semibold text-bronze-400 underline underline-offset-2"
          >
            Réservez sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
