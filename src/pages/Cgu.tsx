import { LegalLayout } from "../components/LegalLayout"
import { BRAND } from "../lib/content"

export default function Cgu() {
  return (
    <LegalLayout title="Conditions générales d'utilisation" updated="10 octobre 2026">
      <p>
        L'utilisation de l'application et du site {BRAND.name} implique l'acceptation pleine et entière des
        présentes conditions générales d'utilisation.
      </p>

      <h2>Service proposé</h2>
      <p>
        BanToo met en relation des utilisateurs, des coursiers indépendants et des pressings partenaires pour
        la collecte, le lavage et la livraison de linge à {BRAND.city}.
      </p>

      <h2>Commandes et paiement</h2>
      <p>
        Chaque commande affiche un prix total avant validation. Le paiement s'effectue par Mobile Money (Wave,
        Orange Money, MTN MoMo, Moov Money) ou en espèces au moment de la collecte.
      </p>

      <h2>Responsabilité</h2>
      <p>
        BanToo met tout en œuvre pour garantir un traitement soigné de votre linge. En cas de dommage avéré
        imputable à un pressing partenaire, une compensation pourra être proposée après étude du dossier.
      </p>

      <h2>Annulation</h2>
      <p>
        Une commande peut être annulée gratuitement avant la collecte. Après collecte, l'annulation peut
        entraîner des frais correspondant au service déjà engagé.
      </p>

      <h2>Modification des CGU</h2>
      <p>
        BanToo se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs seront
        informés de toute modification substantielle via l'application.
      </p>
    </LegalLayout>
  )
}
