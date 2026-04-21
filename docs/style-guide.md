# Arcos — Style Guide

## Design System

### Inspiration
Thème dark premium (Obsidian OS, références type **COLAB** SaaS) : grille dense mais aérée, hero centré type vitrine SaaS, mockup avec **onglets**, halos et détails en **cyan** alignés sur le logo officiel (`public/logo-arcos.svg`).

### Couleurs (logo Arcos)

| Token             | Valeur     | Usage                          |
|-------------------|------------|--------------------------------|
| `--brand-navy`    | `#082d44`  | Marine logo, dégradés / profondeur |
| `--background`    | `#050a0f`  | Fond principal (légèrement bleuté) |
| `--foreground`    | `#e8f2f7`  | Texte principal                |
| `--accent`        | `#14a9cf`  | Accent principal (cyan logo) |
| `--accent-light`  | `#4dc8eb`  | Accent clair (hover, halos)  |
| `--card-bg`       | `#0a1219`  | Fond des cartes              |
| `--card-border`   | `#132a38`  | Bordures des cartes          |
| `--muted`         | `#7a9aad`  | Texte secondaire             |
| `--section-alt`   | `#070f16`  | Fond sections alternées      |
| `--surface-raised`| `#0c141c`  | Surfaces surélevées          |

### Typographie
- **Font principale** : Inter (via Google Fonts)
- **Titres** : font-bold, tracking-tight
- **Texte courant** : text-muted, leading-relaxed

### Profondeur & sections
- **Grille de points** : classe `bg-dot-grid` (fond décoratif léger)
- **Sections** : alternance `bg-section-lift` / `bg-section-slab` + bordures `border-white/[0.06]`
- **Cartes** : `card-inset` (ombre intérieure + relief), `card-hover` au survol
- **Panneaux** : grands blocs `rounded-3xl border border-white/[0.08] bg-[#080808]`

### Composants récurrents
- **Cartes** : `rounded-2xl border border-card-border bg-card-bg p-6`
- **Boutons primaires** : `rounded-full bg-foreground text-background`
- **Boutons secondaires** : `rounded-full border border-white/10`
- **Badges** : `rounded-full bg-white/5 border border-white/10 text-sm`
- **Gradient text** : `gradient-text` (classe custom)
- **Glass effect** : `glass-card` (classe custom)
- **Glow accent** : `glow-accent` (classe custom)

### Animations
- Fade in up au scroll (framer-motion, `whileInView`)
- Pulse glow sur éléments d'accent
- Float animation sur éléments décoratifs
- Transitions hover sur cartes et boutons

### Responsive
- Mobile-first avec Tailwind breakpoints
- Navigation mobile avec menu hamburger animé
- Grid adaptatif : 1 col mobile → 2 col tablet → 3-4 col desktop

### Sections
Le site alterne entre :
- Fond `background` avec gradient radial cyan
- Fond `section-alt` avec `bg-dot-grid` / `bg-section-lift`

## E-mails transactionnels (Arcos)

Les gabarits HTML (`src/lib/email/templates.ts`) reprennent **`globals.css`** (tokens réels du site), pas l’ancienne table « logo » de ce fichier.

| Élément | Valeur | Remarque client mail |
|---------|--------|----------------------|
| Fond | `#131514` | `bgcolor` + `background-color` + `!important` sur blocs clés pour limiter les inversions (Gmail / Apple). |
| Texte | `#d5d6d5` | Corps, aligné `--text`. |
| Titres | `#f1f1f1` | `--white`, `font-weight: 500`. |
| Muet | `#6b6c6b` | `--muted` (labels uppercase type section Contact). |
| Bordure | `#2f2f2f` | Hex à la place de `rgba(255,255,255,0.12)` pour stabilité en mode auto. |
| Accent | `#14a9cf` | `--teal` (liens). |
| Bouton primaire | Fond `#f1f1f1`, texte `#131514`, radius `3px` | Équivalent `.btn-hg`. |
| Bouton ghost | Bordure `#2f2f2f`, texte `#6b6c6b` | Équivalent `.btn-hg-ghost`. |
| Police | `PP Neue Montreal` + fallback | `@font-face` vers `/fonts/*.woff` sur l’URL publique ; beaucoup de webmails ignorent les polices perso → pile **Helvetica Neue, Helvetica, Arial**. |

**Méta** : `color-scheme: dark` + `supported-color-schemes: dark` pour indiquer un UI sombre ; le rendu peut toutefois varier selon le thème du client — d’où contrastes explicites et version **texte brut** systématique.
