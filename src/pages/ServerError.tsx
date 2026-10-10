import { ErrorShell } from "../components/ErrorShell"
import { BRAND } from "../lib/content"

export default function ServerError() {
  return (
    <ErrorShell
      code="500"
      emoji="⚙️"
      title="Petit accroc dans la machine."
      body="Quelque chose s'est mal passé de notre côté. Notre équipe technique a été prévenue et s'active déjà. Réessayez dans un instant."
    >
      <a
        href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
        className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
      >
        Signaler le problème
      </a>
    </ErrorShell>
  )
}
