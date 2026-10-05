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
    techstack: 'Blijft lokaal',
    roadmap: 'Ecosysteem',
    download: 'Download',
    login: 'Inloggen',
    github: 'GitHub',
    docs: 'Docs',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Scène-plugins · Lijnoptiek · WebRTC-beeld',
    title: 'Scène-intelligentie · Lijnoptiek',
    titleGradient: 'Eén visieplatform voor je camera’s',
    tagline: 'Winkels, magazijnen en productielijnen. Eén software.',
    description:
      'Camera’s die er al staan, sluit je aan via RTSP / ONVIF. Nieuwe posities kunnen een professionele cameramodule op maat krijgen. Live beeld gaat via WebRTC.',
    ctaPrimary: 'Een scène bespreken',
    ctaSecondary: 'Documentatie',
    archCanvas: 'Van camera naar melding',
    input: 'Aansluiten',
    coreEngine: 'Begrijpen',
    pluginPipeline: 'Wat je krijgt',
    inputSource: 'Jouw camera’s',
    coreTitle: 'VistaCast',
    coreNote: 'Leest het beeld en waarschuwt wie het moet weten',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: 'Retail', status: 'Bezoek · uren' },
    warehouse: { name: 'Magazijn', status: 'Nacht · perimeter' },
    industrial: { name: 'Industriële veiligheid', status: 'Gevarenzone' },
    aoi: { name: 'Lijnoptiek', status: 'Soldeer · ontbrekend' },
    legendDeployed: 'Retail, magazijn, lijnoptiek en veiligheid op één motor.',
    legendPlanned: 'Geleverd per scène',
    legendLatency: 'Live beeld via WebRTC',
  },
  strategy: {
    title: 'Zo wordt de vloer als het aanstaat',
    subtitle:
      'De winkelmanager ziet het bezoek van vandaag. Komt er ’s nachts iemand het magazijn in, dan weet de dienstdoende het. Het lijnstation vindt ontbrekende onderdelen en soldeerproblemen. Fabriek, thuis en terrein stel je in op jouw vloer.',
    tabRetail: 'Retail',
    tabWarehouse: 'Magazijn',
    tabIndustrial: 'Industriële veiligheid',
    coreCapabilities: 'Wat het doet',
    businessGoal: 'Waarom het ertoe doet',
    scenarios: [
      {
        tab: 'Retail',
        tag: 'Winkel',
        scene: 'Theewinkels, fastfood en ketens',
        capabilities: ['Bezoek bij de ingang', 'Vergelijking per periode', 'Hot zones en verblijf', 'Meldingen in de tools die je al gebruikt'],
        goal: 'De manager ziet hoe het verkeer verandert, in plaats van alleen video terug te kijken.',
      },
      {
        tab: 'Magazijn',
        tag: 'Magazijn',
        scene: 'Magazijnen en nachtwacht',
        capabilities: ['Afgesloten zones na sluiting', 'Gangen en perimeter', 'Roosters per dienst', 'Meldingen naar de wachtdienst'],
        goal: 'Komt er ’s nachts iemand binnen, dan weet de dienstdoende het meteen.',
      },
      {
        tab: 'Lijnoptiek',
        tag: 'Lijn',
        scene: 'PCB, assemblage, labels en lijmbanen',
        capabilities: ['Ontbrekend, fout of verschoven', 'Soldeer: brug, holte en koude las', 'Barcode en label aanwezig', 'Draait op de pc van het station'],
        goal: 'Optische inspectie blijft op het station dat je al hebt.',
      },
      {
        tab: 'Industriële veiligheid',
        tag: 'Fabriek',
        scene: 'Gevarenzones en werkplaatsen',
        capabilities: ['Persoon in een gevarenzone', 'Val en rook', 'Zones op het beeld', 'Meldingen naar bestaande systemen'],
        goal: 'Iemand in de gevarenzone geeft nu een melding, niet pas in een opname.',
      },
      {
        tab: 'Thuiszorg',
        tag: 'Zorg',
        scene: 'Veiligheid thuis en ouderenzorg',
        capabilities: ['Valmelding', 'Ongewone nachtelijke activiteit', 'Familie in volgorde waarschuwen', 'Een mens beslist de volgende stap'],
        goal: 'Gebeurt er thuis iets, dan wordt een persoon gewaarschuwd en die kiest.',
      },
      {
        tab: 'Perimeter',
        tag: 'Perimeter',
        scene: 'Terreinperimeter en camera offline',
        capabilities: ['Binnenkomst op de perimeter', 'Camera offline', 'Dezelfde meldingen als het magazijn', 'In de wachtdienst'],
        goal: 'Een gekruiste perimeter en een dode camera worden gebeurtenissen die iemand kan oppakken.',
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
        title: 'Hoe camera’s aansluiten',
        description:
          'Camera’s die er al staan, sluit je aan via RTSP / ONVIF. Nieuwe posities kunnen een professionele module op maat krijgen.',
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
    title: 'De visie-schakel: van camera naar een gebeurtenis die je kunt oppakken',
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
    badge: 'Geleverd per scène',
    title: 'Vorm samen de toekomst van ruimtelijke intelligentie',
    description:
      'Een winkel, een magazijn, een lijn of zorg thuis. Bestaande camera’s kunnen aansluiten. De scène wordt op dezelfde motor geleverd.',
    perks: [
      'Werkt met bestaande camera’s',
      'Live beeld via WebRTC',
      'Scènes op aanvraag',
      'Data blijft op locatie',
    ],
    primary: 'Een scène bespreken',
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
  download: {
    metaTitle: 'VistaCast downloaden',
    metaDescription:
      'Download het VistaCast-winkelwerkstation (Windows / macOS) en de Android-companion-APK. Installers wijzen altijd naar de nieuwste release.',
    ogAlt: 'VistaCast downloaden',
    title: 'VistaCast downloaden',
    latest: 'Nieuwste {{version}}:',
    lead: 'Winkelwerkstation voor Windows en macOS, plus een optionele Android-sideload-APK. De knoppen wijzen altijd naar de nieuwste installer.',
    hostedBefore: 'Installers staan in de openbare repository',
    hostedAfter: ' (de bronrepository blijft privé).',
    unsigned:
      'Installers zijn niet ondertekend of genotariseerd. Kies bij Windows SmartScreen "Toch uitvoeren". Klik op macOS met de rechtermuisknop op de app en kies Open. Android vereist onbekende bronnen.',
    workstation: 'Winkelwerkstation',
    workstationBody:
      'Electron-app: lokale Detect- / Admin-shell. Admin en client-infer moeten bereikbaar zijn op deze computer of in het LAN.',
    winSetup: 'Windows-installer (NSIS)',
    winPortable: 'Windows portable',
    macDmg: 'macOS DMG',
    android: 'Android-companion',
    androidBody:
      'Sideload-APK (niet in Play). Als deze release nog geen APK heeft, gebruik Expo Go of wacht op een latere build.',
    apk: 'APK downloaden',
    backHome: '← Terug naar home',
    deviceDocs: 'Documentatie apparaatkoppeling',
  },
}

export default nl
