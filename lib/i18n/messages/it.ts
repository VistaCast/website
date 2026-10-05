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
    techstack: 'Resta in locale',
    roadmap: 'Ecosistema',
    download: 'Download',
    login: 'Accedi',
    github: 'GitHub',
    docs: 'Docs',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Plugin di scena · Ottica di linea · Anteprima WebRTC',
    title: 'Intelligenza di scena · Ottica di linea',
    titleGradient: 'Una piattaforma di visione per le tue telecamere',
    tagline: 'Negozi, magazzini e linee. Un solo software.',
    description:
      'Le telecamere già in sede si collegano via RTSP / ONVIF. Le nuove postazioni possono avere un modulo telecamera professionale su misura. Il vivo passa da WebRTC.',
    ctaPrimary: 'Parlare di una scena',
    ctaSecondary: 'Documentazione',
    archCanvas: 'Dalla telecamera all’avviso',
    input: 'Collegamento',
    coreEngine: 'Capire',
    pluginPipeline: 'Quello che ricevi',
    inputSource: 'Le tue telecamere',
    coreTitle: 'VistaCast',
    coreNote: 'Capisce l’immagine e avvisa chi deve saperlo',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: 'Retail', status: 'Flussi · orari' },
    warehouse: { name: 'Magazzino', status: 'Notte · perimetro' },
    industrial: { name: 'Sicurezza industriale', status: 'Zona di rischio' },
    aoi: { name: 'Ottica di linea', status: 'Saldatura · mancante' },
    legendDeployed: 'Retail, magazzino, ottica di linea e sicurezza sullo stesso motore.',
    legendPlanned: 'Consegnato per scena',
    legendLatency: 'Anteprima live via WebRTC',
  },
  strategy: {
    title: 'Così diventa il sito quando è acceso',
    subtitle:
      'Il responsabile vede il flusso di oggi. Se qualcuno entra in magazzino di notte, chi è di turno lo sa. La postazione di linea trova pezzi mancanti e problemi di saldatura. Fabbrica, casa e perimetro si impostano sul tuo sito.',
    tabRetail: 'Retail',
    tabWarehouse: 'Magazzino',
    tabIndustrial: 'Sicurezza industriale',
    coreCapabilities: 'Cosa fa',
    businessGoal: 'A cosa serve',
    scenarios: [
      {
        tab: 'Retail',
        tag: 'Negozio',
        scene: 'Tè, fast food e catene',
        capabilities: ['Flussi all’ingresso', 'Confronto per fascia oraria', 'Zone calde e permanenza', 'Avvisi negli strumenti che già usi'],
        goal: 'Il responsabile vede come cambia il traffico, non solo il video registrato.',
      },
      {
        tab: 'Magazzino',
        tag: 'Magazzino',
        scene: 'Magazzini e vigilanza notturna',
        capabilities: ['Zone vietate di notte', 'Corridoi e perimetro', 'Orari per turno', 'Avvisi al canale di turno'],
        goal: 'Se qualcuno entra di notte, chi è di turno lo sa subito.',
      },
      {
        tab: 'Ottica di linea',
        tag: 'Linea',
        scene: 'PCB, assemblaggio, etichette e cordoni',
        capabilities: ['Pezzo mancante, errato o spostato', 'Saldatura: ponte, vuoto e giunto freddo', 'Codice ed etichetta presenti', 'Gira sul PC della postazione'],
        goal: 'L’ispezione ottica resta sulla postazione che hai già.',
      },
      {
        tab: 'Sicurezza industriale',
        tag: 'Fabbrica',
        scene: 'Zone di rischio e officine',
        capabilities: ['Persona in zona di rischio', 'Caduta e fumo', 'Regioni sul fotogramma', 'Avvisi nei sistemi attuali'],
        goal: 'Qualcuno in zona di rischio avvisa adesso, non in una registrazione dopo.',
      },
      {
        tab: 'Cura a casa',
        tag: 'Cura',
        scene: 'Sicurezza in casa e cura degli anziani',
        capabilities: ['Avviso di caduta', 'Attività notturna insolita', 'Avviso alla famiglia in ordine', 'Una persona decide il passo successivo'],
        goal: 'Se a casa succede qualcosa, una persona viene avvisata e decide.',
      },
      {
        tab: 'Perimetro',
        tag: 'Perimetro',
        scene: 'Perimetro del sito e telecamera offline',
        capabilities: ['Ingresso nel perimetro', 'Telecamera offline', 'Gli stessi avvisi del magazzino', 'Nel flusso di turno'],
        goal: 'Un perimetro attraversato e una telecamera spenta diventano eventi che qualcuno può gestire.',
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
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'Un motore event-driven — non un DVR tradizionale',
    subtitle: 'Sei capacità core che ridefiniscono cosa possono fare le telecamere.',
    items: [
      {
        title: 'Come si collegano le telecamere',
        description:
          'Quelle già in sede entrano via RTSP / ONVIF. Le nuove postazioni possono avere un modulo professionale su misura.',
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
    title: 'Il collegamento visione: dalla telecamera a un evento che si può gestire',
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
    badge: 'Consegnato per scena',
    title: 'Plasmiamo insieme il futuro dell\'intelligenza spaziale',
    description:
      'Un negozio, un magazzino, una linea o la cura a casa. Le telecamere che hai già possono collegarsi. La scena si consegna sullo stesso motore.',
    perks: ['Funziona con le telecamere attuali', 'Anteprima live via WebRTC', 'Scene su richiesta', 'I dati restano sul posto'],
    primary: 'Parlare di una scena',
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
  download: {
    metaTitle: 'Scarica VistaCast',
    metaDescription:
      'Scarica la postazione negozio VistaCast (Windows / macOS) e l’APK companion per Android. Gli installer puntano sempre all’ultima release.',
    ogAlt: 'Scarica VistaCast',
    title: 'Scarica VistaCast',
    latest: 'Ultima {{version}}:',
    lead: 'Postazione negozio per Windows e macOS, più un APK Android in sideload (facoltativo). I pulsanti puntano sempre all’installer più recente.',
    hostedBefore: 'Gli installer sono nel repository pubblico',
    hostedAfter: ' (il repository del codice resta privato).',
    unsigned:
      'Gli installer non sono firmati né notarizzati. In Windows SmartScreen scegli "Esegui comunque". Su macOS fai clic destro sull’app e scegli Apri. Su Android serve consentire origini sconosciute.',
    workstation: 'Postazione negozio',
    workstationBody:
      'App Electron: shell locale Detect / Admin. Admin e client-infer devono essere raggiungibili su questo computer o in LAN.',
    winSetup: 'Installer Windows (NSIS)',
    winPortable: 'Windows portable',
    macDmg: 'DMG macOS',
    android: 'Companion Android',
    androidBody:
      'APK in sideload (non su Play). Se questa release non ha ancora un APK, usa Expo Go o attendi una build successiva.',
    apk: 'Scarica APK',
    backHome: '← Torna alla home',
    deviceDocs: 'Documentazione dispositivi',
  },
}

export default it
