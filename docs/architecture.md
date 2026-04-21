# Arcos Vitrine — Architecture technique

## Stack
- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Font** : PP Neue Montreal (fichiers locaux `/public/fonts/`)
- **E-mail transactionnel** : Nodemailer (SMTP), route `POST /api/contact`

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
│   │   ├── api/contact/route.ts  # Envoi formulaire → SMTP + accusé visiteur
│   │   ├── globals.css      # Styles globaux + tokens
│   │   ├── layout.tsx       # Layout racine (metadata SEO, viewport)
│   │   ├── page.tsx         # Page d'accueil (assemblage sections)
│   │   ├── robots.ts        # robots.txt
│   │   └── sitemap.ts       # sitemap.xml
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

## Formulaire contact & SMTP
- Le formulaire appelle `POST /api/contact` (JSON : `name`, `email`, `company`, `message` ; honeypot `website` côté HTML, vide côté honnête).
- Variables d’environnement : voir `.env.example` (`SMTP_*`, `CONTACT_TEAM_TO`, `NEXT_PUBLIC_SITE_URL`).
- **Ne jamais committer** les secrets : utiliser `.env.local` en dev et les secrets de la plateforme en prod.
- Deux e-mails par envoi : notification équipe (`CONTACT_TEAM_TO`, `Reply-To` = e-mail visiteur) et accusé de réception HTML + texte brut au visiteur (multipart, en-têtes sobres, pré-en-tête masqué).

## Déploiement
- `next build` : pages statiques + route API dynamique (`/api/contact` nécessite un runtime Node avec variables SMTP).
- Compatible Vercel / Node hébergé ; **pas** d’export statique seul si le formulaire doit fonctionner sans backend tiers.
- **Node** : minimum **20.19+** (contrainte transitive `eslint-visitor-keys`). Fichiers `nixpacks.toml` + `.node-version` pour Nixpacks (Coolify / Railway) afin d’éviter l’image par défaut en 22.11 sans `^22.13.0`.

## Choix techniques
- **App Router** : Routing moderne Next.js, Server Components par défaut
- **"use client"** : Uniquement pour les composants avec animations (framer-motion)
- **Tailwind v4** : CSS-first config, pas de `tailwind.config.js`
- **Pas de CMS** : Contenu en dur pour MVP, migration future possible
