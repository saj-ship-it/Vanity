// All copy for authenticintel.com, one entry per language.
// French follows the terminology of the French AUi Terminal deck (Oct 2026).
// French typography: a non-breaking space ( ) precedes : ; ? !

// Sector icons (24px line icons)
const icons = {
  wildfire: 'M12 2c1 3 4 5 4 9a4 4 0 01-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-8z M5 14a7 7 0 0014 0',
  energy: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  transport: 'M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z M18.5 18.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
  telecoms: 'M12 12v10 M8 22h8 M12 12a1 1 0 100-.01 M8.5 8.5a5 5 0 017 0 M5.5 5.5a9 9 0 0113 0',
  health: 'M3 12h4l2-5 4 10 2-5h6',
  media: 'M2 4h20v14H2z M10 8l5 3-5 3z M8 21h8',
  finance: 'M3 3v18h18 M7 14l4-4 3 3 6-7 M16 6h4v4',
  marketing: 'M3 10v4h3l6 4V6L6 10z M15 9a3 3 0 010 6 M18 6a7 7 0 010 12'
};

// Process icons, same 24px line style as the sector icons
export const processIcons = {
  fuse: 'M12 2l10 5-10 5L2 7l10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  verify: 'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z M9 12l2 2 4-4',
  predict: 'M22 7l-8.5 8.5-5-5L2 17 M16 7h6v6',
  decide: 'M9 2h6v4H9z M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M9 14l2 2 4-4'
};

