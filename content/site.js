// All copy for authenticintel.com, one entry per language.
// French follows the terminology of the French AUi Terminal deck (Oct 2026).
// French typography: a non-breaking space ( ) precedes : ; ? !

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
    nav: [
      { href: '#objective', num: '01', label: 'MISSION' },
      { href: '#process', num: '02', label: 'PROCESS' },
      { href: '#control', num: '03', label: 'TRUST' },
      { href: '#sectors', num: '04', label: 'WHO WE SERVE' },
      { href: '#pilot', num: '05', label: 'PILOT' }
    ],
    hero: {
      lines: ['ONE VIEW.', 'EVERY SOURCE.'],
      accent: 'EVERY DECISION ON RECORD.',
      sub: 'Predictive intelligence, applied. AUi Terminal is the AI-powered fusion and command layer for enterprise, government and critical national infrastructure.'
    },
    mission: {
      label: '[01] CORE MISSION OBJECTIVE',
      before: 'AUi turns fragmented data into ',
      accent: 'decision advantage',
      after: '.',
      // Starts on its own line after the first sentence
      rest: 'It fuses every source you own or license into one live operating picture, uses AI to detect the weak signals and pattern breaks that precede disruption, and puts a ranked, explained recommendation in front of decision-makers while there is still time to act.',
      problemsLabel: 'THE SIGNAL IS ALREADY IN YOUR DATA. NO ONE SEES IT IN TIME.',
      problems: [
        { title: 'SCATTERED', desc: 'Critical signals sit in disconnected systems (operational platforms, sensors, satellite, weather, field and commercial feeds) that were never built to work together.' },
        { title: 'FRAGMENTED', desc: 'Every team, site and level of command assembles its own picture by hand, under pressure, and rarely the same one.' },
        { title: 'TOO LATE', desc: 'Early warnings are lost in the noise and surface only after the impact. By the time the picture is assembled, the window to act has closed.' }
      ]
    },
    process: {
      label: '[02] FROM SIGNAL TO DECISION',
      diagram: { aria: 'Fuse, verify, predict, decide and act', steps: ['1. FUSE', '2. VERIFY', '3. PREDICT', '4. DECIDE'], last: '& ACT' },
      steps: [
        { title: 'PHASE 01 // FUSE', desc: 'Ready-made adapters ingest and fuse the feeds you already own or license (operational systems, IoT sensors, satellite, weather, video, field reports) into one picture, and add new sources as needed.' },
        { title: 'PHASE 02 // VERIFY', desc: 'Source health is monitored continuously. Broken feeds are flagged and live data is cross-checked for agreement or contradiction.' },
        { title: 'PHASE 03 // PREDICT', desc: 'Machine learning watches every stream around the clock, detects anomalies and trend breaks as they form, and ranks emerging risks and opportunities by urgency, with the reasoning shown.' },
        { title: 'PHASE 04 // DECIDE & ACT', desc: 'AI recommends; your people decide. Each recommendation arrives explained and is logged with who approved it, so the organisation moves faster and with confidence.' }
      ]
    },
    trust: {
      label: '[03] AI YOU CAN TRUST',
      before: 'Powerful AI, ',
      accent: 'with your people firmly in command.',
      after: ' Every prediction is explained, every data gap is disclosed and every decision is on record, so speed never comes at the cost of control.',
      cards: [
        { title: 'HUMAN AUTHORITY, ALWAYS', desc: 'AUi recommends; it never acts. Decisions rest with the accountable owner, and separation of duties is enforced: whoever proposes an action cannot validate it.' },
        { title: 'EXPLAINABLE BY DESIGN', desc: 'No black boxes. Every priority traces back to its source data and the reasoning behind it, presented alongside the recommendation.' },
        { title: 'GAPS DISCLOSED, NEVER HIDDEN', desc: 'Every source carries a status: live, simulated or not connected. Missing telemetry is flagged explicitly, so silence is never mistaken for safety.' },
        { title: 'DEFENSIBLE AUDIT TRAIL', desc: 'A time-stamped, tamper-evident record of what was known, who decided and when. Any decision can be reconstructed for post-incident review, audit or legal scrutiny.' },
        { title: 'REGULATORY ALIGNMENT', desc: 'Architected for the human-oversight, transparency and record-keeping obligations placed on high-risk AI systems, from the EU AI Act to emerging national and sector frameworks.' },
        { title: 'DATA SOVEREIGNTY', desc: 'Each client’s data stays isolated and is never pooled. Models can run locally with no data leaving the deployment, deployable on a certified sovereign cloud or on your own infrastructure.' }
      ]
    },
    serve: {
      label: '[04] WHO WE SERVE',
      accent: 'Engineered for your mission.',
      after: ' Every deployment is shaped around your operating environment, risk profile, data estate and the way your organisation actually makes decisions. It sits above the systems you already run and makes every one of them more valuable.',
      audiences: [
        { title: 'ENTERPRISE', lead: 'See disruption before it hits the P&L.', desc: 'Anticipate operational, supply-chain and site risk across every region, move ahead of competitors, and back every material decision with evidence boards, insurers and regulators trust.' },
        { title: 'GOVERNMENT & PUBLIC SECTOR', lead: 'Decision advantage at every level.', desc: 'Give agencies and every level of command one predictive picture, from day-to-day operations to national emergencies, and act on emerging threats before they escalate.' },
        { title: 'CRITICAL NATIONAL INFRASTRUCTURE', lead: 'Get ahead of the next outage.', desc: 'Detect faults, threats and cascading failures across interdependent energy, water, transport and telecoms networks early enough to intervene, and keep essential services running.' }
      ],
      sectorsLabel: 'SECTORS',
      sectors: [
        { name: 'Civil Protection & Wildfire', tag: 'Pilots open', desc: 'Fuse satellite hotspots, weather and field reports to confirm fires sooner and prioritise air and ground resources.', path: icons.wildfire },
        { name: 'Energy & Utilities', desc: 'Anticipate grid stress, asset failure and supply disruption before they reach customers.', path: icons.energy },
        { name: 'Transport & Logistics', desc: 'See disruption forming across routes, ports and suppliers, and reroute before delays cascade.', path: icons.transport },
        { name: 'Telecommunications', desc: 'Detect network degradation, cable faults and interference early, and prioritise restoration.', path: icons.telecoms },
        { name: 'Healthcare', desc: 'Forecast demand surges and supply shortages across facilities, and align capacity ahead of the peak.', path: icons.health },
        { name: 'Media & Entertainment', desc: 'Track narratives and audience sentiment as they form, and flag reputational risk before it spreads.', path: icons.media },
        { name: 'Financial Markets', desc: 'Detect the real-world events and regime shifts that move markets, and see the risk to positions before prices reflect it.', path: icons.finance },
        { name: 'Marketing', desc: 'Spot shifts in demand, sentiment and competitor activity early, and move budget ahead of the market.', path: icons.marketing }
      ],
      cta: { title: 'Your sector', desc: 'Not listed? Every deployment is engineered for your mission.', link: 'DISCUSS YOUR USE CASE', subject: 'AUi Terminal for my sector' }
    },
    pilot: {
      label: '[05] PILOT',
      before: 'Prove the advantage on ',
      accent: 'your own data',
      after: '. A four-month, fixed-price pilot.',
      rows: [
        { label: 'DURATION', value: 'Four months' },
        { label: 'SCOPE', value: 'One region, site or operational service' },
        { label: 'SOURCES', value: 'A focused selection of your existing data sources' },
        { label: 'OUTCOME', value: 'An evaluation built on your own data' },
        { label: 'TERMS', value: 'Fixed price' }
      ],
      button: 'REQUEST A PILOT',
      subject: 'AUi Terminal pilot'
    },
    inquiries: 'INQUIRIES'
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
    nav: [
      { href: '#objective', num: '01', label: 'MISSION' },
      { href: '#process', num: '02', label: 'PROCESSUS' },
      { href: '#control', num: '03', label: 'CONFIANCE' },
      { href: '#sectors', num: '04', label: 'POUR QUI' },
      { href: '#pilot', num: '05', label: 'PILOTE' }
    ],
    hero: {
      lines: ['UNE VUE UNIQUE.', 'TOUTES LES SOURCES.'],
      accent: 'CHAQUE DÉCISION TRACÉE.',
      // Longer phrases than English: a slightly smaller size keeps the four-line rhythm
      size: 'clamp(34px, 4.9vw, 56px)',
      maxWidth: '680px',
      sub: 'L’intelligence prédictive, appliquée. AUi Terminal est la couche de fusion et de commandement, propulsée par l’IA, des entreprises, de l’État et des infrastructures critiques.'
    },
    mission: {
      label: '[01] OBJECTIF DE LA MISSION',
      before: 'AUi transforme des données fragmentées en ',
      accent: 'avantage décisionnel',
      after: '.',
      rest: 'Il fusionne toutes les sources dont vous disposez, ou que vous exploitez sous licence, en une vue opérationnelle unique et en temps réel, détecte grâce à l’IA les signaux faibles et les ruptures qui annoncent une crise, et présente aux décideurs une recommandation hiérarchisée et expliquée tant qu’il est encore temps d’agir.',
      problemsLabel: 'LE SIGNAL EST DÉJÀ DANS VOS DONNÉES. PERSONNE NE LE VOIT À TEMPS.',
      problems: [
        { title: 'DISPERSION', desc: 'Les signaux critiques sont répartis dans des systèmes cloisonnés (plateformes opérationnelles, capteurs, satellites, météo, terrain et flux commerciaux) qui n’ont jamais été conçus pour fonctionner ensemble.' },
        { title: 'FRAGMENTATION', desc: 'Chaque équipe, chaque site et chaque niveau de commandement reconstitue sa propre vue à la main, sous pression, et rarement la même.' },
        { title: 'TROP TARD', desc: 'Les alertes précoces se perdent dans le bruit et n’apparaissent qu’après l’impact. Le temps de reconstituer la situation, la fenêtre d’action s’est refermée.' }
      ]
    },
    process: {
      label: '[02] DU SIGNAL À LA DÉCISION',
      diagram: { aria: 'Fusionner, vérifier, prédire, décider et agir', steps: ['1. FUSIONNER', '2. VÉRIFIER', '3. PRÉDIRE', '4. DÉCIDER'], last: 'ET AGIR' },
      steps: [
        { title: 'PHASE 01 // FUSIONNER', desc: 'Des connecteurs prêts à l’emploi intègrent et fusionnent en une vue unique les flux dont vous disposez déjà ou que vous exploitez sous licence (systèmes opérationnels, capteurs IoT, satellites, météo, vidéo, rapports de terrain), et en ajoutent de nouveaux selon les besoins.' },
        { title: 'PHASE 02 // VÉRIFIER', desc: 'L’état des sources est surveillé en continu. Les flux interrompus sont signalés et les données en direct sont recoupées pour détecter les concordances et les contradictions.' },
        { title: 'PHASE 03 // PRÉDIRE', desc: 'L’apprentissage automatique surveille chaque flux en permanence, détecte les anomalies et les ruptures de tendance dès qu’elles se forment, et classe les risques et opportunités émergents par urgence, raisonnement à l’appui.' },
        { title: 'PHASE 04 // DÉCIDER ET AGIR', desc: 'L’IA recommande, vos équipes décident. Chaque recommandation est expliquée et inscrite avec le nom de la personne qui l’a approuvée : l’organisation agit plus vite, en toute confiance.' }
      ]
    },
    trust: {
      label: '[03] UNE IA DE CONFIANCE',
      before: 'Une IA puissante, ',
      accent: 'avec vos équipes fermement aux commandes.',
      after: ' Chaque prédiction est expliquée, chaque lacune de données est signalée et chaque décision est tracée : la vitesse ne se paie jamais d’une perte de contrôle.',
      cards: [
        { title: 'L’HUMAIN DÉCIDE, TOUJOURS', desc: 'AUi recommande, il n’agit jamais. Les décisions reviennent au responsable désigné, et le principe des quatre yeux s’applique : celui qui propose ne valide pas.' },
        { title: 'EXPLICABLE PAR CONCEPTION', desc: 'Aucune boîte noire. Chaque priorité renvoie à ses données sources et au raisonnement qui la fonde, présentés à côté de la recommandation.' },
        { title: 'LACUNES SIGNALÉES, JAMAIS MASQUÉES', desc: 'Chaque source affiche son statut : en direct, simulée ou non raccordée. La télémétrie manquante est signalée explicitement : le silence n’est jamais pris pour un signe de sécurité.' },
        { title: 'PISTE D’AUDIT DÉFENDABLE', desc: 'Une main courante horodatée et infalsifiable de ce qui était connu, de qui a décidé et quand. Toute décision peut être reconstituée pour un retour d’expérience, un audit ou un examen juridique.' },
        { title: 'CONFORMITÉ RÉGLEMENTAIRE', desc: 'Conçu pour les obligations de supervision humaine, de transparence et de traçabilité imposées aux systèmes d’IA à haut risque, du règlement européen sur l’IA (AI Act) aux cadres nationaux et sectoriels émergents.' },
        { title: 'SOUVERAINETÉ DES DONNÉES', desc: 'Les données de chaque client restent isolées et ne sont jamais mutualisées. Les modèles peuvent s’exécuter localement, sans flux sortant, sur un cloud souverain qualifié ou sur votre propre infrastructure.' }
      ]
    },
    serve: {
      label: '[04] POUR QUI',
      accent: 'Conçu pour votre mission.',
      after: ' Chaque déploiement est adapté à votre environnement opérationnel, à votre profil de risque, à votre patrimoine de données et à la manière dont votre organisation prend réellement ses décisions. Il se place au-dessus des systèmes que vous exploitez déjà et renforce la valeur de chacun.',
      audiences: [
        { title: 'ENTREPRISES', lead: 'Voir la perturbation avant qu’elle ne touche vos résultats.', desc: 'Anticipez les risques opérationnels, logistiques et liés à vos sites dans toutes vos régions, prenez l’avantage sur vos concurrents et étayez chaque décision importante par des éléments reconnus par les conseils d’administration, les assureurs et les régulateurs.' },
        { title: 'ÉTAT ET SECTEUR PUBLIC', lead: 'L’avantage décisionnel à chaque niveau.', desc: 'Donnez aux services et à chaque niveau de commandement une même vue prédictive, des opérations courantes aux crises nationales, et agissez sur les menaces émergentes avant qu’elles ne s’aggravent.' },
        { title: 'INFRASTRUCTURES CRITIQUES', lead: 'Anticiper la prochaine panne.', desc: 'Détectez les défaillances, menaces et effets en cascade sur les réseaux interdépendants d’énergie, d’eau, de transport et de télécommunications assez tôt pour intervenir, et assurez la continuité des services essentiels.' }
      ],
      sectorsLabel: 'SECTEURS',
      sectors: [
        { name: 'Protection civile et feux de forêt', tag: 'Pilotes ouverts', desc: 'Fusionnez les détections satellitaires de points chauds, la météo et les signalements de terrain pour confirmer les feux plus tôt et prioriser les moyens aériens et terrestres.', path: icons.wildfire },
        { name: 'Énergie et services publics', desc: 'Anticipez les tensions sur le réseau, les défaillances d’équipements et les ruptures d’approvisionnement avant qu’elles n’atteignent vos clients.', path: icons.energy },
        { name: 'Transport et logistique', desc: 'Repérez les perturbations qui se forment sur les itinéraires, dans les ports et chez les fournisseurs, et réorientez les flux avant que les retards ne s’enchaînent.', path: icons.transport },
        { name: 'Télécommunications', desc: 'Détectez tôt la dégradation des réseaux, les coupures de câbles et les interférences, et priorisez le rétablissement.', path: icons.telecoms },
        { name: 'Santé', desc: 'Anticipez les pics de demande et les pénuries dans vos établissements, et ajustez les capacités avant qu’ils ne surviennent.', path: icons.health },
        { name: 'Médias et divertissement', desc: 'Suivez les récits et le sentiment du public dès qu’ils émergent, et signalez les risques de réputation avant qu’ils ne se propagent.', path: icons.media },
        { name: 'Marchés financiers', desc: 'Détectez les événements réels et les changements de régime qui font bouger les marchés, et mesurez le risque sur vos positions avant que les prix ne le reflètent.', path: icons.finance },
        { name: 'Marketing', desc: 'Repérez tôt l’évolution de la demande, du sentiment et de l’activité concurrente, et réallouez vos budgets avant que le marché ne réagisse.', path: icons.marketing }
      ],
      cta: { title: 'Votre secteur', desc: 'Il n’est pas listé ? Chaque déploiement est conçu pour votre mission.', link: 'PARLONS DE VOTRE CAS D’USAGE', subject: 'AUi Terminal pour mon secteur' }
    },
    pilot: {
      label: '[05] PILOTE',
      before: 'Démontrez l’avantage sur ',
      accent: 'vos propres données',
      after: '. Un pilote de quatre mois, à prix forfaitaire.',
      rows: [
        { label: 'DURÉE', value: 'Quatre mois' },
        { label: 'PÉRIMÈTRE', value: 'Une région, un site ou un service opérationnel' },
        { label: 'SOURCES', value: 'Une sélection ciblée de vos sources de données existantes' },
        { label: 'RÉSULTAT', value: 'Une évaluation fondée sur vos propres données' },
        { label: 'CONDITIONS', value: 'Prix forfaitaire' }
      ],
      button: 'DEMANDER UN PILOTE',
      subject: 'Pilote AUi Terminal'
    },
    inquiries: 'CONTACT'
  }
};
