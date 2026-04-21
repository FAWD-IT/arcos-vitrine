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
