export function MarqueeStrip({
  items,
  tone = "dark",
  reverse = false,
}: {
  items: string[]
  tone?: "dark" | "light"
  reverse?: boolean
}) {
  const loop = [...items, ...items]
  const bg = tone === "dark" ? "bg-bamboo-950 text-stone-50" : "bg-stone-100 text-ink"

  return (
    <div className={`overflow-hidden border-y border-bronze-500/20 py-3 ${bg}`}>
      <div className={`flex w-max gap-10 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono-tnum text-xs tracking-widest">
            {item}
            <span className="h-1 w-1 rounded-full bg-bronze-400/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
