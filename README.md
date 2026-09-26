# ITN_Designe — Site e-commerce (React + Vite)

Catalogue e-commerce pour ITN_Designe (ameublement et matériaux de construction),
avec panier, fiches produits, filtres/recherche et commande par WhatsApp.

## Démarrage

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:5173

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé sur n'importe
quel hébergement statique (Netlify, Vercel, OVH, o2switch, etc.).

## Ce qu'il faut personnaliser

- **`src/config.js`** — numéro WhatsApp, nom, slogan, adresse, horaires de l'entreprise.
- **`src/data/products.js`** — le catalogue de produits. Chaque produit est un objet
  simple (nom, prix, catégorie, statut, photos, description...). Pour ajouter un
  produit, copiez un objet existant et modifiez ses champs.
  - `status` doit valoir `'disponible_sur_place'` ou `'disponible_sur_commande'`.
  - Les images sont actuellement des photos de démonstration (picsum.photos) —
    remplacez les URLs par vos vraies photos de produits (ou par des chemins
    locaux dans `src/assets/` importés dans le fichier).

## Structure du projet

```
src/
  components/   → Header, Footer, carte produit, badge disponibilité, bouton WhatsApp flottant...
  pages/        → Accueil, Produits, Détail produit, Panier, Commande, À propos, Contact
  data/         → catalogue de produits (données locales)
  context/      → panier global (Zustand, persisté dans le navigateur)
  utils/        → génération du message WhatsApp et formatage des prix
  config.js     → informations éditables de l'entreprise
```

## Évoluer vers une vraie base de données

Le catalogue actuel utilise des données locales pour que le site fonctionne
immédiatement, sans backend. Pour connecter une vraie base de données plus tard :

1. Remplacez le contenu de `src/data/products.js` par un appel à votre API
   (ex. `fetch('/api/products')`), en conservant la même forme de données.
2. Ajoutez un espace d'administration (ajout/suppression/modification de produits,
   consultation des commandes) qui écrit dans cette même base.

L'architecture du site (composants, panier, pages) n'a pas besoin de changer :
seule la source des données évolue.
