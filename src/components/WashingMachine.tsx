import { useEffect } from "react"
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "framer-motion"

type WashingMachineProps = {
  className?: string
  /** 0 → 1 scroll/cycle progress driving drum rotation + fabric color shift. Omit for a standalone autoplay loop. */
  progress?: MotionValue<number>
}

const FABRIC_DIRTY = "#6b6252"
const FABRIC_CLEAN_A = "var(--color-bamboo-400)"
const FABRIC_CLEAN_B = "var(--color-bronze-300)"
const FABRIC_CLEAN_C = "var(--color-bamboo-600)"

export function WashingMachine({ className = "", progress }: WashingMachineProps) {
  const prefersReducedMotion = useReducedMotion()
  const driven = progress !== undefined
  const internalProgress = useMotionValue(0)
  const activeProgress = progress ?? internalProgress

  useEffect(() => {
    if (driven || prefersReducedMotion) return
    const controls = animate(internalProgress, 1, {
      duration: 3.6,
      repeat: Infinity,
      ease: "linear",
    })
    return controls.stop
  }, [driven, prefersReducedMotion, internalProgress])

  const drumRotation = useTransform(activeProgress, (v) => v * (driven ? 900 : 360))
  // Dirty on collecte, clean by the time the wash phase ends (~0.52) — stays clean after.
  const fabricShift = useTransform(activeProgress, driven ? [0.2, 0.5] : [0, 1], driven ? [0, 1] : [1, 1])

  return (
    <motion.div
      className={`relative ${className}`}
      animate={driven || prefersReducedMotion ? undefined : { x: [0, -3, 3, -2, 2, 0], rotate: [0, -0.4, 0.4, -0.25, 0.25, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 320 360" className="h-full w-full">
        <defs>
          <linearGradient id="bt-machine-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbfaf6" />
            <stop offset="100%" stopColor="var(--color-stone-200)" />
          </linearGradient>
          <radialGradient id="bt-drum-well" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#eef3ea" />
            <stop offset="100%" stopColor="#d7ddd1" />
          </radialGradient>
          <linearGradient id="bt-door-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-bamboo-800)" />
            <stop offset="100%" stopColor="var(--color-bamboo-950)" />
          </linearGradient>
          <clipPath id="bt-drum-clip">
            <circle cx="160" cy="196" r="104" />
          </clipPath>
        </defs>

        <ellipse cx="160" cy="348" rx="120" ry="12" fill="var(--color-bamboo-950)" opacity="0.12" />

        <rect x="18" y="14" width="284" height="320" rx="36" fill="url(#bt-machine-body)" stroke="var(--color-bamboo-950)" strokeWidth="2.5" />
        <rect x="18" y="14" width="284" height="320" rx="36" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1" />

        <rect x="42" y="40" width="236" height="26" rx="13" fill="var(--color-stone-100)" />
        <circle cx="58" cy="53" r="6" fill="var(--color-bamboo-600)" />
        <circle cx="78" cy="53" r="6" fill="var(--color-bronze-500)" />
        <rect x="100" y="47" width="110" height="12" rx="6" fill="var(--color-stone-300)" />
        <rect x="108" y="47" width="42" height="12" rx="6" fill="var(--color-bamboo-500)" />

        <circle cx="160" cy="196" r="128" fill="url(#bt-door-ring)" />
        <circle cx="160" cy="196" r="128" fill="none" stroke="var(--color-bronze-500)" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="160" cy="196" r="112" fill="url(#bt-drum-well)" />

        <g clipPath="url(#bt-drum-clip)">
          <motion.g style={{ originX: 0.5, originY: 0.5, rotate: drumRotation }}>
            <Garment cx={128} cy={150} r={30} dirty={FABRIC_DIRTY} clean={FABRIC_CLEAN_A} progress={fabricShift} />
            <Garment cx={206} cy={232} r={26} dirty={FABRIC_DIRTY} clean={FABRIC_CLEAN_B} progress={fabricShift} />
            <Garment cx={118} cy={248} r={22} dirty={FABRIC_DIRTY} clean={FABRIC_CLEAN_C} progress={fabricShift} />
            <Garment cx={210} cy={142} r={19} dirty={FABRIC_DIRTY} clean={FABRIC_CLEAN_A} progress={fabricShift} />
            <Garment cx={160} cy={196} r={15} dirty={FABRIC_DIRTY} clean={FABRIC_CLEAN_B} progress={fabricShift} />
          </motion.g>
        </g>

        <rect x="48" y="196" width="224" height="112" fill="var(--color-bamboo-400)" opacity="0.08" clipPath="url(#bt-drum-clip)" />

        <circle cx="160" cy="196" r="112" fill="none" stroke="var(--color-bamboo-950)" strokeWidth="6" />
        <circle cx="160" cy="196" r="105" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>
    </motion.div>
  )
}

function Garment({
  cx,
  cy,
  r,
  dirty,
  clean,
  progress,
}: {
  cx: number
  cy: number
  r: number
  dirty: string
  clean: string
  progress: MotionValue<number>
}) {
  const fill = useTransform(progress, (v) => (v < 0.5 ? dirty : clean))
  return <motion.circle cx={cx} cy={cy} r={r} style={{ fill }} />
}
