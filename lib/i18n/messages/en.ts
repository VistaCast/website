import type { Messages } from '../types'

const en: Messages = {
  meta: {
    title: 'VistaCast — Plugin-Based AI Camera Cloud Monitoring',
    description:
      'Industry vision on the cameras you already have. Scene plugins for stores, warehouses, and care. Line optics for missing parts and solder. RTSP / ONVIF in, WebRTC preview out.',
    ogTitle: 'VistaCast',
    ogDescription:
      'One vision stack for stores, warehouses, and production lines. Connect cameras you already have; custom modules for new sites.',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'What it does',
    plugins: 'Where it helps',
    techstack: 'On your site',
    roadmap: 'Ecosystem',
    download: 'Download',
    login: 'Sign In',
    github: 'GitHub',
    docs: 'Docs',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Stores · Warehouses · Lines',
    title: 'Scene intelligence · Line optics',
    titleGradient: 'One vision platform for your cameras',
    tagline: 'Stores, warehouses, and production lines. One software.',
    description:
      'Cameras already on site connect over RTSP / ONVIF. New positions can use a custom professional camera module. Live view is WebRTC.',
    ctaPrimary: 'Talk through a scene',
    ctaSecondary: 'Docs',
    archCanvas: 'From the camera to the person who needs to know',
    input: 'Connect',
    coreEngine: 'Understand',
    pluginPipeline: 'You get',
    inputSource: 'Your cameras',
    coreTitle: 'VistaCast',
    coreNote: 'Reads the picture and tells the right person',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: 'Retail', status: 'Footfall · hours' },
    warehouse: { name: 'Warehouse', status: 'Night · perimeter' },
    industrial: { name: 'Industrial safety', status: 'Hazard zone' },
    aoi: { name: 'Line optics', status: 'Solder · missing' },
    legendDeployed: 'Stores, warehouses, lines, and factories. One software.',
    legendPlanned: 'Delivered by scene',
    legendLatency: 'WebRTC live preview',
  },
  strategy: {
    title: 'What changes once it is on',
    subtitle:
      'The store manager sees today’s footfall. A night entry in the warehouse reaches the person on duty. The line station catches missing parts and solder issues. Factory, home, and the yard are set up for your floor.',
    tabRetail: 'Retail',
    tabWarehouse: 'Warehouse',
    tabIndustrial: 'Industrial safety',
    coreCapabilities: 'You get',
    businessGoal: 'What it means for you',
    scenarios: [
      {
        tab: 'Retail',
        lead: 'The manager does not have to rewind the recording to count heads. They can see how many people came in, which hours were busier, and where people gathered. Busy and quiet stay separate, and the change goes to the chat you already use, so staffing and stock follow the day.',
        tag: 'Store',
        scene: 'Tea shops, QSR, and chain stores',
        capabilities: ['Entrance footfall', 'Period comparison', 'Hot zones and dwell', 'Alerts into the tools you already use'],
        goal: 'Managers see how traffic changes, instead of only replaying video.',
      },
      {
        tab: 'Warehouse',
        lead: 'Nobody has to watch the screen all night. If someone walks into the warehouse, an aisle, or a closed zone, the person on duty gets a notice in the group and can see which camera it was. Hours follow the shift: daytime movement stays quiet, and the alert sounds when it should.',
        tag: 'Warehouse',
        scene: 'Warehouses and night watch',
        capabilities: ['After-hours restricted zones', 'Aisle and perimeter alerts', 'Shift-based schedules', 'Alerts into the duty channel'],
        goal: 'When someone enters at night, the person on duty knows immediately.',
      },
      {
        tab: 'Line optics',
        lead: 'Missing parts, wrong parts, offsets, and solder issues show up at the station when they happen, before the whole batch has to be reworked. Bridges, voids, cold joints, barcodes, and labels sit in the same software. Inspection stays on the line you already run.',
        tag: 'Line',
        scene: 'PCB, assembly, labels, and bead paths',
        capabilities: ['Missing, wrong, and offset parts', 'Solder: bridge, void, and cold joint', 'Barcode and label presence', 'Runs on a normal station PC'],
        goal: 'Optical inspection stays on the station you already have.',
      },
      {
        tab: 'Industrial safety',
        lead: 'If someone steps into a zone you drew, or the picture shows a fall or smoke, the people who need to know are told at once. You draw the zone yourself, and the notice goes into the system you already use. You do not wait until the end of the shift to find it in a recording.',
        tag: 'Factory',
        scene: 'Hazard zones and workshops',
        capabilities: ['Person in a hazard zone', 'Fall and smoke alerts', 'Regions drawn on the frame', 'Alerts into existing systems'],
        goal: 'A person in the hazard zone raises an alert now, not in a recording later.',
      },
      {
        tab: 'Home care',
        lead: 'A fall at home, or movement at night that should not be there, is passed to family in the order you set. You choose who hears first, and who hears if the first person does not respond. A person decides the next step. The software does not call emergency services for you.',
        tag: 'Care',
        scene: 'Home safety and elder care',
        capabilities: ['Fall alerts', 'Unusual night activity', 'Notify family in order', 'A person decides the next step'],
        goal: 'When something happens at home, a person is notified and chooses what to do.',
      },
      {
        tab: 'Site perimeter',
        lead: 'If someone crosses the yard perimeter, or one camera drops offline, the person on duty knows where it happened. The notice uses the same path as the warehouse and goes straight to whoever is on watch. You do not keep a second system just for the fence.',
        tag: 'Perimeter',
        scene: 'Site perimeter and camera offline',
        capabilities: ['Perimeter entry alerts', 'Camera offline alerts', 'Same alerts as the warehouse pack', 'Into the duty workflow'],
        goal: 'A crossed perimeter and a dead camera both become events someone can handle.',
      },
    ],
  },
  techstack: {
    title: 'It runs in your own building',
    subtitle: 'Pictures and records stay on site. Alerts go to the tools your team already uses.',
    items: [
      {
        title: 'Core streaming gateway',
        description:
          'Ingest and WebRTC forwarding stay on the site network. Preview does not have to land in a public cloud first.',
      },
      {
        title: 'Enterprise business core',
        description:
          'Aligned with frontend languages. Clear modules so AI edits stay local. No prompt-comprehension guarantee.',
      },
      {
        title: 'Reliable data foundation',
        description:
          'Standard relational model for structured spatial events. Easy migration and scaling. TimescaleDB time-series extension supported.',
      },
      {
        title: 'Live picture',
        description:
          'Preview prefers a direct WebRTC connection and can fall back to frames when the network needs it.',
      },
    ],
    deployLabel: 'One-click local deploy',
    tagSetup: '30 min setup',
    tagSovereignty: 'Data stays on-prem',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'More than a recorder',
    subtitle: 'When something should be seen, the right person hears about it then.',
    items: [
      {
        title: 'How cameras connect',
        description:
          'Cameras already installed connect over RTSP / ONVIF. New positions can use a custom professional camera module.',
      },
      {
        title: 'Open rule engine',
        description:
          'Draw arbitrary ROI shapes and compose time + space + action triggers flexibly.',
      },
      {
        title: 'Pluggable AI models',
        description:
          'Core decoupled from algorithms. Hot-swap YOLO, RT-DETR, and more — no vendor lock-in.',
      },
      {
        title: 'Docker one-liner deploy',
        description:
          'Spin up a full AI video compute center locally in 30 minutes. Data sovereignty guaranteed.',
      },
      {
        title: 'Privacy by design',
        description:
          'Edge face blurring, employee monitoring off by default. GDPR-ready privacy posture.',
      },
      {
        title: 'Open ecosystem outputs',
        description:
          'Built-in Webhook & MQTT — integrate Feishu, DingTalk, or industrial gateways in seconds.',
      },
    ],
  },
  ecosystem: {
    title: 'After it sees something, who else can help',
    subtitle:
      'Reports, equipment, or a person who needs to look in remotely. VistaCast turns the picture into a notice and a record.',
    youAreHere: 'You are here',
    synergyTitle: 'Technical synergies',
    products: [
      { subtitle: 'Visual orchestration', role: 'Orchestrate' },
      { subtitle: 'IoT ingestion', role: 'Ingest' },
      { subtitle: 'BI analytics', role: 'Analyze' },
      { subtitle: 'AI vision', role: 'Perceive' },
      { subtitle: 'Remote intervention', role: 'Intervene' },
      { subtitle: 'Value network', role: 'Value' },
    ],
    synergies: [
      {
        desc: 'Structured data from VistaCast streams to DataLuminary for auto-generated spatial dashboards.',
      },
      {
        desc: 'High-risk alerts trigger SyncroBrain to actuate physical hardware — software-to-world automation.',
      },
      {
        desc: 'One-click VistaRemote wake-up for human confirmation and real-time control to close the loop.',
      },
    ],
    baseNote:
      'Built on a unified TypeScript / NestJS ecosystem — six products share types, module conventions, and deployment standards.',
  },
  comparison: {
    title: 'One watches the floor. One lets a person step in.',
    subtitle: 'VistaCast watches the cameras. VistaRemote lets a person handle it from afar.',
    columnDimension: 'Dimension',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: 'Physical medium',
        vistacast: 'Fixed security cameras (ONVIF / RTSP)',
        vistaremote: 'Mobile / desktop / robots (WebRTC)',
      },
      {
        dimension: 'Core value',
        vistacast: 'AI perception, structured spatial data, auto alerts',
        vistaremote: 'Remote human intervention, bidirectional control, audit recording',
      },
      {
        dimension: 'Synergy logic',
        vistacast: 'Detect spatial anomalies, emit signals (automation source)',
        vistaremote: 'Receive signals, remote takeover (execution & closure)',
      },
    ],
    synergyTitle: 'Typical synergy scenario:',
    synergyBody:
      'VistaCast detects intruder at night in warehouse → alert to Feishu → on-duty staff wakes VistaRemote → two-way speaker comms and recording. Together: automated perception + human intervention.',
  },
  cta: {
    badge: 'Start with your floor',
    title: 'What should your cameras watch',
    description:
      'A store, a warehouse, a line, or a home. Cameras you already have can connect. New positions can use a professional module.',
    perks: ['Connect the cameras you have', 'See the picture as it happens', 'Set up for your floor', 'Data stays with you'],
    primary: 'Talk through a scene',
    secondary: 'Star on GitHub',
    finePrint: 'Talk through the floor first · data stays on site · no need to replace the cameras you have',
  },
  footer: {
    docs: 'Docs',
    github: 'GitHub',
    ecosystem: 'LuminaryWorks Ecosystem',
    privacy: 'Privacy & Compliance',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Technology for good — employee behavior monitoring off by default. Privacy is our default stance, not a feature.',
  },
}

export default en
