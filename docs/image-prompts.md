# Arcos — Image Prompts

Palette de référence : marine `#082d44`, cyan `#14a9cf`, fond `#06090d`.  
Style global : **dark industrial UI / tech photography** — pas de stock générique, pas de sourires.  
Format recommandé : **16:9** pour les visuels larges, **1:1** pour les icônes/assets.  
Outil recommandé : Midjourney v6, DALL·E 3, ou Flux.

---

## 01 — Hero : fond ambiancé salle de contrôle

**Placement :** arrière-plan subtle derrière la colonne gauche du Hero (très sombre, opacity ~15 %)

```
Dark industrial SCADA control room, operators in silhouette facing large screens 
displaying real-time process data, cyan and deep blue ambient glow, cinematic depth 
of field, ultra-realistic photography, no people visible clearly, 
moody dark atmosphere, navy and teal color palette, 8K, photorealistic.
```

---

## 02 — Hero oscope : texture overlay signal

**Placement :** overlay sur le widget oscilloscope à droite du Hero

```
Abstract oscilloscope waveform signal, multiple overlapping cyan and teal sine waves 
on a near-black background, long exposure light painting, no labels, 
technical aesthetic, 16:9, dark background #06090d, glowing lines, 
ultra minimal, vector-style but photographic.
```

---

## 03 — Problem section : usine en activité

**Placement :** image de contexte dans la section Problem, fond ou colonne décorative

```
Heavy industry manufacturing plant interior at night, conveyor belts and machinery 
operating, dramatic cyan-tinted industrial lighting, steam and motion blur, 
dark moody atmosphere, no workers visible, deep navy shadows, 
cinematic photography, 16:9, photorealistic, highly detailed.
```

---

## 04 — Features / Dashboard : screenshot UI réaliste

**Placement :** remplacer le SVG du chapitre Dashboard par une image UI réaliste

```
Dark mode industrial IoT dashboard UI screenshot, navy and cyan color scheme, 
real-time line charts showing temperature and pressure sensor data, 
left sidebar with site tree, grid of metric cards showing live values, 
professional SaaS design, no lorem ipsum, MQTT tag labels visible, 
flat lay monitor mockup, 16:9, ultra sharp.
```

---

## 05 — Features / Agent IA : abstraction neurale

**Placement :** illustration derrière le chat IA dans le chapitre 02

```
Abstract AI neural network visualization, glowing cyan nodes connected by thin 
luminous lines on deep navy background, data flowing as particles along edges, 
no text, technical and clean, dark background, bokeh depth effect, 
ultra minimal, 4:3 format, photorealistic render.
```

---

## 06 — Features / Alertes : warning industriel

**Placement :** ambiance derrière la section alertes, très sombre

```
Industrial warning panel close-up, amber and red indicator lights blinking 
on dark metal control cabinet, shallow depth of field, cinematic, 
dark atmosphere, no text visible, moody factory lighting, 
photorealistic, 16:9, high contrast.
```

---

## 07 — Intégrations / Hub MQTT : circuit et connectique

**Placement :** fond ou halo derrière le hub SVG dans la section Intégrations

```
Close-up of industrial Ethernet cables and connectors plugged into a dark DIN-rail 
mounted gateway device, cyan LED indicators glowing, shallow depth of field, 
dark industrial background, photorealistic, no text, technical cables, 
navy and teal light reflections, 1:1 square.
```

---

## 08 — ForWho : opérateur terrain

**Placement :** image de profil / card "Technicien terrain" — figure floue en contexte

```
Industrial technician in PPE checking a tablet in front of a large machine, 
dark factory floor background, dramatic side lighting, cyan screen glow 
reflecting on their face, motion blur background, no face visible clearly, 
cinematic photography, 4:3, photorealistic.
```

---

## 09 — ForWho : salle technique / maintenance

**Placement :** card "Responsable maintenance" — ambiance technique

```
Industrial maintenance engineer reviewing a laptop screen showing charts, 
dark control room environment, multiple monitors in background, 
navy and teal ambient light, shallow depth of field, cinematic, 
no clear face, photorealistic, 4:3.
```

---

## 10 — CTA / footer : texture métal industriel

**Placement :** très subtil, texture overlay derrière la section CTA

```
Brushed dark metal industrial texture, fine horizontal lines, deep navy with 
subtle cyan reflections, no text, highly detailed macro photography, 
seamless tile-ready, minimal, 1:1.
```

---

## Notes d'intégration

- Toutes les images doivent être **compressées en WebP** (`quality 80–85`) avant intégration.
- Dimensions : visuels larges en **1600×900 px**, textures et icônes en **600×600 px**.
- Les images de fond (overlay) doivent être passées en `mix-blend-mode: luminosity` ou `opacity: 0.08–0.15` pour ne pas écraser la typographie.
- Nommer les fichiers : `hero-bg.webp`, `dashboard-ui.webp`, `ai-neural.webp`, etc. dans `/public/images/`.