export const content = {
  en: {
    meta: {
      title: 'Authentic Intelligence | AUi Terminal',
      description: 'AUi Terminal is the AI-powered fusion and command layer for enterprise, government and critical national infrastructure. One view. Every source. Every decision on record.',
      ogImage: '/og-image.png',
      ogImageAlt: 'One view. Every source. Every decision on record. AUi Terminal by Authentic Intelligence.',
      ogLocale: 'en_GB'
    },
    languageLabel: 'Language',
    navLabel: 'Sections',
    headerCta: 'Request a briefing',
    nav: [
      { href: '#objective', label: 'Mission' },
      { href: '#process', label: 'Process' },
      { href: '#control', label: 'Trust' },
      { href: '#sectors', label: 'Who we serve' },
      { href: '#pilot', label: 'Pilot' }
    ],
    hero: {
      lines: ['ONE VIEW.', 'EVERY SOURCE.'],
      accent: 'EVERY DECISION ON RECORD.',
      sub: 'Predictive intelligence, applied. AUi Terminal is the AI-powered fusion and command layer for enterprise, government and critical national infrastructure.',
      primary: 'Request a briefing',
      primarySubject: 'AUi Terminal briefing',
      secondary: 'See the platform'
    },
    mission: {
      label: 'Core mission objective',
      before: 'AUi turns fragmented data into ',
      accent: 'decision advantage',
      after: '.',
      // Starts on its own line after the first sentence
      rest: 'It fuses every source you own or license into one live operating picture, uses AI to detect the weak signals and pattern breaks that precede disruption, and puts a ranked, explained recommendation in front of decision-makers while there is still time to act.',
      problemsLabel: 'The signal is already in your data. No one sees it in time.',
      problems: [
        { title: 'Scattered', desc: 'Critical signals sit in disconnected systems (operational platforms, sensors, satellite, weather, field and commercial feeds) that were never built to work together.' },
        { title: 'Fragmented', desc: 'Every team, site and level of command assembles its own picture by hand, under pressure, and rarely the same one.' },
        { title: 'Too late', desc: 'Early warnings are lost in the noise and surface only after the impact. By the time the picture is assembled, the window to act has closed.' }
      ]
    },
    platform: {
      label: 'In practice · Wildfire command',
      before: 'One screen for ',
      accent: 'the people in command',
      after: '.',
      body: 'From AUi’s wildfire command module: the incident, the sources that confirm it, the people and sites exposed, and the aircraft and water points available, fused on one operational map.',
      image: '/product-wildfire-en.webp',
      imageMobile: '/product-wildfire-en-mobile.webp',
      open: 'Open full size',
      alt: 'AUi Terminal wildfire dashboard: an active incident at La Teste-de-Buch with three of seven sources confirming, weather at the point of origin, about 1,200 people exposed, available aircraft and the operational map.',
      caption: 'Demonstration scenario: La Teste-de-Buch, Gironde. Every source is labelled live, simulated or not yet connected.',
      // Pilot outcomes, as framed in the AUi Terminal deck
      callouts: [
        { eyebrow: '01 · Time', title: 'Confirmed sooner', text: 'Cross-checked sources let command act on the first credible signal. Measured in pilot: time from first signal to confirmed alert.' },
        { eyebrow: '02 · Air assets', title: 'Flight time back on the fire', text: 'When a water point drops below scooping level, AUi shows it at once, with the cost of the alternative. A 16-minute detour is more than a quarter of an hour of flight lost on every rotation.' },
        { eyebrow: '03 · Accountability', title: 'Defensible choices', text: 'Every request is logged with who made it, on what basis and who validated it.' }
      ]
    },
    process: {
      label: 'From signal to decision',
      steps: [
        { icon: 'fuse', title: 'Fuse', desc: 'Adapters bring every feed you own or license into one picture: operational systems, sensors, satellite, weather and field reports.' },
        { icon: 'verify', title: 'Verify', desc: 'Source health is monitored continuously, broken feeds are flagged and live data is cross-checked.' },
        { icon: 'predict', title: 'Predict', desc: 'Machine learning spots anomalies and trend breaks as they form and ranks emerging risks by urgency, reasoning shown.' },
        { icon: 'decide', title: 'Decide & act', desc: 'AI recommends, your people decide, and every approval is logged.' }
      ]
    },
    trust: {
      label: 'AI you can trust',
      before: 'Powerful AI, ',
      accent: 'with your people firmly in command',
      after: '.',
      rest: 'Every prediction is explained, every data gap is disclosed and every decision is on record, so speed never comes at the cost of control.',
      cards: [
        { title: 'Human authority, always', desc: 'AUi recommends; it never acts. Decisions rest with the accountable owner, and separation of duties is enforced: whoever proposes an action cannot validate it.' },
        { title: 'Explainable by design', desc: 'No black boxes. Every priority traces back to its source data and the reasoning behind it, presented alongside the recommendation.' },
        { title: 'Gaps disclosed, never hidden', desc: 'Every source carries a status: live, simulated or not connected. Missing telemetry is flagged explicitly, so silence is never mistaken for safety.' },
        { title: 'Defensible audit trail', desc: 'A time-stamped, tamper-evident record of what was known, who decided and when. Any decision can be reconstructed for post-incident review, audit or legal scrutiny.' },
        { title: 'Regulatory alignment', desc: 'Architected for the human-oversight, transparency and record-keeping obligations placed on high-risk AI systems, from the EU AI Act to emerging national and sector frameworks.' },
        { title: 'Data sovereignty', desc: 'Each client’s data stays isolated and is never pooled. Models can run locally with no data leaving the deployment, deployable on a certified sovereign cloud or on your own infrastructure.' }
      ]
    },
    serve: {
      label: 'Who we serve',
      before: 'Engineered for ',
      accent: 'your mission',
      after: '.',
      rest: 'Every deployment is shaped around your operating environment, risk profile, data estate and the way your organisation actually makes decisions. It sits above the systems you already run and makes every one of them more valuable.',
      audiences: [
        { title: 'Enterprise', lead: 'See disruption before it hits the P&L.', desc: 'Anticipate operational, supply-chain and site risk across every region, move ahead of competitors, and back every material decision with evidence boards, insurers and regulators trust.' },
        { title: 'Government & public sector', lead: 'Decision advantage at every level.', desc: 'Give agencies and every level of command one predictive picture, from day-to-day operations to national emergencies, and act on emerging threats before they escalate.' },
        { title: 'Critical national infrastructure', lead: 'Get ahead of the next outage.', desc: 'Detect faults, threats and cascading failures across interdependent energy, water, transport and telecoms networks early enough to intervene, and keep essential services running.' }
      ],
      sectorsLabel: 'Sectors',
      sectors: [
        { name: 'Civil Protection & Wildfire', desc: 'Fuse satellite hotspots, weather and field reports to confirm fires sooner and prioritise air and ground resources.', path: icons.wildfire },
        { name: 'Energy & Utilities', desc: 'Anticipate grid stress, asset failure and supply disruption before they reach customers.', path: icons.energy },
        { name: 'Transport & Logistics', desc: 'See disruption forming across routes, ports and suppliers, and reroute before delays cascade.', path: icons.transport },
        { name: 'Telecommunications', desc: 'Detect network degradation, cable faults and interference early, and prioritise restoration.', path: icons.telecoms },
        { name: 'Healthcare', desc: 'Forecast demand surges and supply shortages across facilities, and align capacity ahead of the peak.', path: icons.health },
        { name: 'Media & Entertainment', desc: 'Track narratives and audience sentiment as they form, and flag reputational risk before it spreads.', path: icons.media },
        { name: 'Financial Markets', desc: 'Detect the real-world events and regime shifts that move markets, and see the risk to positions before prices reflect it.', path: icons.finance },
        { name: 'Marketing', desc: 'Spot shifts in demand, sentiment and competitor activity early, and move budget ahead of the market.', path: icons.marketing }
      ],
      swipeHint: 'Swipe for more sectors',
      cta: { title: 'Your sector', desc: 'Not listed? Every deployment is engineered for your mission.', link: 'Discuss your use case', subject: 'AUi Terminal for my sector' }
    },
    pilot: {
      label: 'Pilot',
      before: 'Prove the advantage on ',
      accent: 'your own data',
      after: '. A four-month, fixed-price pilot.',
      rows: [
        { label: 'Duration', value: 'Four months' },
        { label: 'Scope', value: 'One region, site or operational service' },
        { label: 'Sources', value: 'A focused selection of your existing data sources' },
        { label: 'Outcome', value: 'An evaluation built on your own data' },
        { label: 'Terms', value: 'Fixed price' }
      ],
      button: 'Request a pilot',
      subject: 'AUi Terminal pilot'
    },
    form: {
      title: 'Request a briefing or pilot',
      intro: 'Tell us what you need to decide. We reply within two working days.',
      name: 'Name',
      email: 'Work email',
      org: 'Organisation',
      interest: 'I’m interested in',
      interests: ['A briefing', 'A pilot', 'Something else'],
      sector: 'Sector',
      sectorPlaceholder: 'Select a sector',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'What would you like AUi to help you see or decide?',
      consent: 'We use these details only to reply to you. See our ',
      privacy: 'privacy policy',
      submit: 'Send request',
      sending: 'Sending…',
      successTitle: 'Thank you. Your request has been sent.',
      successBody: 'We’ll reply to you by email shortly.',
      error: 'Sorry, the form could not be sent. Please email us directly at ',
      subject: 'AUi Terminal enquiry'
    },
    footer: {
      tagline: 'AUi Terminal: the AI-powered fusion and command layer for enterprise, government and critical national infrastructure.',
      contactLabel: 'Contact',
      legalLabel: 'Legal',
      privacy: 'Privacy policy',
      legal: 'Legal notice',
      rights: '© 2026 Authentic Intelligence Inc. All rights reserved.'
    },
    back: 'Back to home',
    updated: 'Last updated: 13 November 2026',
    legalPages: {
      privacy: {
        title: 'Privacy policy',
        sections: [
          { h: 'Who we are', p: ['This website is operated by Authentic Intelligence Inc., which is responsible for the personal data described here. You can reach us at {email}.'] },
          { h: 'What this website collects', p: ['This website does not use cookies, analytics or advertising trackers. Fonts and images are served from our own domain, so visiting the site does not send your data to third parties such as font or analytics providers. The only exception is the contact form, described below, which you choose to send.'] },
          { h: 'Hosting', p: ['Our host, Vercel Inc., processes technical data such as your IP address, browser type and the pages requested, in order to deliver the website and protect it against abuse. Vercel’s own privacy policy applies to that processing.'] },
          { h: 'When you contact us', p: ['If you use the contact form or email us, we use your name, organisation, contact details and message only to reply to you and to manage our relationship with you. We do not sell your data or share it for marketing. We keep it only for as long as that purpose requires.', 'Contact form submissions are delivered to our inbox by FormSubmit (formsubmit.co), which processes them on our behalf for that purpose only.'] },
          { h: 'Your rights', p: ['Under the EU General Data Protection Regulation (GDPR) and similar laws, you can ask to access, correct or delete your personal data, and object to or restrict its processing. Write to {email} and we will respond within one month.', 'You can also lodge a complaint with your data protection authority. In France, this is the CNIL (cnil.fr).'] }
        ]
      },
      legal: {
        title: 'Legal notice',
        sections: [
          { h: 'Publisher', p: ['This website is published by Authentic Intelligence Inc. Contact: {email}.'] },
          { h: 'Hosting', p: ['This website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States (vercel.com).'] },
          { h: 'Intellectual property', p: ['All content on this website, including text, graphics, the AUi Terminal name and interface images, belongs to Authentic Intelligence Inc. unless stated otherwise, and may not be reproduced without permission.', 'Map data shown in product images: © IGN – Géoplateforme.'] },
          { h: 'Product images', p: ['Product images show a demonstration scenario. Values from sources marked as simulated in those images do not reflect live data.'] }
        ]
      }
    }
  },

  fr: {
    meta: {
      title: 'Authentic Intelligence | AUi Terminal',
      description: 'AUi Terminal est la couche de fusion de données et de commandement, propulsée par l’IA, pour les entreprises, l’État et les infrastructures critiques. Une vue unique. Toutes les sources. Chaque décision tracée.',
      ogImage: '/og-image-fr.png',
      ogImageAlt: 'Une vue unique. Toutes les sources. Chaque décision tracée. AUi Terminal par Authentic Intelligence.',
      ogLocale: 'fr_FR'
    },
    languageLabel: 'Langue',
    navLabel: 'Sections',
    headerCta: 'Demander une présentation',
    nav: [
      { href: '#objective', label: 'Mission' },
      { href: '#process', label: 'Processus' },
      { href: '#control', label: 'Confiance' },
      { href: '#sectors', label: 'Pour qui' },
      { href: '#pilot', label: 'Pilote' }
    ],
    hero: {
      lines: ['UNE VUE UNIQUE.', 'TOUTES LES SOURCES.'],
      accent: 'CHAQUE DÉCISION TRACÉE.',
      // Longer phrases than English: a slightly smaller size keeps the four-line rhythm
      size: 'clamp(34px, 4.9vw, 56px)',
      maxWidth: '680px',
      sub: 'L’intelligence prédictive, appliquée. AUi Terminal est la couche de fusion et de commandement, propulsée par l’IA, des entreprises, de l’État et des infrastructures critiques.',
      primary: 'Demander une présentation',
      primarySubject: 'Présentation AUi Terminal',
      secondary: 'Voir la plateforme'
    },
    mission: {
      label: 'Objectif de la mission',
      before: 'AUi transforme des données fragmentées en ',
      accent: 'avantage décisionnel',
      after: '.',
      rest: 'Il fusionne toutes les sources dont vous disposez, ou que vous exploitez sous licence, en une vue opérationnelle unique et en temps réel, détecte grâce à l’IA les signaux faibles et les ruptures qui annoncent une crise, et présente aux décideurs une recommandation hiérarchisée et expliquée tant qu’il est encore temps d’agir.',
      problemsLabel: 'Le signal est déjà dans vos données. Personne ne le voit à temps.',
      problems: [
        { title: 'Dispersion', desc: 'Les signaux critiques sont répartis dans des systèmes cloisonnés (plateformes opérationnelles, capteurs, satellites, météo, terrain et flux commerciaux) qui n’ont jamais été conçus pour fonctionner ensemble.' },
        { title: 'Fragmentation', desc: 'Chaque équipe, chaque site et chaque niveau de commandement reconstitue sa propre vue à la main, sous pression, et rarement la même.' },
        { title: 'Trop tard', desc: 'Les alertes précoces se perdent dans le bruit et n’apparaissent qu’après l’impact. Le temps de reconstituer la situation, la fenêtre d’action s’est refermée.' }
      ]
    },
    platform: {
      label: 'En pratique · Commandement feux de forêt',
      before: 'Un seul écran pour ',
      accent: 'ceux qui commandent',
      after: '.',
      body: 'Le module feux de forêt d’AUi : l’incident, les sources qui le confirment, les personnes et les sites exposés, les moyens aériens et les points d’eau disponibles, fusionnés sur une seule carte opérationnelle.',
      image: '/product-wildfire-fr.webp',
      imageMobile: '/product-wildfire-fr-mobile.webp',
      open: 'Ouvrir en taille réelle',
      alt: 'Tableau de bord AUi Terminal feux de forêt : un incident en cours à La Teste-de-Buch confirmé par trois sources sur sept, la météo au point d’éclosion, environ 1 200 personnes exposées, les moyens aériens disponibles et la carte opérationnelle.',
      caption: 'Scénario de démonstration : La Teste-de-Buch, Gironde. Chaque source est signalée en direct, simulée ou non raccordée.',
      callouts: [
        { eyebrow: '01 · Temps', title: 'Confirmation plus tôt', text: 'Des sources croisées permettent d’agir sur le premier signal crédible. Mesuré pendant le pilote : délai entre premier signal et alerte confirmée.' },
        { eyebrow: '02 · Moyens aériens', title: 'Du temps de vol rendu au feu', text: 'Quand un plan d’eau passe sous le seuil d’écopage, AUi le montre aussitôt, avec le coût de l’alternative. Un détour de 16 minutes, c’est plus d’un quart d’heure de vol perdu à chaque rotation.' },
        { eyebrow: '03 · Traçabilité', title: 'Des choix défendables', text: 'Chaque demande est inscrite avec son auteur, sa justification et son valideur.' }
      ]
    },
    process: {
      label: 'Du signal à la décision',
      steps: [
        { icon: 'fuse', title: 'Fusionner', desc: 'Des connecteurs réunissent en une vue unique tous les flux dont vous disposez : systèmes opérationnels, capteurs, satellites, météo et terrain.' },
        { icon: 'verify', title: 'Vérifier', desc: 'L’état des sources est surveillé en continu, les flux interrompus sont signalés et les données sont recoupées.' },
        { icon: 'predict', title: 'Prédire', desc: 'L’apprentissage automatique repère les anomalies et les ruptures de tendance dès qu’elles se forment et classe les risques par urgence, raisonnement à l’appui.' },
        { icon: 'decide', title: 'Décider et agir', desc: 'L’IA recommande, vos équipes décident, et chaque validation est tracée.' }
      ]
    },
    trust: {
      label: 'Une IA de confiance',
      before: 'Une IA puissante, ',
      accent: 'avec vos équipes fermement aux commandes',
      after: '.',
      rest: 'Chaque prédiction est expliquée, chaque lacune de données est signalée et chaque décision est tracée : la vitesse ne se paie jamais d’une perte de contrôle.',
      cards: [
        { title: 'L’humain décide, toujours', desc: 'AUi recommande, il n’agit jamais. Les décisions reviennent au responsable désigné, et le principe des quatre yeux s’applique : celui qui propose ne valide pas.' },
        { title: 'Explicable par conception', desc: 'Aucune boîte noire. Chaque priorité renvoie à ses données sources et au raisonnement qui la fonde, présentés à côté de la recommandation.' },
        { title: 'Lacunes signalées, jamais masquées', desc: 'Chaque source affiche son statut : en direct, simulée ou non raccordée. La télémétrie manquante est signalée explicitement : le silence n’est jamais pris pour un signe de sécurité.' },
        { title: 'Piste d’audit défendable', desc: 'Une main courante horodatée et infalsifiable de ce qui était connu, de qui a décidé et quand. Toute décision peut être reconstituée pour un retour d’expérience, un audit ou un examen juridique.' },
        { title: 'Conformité réglementaire', desc: 'Conçu pour les obligations de supervision humaine, de transparence et de traçabilité imposées aux systèmes d’IA à haut risque, du règlement européen sur l’IA (AI Act) aux cadres nationaux et sectoriels émergents.' },
        { title: 'Souveraineté des données', desc: 'Les données de chaque client restent isolées et ne sont jamais mutualisées. Les modèles peuvent s’exécuter localement, sans flux sortant, sur un cloud souverain qualifié ou sur votre propre infrastructure.' }
      ]
    },
    serve: {
      label: 'Pour qui',
      before: 'Conçu pour ',
      accent: 'votre mission',
      after: '.',
      rest: 'Chaque déploiement est adapté à votre environnement opérationnel, à votre profil de risque, à votre patrimoine de données et à la manière dont votre organisation prend réellement ses décisions. Il se place au-dessus des systèmes que vous exploitez déjà et renforce la valeur de chacun.',
      audiences: [
        { title: 'Entreprises', lead: 'Voir la perturbation avant qu’elle ne touche vos résultats.', desc: 'Anticipez les risques opérationnels, logistiques et liés à vos sites dans toutes vos régions, prenez l’avantage sur vos concurrents et étayez chaque décision importante par des éléments reconnus par les conseils d’administration, les assureurs et les régulateurs.' },
        { title: 'État et secteur public', lead: 'L’avantage décisionnel à chaque niveau.', desc: 'Donnez aux services et à chaque niveau de commandement une même vue prédictive, des opérations courantes aux crises nationales, et agissez sur les menaces émergentes avant qu’elles ne s’aggravent.' },
        { title: 'Infrastructures critiques', lead: 'Anticiper la prochaine panne.', desc: 'Détectez les défaillances, menaces et effets en cascade sur les réseaux interdépendants d’énergie, d’eau, de transport et de télécommunications assez tôt pour intervenir, et assurez la continuité des services essentiels.' }
      ],
      sectorsLabel: 'Secteurs',
      sectors: [
        { name: 'Protection civile et feux de forêt', desc: 'Fusionnez les détections satellitaires de points chauds, la météo et les signalements de terrain pour confirmer les feux plus tôt et prioriser les moyens aériens et terrestres.', path: icons.wildfire },
        { name: 'Énergie et services publics', desc: 'Anticipez les tensions sur le réseau, les défaillances d’équipements et les ruptures d’approvisionnement avant qu’elles n’atteignent vos clients.', path: icons.energy },
        { name: 'Transport et logistique', desc: 'Repérez les perturbations qui se forment sur les itinéraires, dans les ports et chez les fournisseurs, et réorientez les flux avant que les retards ne s’enchaînent.', path: icons.transport },
        { name: 'Télécommunications', desc: 'Détectez tôt la dégradation des réseaux, les coupures de câbles et les interférences, et priorisez le rétablissement.', path: icons.telecoms },
        { name: 'Santé', desc: 'Anticipez les pics de demande et les pénuries dans vos établissements, et ajustez les capacités avant qu’ils ne surviennent.', path: icons.health },
        { name: 'Médias et divertissement', desc: 'Suivez les récits et le sentiment du public dès qu’ils émergent, et signalez les risques de réputation avant qu’ils ne se propagent.', path: icons.media },
        { name: 'Marchés financiers', desc: 'Détectez les événements réels et les changements de régime qui font bouger les marchés, et mesurez le risque sur vos positions avant que les prix ne le reflètent.', path: icons.finance },
        { name: 'Marketing', desc: 'Repérez tôt l’évolution de la demande, du sentiment et de l’activité concurrente, et réallouez vos budgets avant que le marché ne réagisse.', path: icons.marketing }
      ],
      swipeHint: 'Faites défiler pour voir les autres secteurs',
      cta: { title: 'Votre secteur', desc: 'Il n’est pas listé ? Chaque déploiement est conçu pour votre mission.', link: 'Parlons de votre cas d’usage', subject: 'AUi Terminal pour mon secteur' }
    },
    pilot: {
      label: 'Pilote',
      before: 'Démontrez l’avantage sur ',
      accent: 'vos propres données',
      after: '. Un pilote de quatre mois, à prix forfaitaire.',
      rows: [
        { label: 'Durée', value: 'Quatre mois' },
        { label: 'Périmètre', value: 'Une région, un site ou un service opérationnel' },
        { label: 'Sources', value: 'Une sélection ciblée de vos sources de données existantes' },
        { label: 'Résultat', value: 'Une évaluation fondée sur vos propres données' },
        { label: 'Conditions', value: 'Prix forfaitaire' }
      ],
      button: 'Demander un pilote',
      subject: 'Pilote AUi Terminal'
    },
    form: {
      title: 'Demander une présentation ou un pilote',
      intro: 'Dites-nous ce que vous devez décider. Nous répondons sous deux jours ouvrés.',
      name: 'Nom',
      email: 'Adresse e-mail professionnelle',
      org: 'Organisation',
      interest: 'Je souhaite',
      interests: ['Une présentation', 'Un pilote', 'Autre chose'],
      sector: 'Secteur',
      sectorPlaceholder: 'Choisir un secteur',
      other: 'Autre',
      message: 'Message',
      messagePlaceholder: 'Que souhaitez-vous qu’AUi vous aide à voir ou à décider ?',
      consent: 'Nous utilisons ces informations uniquement pour vous répondre. Voir notre ',
      privacy: 'politique de confidentialité',
      submit: 'Envoyer la demande',
      sending: 'Envoi…',
      successTitle: 'Merci. Votre demande a bien été envoyée.',
      successBody: 'Nous vous répondrons très vite par e-mail.',
      error: 'Désolé, le formulaire n’a pas pu être envoyé. Écrivez-nous directement à ',
      subject: 'Demande AUi Terminal'
    },
    footer: {
      tagline: 'AUi Terminal : la couche de fusion et de commandement, propulsée par l’IA, des entreprises, de l’État et des infrastructures critiques.',
      contactLabel: 'Contact',
      legalLabel: 'Informations légales',
      privacy: 'Politique de confidentialité',
      legal: 'Mentions légales',
      rights: '© 2026 Authentic Intelligence Inc. Tous droits réservés.'
    },
    back: 'Retour à l’accueil',
    updated: 'Dernière mise à jour : 13 novembre 2026',
    legalPages: {
      privacy: {
        title: 'Politique de confidentialité',
        sections: [
          { h: 'Qui sommes-nous', p: ['Ce site est exploité par Authentic Intelligence Inc., responsable du traitement des données personnelles décrites ici. Vous pouvez nous écrire à {email}.'] },
          { h: 'Ce que ce site collecte', p: ['Ce site n’utilise ni cookies, ni outils d’analyse d’audience, ni traceurs publicitaires. Les polices et les images sont servies depuis notre propre domaine : consulter le site n’envoie donc pas vos données à des tiers tels que des fournisseurs de polices ou de statistiques. Seule exception : le formulaire de contact, décrit ci-dessous, que vous choisissez d’envoyer.'] },
          { h: 'Hébergement', p: ['Notre hébergeur, Vercel Inc., traite des données techniques telles que votre adresse IP, le type de navigateur et les pages demandées, afin de fournir le site et de le protéger contre les abus. Ce traitement relève de la politique de confidentialité de Vercel.'] },
          { h: 'Lorsque vous nous contactez', p: ['Si vous utilisez le formulaire de contact ou nous écrivez, nous utilisons votre nom, votre organisation, vos coordonnées et votre message uniquement pour vous répondre et gérer notre relation. Nous ne vendons pas vos données et ne les partageons pas à des fins de prospection. Nous ne les conservons que le temps nécessaire à cette finalité.', 'Les messages du formulaire de contact sont acheminés vers notre messagerie par FormSubmit (formsubmit.co), qui les traite pour notre compte et à cette seule fin.'] },
          { h: 'Vos droits', p: ['Conformément au Règlement général sur la protection des données (RGPD) et aux lois applicables, vous pouvez demander l’accès à vos données personnelles, leur rectification ou leur effacement, et vous opposer à leur traitement ou en demander la limitation. Écrivez à {email} ; nous vous répondrons sous un mois.', 'Vous pouvez également introduire une réclamation auprès de votre autorité de protection des données. En France, il s’agit de la CNIL (cnil.fr).'] }
        ]
      },
      legal: {
        title: 'Mentions légales',
        sections: [
          { h: 'Éditeur', p: ['Ce site est édité par Authentic Intelligence Inc. Contact : {email}.'] },
          { h: 'Hébergement', p: ['Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (vercel.com).'] },
          { h: 'Propriété intellectuelle', p: ['L’ensemble des contenus de ce site, notamment les textes, les éléments graphiques, le nom AUi Terminal et les images d’interface, appartient à Authentic Intelligence Inc., sauf mention contraire, et ne peut être reproduit sans autorisation.', 'Données cartographiques figurant dans les images produit : © IGN – Géoplateforme.'] },
          { h: 'Images produit', p: ['Les images produit présentent un scénario de démonstration. Les valeurs issues de sources signalées comme simulées dans ces images ne reflètent pas des données réelles.'] }
        ]
      }
    }
  }
};
