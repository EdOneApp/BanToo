import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { IconCheck } from "./icons"

const STATUSES = ["Commande reçue", "Linge collecté", "En lavage", "Repassage", "Livré"]

export function DeliveryCard({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const [step, setStep] = useState(STATUSES.length - 1)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => setStep((s) => (s + 1) % STATUSES.length), 2000)
    return () => clearInterval(id)
  }, [prefersReducedMotion])

  return (
    <div className={`flex h-full flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono-tnum text-[10px] tracking-widest text-bronze-500">#BT-2461</p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">En direct</p>
        </div>
        <span className="flex h-2 w-2 shrink-0 rounded-full bg-bamboo-500" />
      </div>

      <div>
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-stone-200">
          <motion.div
            className="h-full bg-bamboo-600"
            animate={{ width: `${((step + 1) / STATUSES.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <ul className="mt-4 space-y-2">
          {STATUSES.map((label, i) => (
            <li key={label} className="flex items-center gap-2.5 text-sm">
              <motion.span
                animate={{ borderColor: i <= step ? "var(--color-bamboo-600)" : "var(--color-stone-300)" }}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
              >
                {i <= step && <IconCheck className="h-3 w-3 text-bamboo-600" strokeWidth={2} />}
              </motion.span>
              <span className={i <= step ? "text-ink" : "text-ink-muted/60"}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
