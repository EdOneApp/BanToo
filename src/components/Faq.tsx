import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FAQS } from "../lib/content"

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-ink/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-bamboo-700"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 pr-10 text-sm text-ink-muted sm:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono-tnum text-xs tracking-widest text-bronze-500"
      >
        FAQ
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl"
      >
        Questions fréquentes.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        {FAQS.map((f, i) => (
          <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
        ))}
      </motion.div>
    </section>
  )
}
