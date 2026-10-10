import { ErrorShell } from "../components/ErrorShell"
import { IconSparkle } from "../components/icons"

export default function Maintenance() {
  return (
    <ErrorShell
      code="Maintenance"
      icon={IconSparkle}
      title="On fait un grand nettoyage."
      body="BanToo est en maintenance programmée pour revenir encore plus rapide. On remet les machines en route très vite."
    />
  )
}
