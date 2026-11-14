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
          { h: 'Hosting', p: ['Our hosting provider processes technical data such as your IP address, browser type and the pages requested, in order to deliver the website and protect it against abuse. The provider is identified in our legal notice, and its own privacy policy applies to that processing.'] },
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
      description: 'AUi Terminal, la plateforme d’aide à la décision fondée sur l’IA : toutes vos sources réunies, les crises anticipées, chaque décision tracée. Pour les entreprises, les administrations et les infrastructures critiques.',
      ogImage: '/og-image-fr.png',
      ogImageAlt: 'Une vue unique. Toutes les sources. Chaque décision tracée. AUi Terminal, par Authentic Intelligence.',
      ogLocale: 'fr_FR'
    },
    languageLabel: 'Langue',
    navLabel: 'Sections',
    headerCta: 'Demander une présentation',
    nav: [
      { href: '#objective', label: 'Mission' },
      { href: '#process', label: 'Méthode' },
      { href: '#control', label: 'Confiance' },
      { href: '#sectors', label: 'Clients' },
      { href: '#pilot', label: 'Pilote' }
    ],
    hero: {
      lines: ['UNE VUE UNIQUE.', 'TOUTES LES SOURCES.'],
      accent: 'CHAQUE DÉCISION TRACÉE.',
      // Longer phrases than English: a slightly smaller size keeps the four-line rhythm
      size: 'clamp(34px, 4.9vw, 56px)',
      maxWidth: '680px',
      sub: 'L’intelligence prédictive au service de la décision. AUi Terminal est la plateforme de fusion de données et d’aide au commandement, fondée sur l’IA, des entreprises, des administrations et des infrastructures critiques.',
      primary: 'Demander une présentation',
      primarySubject: 'Présentation AUi Terminal',
      secondary: 'Découvrir la plateforme'
    },
    mission: {
      label: 'Notre mission',
      before: 'AUi transforme des données éparses en ',
      accent: 'supériorité décisionnelle',
      after: '.',
      rest: 'La plateforme réunit en une seule vue opérationnelle, en temps réel, l’ensemble des sources dont vous disposez. Grâce à l’IA, elle repère les signaux faibles et les ruptures annonciatrices de crise, puis soumet aux décideurs une recommandation hiérarchisée et argumentée, tant qu’il est encore temps d’agir.',
      problemsLabel: 'Le signal est déjà dans vos données. Encore faut-il le voir à temps.',
      problems: [
        { title: 'Dispersion', desc: 'Plateformes opérationnelles, capteurs, satellites, météo, remontées du terrain, flux commerciaux : les signaux critiques sont éparpillés dans des systèmes qui n’ont jamais été conçus pour dialoguer.' },
        { title: 'Fragmentation', desc: 'Chaque équipe, chaque site, chaque échelon de commandement se construit sa propre vision de la situation, à la main et dans l’urgence. Rarement la même.' },
        { title: 'Trop tard', desc: 'Noyées dans le bruit, les alertes précoces n’émergent qu’une fois l’impact survenu. Le temps de consolider la situation, la fenêtre d’action s’est refermée.' }
      ]
    },
    platform: {
      label: 'En pratique · Lutte contre les feux de forêt',
      before: 'Un seul écran pour ',
      accent: 'ceux qui commandent',
      after: '.',
      body: 'Le module feux de forêt d’AUi réunit sur une même carte opérationnelle l’incident, les sources qui le confirment, les personnes et les enjeux exposés, ainsi que les moyens aériens et les points d’eau disponibles.',
      image: '/product-wildfire-fr.webp',
      imageMobile: '/product-wildfire-fr-mobile.webp',
      open: 'Agrandir l’image',
      alt: 'Tableau de bord AUi Terminal pour les feux de forêt : incident en cours à La Teste-de-Buch confirmé par trois sources sur sept, météo au point d’éclosion, environ 1 200 personnes exposées, moyens aériens disponibles et carte opérationnelle.',
      caption: 'Scénario de démonstration : La Teste-de-Buch (Gironde). Chaque source indique si elle est en direct, simulée ou non raccordée.',
      callouts: [
        { eyebrow: '01 · Temps', title: 'Une confirmation plus rapide', text: 'Le croisement des sources permet d’agir dès le premier signal crédible. Indicateur suivi pendant le pilote : le délai entre ce premier signal et l’alerte confirmée.' },
        { eyebrow: '02 · Moyens aériens', title: 'Du temps de vol rendu au feu', text: 'Dès qu’un plan d’eau passe sous le seuil d’écopage, AUi le signale et chiffre l’alternative. Un détour de 16 minutes, c’est plus d’un quart d’heure de vol perdu à chaque rotation.' },
        { eyebrow: '03 · Traçabilité', title: 'Des décisions défendables', text: 'Chaque demande est consignée : qui l’a formulée, sur quelle base, et qui l’a validée.' }
      ]
    },
    process: {
      label: 'Du signal à la décision',
      steps: [
        { icon: 'fuse', title: 'Fusionner', desc: 'Systèmes opérationnels, capteurs, satellites, météo, terrain : tous vos flux sont réunis dans une vue unique.' },
        { icon: 'verify', title: 'Vérifier', desc: 'La qualité de chaque source est contrôlée en continu : flux interrompus signalés, données recoupées.' },
        { icon: 'predict', title: 'Prédire', desc: 'L’apprentissage automatique détecte anomalies et ruptures de tendance dès leur apparition, et hiérarchise les risques en justifiant chaque priorité.' },
        { icon: 'decide', title: 'Décider et agir', desc: 'L’IA propose, vos équipes décident. Chaque validation est tracée.' }
      ]
    },
    trust: {
      label: 'Une IA de confiance',
      before: 'Une IA performante, ',
      accent: 'sous le contrôle permanent de vos équipes',
      after: '.',
      rest: 'Chaque prédiction est expliquée, chaque lacune signalée, chaque décision tracée. La rapidité ne se fait jamais au détriment de la maîtrise.',
      cards: [
        { title: 'L’humain décide, toujours', desc: 'AUi recommande, il n’agit jamais. La décision revient à l’autorité compétente, selon le principe des quatre yeux : celui qui propose ne valide pas.' },
        { title: 'Transparent par construction', desc: 'Pas de boîte noire : chaque priorité renvoie aux données et au raisonnement qui la fondent, affichés à côté de la recommandation.' },
        { title: 'Aucune zone d’ombre', desc: 'Chaque source affiche son statut : en direct, simulée ou non raccordée. Les données manquantes sont signalées comme telles : l’absence d’alerte n’est jamais prise pour une absence de risque.' },
        { title: 'Une traçabilité opposable', desc: 'Une main courante horodatée et infalsifiable : ce que l’on savait, qui a décidé, et quand. Chaque décision peut être reconstituée lors d’un retour d’expérience, d’un audit ou d’une procédure.' },
        { title: 'Conformité réglementaire', desc: 'Conçu pour répondre aux exigences de supervision humaine, de transparence et de traçabilité applicables aux systèmes d’IA à haut risque, du règlement européen sur l’IA (AI Act) aux cadres nationaux et sectoriels.' },
        { title: 'Souveraineté des données', desc: 'Les données de chaque client sont strictement cloisonnées et jamais mutualisées. Les modèles peuvent fonctionner en local, sans flux sortant, sur un cloud souverain qualifié ou sur votre propre infrastructure.' }
      ]
    },
    serve: {
      label: 'À qui s’adresse AUi',
      before: 'Conçu pour ',
      accent: 'votre mission',
      after: '.',
      rest: 'Chaque déploiement s’adapte à votre environnement opérationnel, à votre exposition aux risques, à vos données et à vos circuits de décision réels. AUi s’appuie sur les systèmes que vous exploitez déjà et en démultiplie la valeur.',
      audiences: [
        { title: 'Entreprises', lead: 'Anticiper les ruptures avant qu’elles ne pèsent sur vos résultats.', desc: 'Anticipez les risques opérationnels, logistiques et industriels sur l’ensemble de vos sites, gardez une longueur d’avance sur la concurrence et justifiez chaque décision importante auprès de votre conseil d’administration, de vos assureurs et des autorités de contrôle.' },
        { title: 'Administrations et secteur public', lead: 'Un temps d’avance à chaque échelon.', desc: 'Donnez aux services et à chaque échelon de commandement une même lecture prédictive de la situation, de la gestion courante aux crises majeures, pour traiter les menaces avant qu’elles ne s’aggravent.' },
        { title: 'Infrastructures critiques', lead: 'Prévenir la prochaine panne.', desc: 'Détectez à temps les défaillances, les menaces et les effets en cascade sur des réseaux interdépendants (énergie, eau, transports, télécommunications) et garantissez la continuité des services essentiels.' }
      ],
      sectorsLabel: 'Secteurs',
      sectors: [
        { name: 'Protection civile et feux de forêt', desc: 'Croisez détections satellitaires, météo et signalements de terrain pour confirmer plus tôt les départs de feu et engager au mieux les moyens aériens et terrestres.', path: icons.wildfire },
        { name: 'Énergie et réseaux', desc: 'Anticipez tensions sur le réseau, défaillances d’équipements et ruptures d’approvisionnement avant qu’elles n’affectent vos clients.', path: icons.energy },
        { name: 'Transports et logistique', desc: 'Repérez les perturbations naissantes sur les axes, dans les ports et chez les fournisseurs, et réorganisez les flux avant l’effet domino.', path: icons.transport },
        { name: 'Télécommunications', desc: 'Détectez au plus tôt dégradations de service, coupures de câbles et brouillages, et priorisez les rétablissements.', path: icons.telecoms },
        { name: 'Santé', desc: 'Anticipez afflux de patients et tensions d’approvisionnement dans vos établissements, et adaptez les capacités en amont.', path: icons.health },
        { name: 'Médias et divertissement', desc: 'Suivez l’émergence des récits et l’évolution de l’opinion, et détectez les risques d’image avant qu’ils ne se propagent.', path: icons.media },
        { name: 'Marchés financiers', desc: 'Détectez les événements et les changements de régime qui font bouger les marchés, et mesurez l’exposition de vos positions avant que les prix ne l’intègrent.', path: icons.finance },
        { name: 'Marketing', desc: 'Captez au plus tôt les évolutions de la demande, de l’opinion et de la concurrence, et réallouez vos budgets avant que le marché ne réagisse.', path: icons.marketing }
      ],
      swipeHint: 'Faites glisser pour voir les autres secteurs',
      cta: { title: 'Votre secteur', desc: 'Votre secteur n’y figure pas ? Chaque déploiement est conçu sur mesure.', link: 'Parlons de votre besoin', subject: 'AUi Terminal pour mon secteur' }
    },
    pilot: {
      label: 'Pilote',
      before: 'Faites la preuve sur ',
      accent: 'vos propres données',
      after: '. Un pilote de quatre mois, au forfait.',
      rows: [
        { label: 'Durée', value: 'Quatre mois' },
        { label: 'Périmètre', value: 'Une région, un site ou un service' },
        { label: 'Sources', value: 'Une sélection ciblée de vos sources existantes' },
        { label: 'Livrable', value: 'Un rapport d’évaluation établi sur vos données' },
        { label: 'Conditions', value: 'Prix forfaitaire' }
      ],
      button: 'Demander un pilote',
      subject: 'Pilote AUi Terminal'
    },
    form: {
      title: 'Demander une présentation ou un pilote',
      intro: 'Présentez-nous votre besoin : nous vous répondons sous deux jours ouvrés.',
      name: 'Nom et prénom',
      email: 'E-mail professionnel',
      org: 'Organisme',
      interest: 'Votre demande',
      interests: ['Une présentation', 'Un pilote', 'Autre demande'],
      sector: 'Secteur',
      sectorPlaceholder: 'Sélectionnez un secteur',
      other: 'Autre',
      message: 'Message',
      messagePlaceholder: 'Quelles décisions AUi pourrait-il vous aider à éclairer ?',
      consent: 'Ces informations servent uniquement à vous répondre. Consultez notre ',
      privacy: 'politique de confidentialité',
      submit: 'Envoyer',
      sending: 'Envoi en cours…',
      successTitle: 'Merci, votre demande a bien été envoyée.',
      successBody: 'Nous revenons vers vous rapidement par e-mail.',
      error: 'L’envoi a échoué. Vous pouvez nous écrire directement à ',
      subject: 'Demande AUi Terminal'
    },
    footer: {
      tagline: 'AUi Terminal, la plateforme de fusion de données et d’aide au commandement fondée sur l’IA, pour les entreprises, les administrations et les infrastructures critiques.',
      contactLabel: 'Contact',
      legalLabel: 'Informations légales',
      privacy: 'Politique de confidentialité',
      legal: 'Mentions légales',
      rights: '© 2026 Authentic Intelligence Inc. Tous droits réservés.'
    },
    back: 'Retour à l’accueil',
    updated: 'Dernière mise à jour : 14 novembre 2026',
    legalPages: {
      privacy: {
        title: 'Politique de confidentialité',
        sections: [
          { h: 'Responsable du traitement', p: ['Ce site est exploité par Authentic Intelligence Inc., responsable du traitement des données personnelles décrites ci-dessous. Pour toute question, écrivez-nous à {email}.'] },
          { h: 'Données collectées par ce site', p: ['Ce site n’utilise ni cookies, ni outil de mesure d’audience, ni traceur publicitaire. Les polices de caractères et les images sont hébergées sur notre propre domaine : la simple consultation du site ne transmet donc aucune donnée à des tiers, tels que des fournisseurs de polices ou de statistiques. Seule exception : le formulaire de contact, décrit ci-dessous, que vous choisissez d’envoyer.'] },
          { h: 'Hébergement', p: ['Notre hébergeur traite des données techniques, telles que votre adresse IP, votre type de navigateur et les pages consultées, afin d’assurer le fonctionnement du site et de le protéger contre les abus. Il est identifié dans nos mentions légales ; ce traitement relève de sa propre politique de confidentialité.'] },
          { h: 'Demandes de contact', p: ['Lorsque vous utilisez le formulaire de contact ou nous écrivez, vos nom, organisme, coordonnées et message sont utilisés uniquement pour vous répondre et assurer le suivi de notre relation. Nous ne vendons pas vos données et ne les utilisons pas à des fins de prospection. Elles ne sont conservées que le temps nécessaire à cette finalité.', 'Les messages envoyés via le formulaire sont acheminés vers notre messagerie par FormSubmit (formsubmit.co), qui les traite pour notre compte et à cette seule fin.'] },
          { h: 'Vos droits', p: ['Conformément au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification et d’effacement de vos données, ainsi que d’un droit d’opposition et de limitation de leur traitement. Pour l’exercer, écrivez-nous à {email} ; nous vous répondrons dans un délai d’un mois.', 'Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr) ou de l’autorité de protection des données de votre pays.'] }
        ]
      },
      legal: {
        title: 'Mentions légales',
        sections: [
          { h: 'Éditeur', p: ['Ce site est édité par Authentic Intelligence Inc. Contact : {email}.'] },
          { h: 'Hébergement', p: ['Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (vercel.com).'] },
          { h: 'Propriété intellectuelle', p: ['Sauf mention contraire, l’ensemble des contenus de ce site (textes, éléments graphiques, nom AUi Terminal, captures d’interface) est la propriété d’Authentic Intelligence Inc. Toute reproduction sans autorisation préalable est interdite.', 'Données cartographiques figurant dans les captures du produit : © IGN – Géoplateforme.'] },
          { h: 'Captures du produit', p: ['Les captures du produit présentent un scénario de démonstration. Les valeurs issues de sources signalées comme simulées ne correspondent pas à des données réelles.'] }
        ]
      }
    }
  }
};
