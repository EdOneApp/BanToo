import { motion, useReducedMotion } from "framer-motion"
import { SoapBubbles } from "./SoapBubbles"

export function WashingMachine({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`relative ${className}`}
      animate={prefersReducedMotion ? undefined : { x: [0, -3, 3, -2, 2, 0], rotate: [0, -0.5, 0.5, -0.3, 0.3, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
    >
      <SoapBubbles count={7} className="-top-10" />

      <svg viewBox="0 0 220 240" className="h-full w-full drop-shadow-xl">
        <rect x="8" y="8" width="204" height="224" rx="30" fill="var(--color-paper-50)" stroke="var(--color-bamboo-950)" strokeWidth="5" />

        <circle cx="34" cy="32" r="6" fill="var(--color-bamboo-500)" />
        <circle cx="54" cy="32" r="6" fill="var(--color-gold-400)" />
        <rect x="78" y="25" width="114" height="14" rx="7" fill="var(--color-bamboo-100)" />
        <rect x="88" y="29" width="40" height="6" rx="3" fill="var(--color-bamboo-400)" />

        <circle cx="110" cy="142" r="80" fill="var(--color-bamboo-950)" />
        <circle cx="110" cy="142" r="70" fill="#eaf4e3" />

        <clipPath id="bantoo-drum-clip">
          <circle cx="110" cy="142" r="68" />
        </clipPath>
        <g clipPath="url(#bantoo-drum-clip)">
          <motion.g
            style={{ originX: 0.5, originY: 0.5 }}
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
          >
            <ellipse cx="92" cy="108" rx="28" ry="19" fill="var(--color-bamboo-400)" />
            <ellipse cx="142" cy="158" rx="24" ry="17" fill="var(--color-gold-400)" />
            <ellipse cx="96" cy="178" rx="19" ry="15" fill="var(--color-bamboo-600)" />
            <ellipse cx="146" cy="104" rx="16" ry="13" fill="var(--color-bamboo-300)" />
          </motion.g>
        </g>

        <circle cx="110" cy="142" r="70" fill="none" stroke="var(--color-bamboo-950)" strokeWidth="6" />
        <circle cx="110" cy="142" r="70" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
      </svg>
    </motion.div>
  )
}
