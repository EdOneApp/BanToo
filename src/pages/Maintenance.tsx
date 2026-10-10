import { ErrorShell } from "../components/ErrorShell"

export default function Maintenance() {
  return (
    <ErrorShell
      code="Maintenance"
      emoji="🧼"
      title="On fait un grand nettoyage."
      body="BanToo est en maintenance programmée pour revenir encore plus rapide. On remet les machines en route très vite."
    />
  )
}
