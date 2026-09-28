# Site web DESIGN-ME — fiche projet

*À coller dans les instructions (ou les connaissances) d'un projet Claude « Site web DESIGN-ME ». État au 28/09/2026.*

## Où est quoi

- **Site en ligne :** https://agence-designme.com (Next.js 16 + Payload CMS 3, base PostgreSQL)
- **Admin Payload :** https://agence-designme.com/admin
- **Code :** GitHub `servicedesignme-ai/design-me`, branche `main` (copie du dépôt d'origine `arthurveroch/design-me`, qui n'est plus utilisé)
- **Hébergement :** serveur OVH (vps-3ff8d77b.vps.ovh.net), piloté par Coolify : https://infra.agence-designme.com
  - Projet Coolify « Design-Me » → ressource `design-me-site` (le site), `design-me-bdd` (la base), `umami-design-me` (les statistiques), `n8n-design-me`
  - Source Git : `coolify-servicedesignme` (application GitHub installée uniquement sur le dépôt design-me)
  - **Chaque modification poussée sur `main` met le site en ligne automatiquement** (3 à 5 minutes)
- **Nom de domaine et messagerie :** o2switch (DNS et contact@agence-designme.com)
- **Statistiques :** Umami auto-hébergé (analytics.agence-designme.com), sans cookies. Il n'y a pas de Google Analytics, donc pas de bandeau cookies.

## Déjà fait (en ligne)

- Page `/mentions-legales` (hébergeur OVH, deux numéros : 06 29 37 79 72 et 07 67 75 02 53)
- Page `/politique-de-confidentialite`, avec une section cookies et mesure d'audience Umami et un bouton pour la désactiver
- CGV : `public/cgv-design-me.pdf`, lien dans le footer (s'ouvre dans un nouvel onglet)
- Footer : Mentions légales | Politique de confidentialité | CGV | Gestion des cookies | Services exclusivement destinés aux professionnels
- Mention RGPD sous le formulaire de devis
- Site déclaré en français (`lang="fr"`) et pages légales ajoutées au sitemap

Les textes de ces pages sont **écrits dans le code** (`src/app/(frontend)/mentions-legales/page.tsx` et `.../politique-de-confidentialite/page.tsx`). Pour les modifier, il faut changer le code puis le pousser sur `main`.

## En attente (non déployé) : pages légales modifiables dans Payload

Le fichier `payload-pages-legales.patch` contient le travail prêt et testé :

- la collection `legal` devient « Pages légales », avec les champs titre, adresse (`mentions-legales` ou `politique-de-confidentialite`) et contenu ;
- les pages lisent leur texte dans Payload, et affichent le texte du code si la page n'existe pas dans l'admin.

Pour le mettre en ligne, dans cet ordre :

1. **Base de données d'abord.** Dans Coolify, ouvrir `design-me-bdd`, puis Terminal, et taper `psql -U $POSTGRES_USER -d $POSTGRES_DB`, puis coller :
   ```sql
   BEGIN;
   ALTER TABLE "legal" ADD COLUMN IF NOT EXISTS "title" varchar NOT NULL;
   ALTER TABLE "legal" ADD COLUMN IF NOT EXISTS "slug" varchar NOT NULL;
   CREATE UNIQUE INDEX IF NOT EXISTS "legal_slug_idx" ON "legal" USING btree ("slug");
   COMMIT;
   ```
   Payload ne modifie pas la base tout seul en production : cette étape est obligatoire, sinon la rubrique « Pages légales » de l'admin affiche une erreur.
2. **Appliquer le correctif** sur `main` (`git am payload-pages-legales.patch`), puis pousser. Le déploiement se lance automatiquement.
3. **Dans l'admin**, créer les deux pages (Mentions légales / `mentions-legales` et Politique de confidentialité / `politique-de-confidentialite`) en reprenant les textes actuels.

## Points d'attention

- Pas de migrations Payload dans le dépôt, et la base de production ne se met pas à jour automatiquement : chaque ajout de champ dans une collection demande une commande SQL comme celle ci-dessus.
- Le Coolify répond aussi sur http://51.38.224.95:8000 (non chiffré) : à fermer ou à restreindre.
- DESIGN-ME, SAS au capital de 1 000 €, RCS Rennes 981 591 183, 14 rue Léo Lagrange, 35131 Chartres-de-Bretagne. Directeur de la publication : Edern Quere, Président.
