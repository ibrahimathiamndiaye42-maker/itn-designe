// Catalogue de produits — données locales pour la version 1.
// Pour ajouter un produit : copier un objet ci-dessous et modifier ses champs.
// status : 'disponible_sur_place' ou 'disponible_sur_commande'

const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const CATEGORIES = [
  {
    id: 'ameublement',
    label: 'Ameublement',
    subcategories: ['Chambres à coucher', 'Salons', 'Fauteuils', 'Tables', 'Meubles en bois', 'Autres meubles'],
  },
  {
    id: 'construction',
    label: 'Construction',
    subcategories: ['Bois', 'Zinc', 'Matériaux de construction', 'Équipements', 'Accessoires'],
  },
]

export const PRODUCTS = [
  {
    id: 'chambre-moderne-01',
    ref: 'ITN-CH-001',
    name: 'Chambre à coucher moderne Marron Blanc',
    category: 'ameublement',
    subcategory: 'Chambres à coucher',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Ensemble chambre à coucher en bois laminé avec finition moderne.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['Bois massif et panneaux laminés', 'Lit double 160×200 cm', '2 chevets + 1 commode inclus', 'Finition anti-rayures'],
    // images: [img('/images/00507f9a65f84b7185f316e8e67a3cbf.jpg'), img('chambre1b'), img('chambre1c')],
    images: ['/images/imageA1/WhatsApp Image 2026-09-23 at 13.37.14.jpeg', '/images/imageA1/WhatsApp Image 2026-09-23 at 13.37.15.jpeg', '/images/imageA1/9f9c79df46154aa7bd86b4e52d3503e3.jpg'],
     videos: ['/videos/A1/WhatsApp Video 2026-09-23 at 13.37.01.mp4'],

  },
  {
    id: 'chambre-moderne-02',
    ref: 'ITN-SA-002',
    name: 'Chambre à coucher moderne Blanc',
    category: 'ameublement',
    subcategory: 'Chambres à coucher',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Ensemble chambre à coucher en bois laminé avec finition moderne.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['Bois massif et panneaux laminés', 'Lit double 160×200 cm', '2 chevets + 1 commode inclus', 'Finition anti-rayures'],
    images: ['/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58 (2).jpeg', '/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58 (1).jpeg', '/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58.jpeg'],
      videos: ['/videos/A2/WhatsApp Video 2026-09-23 at 13.55.55.mp4'],
  },
  {
    id: 'chambre-moderne-03',
    ref: 'ITN-FA-003',
    name: 'Chambre à coucher moderne Blanc',
    category: 'ameublement',
    subcategory: 'Fauteuils',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Fauteuil artisanal en rotin, tressage fait main.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['Tressage artisanal fait main', "Coussin d'assise inclus", 'Léger et facile à déplacer', 'Structure rotin naturel'],
    images: ['/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.11.jpeg', '/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.10 (1).jpeg','/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.10.jpeg'],
    videos: ['/videos/A3/WhatsApp Video 2026-09-23 at 14.05.21.mp4'],
  },
  {
    id: 'chambre-moderne-04',
    ref: 'ITN-TA-004',
    name: 'Chambre à coucher moderne Blanc',
    category: 'ameublement',
    subcategory: 'Tables',
    price: 900000,
    status: 'disponible_sur_commande',
    shortDescription: 'Table rectangulaire en bois massif, finition vernie.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['Bois massif verni', 'Capacité 6 personnes', 'Dimensions : 180×90 cm', 'Pieds renforcés'],
    images: ['/images/imageA4/04319b6d2f2c4322a8709a2c0e8a512e.jpg', '/images/imageA4/4af2395e16c14d5ba1ec6d3519035284.jpg', '/images/imageA4/2ea8dd52184143e0a372452139f45d2b.jpg'],
    // videos: ['/videos/nom-du-fichier.mp4'],
  },
  {
    id: 'chambre-moderne-05',
    ref: 'ITN-ME-005',
    name: 'Chambre à coucher moderne Blanc',
    category: 'ameublement',
    subcategory: 'Meubles en bois',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Meuble TV compact avec espaces de rangement fermés.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['Bois traité anti-humidité', '2 portes de rangement', 'Niche ouverte pour appareils', 'Facile à entretenir'],
    images: ['/images/imageA5/44a6c110bb4349b2bdf62302d0f978b2.jpg', '/images/imageA5/51c38179d3d54234af52a6f097cdfc54.jpg', '/images/imageA5/7fbe2dbcbef444e8a88bc03d69cef021.jpg'],
    videos: ['/videos/2026-09-15-142321145.mp4'],
  },
  {
    id: 'chambre-moderne-06',
    ref: 'ITN-ME-006',
    name: 'Chambre à coucher moderne Blanc',
    category: 'ameublement',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
      "Ensemble complet pour chambre à coucher : lit double, deux chevets et une commode assortie. Finition laminée résistante à l'usure quotidienne, structure en bois massif renforcé. Un choix solide pour une chambre élégante et durable.",
    features: ['3 niveaux de rangement', 'Kit de fixation inclus', 'Bois léger et résistant', 'Montage rapide'],
    images: ['/images/imageA6/55540eb8891f4c2f9bd3b42f147256d5.jpg', '/images/imageA6/91b19ad135c945caa71e521daf4f60bf.jpg','/images/imageA6/94d6bd4431f6401d839bb2d9705017e8.jpg'],
  },
  {
    id: 'chambre-moderne-07',
    ref: 'ITN-BO-007',
    name: 'Bois de charpente traité',
    category: 'construction',
    subcategory: 'Bois',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Bois de charpente traité, vendu à la pièce (prix par unité).',
    description:
      "Bois de charpente traité contre les insectes et l'humidité, adapté à la construction de toitures et structures. Vendu à la pièce ; quantités importantes disponibles sur demande.",
    features: ['Traitement anti-insectes', 'Adapté aux toitures', 'Dimensions standards', 'Disponible en grande quantité'],
    images: ['/images/imageA7/post-150x150-1-scaled.webp','/images/imageA7/OIP.webp','/images/imageA7/Leipziger_Kisten-und_Leistenfabrik-Bauschnittholz-Bauschnittholz8-1.jpg'],
  },
  {
    id: 'chambre-moderne-08',
    ref: 'ITN-ZI-008',
    name: 'Tôle en zinc ondulée',
    category: 'construction',
    subcategory: 'Zinc',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Tôle en zinc ondulée pour toiture, prix par feuille.',
    description:
      "Tôle en zinc ondulée résistante à la corrosion, adaptée aux toitures résidentielles et commerciales. Prix indiqué par feuille — tarifs dégressifs pour les grandes quantités, nous consulter.",
    features: ['Résistante à la corrosion', 'Adaptée aux toitures', 'Prix par feuille', 'Tarifs dégressifs en gros'],
    images: ['/images/imageA8/OIP.webp','/images/imageA8/1-2mm-stainless-steel-roofing-sheet-1000x1000.webp','/images/imageA8/OIP (1).webp'],
  },
  {
    id: 'chambre-moderne-09',
    ref: 'ITN-MA-009',
    name: 'Ciment — sac de 50 kg',
    category: 'construction',
    subcategory: 'Matériaux de construction',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Sac de ciment 50 kg, qualité standard construction.',
    description:
      "Sac de ciment de 50 kg, qualité standard adaptée aux travaux de construction courants. Stock disponible pour livraison ou retrait sur place.",
    features: ['Sac de 50 kg', 'Qualité standard construction', 'Stock disponible', 'Livraison possible'],
    images: ['/images/imageA9/WhatsApp Image 2026-09-24 at 20.44.28.jpeg', '/images/imageA9/WhatsApp Image 2026-09-24 at 20.42.17.jpeg'],
    videos: ['/videos/A9/WhatsApp Video 2026-09-24 at 20.44.30.mp4'],
  },
  {
    id: 'chambre-moderne-10',
    ref: 'ITN-EQ-010',
    name: 'Brouette de chantier',
    category: 'construction',
    subcategory: 'Équipements',
    price: 900000,
    status: 'disponible_sur_commande',
    shortDescription: 'Brouette robuste pour travaux de chantier.',
    description:
      "Brouette de chantier robuste, cuve en métal renforcé et roue increvable. Conçue pour un usage intensif sur chantier.",
    features: ['Cuve métal renforcée', 'Roue increvable', 'Usage intensif', 'Structure stable'],
    images: ['/images/imageA10/WhatsApp Image 2026-09-24 at 20.51.17.jpeg', '/images/imageA10/WhatsApp Image 2026-09-24 at 20.51.17.jpeg'],
    videos: ['/videos/A10/WhatsApp Video 2026-09-24 at 20.51.17.mp4'],
  },
  {
    id: 'chambre-moderne-11',
    ref: 'ITN-AC-011',
    name: 'Kit de quincaillerie assorti',
    category: 'construction',
    subcategory: 'Accessoires',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Kit assorti de vis, clous et fixations pour chantier.',
    description:
      "Kit de quincaillerie assorti comprenant vis, clous et fixations diverses pour les besoins courants de construction et d'ameublement.",
    features: ['Vis et clous assortis', 'Boîte de rangement incluse', 'Pour usages variés', 'Qualité résistante'],
    images: ['/images/image11/WhatsApp Image 2026-09-24 at 21.00.10.jpeg', '/images/image11/WhatsApp Image 2026-09-24 at 21.00.13.jpeg'],
    videos: ['/videos/A11/WhatsApp Video 2026-09-24 at 21.00.10.mp4'],
  },
  {
    id: 'chambre-moderne-12',
    ref: 'ITN-TA-012',
    name: 'Porte intérieure en bois massif',
    category: 'ameublement',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_commande',
    shortDescription: 'Porte intérieure en bois massif, dimensions standards.',
    description:
      "Porte intérieure en bois massif avec cadre inclus, finition prête à peindre ou vernir. Dimensions standards, installation possible sur demande.",
    features: ['Bois massif', 'Cadre inclus', 'Dimensions standards', 'Installation possible sur demande'],
    images: ['/images/imageA12/WhatsApp Image 2026-09-24 at 21.04.42.jpeg', '/images/imageA12/WhatsApp Image 2026-09-24 at 21.04.42.jpeg'],
    videos: ['/videos/A12/WhatsApp Video 2026-09-24 at 21.04.42.mp4'],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}
