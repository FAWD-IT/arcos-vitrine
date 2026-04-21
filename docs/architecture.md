# Arcos Vitrine — Architecture technique

## Stack
- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Font** : Inter (Google Fonts)

## Structure du projet
```
arcos-vitrine/
├── docs/                    # Documentation projet
│   ├── architecture.md
│   ├── business-rules.md
│   ├── project-description.md
│   └── style-guide.md
├── public/                  # Assets statiques
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux + tokens
│   │   ├── layout.tsx       # Layout racine (metadata, fonts)
│   │   └── page.tsx         # Page d'accueil (assemblage sections)
│   └── components/
│       ├── Navbar.tsx        # Navigation fixe + menu mobile
│       ├── Hero.tsx          # Section héro + preview dashboard
│       ├── Problem.tsx       # Section problème (4 pain points)
│       ├── Features.tsx      # 6 features avec previews visuelles
│       ├── Integrations.tsx  # Grille d'intégrations
│       ├── ForWho.tsx        # Cibles + citation positionnement
│       ├── Pricing.tsx       # 3 plans tarifaires
│       ├── CTA.tsx           # Call-to-action final
│       └── Footer.tsx        # Footer avec crédits FAWD
├── package.json
└── tsconfig.json
```

## Déploiement
- Build statique (`next build` → export statique possible)
- Compatible Vercel, Netlify, ou tout CDN statique
- Option on-premise via Docker si nécessaire

## Choix techniques
- **App Router** : Routing moderne Next.js, Server Components par défaut
- **"use client"** : Uniquement pour les composants avec animations (framer-motion)
- **Tailwind v4** : CSS-first config, pas de `tailwind.config.js`
- **Pas de CMS** : Contenu en dur pour MVP, migration future possible
