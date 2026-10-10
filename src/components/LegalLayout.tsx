import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Link to="/" className="text-sm font-semibold text-bamboo-700 hover:underline">
          ← Retour à l'accueil
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 font-display text-3xl font-bold text-bamboo-950 sm:text-4xl"
        >
          {title}
        </motion.h1>
        <p className="mt-2 text-sm text-bamboo-900/50">Dernière mise à jour : {updated}</p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-none space-y-5 text-sm leading-relaxed text-bamboo-900/75 sm:text-base [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-bamboo-950 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-bamboo-950"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
