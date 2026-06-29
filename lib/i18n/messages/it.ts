import type { Messages } from '../types'

const it: Messages = {
  meta: {
    title: 'VistaCast — Monitoraggio cloud di telecamere AI basato su plugin',
    description:
      'Edge computing video AI solo software. Anteprima WebRTC sub-secondo, telecamere RTSP/ONVIF legacy, motore core + plugin hot-pluggable, estensibilità full-stack TypeScript/Rust per l\'era del Vibe Coding.',
    ogTitle: 'VistaCast',
    ogDescription:
      'Monitoraggio cloud di telecamere AI basato su plugin, WebRTC a bassa latenza ed estensibilità TypeScript/Rust',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'Architettura core',
    plugins: 'Plugin di settore',
    techstack: 'Stack tecnologico ed ecosistema',
    roadmap: 'Roadmap',
    login: 'Accedi',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'Trasforma ogni telecamera in un flusso di dati strutturati del mondo fisico',
    description:
      'Piattaforma edge video AI solo software. Nessuna sostituzione hardware — funziona con dispositivi RTSP/ONVIF esistenti. WebRTC offre anteprima istantanea a livello di millisecondi. Architettura motore core + plugin hot-pluggable con piena estensibilità TypeScript/Rust per l\'era del Vibe Coding.',
    ctaPrimary: 'Prenota un pilota',
    ctaSecondary: 'Documentazione GitHub',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: 'Retail', status: 'Distribuito (affluenza/code)' },
    warehouse: { name: 'Magazzino', status: 'Distribuito (sicurezza notturna)' },
    industrial: { name: 'Sicurezza industriale', status: 'Pianificato (fumo/cadute)' },
    legendDeployed: 'Distribuito commercialmente',
    legendPlanned: 'Pianificato dalla community',
    legendLatency: '<500ms latenza WebRTC',
  },
  strategy: {
    title: 'Focus strategico: plugin di scenario per sopravvivere e scalare',
    subtitle:
      'Come startup, sappiamo che espandersi troppo fallisce. Decouplamo il core dagli scenari commerciali — prima consolidiamo scenari leggeri ad alta frequenza che generano ricavi; poi espandiamo con plugin guidati dalla community.',
    tabRetail: 'Retail (core)',
    tabWarehouse: 'Magazzino (core)',
    tabIndustrial: 'Industriale e long-tail (plugin)',
    coreCapabilities: 'Capacità core',
    businessGoal: 'Obiettivo di business',
    scenarios: [
      {
        tag: 'Soluzione di settore',
        scene: 'Bubble tea / QSR / catene di negozi',
        capabilities: [
          'Conteggio affluenza e confronto per periodo',
          'Rilevamento durata code alla cassa',
          'Avvisi in tempo reale nelle ore di punta',
          'Generazione automatica report ROI per negozio',
        ],
        goal: 'Aumentare il ROI per negozio dei clienti e accelerare i ricavi del team',
      },
      {
        tag: 'Enterprise e PA',
        scene: 'Parchi industriali / magazzini non presidiati',
        capabilities: [
          'Autenticazione whitelist volti sconosciuti',
          'Avvisi in tempo reale anomalie notturne',
          'Rilevamento intrusione in zone ristrette',
          'Archivio strutturato eventi di sicurezza',
        ],
        goal: 'Soddisfare esigenze essenziali di sicurezza con consegna ad alto valore',
      },
      {
        tag: 'Estensibilità AI',
        scene: 'Fabbriche / zone a rischio incendio / agricoltura',
        capabilities: [
          'Rilevamento accessi non autorizzati',
          'Riconoscimento cadute / scivolamenti',
          'Rilevamento fumo e fiamme libere',
          'Integrazione modelli di terze parti dalla community',
        ],
        goal: 'Espansione a basso costo tramite community aperta e plugin di modelli di terze parti',
      },
    ],
  },
  techstack: {
    title: 'Fondazione full-stack moderna compatibile con Vibe Coding',
    subtitle: 'Uno stack unificato — nessun legacy. Lascia che l\'AI sia il tuo miglior co-pilota per la personalizzazione.',
    items: [
      {
        title: 'Gateway di streaming core',
        description:
          'Demux ad alte prestazioni e inoltro WebRTC con memoria minima — ultra basso consumo al edge. Zero pause GC, latenza millisecondi.',
      },
      {
        title: 'Core business enterprise',
        description:
          'Allineato ai linguaggi frontend. Architettura modulare chiara con oltre il 95% di comprensione nei prompt AI — scaffolda un plugin di settore personalizzato in minuti con Vibe Coding.',
      },
      {
        title: 'Fondazione dati affidabile',
        description:
          'Modello relazionale standard per eventi spaziali strutturati. Migrazione e scaling semplici. Estensione time-series TimescaleDB supportata.',
      },
      {
        title: 'Percezione real-time a latenza zero',
        description:
          'Lascia alle spalle stream legacy da 3–5s. Anteprima istantanea cross-platform senza plugin <500ms. Crittografia end-to-end, resistente al dirottamento by design.',
      },
    ],
    deployLabel: 'Deploy locale con un clic',
    tagSetup: 'Setup in 30 min',
    tagSovereignty: 'Dati on-premise',
    tagLicense: 'MIT License',
  },
  features: {
    title: 'Un motore event-driven — non un DVR tradizionale',
    subtitle: 'Sei capacità core che ridefiniscono cosa possono fare le telecamere.',
    items: [
      {
        title: 'Zero sostituzione hardware',
        description:
          'Riutilizza telecamere IP Hikvision, Dahua e generiche. Compatibilità al 100% con dispositivi ONVIF/RTSP.',
      },
      {
        title: 'Motore di regole aperto',
        description:
          'Disegna ROI di forme arbitrarie e componi trigger tempo + spazio + azione con flessibilità.',
      },
      {
        title: 'Modelli AI plug-in',
        description:
          'Core disaccoppiato dagli algoritmi. Hot-swap YOLO, RT-DETR e altri — nessun vendor lock-in.',
      },
      {
        title: 'Deploy Docker in una riga',
        description:
          'Avvia un centro completo di compute video AI in locale in 30 minuti. Soberanità dei dati garantita.',
      },
      {
        title: 'Privacy by design',
        description:
          'Sfocatura volti al edge, monitoraggio dipendenti disattivato di default. Postura privacy pronta per GDPR.',
      },
      {
        title: 'Output ecosistema aperto',
        description:
          'Webhook e MQTT integrati — integra Feishu, DingTalk o gateway industriali in secondi.',
      },
    ],
  },
  ecosystem: {
    title: 'Il collegamento «visione» in una catena del valore a sei prodotti',
    subtitle:
      'VistaCast non è un SaaS isolato — è un pezzo chiave dell\'ecosistema di intelligenza spaziale LuminaryWorks.',
    youAreHere: 'SEI QUI',
    synergyTitle: 'Sinergie tecniche',
    products: [
      { subtitle: 'Orchestrazione visiva', role: 'Orchestrare' },
      { subtitle: 'Ingestion IoT', role: 'Ingerire' },
      { subtitle: 'Analitica BI', role: 'Analizzare' },
      { subtitle: 'Visione AI', role: 'Percepire' },
      { subtitle: 'Intervento remoto', role: 'Intervenire' },
      { subtitle: 'Rete del valore', role: 'Valore' },
    ],
    synergies: [
      {
        desc: 'Dati strutturati da VistaCast verso DataLuminary per dashboard spaziali autogenerate.',
      },
      {
        desc: 'Avvisi ad alto rischio attivano SyncroBrain per azionare hardware fisico — automazione software-mondo.',
      },
      {
        desc: 'Wake-up VistaRemote con un clic per conferma umana e controllo real-time che chiude il loop.',
      },
    ],
    baseNote:
      'Costruito su un ecosistema unificato TypeScript / NestJS — sei prodotti condividono tipi, convenzioni modulari e standard di deploy.',
  },
  comparison: {
    title: 'Prodotti gemelli con ruoli chiari: VistaCast vs VistaRemote',
    subtitle:
      'Entrambi sotto LuminaryWorks — divisione complementare del lavoro per percezione spaziale ed esecuzione.',
    columnDimension: 'Dimensione',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: 'Medium fisico',
        vistacast: 'Telecamere di sicurezza fisse (ONVIF / RTSP)',
        vistaremote: 'Mobile / desktop / robot (WebRTC)',
      },
      {
        dimension: 'Valore core',
        vistacast: 'Percezione AI, dati spaziali strutturati, avvisi automatici',
        vistaremote: 'Intervento umano remoto, controllo bidirezionale, registrazione audit',
      },
      {
        dimension: 'Logica di sinergia',
        vistacast: 'Rileva anomalie spaziali, emette segnali (fonte automazione)',
        vistaremote: 'Riceve segnali, takeover remoto (esecuzione e chiusura)',
      },
    ],
    synergyTitle: 'Scenario di sinergia tipico:',
    synergyBody:
      'VistaCast rileva intruso notturno in magazzino → avviso su Feishu → personale di turno attiva VistaRemote → comunicazione bidirezionale via altoparlante e registrazione. Insieme: percezione automatizzata + intervento umano.',
  },
  cta: {
    badge: 'Early Access · pilota M1 aperto',
    title: 'Plasmiamo insieme il futuro dell\'intelligenza spaziale',
    description:
      'Prova la fluidità di WebRTC e uno stack moderno completo. Che tu sia un operatore di catena o uno sviluppatore — unisciti a noi per plasmare il pilota M1.',
    perks: ['Accesso gratuito pilota M1', 'WebRTC a bassa latenza', 'Accesso completo al sorgente', 'Supporto dedicato'],
    primary: 'Prenota pilota anticipato (gratis)',
    secondary: 'Stella su GitHub',
    finePrint: 'Nessuna carta di credito · soberanità dati · esci quando vuoi',
  },
  footer: {
    docs: 'Documentazione',
    github: 'GitHub',
    ecosystem: 'Ecosistema LuminaryWorks',
    privacy: 'Privacy e conformità',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Tecnologia per il bene — monitoraggio comportamento dipendenti disattivato di default. La privacy è la nostra postura predefinita, non una funzione.',
  },
}

export default it
