import type { ComponentType, ReactNode, SVGProps } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { AuroraBackground } from "./AuroraBackground"
import { BRAND } from "../lib/content"

export function ErrorShell({
  code,
  icon: Icon,
  title,
  body,
  children,
}: {
  code: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  children?: ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-bamboo-950 text-stone-50">
      <AuroraBackground tone="dark" className="opacity-80" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-bronze-400/40 font-display text-sm font-semibold">
            B
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{BRAND.name}</span>
        </Link>
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
          className="rounded-full border border-stone-50/15 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/5"
        >
          Besoin d'aide ?
        </a>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="animate-float flex h-16 w-16 items-center justify-center rounded-full border border-bronze-400/40 text-bronze-400"
        >
          <Icon className="h-7 w-7" />
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-7xl font-semibold text-bamboo-400 sm:text-8xl"
        >
          {code}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-balance font-display text-2xl font-semibold sm:text-3xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 max-w-md text-balance text-sm text-stone-50/60 sm:text-base"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/"
            className="rounded-full bg-bamboo-600 px-6 py-3 text-sm font-semibold text-stone-50 shadow-lg shadow-bamboo-950/40 transition-transform hover:scale-105 hover:bg-bamboo-500 active:scale-95"
          >
            Retour à l'accueil
          </Link>
          {children}
        </motion.div>
      </main>
    </div>
  )
}
