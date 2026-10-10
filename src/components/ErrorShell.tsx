import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LiquidBlob } from "./LiquidBlob"
import { BRAND } from "../lib/content"

export function ErrorShell({
  code,
  emoji,
  title,
  body,
  children,
}: {
  code: string
  emoji: string
  title: string
  body: string
  children?: ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-bamboo-950 text-paper-100">
      <LiquidBlob tone="bamboo" className="-left-32 top-10 h-[380px] w-[380px] opacity-50" />
      <LiquidBlob tone="gold" reverse className="-right-24 bottom-10 h-[320px] w-[320px] opacity-40" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-bamboo-600 font-display text-sm font-bold text-white">
            Bt
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{BRAND.name}</span>
        </Link>
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
          className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur transition-colors hover:bg-white/20"
        >
          Besoin d'aide ?
        </a>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="animate-float text-7xl"
        >
          {emoji}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-7xl font-bold text-bamboo-400 sm:text-8xl"
        >
          {code}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-balance font-display text-2xl font-bold sm:text-3xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 max-w-md text-balance text-sm text-paper-100/60 sm:text-base"
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
            className="rounded-full bg-bamboo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-bamboo-500/30 transition-transform hover:scale-105 active:scale-95"
          >
            Retour à l'accueil
          </Link>
          {children}
        </motion.div>
      </main>
    </div>
  )
}
