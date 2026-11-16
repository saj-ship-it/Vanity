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
      { href: '#objective', label: 'Problem' },
      { href: '#process', label: 'Process' },
      { href: '#control', label: 'Trust' },
      { href: '#sectors', label: 'Who we serve' },
      { href: '#company', label: 'Company' },
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
      label: 'Example signals',
      items: [
        { sector: 'Energy', signal: 'substation load 14% above forecast', action: 'reserve pre-dispatched', status: 'Validated', state: 'ok' },
        { sector: 'Logistics', signal: 'port dwell time rising on 3 routes', action: 'reroute proposed', status: 'Awaiting validation', state: 'pending' },
        { sector: 'Telecoms', signal: 'backbone latency anomaly', action: 'restoration prioritised', status: 'Validated', state: 'ok' },
        { sector: 'Healthcare', signal: 'emergency demand +18% forecast within 48 h', action: 'staffing shift proposed', status: 'Awaiting validation', state: 'pending' },
        { sector: 'Financial markets', signal: 'regime shift in regional power prices', action: 'exposure flagged to the desk', status: 'Proposed', state: 'new' },
        { sector: 'Civil protection', signal: 'hotspot confirmed by 3 of 4 sources', action: 'resources pre-positioned', status: 'Validated', state: 'ok' }
      ]
    },
    mission: {
      label: 'The problem we solve',
      before: 'AUi turns fragmented data into ',
      accent: 'decision advantage',
      after: '.',
      // Starts on its own line after the first sentence
      rest: 'It fuses every source you own or license into one live picture, and AI flags what matters while there is still time to act.',
      problemsLabel: 'The signal is already in your data. No one sees it in time.',
      diagram: { from: 'Scattered sources', to: 'One qualified picture' },
      timeline: { signal: 'First signal', impact: 'Impact', picture: 'Picture ready', window: 'Window to act' },
      problems: [
        { title: 'Scattered', desc: 'Critical signals sit in systems never built to work together.' },
        { title: 'Out of sync', desc: 'Every team builds its own picture by hand, and rarely the same one.' },
        { title: 'Too late', desc: 'By the time the picture is assembled, the window to act has closed.' }
      ]
    },
    platform: {
      label: 'Flagship deployment · Wildfire command',
      before: 'One screen for ',
      accent: 'the people in command',
      after: '.',
      body: 'Proven first where minutes cost the most. AUi’s wildfire command module fuses the incident, the sources that confirm it, the people and sites exposed, and the aircraft and water points available into one operational map.',
      ops: {
        title: 'AUi Terminal · Operating picture',
        active: '1 active incident',
        kpis: [
          { label: 'Active incident', value: 'Wildfire', sub: 'Southern sector · detected 49 min ago' },
          { label: 'Corroboration', value: '3 of 4 sources' },
          { label: 'Exposure', value: '≈ 1,200 people', sub: '340 homes · 2 sensitive sites' },
          { label: 'Resources', value: '5–8 aircraft', sub: 'Available within 40 min' },
          { label: 'Fire danger', value: 'Very high', sub: 'Wind 38 km/h NW · humidity 18%' }
        ],
        map: {
          aria: 'Illustrative operational map: an active wildfire with its perimeter and predicted spread, three confirming sources, two sensitive sites, water points and an aircraft.',
          sector: 'SOUTHERN SECTOR',
          sites: ['Campsite', 'Village'],
          waterLow: 'Water point B · below threshold',
          waterOk: 'Water point A',
          air: 'Air 32',
          sources: ['Satellite hotspot', 'Weather station', 'Field report', 'Camera · not connected']
        },
        legend: [['#ef4444', 'Active incident'], ['#f97316', 'Fire perimeter'], ['#f59e0b', 'Predicted spread (+2 h)'], ['#2dd4bf', 'Water point · aircraft']],
        recsLabel: 'Ranked recommendations',
        recs: [
          { title: 'Pre-position a response group in the southern sector', why: 'At the current wind, the fire reaches two sensitive sites within 2 hours.', conf: 86, status: 'Awaiting validation', state: 'pending' },
          { title: 'Switch scooping to the coast', why: 'Water point B is below threshold. The detour adds 16 min per rotation.', conf: 92, status: 'Validated', state: 'ok' },
          { title: 'Pre-alert the campsite for evacuation', why: 'Inside the 2-hour spread envelope, with a single access road.', conf: 71, status: 'Proposed', state: 'new' }
        ],
        sourcesLabel: 'Source status',
        sourceStatus: [['Satellite hotspots', 'live', 'Live'], ['Weather', 'live', 'Live'], ['Field reports', 'live', 'Live'], ['Air assets', 'sim', 'Simulated'], ['Cameras', 'off', 'Not connected']]
      },
      caption: 'Illustrative view of AUi Terminal over a base map of the Arcachon basin. Scenario, sites and figures are representative. Base map: © IGN.',
      // Pilot outcomes, as framed in the AUi Terminal deck
      viz: { today: 'Today', withAui: 'With AUi', signal: 'Signal', confirmed: 'Confirmed', collation: 'Collation', judgement: 'Judgement', logged: ['Recommended', 'Validated', 'Logged'] },
      callouts: [
        { eyebrow: '01 · Time', title: 'Confirmed sooner', text: 'Act on the first credible signal, not the last.', viz: 'time' },
        { eyebrow: '02 · Capacity', title: 'Expert time back', text: 'The picture assembles itself. Experts focus on judgement.', viz: 'capacity' },
        { eyebrow: '03 · Accountability', title: 'Defensible choices', text: 'Every action logged: who, on what basis, who validated.', viz: 'log' }
      ]
    },
    process: {
      label: 'From signal to decision',
      steps: [
        { icon: 'fuse', title: 'Fuse', desc: 'Every source, one picture.' },
        { icon: 'verify', title: 'Verify', desc: 'Every feed checked, every gap flagged.' },
        { icon: 'predict', title: 'Predict', desc: 'Risks ranked, reasoning shown.' },
        { icon: 'decide', title: 'Decide & act', desc: 'AI recommends. People decide.' }
      ]
    },
    trust: {
      label: 'AI you can trust',
      before: 'Powerful AI, ',
      accent: 'with your people firmly in command',
      after: '.',
      rest: 'Every prediction is explained, every data gap is disclosed and every decision is on record, so speed never comes at the cost of control.',
      log: {
        title: 'Decision log',
        intro: 'Every request or recommendation is validated by the competent authority before anyone acts on it.',
        tag: 'Example',
        entries: [
          { time: '08:42', kind: 'Recommendation · reserve dispatch', what: 'Substation load forecast 14% above plan → bring standby capacity online', by: 'Recorded by the decision-support tool', status: 'Awaiting validation · grid control room', state: 'pending', action: 'Validate' },
          { time: '08:15', kind: 'Recommendation · rerouting', what: 'Port dwell time rising on 3 routes → move two sailings to an alternate terminal', by: 'Recorded by the decision-support tool · validated by the logistics duty manager (08:21)', status: 'Validated · duty manager', state: 'ok' }
        ],
        caption: 'Example decision log entries: who recommended, who validated, and when.'
      },
      loop: { steps: ['AI recommends', 'A person validates', 'Decision logged'], back: 'Explained and reviewable at every step' },
      cards: [
        { title: 'Human authority, always', desc: 'AUi recommends; it never acts. Whoever proposes cannot validate.' },
        { title: 'Explainable by design', desc: 'Every priority traces back to its source data and reasoning.' },
        { title: 'Gaps disclosed, never hidden', desc: 'Each source is marked live, simulated or not connected.' },
        { title: 'Defensible audit trail', desc: 'A tamper-evident record of what was known, who decided and when.' },
        { title: 'Regulatory alignment', desc: 'Built for the EU AI Act and emerging national frameworks.' },
        { title: 'Data sovereignty', desc: 'Client data stays isolated and never leaves your deployment.' }
      ]
    },
    serve: {
      label: 'Who we serve',
      before: 'Engineered for ',
      accent: 'your mission',
      after: '.',
      rest: 'Every deployment is shaped around your operating environment, risk profile, data estate and the way your organisation actually makes decisions. AUi sits above the systems you already run and makes every one of them more valuable.',
      audiences: [
        { title: 'Enterprise', lead: 'See disruption before it hits the P&L.', desc: 'Anticipate operational, supply-chain and site risk across every region, move ahead of competitors, and back every material decision with evidence that boards, insurers and regulators trust.' },
        { title: 'Government & public sector', lead: 'One picture at every level of command.', desc: 'Give agencies one shared, predictive picture, from day-to-day operations to national emergencies, and act on emerging threats before they escalate.' },
        { title: 'Critical national infrastructure', lead: 'Get ahead of the next outage.', desc: 'Detect faults, threats and cascading failures across interdependent energy, water, transport and telecoms networks early enough to intervene, and keep essential services running.' }
      ],
      sectorsLabel: 'Sectors',
      sectors: [
        { name: 'Energy & utilities', desc: 'Anticipate grid stress, asset failure and supply disruption before they reach customers.', path: icons.energy },
        { name: 'Transport & logistics', desc: 'See disruption forming across routes, ports and suppliers, and reroute before delays cascade.', path: icons.transport },
        { name: 'Telecommunications', desc: 'Detect network degradation, cable faults and interference early, and prioritise restoration.', path: icons.telecoms },
        { name: 'Healthcare', desc: 'Forecast demand surges and supply shortages across facilities, and align capacity ahead of the peak.', path: icons.health },
        { name: 'Media & entertainment', desc: 'Track narratives and audience sentiment as they form, and flag reputational risk before it spreads.', path: icons.media },
        { name: 'Financial markets', desc: 'Detect the real-world events and regime shifts that move markets, and see the risk to positions before prices reflect it.', path: icons.finance },
        { name: 'Civil protection & wildfire', desc: 'Fuse satellite hotspots, weather and field reports to confirm fires sooner and prioritise air and ground resources.', path: icons.wildfire },
        { name: 'Marketing', desc: 'Spot shifts in demand, sentiment and competitor activity early, and move budget ahead of the market.', path: icons.marketing }
      ],
      swipeHint: 'Swipe for more sectors',
      cta: { title: 'Your sector', desc: 'Not listed? Every deployment is engineered around the client. Tell us about yours.', link: 'Discuss your use case', subject: 'AUi Terminal for my sector' }
    },
    company: {
      label: 'Who we are',
      before: 'More than eleven years engineering ',
      accent: 'advanced intelligence systems',
      after: '.',
      rest: 'Authentic Intelligence is an AI company. We design and deploy AI and data platforms for institutions where precision, security and speed decide the outcome.',
      facts: [
        { value: '11+', label: 'Years in high-stakes delivery' },
        { value: 'Toronto', label: 'Headquarters' },
        { value: 'On your terms', label: 'Sovereign cloud, on premises or hybrid deployment' }
      ],
      line: { before: 'Different sectors. ', accent: 'The same standard', after: ': built for the moment that matters, open to audit, discreet by design.' }
    },
    pilot: {
      label: 'Pilot',
      before: 'Prove the advantage on ',
      accent: 'your own data',
      after: '. A four-month, fixed-price pilot.',
      phasesLabel: 'Pilot plan',
      phases: [
        { when: 'Month 1', title: 'Connect', desc: 'Secure hosting, roles and audit switched on; your first sources connected.' },
        { when: 'Month 2', title: 'Calibrate', desc: 'Local zones, thresholds and resources set; operators trained on live data.' },
        { when: 'Month 3', title: 'Operate', desc: 'Live use on a priority sector, with decisions logged and gains measured.' },
        { when: 'Month 4', title: 'Evaluate', desc: 'An evaluation report with measured gains.' }
      ],
      chips: ['4 months', 'One region, site or service', 'Fixed price'],
      rows: [
        { label: 'Duration', value: 'Four months' },
        { label: 'Scope', value: 'One region, site or operational service' },
        { label: 'Sources', value: 'A focused selection of your existing data sources' },
        { label: 'Outcome', value: 'An evaluation report with measured results' },
        { label: 'Terms', value: 'Fixed price' }
      ],
      nextLabel: 'What happens next',
      next: ['We reply within two working days.', 'A 30-minute briefing with our team, shaped around your priorities.', 'A short scoping note: scope, sources, success measures and a fixed price.'],
      button: 'Request a pilot',
      subject: 'AUi Terminal pilot'
    },
    form: {
      title: 'Request a briefing or pilot',
      intro: 'Tell us about your objectives and the advantage you want to gain.',
      name: 'Name',
      email: 'Work email',
      org: 'Organisation',
      interest: 'I’m interested in',
      interests: ['A briefing', 'A pilot', 'Something else'],
      sector: 'Sector',
      sectorPlaceholder: 'Select a sector',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'Your objectives, operating environment and the outcomes you expect AUi to deliver.',
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
      tagline: 'AUi Terminal: predictive intelligence, with every decision on record.',
      contactLabel: 'Contact',
      legalLabel: 'Legal',
      privacy: 'Privacy policy',
      legal: 'Legal notice',
      location: 'Toronto, Canada',
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
          { h: 'Publisher', p: ['This website is published by Authentic Intelligence Inc., Toronto, Ontario, Canada. Contact: {email}.'] },
          { h: 'Hosting', p: ['This website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States (vercel.com).'] },
          { h: 'Intellectual property', p: ['All content on this website, including text, graphics, the AUi Terminal name and interface images, belongs to Authentic Intelligence Inc. unless stated otherwise, and may not be reproduced without permission.', 'Base map shown in product views: © IGN – Géoplateforme.'] },
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
      { href: '#objective', label: 'Constat' },
      { href: '#process', label: 'Méthode' },
      { href: '#control', label: 'Confiance' },
      { href: '#sectors', label: 'Secteurs' },
      { href: '#company', label: 'Société' },
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
      label: 'Exemples de signaux',
      items: [
        { sector: 'Énergie', signal: 'charge du poste source 14 % au-dessus de la prévision', action: 'réserve mobilisée par anticipation', status: 'Validé', state: 'ok' },
        { sector: 'Logistique', signal: 'temps d’escale en hausse sur 3 routes', action: 'réacheminement proposé', status: 'En attente de validation', state: 'pending' },
        { sector: 'Télécoms', signal: 'anomalie de latence sur le réseau dorsal', action: 'rétablissement priorisé', status: 'Validé', state: 'ok' },
        { sector: 'Santé', signal: 'demande aux urgences +18 % prévue sous 48 h', action: 'ajustement des effectifs proposé', status: 'En attente de validation', state: 'pending' },
        { sector: 'Marchés financiers', signal: 'rupture de régime sur les prix régionaux de l’électricité', action: 'exposition signalée à la salle des marchés', status: 'Proposé', state: 'new' },
        { sector: 'Protection civile', signal: 'point chaud confirmé par 3 sources sur 4', action: 'moyens prépositionnés', status: 'Validé', state: 'ok' }
      ]
    },
    mission: {
      label: 'Le constat',
      before: 'AUi transforme des données éparses en ',
      accent: 'supériorité décisionnelle',
      after: '.',
      rest: 'AUi réunit toutes vos sources en une vue unique et en temps réel, et l’IA signale ce qui compte tant qu’il est encore temps d’agir.',
      problemsLabel: 'Le signal est déjà dans vos données. Encore faut-il le voir à temps.',
      diagram: { from: 'Sources dispersées', to: 'Une vue unique et qualifiée' },
      timeline: { signal: 'Premier signal', impact: 'Impact', picture: 'Vue consolidée', window: 'Fenêtre d’action' },
      problems: [
        { title: 'Dispersion', desc: 'Les signaux critiques dorment dans des systèmes jamais conçus pour dialoguer.' },
        { title: 'Fragmentation', desc: 'Chaque équipe construit sa propre vue à la main, rarement la même.' },
        { title: 'Retard', desc: 'Le temps de consolider la situation, la fenêtre d’action s’est refermée.' }
      ]
    },
    platform: {
      label: 'Déploiement de référence · Feux de forêt',
      before: 'Un seul écran pour ',
      accent: 'ceux qui commandent',
      after: '.',
      body: 'Éprouvé d’abord là où chaque minute compte. Le module feux de forêt d’AUi réunit sur une même carte opérationnelle l’incident, les sources qui le confirment, les personnes et les enjeux exposés, ainsi que les moyens aériens et les points d’eau disponibles.',
      ops: {
        title: 'AUi Terminal · Situation opérationnelle',
        active: '1 incident actif',
        kpis: [
          { label: 'Incident actif', value: 'Feu de forêt', sub: 'Secteur sud · détecté il y a 49 min' },
          { label: 'Corroboration', value: '3 sources sur 4' },
          { label: 'Exposition', value: '≈ 1 200 personnes', sub: '340 habitations · 2 sites sensibles' },
          { label: 'Moyens', value: '5 à 8 aéronefs', sub: 'Disponibles sous 40 min' },
          { label: 'Danger feu de forêt', value: 'Très élevé', sub: 'Vent 38 km/h NO · humidité 18 %' }
        ],
        map: {
          aria: 'Carte opérationnelle illustrative : un feu de forêt actif avec son périmètre et sa propagation prévue, trois sources qui le confirment, deux sites sensibles, des points d’eau et un aéronef.',
          sector: 'SECTEUR SUD',
          sites: ['Camping', 'Village'],
          waterLow: 'Point d’eau B · sous le seuil',
          waterOk: 'Point d’eau A',
          air: 'Air 32',
          sources: ['Point chaud satellite', 'Station météo', 'Remontée terrain', 'Caméra · non raccordée']
        },
        legend: [['#ef4444', 'Incident actif'], ['#f97316', 'Périmètre du feu'], ['#f59e0b', 'Propagation prévue (+2 h)'], ['#2dd4bf', 'Point d’eau · aéronef']],
        recsLabel: 'Recommandations classées',
        recs: [
          { title: 'Prépositionner un groupe d’intervention dans le secteur sud', why: 'Au vent actuel, le feu atteint deux sites sensibles d’ici 2 heures.', conf: 86, status: 'En attente de validation', state: 'pending' },
          { title: 'Basculer l’écopage sur le littoral', why: 'Le point d’eau B est sous le seuil. Le détour ajoute 16 min par rotation.', conf: 92, status: 'Validée', state: 'ok' },
          { title: 'Préalerter le camping en vue d’une évacuation', why: 'Situé dans l’enveloppe de propagation à 2 heures, avec un seul accès.', conf: 71, status: 'Proposée', state: 'new' }
        ],
        sourcesLabel: 'État des sources',
        sourceStatus: [['Points chauds satellite', 'live', 'En direct'], ['Météo', 'live', 'En direct'], ['Remontées terrain', 'live', 'En direct'], ['Moyens aériens', 'sim', 'Simulé'], ['Caméras', 'off', 'Non raccordé']]
      },
      caption: 'Vue illustrative d’AUi Terminal sur un fond de carte du bassin d’Arcachon. Scénario, sites et chiffres donnés à titre indicatif. Fond de carte : © IGN.',
      viz: { today: 'Aujourd’hui', withAui: 'Avec AUi', signal: 'Signal', confirmed: 'Confirmé', collation: 'Compilation', judgement: 'Analyse', logged: ['Recommandé', 'Validé', 'Consigné'] },
      callouts: [
        { eyebrow: '01 · Temps', title: 'Une confirmation plus rapide', text: 'Agir sur le premier signal crédible, pas sur le dernier.', viz: 'time' },
        { eyebrow: '02 · Capacité', title: 'Du temps d’expert retrouvé', text: 'La vue se construit seule. Les experts se consacrent à l’analyse.', viz: 'capacity' },
        { eyebrow: '03 · Traçabilité', title: 'Des décisions défendables', text: 'Chaque action consignée : qui, sur quelle base, qui a validé.', viz: 'log' }
      ]
    },
    process: {
      label: 'Du signal à la décision',
      steps: [
        { icon: 'fuse', title: 'Fusionner', desc: 'Toutes les sources, une seule vue.' },
        { icon: 'verify', title: 'Vérifier', desc: 'Chaque flux contrôlé, chaque lacune signalée.' },
        { icon: 'predict', title: 'Prédire', desc: 'Risques classés, raisonnement explicité.' },
        { icon: 'decide', title: 'Décider et agir', desc: 'L’IA propose. L’humain décide.' }
      ]
    },
    trust: {
      label: 'Une IA de confiance',
      before: 'Une IA performante, ',
      accent: 'sous le contrôle permanent de vos équipes',
      after: '.',
      rest: 'Chaque prédiction est expliquée, chaque lacune signalée, chaque décision tracée. La rapidité ne se fait jamais au détriment de la maîtrise.',
      log: {
        title: 'Journal des décisions',
        intro: 'Chaque demande ou recommandation est validée par l’autorité compétente avant toute exécution.',
        tag: 'Exemple',
        entries: [
          { time: '08:42', kind: 'Recommandation · mobilisation de réserve', what: 'Charge prévue du poste source 14 % au-dessus du plan → mise en service de capacités de secours', by: 'Consignée par l’outil d’aide à la décision', status: 'En attente de validation · centre de conduite', state: 'pending', action: 'Valider' },
          { time: '08:15', kind: 'Recommandation · réacheminement', what: 'Temps d’escale en hausse sur 3 routes → transfert de deux départs vers un terminal alternatif', by: 'Consignée par l’outil d’aide à la décision · validée par le responsable logistique d’astreinte (08:21)', status: 'Validée · responsable d’astreinte', state: 'ok' }
        ],
        caption: 'Exemples d’entrées du journal des décisions : qui recommande, qui valide, et quand.'
      },
      loop: { steps: ['L’IA recommande', 'Une personne valide', 'Décision tracée'], back: 'Expliquée et vérifiable à chaque étape' },
      cards: [
        { title: 'L’humain décide, toujours', desc: 'AUi recommande, il n’agit jamais. Celui qui propose ne valide pas.' },
        { title: 'Explicable dès la conception', desc: 'Chaque priorité renvoie à ses données sources et à son raisonnement.' },
        { title: 'Aucune zone d’ombre', desc: 'Chaque source est signalée en direct, simulée ou non raccordée.' },
        { title: 'Piste d’audit fiable', desc: 'Une trace infalsifiable de ce que l’on savait, de qui a décidé et quand.' },
        { title: 'Conformité réglementaire', desc: 'Conçu pour l’AI Act européen et les cadres nationaux émergents.' },
        { title: 'Souveraineté des données', desc: 'Les données de chaque client restent isolées et ne quittent jamais votre déploiement.' }
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
        { title: 'Secteur public', lead: 'Un temps d’avance à chaque échelon.', desc: 'Donnez aux services une même lecture prédictive de la situation, de la gestion courante aux crises majeures, pour traiter les menaces avant qu’elles ne s’aggravent.' },
        { title: 'Infrastructures critiques et OIV', lead: 'Prévenir la prochaine panne.', desc: 'Détectez à temps les défaillances, les menaces et les effets en cascade sur des réseaux interdépendants (énergie, eau, transports, télécommunications) et préservez la continuité des services essentiels.' }
      ],
      sectorsLabel: 'Secteurs',
      sectors: [
        { name: 'Énergie et réseaux', desc: 'Voyez venir les tensions sur le réseau, les défaillances d’équipements et les ruptures d’approvisionnement avant qu’elles n’affectent vos clients.', path: icons.energy },
        { name: 'Transports et logistique', desc: 'Repérez les perturbations naissantes sur les axes, dans les ports et chez les fournisseurs, et réorganisez les flux avant l’effet domino.', path: icons.transport },
        { name: 'Télécommunications', desc: 'Identifiez au plus tôt dégradations de service, coupures de câbles et brouillages, et priorisez les rétablissements.', path: icons.telecoms },
        { name: 'Santé', desc: 'Anticipez afflux de patients et tensions d’approvisionnement dans vos établissements, et adaptez les capacités en amont.', path: icons.health },
        { name: 'Médias et industries culturelles', desc: 'Suivez l’émergence des récits et l’évolution de l’opinion, et désamorcez les risques d’image avant qu’ils ne se propagent.', path: icons.media },
        { name: 'Marchés financiers', desc: 'Surveillez les événements et les ruptures de marché qui font bouger les cours, et mesurez l’exposition de vos positions avant que les cours ne l’intègrent.', path: icons.finance },
        { name: 'Protection civile et feux de forêt', desc: 'Croisez détections satellitaires, météo et signalements de terrain pour confirmer plus tôt les départs de feu et engager au mieux les moyens aériens et terrestres.', path: icons.wildfire },
        { name: 'Marketing', desc: 'Captez au plus tôt les évolutions de la demande, de l’opinion et de la concurrence, et réallouez vos budgets avant que le marché ne réagisse.', path: icons.marketing }
      ],
      swipeHint: 'Faites glisser pour voir les autres secteurs',
      cta: { title: 'Votre secteur', desc: 'Votre secteur n’y figure pas ? Chaque déploiement est conçu sur mesure.', link: 'Parlons de votre besoin', subject: 'AUi Terminal pour mon secteur' }
    },
    company: {
      label: 'Qui sommes-nous',
      before: 'Plus de onze ans à concevoir des ',
      accent: 'systèmes d’intelligence avancés',
      after: '.',
      rest: 'Authentic Intelligence est une société d’intelligence artificielle. Nous concevons et déployons des plateformes d’IA et de données pour des institutions où précision, sécurité et rapidité font la différence.',
      facts: [
        { value: '11+', label: 'Années de projets à fort enjeu' },
        { value: 'Toronto', label: 'Siège social' },
        { value: 'À vos conditions', label: 'Cloud souverain, sur site ou hybride' }
      ],
      line: { before: 'Des secteurs différents. ', accent: 'Une même exigence', after: ' : tenir au moment décisif, rendre des comptes, protéger la confidentialité.' }
    },
    pilot: {
      label: 'Pilote',
      before: 'Mesurez l’apport d’AUi sur ',
      accent: 'vos propres données',
      after: '. Un pilote de quatre mois, au forfait.',
      phasesLabel: 'Déroulé du pilote',
      phases: [
        { when: 'Mois 1', title: 'Raccorder', desc: 'Hébergement sécurisé, rôles et audit activés ; premières sources raccordées.' },
        { when: 'Mois 2', title: 'Calibrer', desc: 'Zones, seuils et moyens locaux réglés ; opérateurs formés sur données réelles.' },
        { when: 'Mois 3', title: 'Exploiter', desc: 'Utilisation réelle sur un secteur prioritaire, décisions tracées et gains mesurés.' },
        { when: 'Mois 4', title: 'Évaluer', desc: 'Un rapport d’évaluation, gains mesurés à l’appui.' }
      ],
      chips: ['4 mois', 'Une région, un site ou un service', 'Prix forfaitaire'],
      rows: [
        { label: 'Durée', value: 'Quatre mois' },
        { label: 'Périmètre', value: 'Une région, un site ou un service' },
        { label: 'Sources', value: 'Une sélection ciblée de vos sources existantes' },
        { label: 'Livrable', value: 'Un rapport d’évaluation établi à partir de vos données' },
        { label: 'Conditions', value: 'Prix forfaitaire' }
      ],
      nextLabel: 'Les prochaines étapes',
      next: ['Nous vous répondons sous deux jours ouvrés.', 'Un échange de 30 minutes avec notre équipe, centré sur vos priorités.', 'Une note de cadrage concise : périmètre, sources, critères de réussite et prix forfaitaire.'],
      button: 'Demander un pilote',
      subject: 'Pilote AUi Terminal'
    },
    form: {
      title: 'Demander une présentation ou un pilote',
      intro: 'Présentez-nous vos objectifs et l’avantage que vous visez.',
      name: 'Nom et prénom',
      email: 'Courriel professionnel',
      org: 'Organisme ou entreprise',
      interest: 'Votre demande',
      interests: ['Une présentation', 'Un pilote', 'Autre demande'],
      sector: 'Secteur',
      sectorPlaceholder: 'Sélectionnez un secteur',
      other: 'Autre',
      message: 'Message',
      messagePlaceholder: 'Vos objectifs, votre environnement opérationnel et les résultats que vous attendez d’AUi.',
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
      tagline: 'AUi Terminal : l’intelligence prédictive, chaque décision tracée.',
      contactLabel: 'Contact',
      legalLabel: 'Informations légales',
      privacy: 'Politique de confidentialité',
      legal: 'Mentions légales',
      location: 'Toronto (Canada)',
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
          { h: 'Éditeur', p: ['Ce site est édité par Authentic Intelligence Inc., Toronto (Ontario), Canada. Contact : {email}.'] },
          { h: 'Hébergement', p: ['Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (vercel.com).'] },
          { h: 'Propriété intellectuelle', p: ['Sauf mention contraire, l’ensemble des contenus de ce site (textes, éléments graphiques, nom AUi Terminal, vues d’interface) est la propriété d’Authentic Intelligence Inc. Toute reproduction sans autorisation préalable est interdite.', 'Données cartographiques figurant dans les vues du produit : © IGN – Géoplateforme.'] },
          { h: 'Vues du produit', p: ['Les vues du produit présentées sur ce site sont illustratives. Les scénarios, sites et chiffres sont donnés à titre indicatif et ne correspondent pas à des données réelles.'] }
        ]
      }
    }
  }
};
