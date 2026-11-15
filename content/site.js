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
      description: 'AUi Terminal fuses every data source into one live common operating picture, with decision support and a full decision record, for enterprise, government and critical national infrastructure.',
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
    ticker: {
      label: 'Demo scenario',
      items: ['Satellite hotspot detected · northern sector', 'Weather update · wind 38 km/h NW', '3 of 7 sources confirm', 'Fire confirmed · priority 1', 'Water point below scooping level', 'Recommendation logged · awaiting validation']
    },
    mission: {
      label: 'Our mission',
      before: 'AUi turns fragmented data into ',
      accent: 'decision advantage',
      after: '.',
      // Starts on its own line after the first sentence
      rest: 'It fuses every source you own or license into one live operating picture. AI then detects the weak signals and pattern breaks that come before disruption, and puts a ranked, explained recommendation in front of decision-makers while there is still time to act.',
      problemsLabel: 'The signal is already in your data. No one sees it in time.',
      diagram: { from: 'Scattered sources', to: 'One qualified picture' },
      timeline: { signal: 'First signal', impact: 'Impact', picture: 'Picture ready', window: 'Window to act' },
      problems: [
        { title: 'Scattered', desc: 'Critical signals sit in disconnected systems (operational platforms, sensors, satellite, weather, field and commercial feeds) that were never built to work together.' },
        { title: 'Out of sync', desc: 'Every team, site and level of command assembles its own picture by hand, under pressure, and rarely the same one.' },
        { title: 'Too late', desc: 'Early warnings are lost in the noise and surface only after the impact. By the time the picture is assembled, the window to act has closed.' }
      ]
    },
    band: {
      image: '/gironde-2022.webp',
      alt: 'Satellite image of a long smoke plume from the Gironde wildfires drifting west across the coast and out over the Atlantic.',
      caption: 'Smoke from the Gironde wildfires crossing the coast near Arcachon, 18 July 2022. Imagery: NASA Worldview (Terra/MODIS).'
    },
    platform: {
      label: 'In practice · Wildfire command',
      before: 'One screen for ',
      accent: 'the people in command',
      after: '.',
      body: 'From AUi’s wildfire command module: the incident, the sources that confirm it, the people and sites exposed, and the aircraft and water points available, fused on one operational map.',
      ops: {
        title: 'AUi Terminal · Operating picture',
        active: '1 active incident',
        kpis: [
          { label: 'Active incident', value: 'Wildfire', sub: 'Northern sector · detected 49 min ago' },
          { label: 'Corroboration', value: '3 of 4 sources' },
          { label: 'Exposure', value: '≈ 1,200 people', sub: '340 homes · 2 sensitive sites' },
          { label: 'Resources', value: '5–8 aircraft', sub: 'Available within 40 min' },
          { label: 'Fire danger', value: 'Very high', sub: 'Wind 38 km/h NW · humidity 18%' }
        ],
        map: {
          aria: 'Illustrative operational map: an active wildfire with its perimeter and predicted spread, three confirming sources, two sensitive sites, water points and an aircraft.',
          sector: 'NORTHERN SECTOR',
          sites: ['Campsite', 'Village'],
          waterLow: 'Water point B · below threshold',
          waterOk: 'Water point A',
          air: 'Air 32',
          sources: ['Satellite hotspot', 'Weather station', 'Field report', 'Camera · not connected']
        },
        legend: [['#ef4444', 'Active incident'], ['#f97316', 'Fire perimeter'], ['#f59e0b', 'Predicted spread (+2 h)'], ['#2dd4bf', 'Water point · aircraft']],
        recsLabel: 'Ranked recommendations',
        recs: [
          { title: 'Pre-position a response group in the northern sector', why: 'At the current wind, the fire reaches two sensitive sites within 2 hours.', conf: 86, status: 'Awaiting validation', state: 'pending' },
          { title: 'Switch scooping to the coast', why: 'Water point B is below threshold. The detour adds 16 min per rotation.', conf: 92, status: 'Validated', state: 'ok' },
          { title: 'Pre-alert the campsite for evacuation', why: 'Inside the 2-hour spread envelope, with a single access road.', conf: 71, status: 'Proposed', state: 'new' }
        ],
        sourcesLabel: 'Source status',
        sourceStatus: [['Satellite hotspots', 'live', 'Live'], ['Weather', 'live', 'Live'], ['Field reports', 'live', 'Live'], ['Air assets', 'sim', 'Simulated'], ['Cameras', 'off', 'Not connected']]
      },
      caption: 'Illustrative view of AUi Terminal. Scenario, sites and figures are representative.',
      // Pilot outcomes, as framed in the AUi Terminal deck
      callouts: [
        { eyebrow: '01 · Time', title: 'Confirmed sooner', text: 'Cross-checked sources let command act on the first credible signal. Measured in the pilot: time from first signal to confirmed alert.' },
        { eyebrow: '02 · Air assets', title: 'Flight time back on the fire', text: 'When a water point drops below scooping level, AUi shows it at once, with the cost of the alternative. A 16-minute detour costs 16 minutes of flight on every rotation.' },
        { eyebrow: '03 · Accountability', title: 'Defensible choices', text: 'Every request is logged with who made it, on what basis and who validated it.' }
      ]
    },
    process: {
      label: 'From signal to decision',
      steps: [
        { icon: 'fuse', title: 'Fuse', desc: 'Adapters bring every feed you own or license into one picture: operational systems, sensors, satellite, weather and field reports.' },
        { icon: 'verify', title: 'Verify', desc: 'Source health is monitored continuously, broken feeds are flagged and live data is cross-checked.' },
        { icon: 'predict', title: 'Predict', desc: 'Machine learning spots anomalies and trend breaks as they form and ranks emerging risks by urgency, with the reasoning shown.' },
        { icon: 'decide', title: 'Decide & act', desc: 'AI recommends, your people decide, and every approval is logged.' }
      ]
    },
    trust: {
      label: 'AI you can trust',
      before: 'Powerful AI, ',
      accent: 'with your people firmly in command',
      after: '.',
      rest: 'Every prediction is explained, every data gap is disclosed and every decision is on record, so speed never comes at the cost of control.',
      log: {
        title: 'Decision log · decision support',
        intro: 'Every request or recommendation is validated by the competent authority before anyone acts on it.',
        tag: 'Scenario',
        entries: [
          { time: '23:20', kind: 'Recommendation · pre-positioning', what: 'Wildfire response group to the northern sector', by: 'Recorded by the decision-support tool', status: 'Awaiting validation · operations centre', state: 'pending', action: 'Validate' },
          { time: '23:00', kind: 'Recommendation · scooping detour', what: 'Inland water point below threshold → sea scooping (+16 min)', by: 'Recorded by the decision-support tool · validated by the incident commander (23:03)', status: 'Validated · incident commander', state: 'ok' }
        ],
        caption: 'Decision log from the wildfire demonstration scenario: who recommended, who validated, and when.'
      },
      cards: [
        { title: 'Human authority, always', desc: 'AUi recommends; it never acts. Decisions rest with the accountable owner, and separation of duties is enforced: whoever proposes an action cannot validate it.' },
        { title: 'Explainable by design', desc: 'No black boxes. Every priority traces back to its source data and the reasoning behind it, presented alongside the recommendation.' },
        { title: 'Gaps disclosed, never hidden', desc: 'Every source carries a status: live, simulated or not connected. Missing telemetry is flagged explicitly, so silence is never mistaken for safety.' },
        { title: 'Defensible audit trail', desc: 'A time-stamped, tamper-evident record of what was known, who decided and when. Any decision can be reconstructed for post-incident review, audit or legal scrutiny.' },
        { title: 'Regulatory alignment', desc: 'Built for the human-oversight, transparency and record-keeping obligations placed on high-risk AI systems, from the EU AI Act to emerging national and sector frameworks.' },
        { title: 'Data sovereignty', desc: 'Each client’s data stays isolated and is never pooled. Models run with no data leaving your deployment, whether on a certified sovereign cloud or on your own infrastructure.' }
      ]
    },
    serve: {
      label: 'Who we serve',
      before: 'Engineered for ',
      accent: 'your mission',
      after: '.',
      rest: 'Every deployment is shaped around your operating environment, risk profile, data estate and the way your organisation actually makes decisions. It sits above the systems you already run and makes every one of them more valuable.',
      audiences: [
        { title: 'Enterprise', lead: 'See disruption before it hits the P&L.', desc: 'Anticipate operational, supply-chain and site risk across every region, move ahead of competitors, and back every material decision with evidence that boards, insurers and regulators trust.' },
        { title: 'Government & public sector', lead: 'One picture at every level of command.', desc: 'Give agencies and every level of command one predictive picture, from day-to-day operations to national emergencies, and act on emerging threats before they escalate.' },
        { title: 'Critical national infrastructure', lead: 'Get ahead of the next outage.', desc: 'Detect faults, threats and cascading failures across interdependent energy, water, transport and telecoms networks early enough to intervene, and keep essential services running.' }
      ],
      sectorsLabel: 'Sectors',
      sectors: [
        { name: 'Civil protection & wildfire', desc: 'Fuse satellite hotspots, weather and field reports to confirm fires sooner and prioritise air and ground resources.', path: icons.wildfire },
        { name: 'Energy & utilities', desc: 'Anticipate grid stress, asset failure and supply disruption before they reach customers.', path: icons.energy },
        { name: 'Transport & logistics', desc: 'See disruption forming across routes, ports and suppliers, and reroute before delays cascade.', path: icons.transport },
        { name: 'Telecommunications', desc: 'Detect network degradation, cable faults and interference early, and prioritise restoration.', path: icons.telecoms },
        { name: 'Healthcare', desc: 'Forecast demand surges and supply shortages across facilities, and align capacity ahead of the peak.', path: icons.health },
        { name: 'Media & entertainment', desc: 'Track narratives and audience sentiment as they form, and flag reputational risk before it spreads.', path: icons.media },
        { name: 'Financial markets', desc: 'Detect the real-world events and regime shifts that move markets, and see the risk to positions before prices reflect it.', path: icons.finance },
        { name: 'Marketing', desc: 'Spot shifts in demand, sentiment and competitor activity early, and move budget ahead of the market.', path: icons.marketing }
      ],
      swipeHint: 'Swipe for more sectors',
      cta: { title: 'Your sector', desc: 'Not listed? Tell us the decision you need to make.', link: 'Discuss your use case', subject: 'AUi Terminal for my sector' }
    },
    pilot: {
      label: 'Pilot',
      before: 'Prove the advantage on ',
      accent: 'your own data',
      after: '. A four-month, fixed-price pilot.',
      phasesLabel: 'Pilot plan',
      phases: [
        { when: 'Month 1', title: 'Connect', desc: 'Secure hosting, roles and audit switched on; your first sources connected.' },
        { when: 'Month 2', title: 'Calibrate', desc: 'Local zones, thresholds and resources set; operators trained on their own data.' },
        { when: 'Month 3', title: 'Operate', desc: 'Live use on a priority sector, with decisions logged and gains measured.' },
        { when: 'Month 4', title: 'Evaluate', desc: 'An evaluation report on your own data, with measured results.' }
      ],
      rows: [
        { label: 'Duration', value: 'Four months' },
        { label: 'Scope', value: 'One region, site or operational service' },
        { label: 'Sources', value: 'A focused selection of your existing data sources' },
        { label: 'Outcome', value: 'An evaluation report with measured results' },
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
      tagline: 'AUi Terminal: predictive intelligence and decision support, with every decision on record.',
      contactLabel: 'Contact',
      legalLabel: 'Legal',
      privacy: 'Privacy policy',
      legal: 'Legal notice',
      rights: '© 2026 Authentic Intelligence Inc. All rights reserved.'
    },
    back: 'Back to home',
    updated: 'Last updated: 15 November 2026',
    legalPages: {
      privacy: {
        title: 'Privacy policy',
        sections: [
          { h: 'Who we are', p: ['This website is operated by Authentic Intelligence Inc., which is responsible for the personal data described here. You can reach us at {email}.'] },
          { h: 'What this website collects', p: ['This website does not use cookies, analytics or advertising trackers. Fonts and images are served from our own domain, so visiting the site does not send your data to third parties such as font or analytics providers. The only exception is the contact form, described below, which you choose to send.'] },
          { h: 'Hosting', p: ['Our hosting provider processes technical data such as your IP address, browser type and the pages requested, in order to deliver the website and protect it against abuse. The provider is identified in our legal notice, and its own privacy policy applies to that processing.'] },
          { h: 'When you contact us', p: ['If you use the contact form or email us, we use your name, organisation, contact details and message only to reply to you and to manage our relationship with you. We do not sell your data or share it for marketing. We keep it only for as long as that purpose requires.', 'Contact form submissions are delivered to our inbox by FormSubmit (formsubmit.co), which processes them on our behalf for that purpose only.'] },
          { h: 'Your rights', p: ['Under the EU General Data Protection Regulation (GDPR) and similar laws, you can ask to access, correct or delete your personal data, object to or restrict its processing, and receive it in a portable format. Write to {email} and we will respond within one month.', 'You can also lodge a complaint with your data protection authority. In France, this is the CNIL (cnil.fr).'] }
        ]
      },
      legal: {
        title: 'Legal notice',
        sections: [
          { h: 'Publisher', p: ['This website is published by Authentic Intelligence Inc. Contact: {email}.'] },
          { h: 'Hosting', p: ['This website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States (vercel.com).'] },
          { h: 'Intellectual property', p: ['All content on this website, including text, graphics, the AUi Terminal name and interface images, belongs to Authentic Intelligence Inc. unless stated otherwise, and may not be reproduced without permission.', 'Map data shown in product images: © IGN – Géoplateforme.', 'Satellite imagery: NASA Worldview (Terra/MODIS), courtesy of NASA, public domain.'] },
          { h: 'Product views', p: ['Product views on this site are illustrative. Scenarios, sites and figures are representative and do not reflect live data.'] }
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
      { href: '#sectors', label: 'Secteurs' },
      { href: '#pilot', label: 'Pilote' }
    ],
    hero: {
      lines: ['UNE VUE UNIQUE.', 'TOUTES LES SOURCES.'],
      accent: 'CHAQUE DÉCISION TRACÉE.',
      // Longer phrases than English: a slightly smaller size keeps the four-line rhythm
      size: 'clamp(34px, 4.9vw, 56px)',
      maxWidth: '680px',
      sub: 'L’intelligence prédictive au service de la décision. AUi Terminal, plateforme de fusion de données et d’aide au commandement fondée sur l’IA, s’adresse aux entreprises, aux administrations et aux opérateurs d’infrastructures critiques.',
      primary: 'Demander une présentation',
      primarySubject: 'Présentation AUi Terminal',
      secondary: 'Découvrir la plateforme'
    },
    ticker: {
      label: 'Scénario de démonstration',
      items: ['Point chaud satellite détecté · secteur nord', 'Mise à jour météo · vent 38 km/h NO', '3 sources sur 7 confirment', 'Feu confirmé · priorité 1', 'Point d’écopage sous le niveau requis', 'Recommandation journalisée · en attente de validation']
    },
    mission: {
      label: 'Notre mission',
      before: 'AUi transforme des données éparses en ',
      accent: 'supériorité décisionnelle',
      after: '.',
      rest: 'La plateforme AUi réunit en une seule vue opérationnelle, en temps réel, l’ensemble des sources dont vous disposez. Grâce à l’IA, elle repère les signaux faibles et les ruptures annonciatrices de crise, puis soumet aux décideurs une recommandation hiérarchisée et argumentée, tant qu’il est encore temps d’agir.',
      problemsLabel: 'Le signal est déjà dans vos données. Encore faut-il le voir à temps.',
      diagram: { from: 'Sources dispersées', to: 'Une vue unique et qualifiée' },
      timeline: { signal: 'Premier signal', impact: 'Impact', picture: 'Vue consolidée', window: 'Fenêtre d’action' },
      problems: [
        { title: 'Dispersion', desc: 'Plateformes opérationnelles, capteurs, satellites, météo, remontées du terrain, sources commerciales : les signaux critiques sont éparpillés dans des systèmes qui n’ont jamais été conçus pour dialoguer.' },
        { title: 'Fragmentation', desc: 'Chaque équipe, chaque site, chaque échelon de commandement se construit, à la main et dans l’urgence, sa propre vision de la situation, rarement la même d’un niveau à l’autre.' },
        { title: 'Retard', desc: 'Noyées dans le bruit, les alertes précoces n’émergent qu’une fois l’impact survenu. Le temps de consolider la situation, la fenêtre d’action s’est refermée.' }
      ]
    },
    band: {
      image: '/gironde-2022.webp',
      alt: 'Image satellite d’un long panache de fumée des feux de Gironde dérivant vers l’ouest, au-dessus du littoral et de l’Atlantique.',
      caption: 'Fumée des feux de Gironde franchissant le littoral près d’Arcachon, le 18 juillet 2022. Imagerie : NASA Worldview (Terra/MODIS).'
    },
    platform: {
      label: 'En pratique · Lutte contre les feux de forêt',
      before: 'Un seul écran pour ',
      accent: 'ceux qui commandent',
      after: '.',
      body: 'Le module feux de forêt d’AUi réunit sur une même carte opérationnelle l’incident, les sources qui le confirment, les personnes et les enjeux exposés, ainsi que les moyens aériens et les points d’eau disponibles.',
      ops: {
        title: 'AUi Terminal · Situation opérationnelle',
        active: '1 incident actif',
        kpis: [
          { label: 'Incident actif', value: 'Feu de forêt', sub: 'Secteur nord · détecté il y a 49 min' },
          { label: 'Corroboration', value: '3 sources sur 4' },
          { label: 'Exposition', value: '≈ 1 200 personnes', sub: '340 habitations · 2 sites sensibles' },
          { label: 'Moyens', value: '5 à 8 aéronefs', sub: 'Disponibles sous 40 min' },
          { label: 'Danger feu de forêt', value: 'Très élevé', sub: 'Vent 38 km/h NO · humidité 18 %' }
        ],
        map: {
          aria: 'Carte opérationnelle illustrative : un feu de forêt actif avec son périmètre et sa propagation prévue, trois sources qui le confirment, deux sites sensibles, des points d’eau et un aéronef.',
          sector: 'SECTEUR NORD',
          sites: ['Camping', 'Village'],
          waterLow: 'Point d’eau B · sous le seuil',
          waterOk: 'Point d’eau A',
          air: 'Air 32',
          sources: ['Point chaud satellite', 'Station météo', 'Remontée terrain', 'Caméra · non raccordée']
        },
        legend: [['#ef4444', 'Incident actif'], ['#f97316', 'Périmètre du feu'], ['#f59e0b', 'Propagation prévue (+2 h)'], ['#2dd4bf', 'Point d’eau · aéronef']],
        recsLabel: 'Recommandations classées',
        recs: [
          { title: 'Prépositionner un groupe d’intervention dans le secteur nord', why: 'Au vent actuel, le feu atteint deux sites sensibles d’ici 2 heures.', conf: 86, status: 'En attente de validation', state: 'pending' },
          { title: 'Basculer l’écopage sur le littoral', why: 'Le point d’eau B est sous le seuil. Le détour ajoute 16 min par rotation.', conf: 92, status: 'Validée', state: 'ok' },
          { title: 'Préalerter le camping en vue d’une évacuation', why: 'Situé dans l’enveloppe de propagation à 2 heures, avec un seul accès.', conf: 71, status: 'Proposée', state: 'new' }
        ],
        sourcesLabel: 'État des sources',
        sourceStatus: [['Points chauds satellite', 'live', 'En direct'], ['Météo', 'live', 'En direct'], ['Remontées terrain', 'live', 'En direct'], ['Moyens aériens', 'sim', 'Simulé'], ['Caméras', 'off', 'Non raccordé']]
      },
      caption: 'Vue illustrative d’AUi Terminal. Scénario, sites et chiffres donnés à titre indicatif.',
      callouts: [
        { eyebrow: '01 · Temps', title: 'Une confirmation plus rapide', text: 'Le croisement des sources permet d’agir dès le premier signal crédible. Indicateur suivi pendant le pilote : le délai entre ce premier signal et l’alerte confirmée.' },
        { eyebrow: '02 · Moyens aériens', title: 'Plus de temps de vol utile sur le feu', text: 'Dès qu’un plan d’eau passe sous le seuil d’écopage, AUi le signale et chiffre l’alternative. Un détour de 16 minutes, c’est plus d’un quart d’heure de vol perdu à chaque rotation.' },
        { eyebrow: '03 · Traçabilité', title: 'Des décisions défendables', text: 'Chaque demande est consignée : qui l’a formulée, sur quelle base, et qui l’a validée.' }
      ]
    },
    process: {
      label: 'Du signal à la décision',
      steps: [
        { icon: 'fuse', title: 'Fusionner', desc: 'Systèmes opérationnels, capteurs, satellites, météo, terrain : tous vos flux de données sont réunis dans une vue unique.' },
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
      log: {
        title: 'Main courante · aide à la décision',
        intro: 'Chaque demande ou recommandation est validée par l’autorité compétente avant toute exécution.',
        tag: 'Scénario',
        entries: [
          { time: '23:20', kind: 'Recommandation · prépositionnement', what: 'Groupe d’intervention feux de forêt vers le secteur nord', by: 'Consignée par l’outil d’aide à la décision', status: 'En attente de validation · CODIS', state: 'pending', action: 'Valider' },
          { time: '23:00', kind: 'Recommandation · détour d’écopage', what: 'Plan d’eau intérieur sous le seuil → écopage en mer (+16 min)', by: 'Consignée par l’outil d’aide à la décision · validée par le COS (23:03)', status: 'Validée · COS', state: 'ok' }
        ],
        caption: 'Main courante issue du scénario de démonstration feux de forêt : qui recommande, qui valide, et quand.'
      },
      cards: [
        { title: 'L’humain décide, toujours', desc: 'AUi recommande, il n’agit jamais. La décision revient à l’autorité compétente, selon le principe des quatre yeux : celui qui propose ne valide pas.' },
        { title: 'Explicable dès la conception', desc: 'Pas de boîte noire : chaque priorité renvoie aux données et au raisonnement qui la fondent, affichés à côté de la recommandation.' },
        { title: 'Aucune zone d’ombre', desc: 'Chaque source affiche son statut : en direct, simulée ou non raccordée. Les données manquantes sont signalées comme telles : l’absence d’alerte n’est jamais prise pour une absence de risque.' },
        { title: 'Piste d’audit fiable', desc: 'Une main courante horodatée et infalsifiable : ce que l’on savait, qui a décidé, et quand. Chaque décision peut être reconstituée lors d’un retour d’expérience, d’un audit ou d’une procédure contentieuse.' },
        { title: 'Conformité réglementaire', desc: 'AUi est conçu pour répondre aux exigences de supervision humaine, de transparence et de traçabilité applicables aux systèmes d’IA à haut risque, du règlement européen sur l’IA (AI Act) aux cadres nationaux et sectoriels.' },
        { title: 'Souveraineté des données', desc: 'Les données de chaque client sont strictement cloisonnées et jamais mutualisées. Les modèles peuvent être exécutés sans flux sortant, sur un cloud souverain qualifié ou directement sur votre propre infrastructure.' }
      ]
    },
    serve: {
      label: 'À qui s’adresse AUi',
      before: 'Conçu pour ',
      accent: 'votre mission',
      after: '.',
      rest: 'Chaque déploiement s’adapte à votre environnement opérationnel, à votre exposition aux risques, à vos données et à vos circuits de décision réels. AUi s’appuie sur les systèmes que vous exploitez déjà et en démultiplie la valeur.',
      audiences: [
        { title: 'Entreprises', lead: 'Anticiper les ruptures avant qu’elles ne pèsent sur vos résultats.', desc: 'Prévoyez les risques opérationnels, logistiques et industriels sur l’ensemble de vos sites, gardez l’initiative face à la concurrence et justifiez chaque décision importante auprès de votre conseil d’administration, de vos assureurs et des autorités de contrôle.' },
        { title: 'Secteur public', lead: 'Un temps d’avance à chaque échelon.', desc: 'Donnez aux services et à chaque échelon de commandement une même lecture prédictive de la situation, de la gestion courante aux crises majeures, pour traiter les menaces avant qu’elles ne s’aggravent.' },
        { title: 'Infrastructures critiques et OIV', lead: 'Prévenir la prochaine panne.', desc: 'Détectez à temps les défaillances, les menaces et les effets en cascade sur des réseaux interdépendants (énergie, eau, transports, télécommunications) et préservez la continuité des services essentiels.' }
      ],
      sectorsLabel: 'Secteurs',
      sectors: [
        { name: 'Protection civile et feux de forêt', desc: 'Croisez détections satellitaires, météo et signalements de terrain pour confirmer plus tôt les départs de feu et engager au mieux les moyens aériens et terrestres.', path: icons.wildfire },
        { name: 'Énergie et réseaux', desc: 'Voyez venir les tensions sur le réseau, les défaillances d’équipements et les ruptures d’approvisionnement avant qu’elles n’affectent vos clients.', path: icons.energy },
        { name: 'Transports et logistique', desc: 'Repérez les perturbations naissantes sur les axes, dans les ports et chez les fournisseurs, et réorganisez les flux avant l’effet domino.', path: icons.transport },
        { name: 'Télécommunications', desc: 'Identifiez au plus tôt dégradations de service, coupures de câbles et brouillages, et priorisez les rétablissements.', path: icons.telecoms },
        { name: 'Santé', desc: 'Anticipez afflux de patients et tensions d’approvisionnement dans vos établissements, et adaptez les capacités en amont.', path: icons.health },
        { name: 'Médias et industries culturelles', desc: 'Suivez l’émergence des récits et l’évolution de l’opinion, et désamorcez les risques d’image avant qu’ils ne se propagent.', path: icons.media },
        { name: 'Marchés financiers', desc: 'Surveillez les événements et les ruptures de marché qui font bouger les cours, et mesurez l’exposition de vos positions avant que les cours ne l’intègrent.', path: icons.finance },
        { name: 'Marketing', desc: 'Captez au plus tôt les évolutions de la demande, de l’opinion et de la concurrence, et réallouez vos budgets avant que le marché ne réagisse.', path: icons.marketing }
      ],
      swipeHint: 'Faites glisser pour voir les autres secteurs',
      cta: { title: 'Votre secteur', desc: 'Votre secteur n’y figure pas ? Chaque déploiement est conçu sur mesure.', link: 'Parlons de votre besoin', subject: 'AUi Terminal pour mon secteur' }
    },
    pilot: {
      label: 'Pilote',
      before: 'Mesurez l’apport d’AUi sur ',
      accent: 'vos propres données',
      after: '. Un pilote de quatre mois, au forfait.',
      phasesLabel: 'Déroulé du pilote',
      phases: [
        { when: 'Mois 1', title: 'Raccorder', desc: 'Hébergement sécurisé, rôles et audit activés ; premières sources raccordées.' },
        { when: 'Mois 2', title: 'Calibrer', desc: 'Zones, seuils et moyens locaux réglés ; opérateurs formés sur leurs propres données.' },
        { when: 'Mois 3', title: 'Exploiter', desc: 'Utilisation réelle sur un secteur prioritaire, décisions tracées et gains mesurés.' },
        { when: 'Mois 4', title: 'Évaluer', desc: 'Un rapport d’évaluation établi à partir de vos données, résultats mesurés à l’appui.' }
      ],
      rows: [
        { label: 'Durée', value: 'Quatre mois' },
        { label: 'Périmètre', value: 'Une région, un site ou un service' },
        { label: 'Sources', value: 'Une sélection ciblée de vos sources existantes' },
        { label: 'Livrable', value: 'Un rapport d’évaluation établi à partir de vos données' },
        { label: 'Conditions', value: 'Prix forfaitaire' }
      ],
      button: 'Demander un pilote',
      subject: 'Pilote AUi Terminal'
    },
    form: {
      title: 'Demander une présentation ou un pilote',
      intro: 'Présentez-nous votre besoin : nous vous répondons sous deux jours ouvrés.',
      name: 'Nom et prénom',
      email: 'Courriel professionnel',
      org: 'Organisme ou entreprise',
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
      successBody: 'Nous revenons vers vous rapidement par courriel.',
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
    updated: 'Dernière mise à jour : 15 novembre 2026',
    legalPages: {
      privacy: {
        title: 'Politique de confidentialité',
        sections: [
          { h: 'Responsable du traitement', p: ['Ce site est exploité par Authentic Intelligence Inc., responsable du traitement des données personnelles décrites ci-dessous. Pour toute question, écrivez-nous à {email}.'] },
          { h: 'Données collectées par ce site', p: ['Ce site n’utilise ni cookies, ni outil de mesure d’audience, ni traceur publicitaire. Les polices de caractères et les images sont hébergées sur notre propre domaine : la simple consultation du site ne transmet donc aucune donnée à des tiers, tels que des fournisseurs de polices ou de statistiques. Seule exception : le formulaire de contact, décrit ci-dessous, que vous choisissez d’envoyer.'] },
          { h: 'Hébergement', p: ['Notre hébergeur traite des données techniques, telles que votre adresse IP, votre type de navigateur et les pages consultées, afin d’assurer le fonctionnement du site et de le protéger contre les abus. Il est identifié dans nos mentions légales ; ce traitement relève de sa propre politique de confidentialité.'] },
          { h: 'Demandes de contact', p: ['Lorsque vous utilisez le formulaire de contact ou nous écrivez, vos nom, organisme, coordonnées et message sont utilisés uniquement pour vous répondre et assurer le suivi de notre relation. Nous ne vendons pas vos données et ne les utilisons pas à des fins de prospection. Elles ne sont conservées que le temps nécessaire à cette finalité.', 'Les messages envoyés via le formulaire sont acheminés vers notre messagerie par FormSubmit (formsubmit.co), qui les traite pour notre compte et à cette seule fin.'] },
          { h: 'Vos droits', p: ['Conformément au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification et d’effacement de vos données, d’un droit d’opposition et de limitation de leur traitement, ainsi que d’un droit à leur portabilité. Pour l’exercer, écrivez-nous à {email} ; nous vous répondrons dans un délai d’un mois.', 'Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr) ou de l’autorité de protection des données de votre pays.'] }
        ]
      },
      legal: {
        title: 'Mentions légales',
        sections: [
          { h: 'Éditeur', p: ['Ce site est édité par Authentic Intelligence Inc. Contact : {email}.'] },
          { h: 'Hébergement', p: ['Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (vercel.com).'] },
          { h: 'Propriété intellectuelle', p: ['Sauf mention contraire, l’ensemble des contenus de ce site (textes, éléments graphiques, nom AUi Terminal, vues d’interface) est la propriété d’Authentic Intelligence Inc. Toute reproduction sans autorisation préalable est interdite.', 'Données cartographiques figurant dans les captures du produit : © IGN – Géoplateforme.', 'Imagerie satellite : NASA Worldview (Terra/MODIS), avec l’aimable autorisation de la NASA, domaine public.'] },
          { h: 'Vues du produit', p: ['Les vues du produit présentées sur ce site sont illustratives. Les scénarios, sites et chiffres sont donnés à titre indicatif et ne correspondent pas à des données réelles.'] }
        ]
      }
    }
  }
};
