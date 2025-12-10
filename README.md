# Boaz Study – Frontend Test

Mini application React + TypeScript fournie pour prototyper des pages de services étudiants (attestations, preuves de versement, wallet, etc.). Le backend est mocké pour développer l'UI indépendamment d'une API réelle.

## Stack
- React 19 + TypeScript
- Vite
- TailwindCSS
- Zustand (state)
- Axios (http)
- Radix UI primitives + lucide icons

## Quick start
1. Installer les dépendances :
   npm install

2. Lancer le serveur de dev :
   npm run dev

3. Linter :
   npm run lint

4. Build de production :
   npm run build

Fichiers importants :
- [package.json](package.json)
- [vite.config.ts](vite.config.ts)
- [tsconfig.json](tsconfig.json)
- [src/main.tsx](src/main.tsx)
- [src/App.tsx](src/App.tsx)
- [src/router.tsx](src/router.tsx)

## Pages (routes)
- [src/pages/auth/LoginPage.tsx](src/pages/auth/LoginPage.tsx)
- [src/pages/auth/RegisterPage.tsx](src/pages/auth/RegisterPage.tsx)
- [src/pages/home/HomePage.tsx](src/pages/home/HomePage.tsx)
- [src/pages/attestation/AttestationPage.tsx](src/pages/attestation/AttestationPage.tsx)

Layout principal :
- [src/components/layout/MainLayout.tsx](src/components/layout/MainLayout.tsx)

## API / mocks
- Le flag global pour activer/désactiver les mocks est défini dans [src/config/env.ts](src/config/env.ts) : [`USE_MOCKS`](src/config/env.ts)
- Instance Axios : [`http`](src/services/http/axiosInstance.ts)
- Point d'entrée service attestation : [`createAttestation`](src/services/servicesService.ts)
- Mocks :
  - Login mock : [`mockLogin`](src/services/mock/auth.mock.ts)
  - Attestation mock : [`mockCreateAttestation`](src/services/mock/services.mock.ts)

Quand [`USE_MOCKS`](src/config/env.ts) = true, les appels sont pris en charge par les fonctions mock ci‑dessus ; sinon Axios utilise `API_BASE_URL` depuis le même fichier.

## Auth
- Store d'authentification : [`useAuthStore`](src/store/authStore.ts)
- Identifiants de test :
  - email: demo@boaz.com
  - password: password

## Architecture rapide
- src/
  - components/  (UI atoms et layout)
  - pages/       (pages React)
  - screens/     (écrans composés, ex. AVI)
  - services/    (http, services métier, mocks)
  - store/       (zustand)
  - contracts/   (types TS pour requêtes/réponses)
  - config/      (vars d'env)

## Alias et Tailwind
- Alias `@` configuré dans [vite.config.ts](vite.config.ts) et utilisé dans le code.
- Le design provient des composants shadcn et utilitaires Tailwind présents dans `src/index.css`.

## Notes / conseils
- Le flow de connexion met à jour le store via [`useAuthStore`](src/store/authStore.ts) ; certaines routes sont protégées via le composant `ProtectedRoute` dans [src/router.tsx](src/router.tsx).
- Pour brancher un vrai backend : définir `API_BASE_URL` dans [src/config/env.ts](src/config/env.ts) et désactiver [`USE_MOCKS`](src/config/env.ts).
- Tests unitaires non inclus dans ce dépôt (ajouter Jest/Vitest si nécessaire).

