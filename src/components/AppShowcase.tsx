import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PhoneMockup, TrackingScreen, OrderScreen, ChatScreen, PaymentScreen } from "./PhoneMockup"

const SCREENS = [
  { key: "order", title: "Choisissez", body: "Lavage, pressing ou linge de maison, en quelques taps.", Screen: OrderScreen },
  { key: "tracking", title: "Suivez", body: "Votre coursier sur la carte, de la collecte à la livraison.", Screen: TrackingScreen },
  { key: "chat", title: "Échangez", body: "Une question ? Écrivez directement à votre coursier.", Screen: ChatScreen },
  { key: "payment", title: "Payez", body: "Mobile Money ou espèces, le total est toujours clair.", Screen: PaymentScreen },
]

export function AppShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: scrollerRef })
  const railWidth = useTransform(scrollXProgress, [0, 1], ["8%", "100%"])

  return (
    <section className="relative overflow-hidden bg-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-mono-tnum text-xs tracking-widest text-bronze-500">L'application</p>
        <h2 className="mt-3 max-w-xl text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
          Une app pensée au détail près.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-ink-muted sm:text-base">
          Faites glisser pour parcourir l'application, écran par écran.
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-8 [scrollbar-width:none] sm:px-[calc((100%-72rem)/2+1rem)] [&::-webkit-scrollbar]:hidden"
      >
        {SCREENS.map(({ key, title, body, Screen }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 snap-center flex-col items-center"
          >
            <PhoneMockup float={false}>
              <Screen />
            </PhoneMockup>
            <div className="mt-6 max-w-[240px] text-center">
              <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-2 h-[2px] max-w-xs overflow-hidden rounded-full bg-stone-300">
        <motion.div className="h-full bg-bronze-500" style={{ width: railWidth }} />
      </div>
    </section>
  )
}
