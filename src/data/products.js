// Catalogue de produits — données locales pour la version 1.
// Pour ajouter un produit : copier un objet ci-dessous et modifier ses champs.
// status : 'disponible_sur_place' ou 'disponible_sur_commande'

const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const CATEGORIES = [
  {
    id: 'chambre-a-coucher',
    label: 'Chambre à coucher',
    subcategories: ['Chambres à coucher', 'Salons', 'Fauteuils', 'Tables', 'Meubles en bois', 'Autres meubles'],
  },
  {
    id: 'salon',
    label: 'Salon',
    subcategories: ['Bois', 'Zinc', 'Matériaux de construction', 'Équipements', 'Accessoires'],
  },
]

export const PRODUCTS = [
  {
    id: 'chambre-moderne-01',
    ref: 'ITN-CH-001',
    name: 'Chambre à coucher moderne Marron Blanc',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    
    status: 'disponible_sur_place',
    shortDescription: 'Ensemble chambre à coucher en bois laminé avec finition moderne.',
    description:
      " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['Bois massif et panneaux laminés', 'Lit double 160×200 cm', '2 chevets + 1 commode inclus', 'Finition anti-rayures'],
    // images: [img('/images/00507f9a65f84b7185f316e8e67a3cbf.jpg'), img('chambre1b'), img('chambre1c')],
    images: ['/images/imageA1/WhatsApp Image 2026-09-23 at 13.37.14.jpeg', '/images/imageA1/WhatsApp Image 2026-09-23 at 13.37.15.jpeg', '/images/imageA1/9f9c79df46154aa7bd86b4e52d3503e3.jpg'],
     videos: ['/videos/A1/WhatsApp Video 2026-09-23 at 13.37.01.mp4'],

  },
  {
    id: 'chambre-moderne-02',
    ref: 'ITN-SA-002',
    name: 'Chambre à coucher moderne Blanc',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Ensemble chambre à coucher en bois laminé avec finition moderne.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    images: ['/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58 (2).jpeg', '/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58 (1).jpeg', '/images/imageA2/WhatsApp Image 2026-09-23 at 13.56.58.jpeg'],
      videos: ['/videos/A2/WhatsApp Video 2026-09-23 at 13.55.55.mp4'],
  },
  {
    id: 'chambre-moderne-03',
    ref: 'ITN-FA-003',
    name: 'Chambre à coucher moderne Gris',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Fauteuil artisanal en rotin, tressage fait main.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['Tressage artisanal fait main', "Coussin d'assise inclus", 'Léger et facile à déplacer', 'Structure rotin naturel'],
    images: ['/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.11.jpeg', '/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.10 (1).jpeg','/images/imageA3/WhatsApp Image 2026-09-23 at 14.06.10.jpeg'],
    videos: ['/videos/A3/WhatsApp Video 2026-09-23 at 14.05.21.mp4'],
  },
  {
    id: 'chambre-moderne-04',
    ref: 'ITN-TA-004',
    name: 'Chambre à coucher moderne Marron 02',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    price: 10,
    status: 'disponible_sur_commande',
    shortDescription: 'Table rectangulaire en bois massif, finition vernie.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['Bois massif verni', 'Capacité 6 personnes', 'Dimensions : 180×90 cm', 'Pieds renforcés'],
    images: ['/images/imageA4/04319b6d2f2c4322a8709a2c0e8a512e.jpg', '/images/imageA4/4af2395e16c14d5ba1ec6d3519035284.jpg', '/images/imageA4/2ea8dd52184143e0a372452139f45d2b.jpg'],
    // videos: ['/videos/nom-du-fichier.mp4'],
  },
  {
    id: 'chambre-moderne-05',
    ref: 'ITN-ME-005',
    name: 'Chambre à coucher moderne Marron beige',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Meuble TV compact avec espaces de rangement fermés.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['Bois traité anti-humidité', '2 portes de rangement', 'Niche ouverte pour appareils', 'Facile à entretenir'],
    images: ['/images/imageA5/44a6c110bb4349b2bdf62302d0f978b2.jpg', '/images/imageA5/51c38179d3d54234af52a6f097cdfc54.jpg', '/images/imageA5/7fbe2dbcbef444e8a88bc03d69cef021.jpg'],
    
  },
  {
    id: 'chambre-moderne-06',
    ref: 'ITN-ME-006',
    name: 'Chambre à coucher moderne Gris 02',
    category: 'chambre-a-coucher',
    subcategory: 'Chambres à coucher',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['3 niveaux de rangement', 'Kit de fixation inclus', 'Bois léger et résistant', 'Montage rapide'],
    images: ['/images/imageA6/55540eb8891f4c2f9bd3b42f147256d5.jpg', '/images/imageA6/91b19ad135c945caa71e521daf4f60bf.jpg','/images/imageA6/94d6bd4431f6401d839bb2d9705017e8.jpg'],
  },
  {
    id: 'salon-07',
    ref: 'ITN-SA-007',
    name: 'Salon complet 7 places',
    category: 'salon',
    subcategory: 'Salon complet',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Salon complet 7 places : un canapé 3 places, un canapé 2 places et 2 fauteuils.',
    description:
      "Salon complet 7 places composé d'un canapé 3 places, d'un canapé 2 places et de 2 fauteuils assortis. Structure en bois solide, assise confortable et revêtement facile d'entretien. Un ensemble élégant pour recevoir votre famille et vos invités.",
    features: ['7 places assises', 'Structure en bois solide', 'Assise confortable', 'Revêtement facile d\'entretien'],
    images: ['/images/imageA7/WhatsApp Image 2026-10-14 at 15.44.36 (3).jpeg','/images/imageA7/WhatsApp Image 2026-10-14 at 16.04.03.jpeg','/images/imageA7/WhatsApp Image 2026-10-14 at 15.44.36 (1).jpeg','/images/imageA7/WhatsApp Image 2026-10-14 at 15.44.36 (1).jpeg','/images/imageA7/WhatsApp Image 2026-10-14 at 15.44.36.jpeg'],
  },
  {
    id: 'salon-08',
    ref: 'ITN-SA-008',
    name: "Salon d'angle 7 places",
    category: 'salon',
    subcategory: "Salon d'angle",
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: "Salon d'angle 7 places, idéal pour optimiser l'espace.",
    description:
      "Salon d'angle 7 places au design moderne, parfait pour les pièces de vie spacieuses comme pour les plus compactes. Assise profonde et dossier rembourré pour un confort optimal au quotidien.",
    features: ['7 places assises', "Forme d'angle gain de place", 'Dossier rembourré', 'Design moderne'],
    images: ['/images/imageA8/WhatsApp Image 2026-10-14 at 14.33.59 (1).jpeg','/images/imageA8/WhatsApp Image 2026-10-14 at 14.33.59 (4).jpeg','/images/imageA8/WhatsApp Image 2026-10-14 at 14.33.59.jpeg','/images/imageA8/WhatsApp Image 2026-10-14 at 14.33.59 (3).jpeg','/images/imageA8/WhatsApp Image 2026-10-14 at 14.33.59 (5).jpeg'],
  },
  {
    id: 'salon-09',
    ref: 'ITN-SA-009',
    name: 'Salon moderne 7 places',
    category: 'salon',
    subcategory: 'Salon complet',
    price: 10,
    status: 'disponible_sur_place',
    shortDescription: 'Salon moderne 7 places : un canapé 3 places et 2 fauteuils.',
    description:
      "Salon moderne 7 places avec un canapé 3 places,un canapé 3 places et 2 fauteuils assortis. Finition soignée et lignes épurées pour s'intégrer dans tous les intérieurs. Disponible en magasin, livraison possible.",
    features: ['7 places assises', 'Finition soignée', 'Lignes épurées', 'Livraison possible'],
    images: ['/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.19.jpeg', '/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.21.jpeg','/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.20.jpeg','/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.20 (2).jpeg'],
    
  },
  {
    id: 'salon-10',
    ref: 'ITN-SA-010',
    name: 'Salon moderne 7 places',
    category: 'salon',
    subcategory: 'Canapés',
    
    status: 'disponible_sur_commande',
    shortDescription: 'Salon 7 places confortable, disponible sur commande.',
    description:
      "Salon 7 places à l'assise généreuse et au revêtement résistant. Fabriqué sur commande selon vos préférences de coloris et de finition. Un meuble central pour votre salon.",
    features: ['7 places assises', 'Assise généreuse', 'Coloris au choix', 'Fabriqué sur commande'],
    images: ['/images/imageA10/WhatsApp Image 2026-10-14 at 16.34.31.jpeg', '/images/imageA10/WhatsApp Image 2026-10-14 at 16.34.32 (2).jpeg','/images/imageA10/WhatsApp Image 2026-10-14 at 16.34.32 (1).jpeg','/images/imageA10/WhatsApp Image 2026-10-14 at 16.34.32.jpeg'],
    
  },
  {
    id: 'salon-11',
    ref: 'ITN-SA-011',
    name: 'Salon 7 pièces avec table basse',
    category: 'salon',
    subcategory: 'Tables basses',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Salon 7 pièces livré avec sa table basse assortie.',
    description:
      "Salon 7 pièces livré avec une table basse assortie. Un ensemble harmonieux pour aménager votre salon d'un seul coup, avec une finition de qualité et une structure robuste.",
    features: ['Table basse incluse', 'Ensemble assorti', 'Structure robuste', 'Finition de qualité'],
    images: ['/images/image11/WhatsApp Image 2026-10-14 at 16.42.42 (5).jpeg', '/images/image11/WhatsApp Image 2026-10-14 at 16.42.42 (3).jpeg','/images/image11/WhatsApp Image 2026-10-14 at 16.42.42 (4).jpeg','/images/image11/WhatsApp Image 2026-10-14 at 16.42.42 (1).jpeg'],
    
  },
  
  {
    id: 'chambre-moderne-12',
    ref: 'ITN-ME-012',
    name: 'Chambre à coucher moderne Blanc Or',
    category: 'chambre-a-coucher',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
      " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
     images: ['/images/imageA12/WhatsApp Image 2026-09-24 at 21.04.42.jpeg', '/images/imageA12/WhatsApp Image 2026-09-24 at 21.04.42.jpeg'],
    videos: ['/videos/A12/WhatsApp Video 2026-09-24 at 21.04.42.mp4'],
  },
  {
    id: 'chambre-moderne-13',
    ref: 'ITN-ME-013',
    name: 'Chambre à coucher moderne Marron beige 02',
    category: 'chambre-a-coucher',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    images: ['/images/image13/WhatsApp Image 2026-09-24 at 20.51.03.jpeg', '/images/image13/WhatsApp Image 2026-09-24 at 20.51.jpeg'],
    videos: ['/videos/A10/WhatsApp Video 2026-09-24 at 20.51.17.mp4'],
  },
  {
    id: 'chambre-moderne-14',
    ref: 'ITN-ME-014',
    name: 'Chambre à coucher moderne Blanc Gris',
    category: 'chambre-a-coucher',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
     " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    images: ['/images/image14/WhatsApp Image 2026-09-24 at 20.41.26.jpeg', '/images/image14/WhatsApp Image 2026-09-24 at 20.41.jpeg'],
    videos: ['/videos/A9/WhatsApp Video 2026-09-24 at 20.44.30.mp4'],
  },
  {
    id: 'chambre-moderne-15',
    ref: 'ITN-ME-015',
    name: 'Chambre à coucher moderne Bois Marron',
    category: 'chambre-a-coucher',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
    " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    images: ['/images/image15/WhatsApp Image 2026-09-24 at 21.00.10.jpeg', '/images/image15/WhatsApp Image 2026-09-24 at 21.00.13.jpeg'],
    
  },
   {
    id: 'chambre-moderne-16',
    ref: 'ITN-ME-016',
    name: 'Chambre à coucher moderne Tableau Blanc',
    category: 'chambre-a-coucher',
    subcategory: 'Autres meubles',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Étagère murale trois niveaux, montage simple.',
    description:
      " Ensemble élégant et complet comprenant : 1 lit double 3 places, 1 grande armoire 6 battants, 1 Coffres de rangement intégrés, 1 banquette, 1 espace Make-up avec chaise.Un ensemble pensé pour apporter élégance, confort et rangement à votre chambre.",
    features: ['3 niveaux de rangement', 'Kit de fixation inclus', 'Bois léger et résistant', 'Montage rapide'],
    images: ['/images/image16/WhatsApp Image 2026-10-14 at 17.03.04 (1).jpeg', '/images/image16/WhatsApp Image 2026-10-14 at 17.03.05 (1).jpeg','/images/image16/WhatsApp Image 2026-10-14 at 17.03.04 (2).jpeg'],
    videos: ['/videos/A16/WhatsApp Video 2026-10-14 at 17.03.04.mp4'],
  },
  {
    id: 'salon-17',
    ref: 'ITN-SA-017',
    name: 'salon cleup',
    category: 'salon',
    subcategory: 'Salon',
    price: 900000,
    status: 'disponible_sur_place',
    shortDescription: 'Salon 3 pièces livré avec sa table basse assortie.',
    description:
      "Salon 2 pièces livré avec une table basse assortie. Un ensemble harmonieux pour aménager votre salon d'un seul coup, avec une finition de qualité et une structure robuste.",
    features: ['Table basse incluse', 'Ensemble assorti', 'Structure robuste', 'Finition de qualité'],
    images: ['/images/image17/WhatsApp Image 2026-10-14 at 17.28.45 (2).jpeg', '/images/image17/WhatsApp Image 2026-10-14 at 17.28.45 (1).jpeg','/images/image17/WhatsApp Image 2026-10-14 at 17.28.46 (4).jpeg','/images/image17/WhatsApp Image 2026-10-14 at 17.28.46 (5).jpeg'],
    
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}
