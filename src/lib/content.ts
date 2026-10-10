export const BRAND = {
  name: "BanToo",
  tagline: "Votre linge, propre et livré en 24h.",
  city: "Abidjan, Côte d'Ivoire",
  whatsapp: "+2250500000000",
  whatsappDisplay: "+225 05 00 00 00 00",
  phone: "+2252700000000",
  phoneDisplay: "+225 27 00 00 00 00",
  email: "support@bantoo.app",
  partnerEmail: "pressings@bantoo.app",
  instagram: "bantoo.ci",
  registerUrl: "#rejoindre",
}

export const ZONES = [
  "Cocody",
  "Riviera",
  "Angré",
  "2 Plateaux",
  "Plateau",
  "Marcory",
  "Zone 4",
  "Treichville",
  "Koumassi",
  "Yopougon",
  "Bingerville",
  "Port-Bouët",
]

export const SERVICES = [
  "Lavage & pliage",
  "Nettoyage à sec",
  "Repassage",
  "Linge de maison",
  "Couettes & édredons",
  "Tapis & rideaux",
  "Costumes & tailleurs",
  "Chaussures",
]

export const PAYMENT_METHODS = [
  { name: "Wave", color: "#1DC8FF", dark: false },
  { name: "Orange Money", color: "#FF6600", dark: false },
  { name: "MTN MoMo", color: "#FFCC00", dark: true },
  { name: "Moov Money", color: "#004A9F", dark: false },
  { name: "Espèces", color: "#2F7D2D", dark: false },
]

export const STEPS = [
  {
    n: "01",
    title: "Réservez.",
    body: "Choisissez un créneau de collecte près de chez vous. Lavage, repassage ou nettoyage à sec, à la pièce ou au sac.",
  },
  {
    n: "02",
    title: "Payez.",
    body: "Wave, Orange Money, MTN MoMo, Moov Money ou espèces à la collecte. Le prix est affiché avant de valider.",
  },
  {
    n: "03",
    title: "Suivez.",
    body: "Votre coursier BanToo apparaît sur la carte à la collecte, puis votre linge au pressing partenaire. Fini l'attente sans nouvelles.",
  },
  {
    n: "04",
    title: "Récupérez.",
    body: "Linge propre, plié ou sur cintre, livré à votre porte en 24h. Notez la livraison, laissez un pourboire si le cœur vous en dit.",
  },
]

export const STATS = [
  { value: 24, suffix: "h", label: "Délai moyen de collecte à livraison" },
  { value: 3, suffix: "", label: "Clics pour réserver une collecte" },
  { value: 5, suffix: "", label: "Moyens de paiement acceptés" },
  { value: 7, suffix: "j/7", label: "Support sur WhatsApp" },
]

export const WHY_BANTOO = [
  {
    title: "Rapide. Vraiment.",
    body: "C'est le délai moyen visé entre la collecte de votre linge et sa livraison, propre et plié.",
    kind: "stat" as const,
    value: 24,
    unit: "heures",
  },
  {
    title: "Suivi en temps réel",
    body: "Suivez votre coursier rue par rue, de la collecte chez vous jusqu'au retour du linge propre.",
    kind: "feature" as const,
  },
  {
    title: "Payez comme vous voulez",
    body: "Mobile Money en un geste, ou espèces à la collecte. Toujours sans surprise sur le prix.",
    kind: "payments" as const,
  },
  {
    title: "Soin garanti",
    body: "Pressings partenaires vérifiés, sacs scellés et étiquetés, produits doux pour vos tissus.",
    kind: "feature" as const,
  },
]

export const APPS = [
  {
    n: "01",
    key: "client",
    label: "Je réserve",
    name: "BanToo",
    tagline: "L'application pour faire laver son linge sans bouger de chez soi.",
    bullets: [
      "Collecte et livraison à l'heure qui vous arrange",
      "Paiement Mobile Money ou espèces",
      "Suivi du coursier en direct",
    ],
  },
  {
    n: "02",
    key: "coursier",
    label: "Je collecte & livre",
    name: "BanToo Coursier",
    tagline: "Gagnez votre vie en collectant et livrant le linge du quartier.",
    bullets: [
      "Missions proches de vous, acceptées en un tap",
      "Paiement hebdomadaire garanti",
      "Itinéraires optimisés en temps réel",
    ],
  },
  {
    n: "03",
    key: "pressing",
    label: "Je lave",
    name: "BanToo Partenaire",
    tagline: "Remplissez les machines de votre pressing avec la demande BanToo.",
    bullets: [
      "Commandes envoyées directement à votre atelier",
      "Paiements centralisés et transparents",
      "Visibilité auprès de milliers de foyers",
    ],
  },
]

export const FAQS = [
  {
    q: "Dans quels quartiers collectez-vous le linge ?",
    a: "BanToo collecte dans tout Abidjan : Cocody, Riviera, Angré, 2 Plateaux, Plateau, Marcory, Zone 4, Treichville, Koumassi, Yopougon, Bingerville, Port-Bouët. Entrez votre adresse dans l'application pour confirmer la couverture chez vous.",
  },
  {
    q: "Combien coûte la collecte et la livraison ?",
    a: "La collecte et la livraison sont incluses dans le prix affiché avant validation. Aucun frais caché, le total est calculé selon le poids ou le nombre de pièces de votre commande.",
  },
  {
    q: "Comment puis-je payer ?",
    a: "Wave, Orange Money, MTN MoMo, Moov Money, ou espèces directement au coursier lors de la collecte.",
  },
  {
    q: "Que se passe-t-il si une tache ne part pas ?",
    a: "Nos pressings partenaires sont formés aux tissus délicats. Si une tache résiste, on vous prévient avant tout traitement supplémentaire et on vous propose une solution adaptée.",
  },
  {
    q: "Combien de temps pour récupérer mon linge ?",
    a: "24h en moyenne pour un lavage standard. Le nettoyage à sec et les pièces délicates peuvent prendre jusqu'à 48h, affiché clairement avant votre commande.",
  },
  {
    q: "Comment devenir coursier BanToo ?",
    a: "Téléchargez l'application BanToo Coursier, créez votre profil et envoyez vos documents. Après vérification, vous pouvez accepter vos premières missions.",
  },
  {
    q: "Je gère un pressing, comment rejoindre BanToo ?",
    a: "Inscrivez votre établissement via l'espace partenaires. Notre équipe vérifie votre atelier et vous accompagne pour votre premier mois sur la plateforme.",
  },
]
