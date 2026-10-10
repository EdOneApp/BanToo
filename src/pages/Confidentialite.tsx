import { LegalLayout } from "../components/LegalLayout"
import { BRAND } from "../lib/content"

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="10 octobre 2026">
      <p>
        BanToo attache une grande importance à la protection de vos données personnelles. Cette politique
        explique quelles données nous collectons, pourquoi, et comment vous pouvez exercer vos droits.
      </p>

      <h2>Données collectées</h2>
      <p>
        Nom, numéro de téléphone, adresse de collecte et de livraison, historique de commandes, et données de
        paiement transmises par nos partenaires Mobile Money (Wave, Orange Money, MTN MoMo, Moov Money).
        BanToo ne stocke jamais vos codes secrets ou identifiants de paiement.
      </p>

      <h2>Utilisation des données</h2>
      <ul>
        <li>Organiser la collecte, le lavage et la livraison de votre linge</li>
        <li>Vous permettre de suivre votre coursier en temps réel</li>
        <li>Vous contacter en cas de besoin concernant une commande</li>
        <li>Améliorer la qualité du service et prévenir la fraude</li>
      </ul>

      <h2>Partage des données</h2>
      <p>
        Vos données sont partagées uniquement avec le coursier et le pressing partenaire assignés à votre
        commande, dans la stricte mesure nécessaire à son exécution.
      </p>

      <h2>Conservation</h2>
      <p>
        Les données sont conservées pendant la durée de votre relation avec BanToo, puis archivées selon les
        obligations légales applicables en Côte d'Ivoire.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l'accès, la correction ou la suppression de vos données à tout moment en écrivant
        à {BRAND.email}.
      </p>
    </LegalLayout>
  )
}
