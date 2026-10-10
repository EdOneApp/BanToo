import { ErrorShell } from "../components/ErrorShell"
import { IconGear } from "../components/icons"
import { BRAND } from "../lib/content"

export default function ServerError() {
  return (
    <ErrorShell
      code="500"
      icon={IconGear}
      title="Petit accroc dans la machine."
      body="Quelque chose s'est mal passé de notre côté. Notre équipe technique a été prévenue et s'active déjà. Réessayez dans un instant."
    >
      <a
        href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
        className="rounded-full border border-stone-50/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
      >
        Signaler le problème
      </a>
    </ErrorShell>
  )
}
