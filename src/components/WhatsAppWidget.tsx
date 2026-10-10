import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BRAND } from "../lib/content"

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const waUrl = `https://wa.me/${BRAND.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Bonjour BanToo, j'ai une question sur une collecte de linge.",
  )}`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-bamboo-950/20 ring-1 ring-bamboo-950/5"
          >
            <div className="flex items-center gap-2 bg-[#25D366] px-4 py-3 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-display text-sm font-semibold">
                B
              </span>
              <div>
                <p className="text-sm font-semibold">Support BanToo</p>
                <p className="text-[11px] opacity-80">Répond généralement en quelques minutes</p>
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-bamboo-100 px-3 py-2 text-xs text-bamboo-950">
                Bonsoir ! Votre linge est collecté, il arrive au pressing 🧺
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block rounded-xl bg-[#25D366] py-2.5 text-center text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                Écrire au support
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Ouvrir le chat WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M19.1 4.9A9.8 9.8 0 0 0 12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A9.9 9.9 0 0 0 12 22a9.9 9.9 0 0 0 7.1-16.9zm-7.1 15a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.9-3-.2-.3A8.3 8.3 0 1 1 20.3 12a8.3 8.3 0 0 1-8.3 8zm4.5-6.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.5.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.5 4c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1c.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
        </svg>
      </motion.button>
    </div>
  )
}
