import { motion, useReducedMotion } from "framer-motion"

export function AuroraBackground({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -inset-[30%] blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-bamboo-200), var(--color-gold-400), var(--color-bamboo-500), var(--color-bamboo-300), var(--color-bamboo-200))",
        }}
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-paper-50/70" />
    </div>
  )
}
