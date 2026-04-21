# Arcos — Règles métier

## Contenu du site vitrine

### Hero
- Tagline : "Supervisez vos machines. En temps réel. Sans SCADA."
- Sous-titre explicatif de la proposition de valeur
- Deux CTAs : "Demander une démo" (primaire) / "Voir en live" (secondaire)

### Pain Points (section Problème)
1. Export manuel de données
2. Pas de visibilité temps réel
3. Alertes arrivent trop tard
4. SCADA trop cher et lent à déployer

### Features
1. Dashboard temps réel (tags, courbes, états par site/machine)
2. Agent IA intégré (langage naturel, pas de SQL)
3. Alertes intelligentes (seuils configurables, proactives)
4. Rapports automatiques (IA, planifiés, PDF)
5. P&ID interactif (schémas process liés aux données live)
6. Multi-sites (une seule interface)

### Intégrations
Arcos se connecte via MQTT — tout équipement publiant en MQTT est compatible.
- Ewon Flexy (Talk2M / MQTT / HTTP)
- MQTT générique (broker standard)
- Modbus TCP/RTU (via gateway MQTT)
- OPC-UA
- Siemens S7/LOGO!
- API REST custom
- Schneider, Wago, Phoenix Contact

### Cibles
- PME industrielles avec automates/capteurs/PLCs
- Bureaux techniques et équipes maintenance
- Industrie de l'eau, énergie, agroalimentaire, process

### Pricing
- Structure par site supervisé + nombre de devices
- Setup one-shot + abonnement mensuel
- Pas de licence par utilisateur
- 3 plans : Starter, Pro (recommandé), Enterprise

### Crédibilité
- FAWD SRL, Charleroi, Belgique
- Testé sur équipements réels
- Stack cloud ou on-premise

### Contact (formulaire vitrine)
- Champs : nom (requis), e-mail professionnel (requis), entreprise (optionnel), message (requis).
- Côté serveur : longueurs bornées, e-mail validé, anti-spam champ honeypot `website` (réponse neutre si rempli).
- Limite de fréquence par adresse IP pour limiter l’abus.
- Chaque envoi déclenche deux e-mails : notification à l’équipe (`CONTACT_TEAM_TO`, `Reply-To` = demandeur) et accusé de réception au demandeur (HTML + texte brut).
