import type { Messages } from '../types'

const nl: Messages = {
  meta: {
    title: 'VistaCast — Plugin-gebaseerde AI-camerabewaking in de cloud',
    description:
      'Alleen-software AI-video edge computing. WebRTC-voorvertoning in minder dan een seconde, bestaande RTSP/ONVIF-camera\'s, kernengine + hot-pluggable plugins, full-stack TypeScript/Rust-extensibiliteit voor het Vibe Coding-tijdperk.',
    ogTitle: 'VistaCast',
    ogDescription:
      'Plugin-gebaseerde AI-camerabewaking in de cloud met lage-latency WebRTC en TypeScript/Rust-vriendelijke extensibiliteit',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'Kernarchitectuur',
    plugins: 'Branchespecifieke plugins',
    techstack: 'Tech stack & ecosysteem',
    roadmap: 'Roadmap',
    login: 'Inloggen',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'Maak van elke camera een gestructureerde datastroom van de fysieke wereld',
    description:
      'Een alleen-software AI-video edge-platform. Geen hardwarevervanging — werkt met bestaande RTSP/ONVIF-apparaten. WebRTC levert milliseconden-snelle directe voorvertoning. Gebouwd op een kernengine + hot-pluggable plugin-architectuur met volledige TypeScript/Rust-extensibiliteit voor het Vibe Coding-tijdperk.',
    ctaPrimary: 'Pilot boeken',
    ctaSecondary: 'GitHub-documentatie',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: 'Retail', status: 'Uitgerold (bezoekersaantallen/wachtrijen)' },
    warehouse: { name: 'Magazijn', status: 'Uitgerold (nachtbeveiliging)' },
    industrial: { name: 'Industriële veiligheid', status: 'Gepland (rook/val)' },
    legendDeployed: 'Commercieel uitgerold',
    legendPlanned: 'Door community gepland',
    legendLatency: '<500ms WebRTC-latency',
  },
  strategy: {
    title: 'Strategische focus: scenarioplugins voor overleving en schaal',
    subtitle:
      'Als startup weten we dat te veel tegelijk mislukt. We ontkoppelen de kern van commerciële scenario\'s — eerst high-frequency, omzetdrijvende lichte scenario\'s perfect maken; daarna uitbreiden via community-gedreven plugins.',
    tabRetail: 'Retail (kern)',
    tabWarehouse: 'Magazijn (kern)',
    tabIndustrial: 'Industrie & long-tail (plugins)',
    coreCapabilities: 'Kernmogelijkheden',
    businessGoal: 'Bedrijfsdoel',
    scenarios: [
      {
        tag: 'Branchespecifieke oplossing',
        scene: 'Bubble tea / QSR / ketenzaken',
        capabilities: [
          'Bezoekerstelling & periodieke vergelijking',
          'Detectie wachttijd bij kassa',
          'Realtime waarschuwingen tijdens piekuren',
          'Automatisch ROI-rapport per winkel',
        ],
        goal: 'ROI per winkel voor klanten verhogen en teamomzet versnellen',
      },
      {
        tag: 'Enterprise & overheid',
        scene: 'Industrieterreinen / onbemande magazijnen',
        capabilities: [
          'Whitelist-authenticatie onbekende gezichten',
          'Realtime waarschuwingen bij nachtelijke afwijkingen',
          'Indringingsdetectie in verboden zones',
          'Gestructureerd beveiligingsgebeurtenissenarchief',
        ],
        goal: 'Essentiële beveiligingsbehoeften dekken met hoogwaardige levering',
      },
      {
        tag: 'AI-extensibiliteit',
        scene: 'Fabrieken / brandrisicozones / landbouw',
        capabilities: [
          'Detectie ongeautoriseerde toegang',
          'Herkenning van vallen / uitglijden',
          'Rook- & open-vlamdetectie',
          'Integratie community-modellen van derden',
        ],
        goal: 'Lage-kosten uitbreiding via open community en third-party modelplugins',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding-vriendelijke moderne full-stack basis',
    subtitle:
      'Eén uniforme stack — geen legacy ballast. Laat AI je beste co-piloot zijn voor maatwerk.',
    items: [
      {
        title: 'Kern streaming-gateway',
        description:
          'High-performance demux en WebRTC-forwarding met minimaal geheugen — ultra-laag verbruik aan de edge. Geen GC-pauzes, milliseconden-latency.',
      },
      {
        title: 'Enterprise business core',
        description:
          'Afgestemd op frontend-talen. Duidelijke modulaire architectuur met 95%+ AI-promptbegrip — scaffold een branchespecifieke plugin in minuten met Vibe Coding.',
      },
      {
        title: 'Betrouwbare databasis',
        description:
          'Standaard relationeel model voor gestructureerde ruimtelijke gebeurtenissen. Eenvoudige migratie en schaalbaarheid. TimescaleDB-tijdreeksuitbreiding ondersteund.',
      },
      {
        title: 'Zero-latency realtime perceptie',
        description:
          'Laat legacy streams van 3–5 s achter je. Cross-platform, plugin-vrije <500ms directe voorvertoning. End-to-end encryptie, ontwerpmatig kapingbestendig.',
      },
    ],
    deployLabel: 'Lokale deploy met één klik',
    tagSetup: '30 min setup',
    tagSovereignty: 'Data blijft on-prem',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'Een event-driven engine — geen traditionele DVR',
    subtitle: 'Zes kernmogelijkheden die herdefiniëren wat camera\'s kunnen doen.',
    items: [
      {
        title: 'Geen hardwarevervanging',
        description:
          'Hergebruik Hikvision-, Dahua- en generieke IP-camera\'s. 100% compatibel met ONVIF/RTSP-apparaten.',
      },
      {
        title: 'Open rule engine',
        description:
          'Teken willekeurige ROI-vormen en combineer tijd-, ruimte- en actietriggers flexibel.',
      },
      {
        title: 'Pluggable AI-modellen',
        description:
          'Kern losgekoppeld van algoritmen. Hot-swap YOLO, RT-DETR en meer — geen vendor lock-in.',
      },
      {
        title: 'Docker one-liner deploy',
        description:
          'Zet lokaal in 30 minuten een volledig AI-videocomputecentrum op. Datsoevereiniteit gegarandeerd.',
      },
      {
        title: 'Privacy by design',
        description:
          'Gezichtsvervaging aan de edge, werknemersmonitoring standaard uit. GDPR-ready privacyhouding.',
      },
      {
        title: 'Open ecosysteem-outputs',
        description:
          'Ingebouwde Webhook & MQTT — integreer Feishu, DingTalk of industriële gateways in seconden.',
      },
    ],
  },
  ecosystem: {
    title: 'De «visie»-schakel in een waardeketen van zes producten',
    subtitle:
      'VistaCast is geen geïsoleerde SaaS — het is een sleutelstuk van het LuminaryWorks-ruimtelijke intelligentie-ecosysteem.',
    youAreHere: 'U BENT HIER',
    synergyTitle: 'Technische synergieën',
    products: [
      { subtitle: 'Visuele orchestratie', role: 'Orkestreren' },
      { subtitle: 'IoT-inname', role: 'Innemen' },
      { subtitle: 'BI-analyse', role: 'Analyseren' },
      { subtitle: 'AI-visie', role: 'Waarnemen' },
      { subtitle: 'Remote interventie', role: 'Ingrijpen' },
      { subtitle: 'Waardenetwerk', role: 'Waarde' },
    ],
    synergies: [
      {
        desc: 'Gestructureerde data van VistaCast stroomt naar DataLuminary voor automatisch gegenereerde ruimtelijke dashboards.',
      },
      {
        desc: 'Hoog-risicowaarschuwingen activeren SyncroBrain om fysieke hardware aan te sturen — software-naar-wereld automatisering.',
      },
      {
        desc: 'VistaRemote met één klik wakker maken voor menselijke bevestiging en realtime controle om de loop te sluiten.',
      },
    ],
    baseNote:
      'Gebouwd op een uniform TypeScript / NestJS-ecosysteem — zes producten delen types, moduleconventies en deploymentstandaarden.',
  },
  comparison: {
    title: 'Broers met duidelijke rollen: VistaCast vs VistaRemote',
    subtitle:
      'Beide onder LuminaryWorks — complementaire taakverdeling voor ruimtelijke perceptie en uitvoering.',
    columnDimension: 'Dimensie',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: 'Fysiek medium',
        vistacast: 'Vaste beveiligingscamera\'s (ONVIF / RTSP)',
        vistaremote: 'Mobiel / desktop / robots (WebRTC)',
      },
      {
        dimension: 'Kernwaarde',
        vistacast: 'AI-perceptie, gestructureerde ruimtelijke data, automatische waarschuwingen',
        vistaremote: 'Remote menselijke interventie, bidirectionele controle, auditopname',
      },
      {
        dimension: 'Synergielogica',
        vistacast: 'Detecteert ruimtelijke afwijkingen, zendt signalen (automatiseringbron)',
        vistaremote: 'Ontvangt signalen, remote overname (uitvoering & afsluiting)',
      },
    ],
    synergyTitle: 'Typisch synergiescenario:',
    synergyBody:
      'VistaCast detecteert \'s nachts indringer in magazijn → waarschuwing naar Feishu → dienstdoende medewerker maakt VistaRemote wakker → tweerichtingsluidsprekercommunicatie en opname. Samen: geautomatiseerde perceptie + menselijke interventie.',
  },
  cta: {
    badge: 'Early Access · M1-pilot open',
    title: 'Vorm samen de toekomst van ruimtelijke intelligentie',
    description:
      'Ervaar de vloeiendheid van WebRTC en een moderne full stack. Of u nu ketenoperator of ontwikkelaar bent — doe mee aan het vormgeven van de M1-pilot.',
    perks: [
      'Gratis M1-pilottoegang',
      'Lage-latency WebRTC',
      'Volledige broncodetoegang',
      'Toegewijde support',
    ],
    primary: 'Vroege pilot boeken (gratis)',
    secondary: 'Ster geven op GitHub',
    finePrint: 'Geen creditcard · datsoevereiniteit · altijd opzegbaar',
  },
  footer: {
    docs: 'Documentatie',
    github: 'GitHub',
    ecosystem: 'LuminaryWorks-ecosysteem',
    privacy: 'Privacy & compliance',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Technologie ten goede — werknemersgedragmonitoring standaard uit. Privacy is onze standaardhouding, geen feature.',
  },
}

export default nl
