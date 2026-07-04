import type { Messages } from '../types'

const en: Messages = {
  meta: {
    title: 'VistaCast — Plugin-Based AI Camera Cloud Monitoring',
    description:
      'Software-only AI video edge computing. Sub-second WebRTC preview, legacy RTSP/ONVIF cameras, core engine + hot-pluggable plugins, full-stack TypeScript/Rust extensibility for the Vibe Coding era.',
    ogTitle: 'VistaCast',
    ogDescription:
      'Plugin-based AI camera cloud monitoring with low-latency WebRTC and TypeScript/Rust-friendly extensibility',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'Core Architecture',
    plugins: 'Industry Plugins',
    techstack: 'Tech Stack & Ecosystem',
    roadmap: 'Roadmap',
    login: 'Sign In',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'Turn every camera into a structured data stream of the physical world',
    description:
      'A software-only AI video edge platform. No hardware replacement — works with existing RTSP/ONVIF devices. WebRTC delivers millisecond-level instant preview. Built on a core engine + hot-pluggable plugin architecture with full TypeScript/Rust extensibility for the Vibe Coding era.',
    ctaPrimary: 'Book a Pilot',
    ctaSecondary: 'GitHub Docs',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: 'Retail', status: 'Deployed (footfall/queue)' },
    warehouse: { name: 'Warehouse', status: 'Deployed (night security)' },
    industrial: { name: 'Industrial Safety', status: 'Planned (smoke/fall)' },
    legendDeployed: 'Commercially deployed',
    legendPlanned: 'Community planned',
    legendLatency: '<500ms WebRTC latency',
  },
  strategy: {
    title: 'Strategic focus: scene plugins for survival and scale',
    subtitle:
      'As a startup, we know spreading too thin fails. We decouple the core from commercial scenarios — first nail high-frequency, revenue-driving light scenarios; then expand via community-driven plugins.',
    tabRetail: 'Retail (Core)',
    tabWarehouse: 'Warehouse (Core)',
    tabIndustrial: 'Industrial & Long-tail (Plugins)',
    coreCapabilities: 'Core Capabilities',
    businessGoal: 'Business Goal',
    scenarios: [
      {
        tag: 'Industry Solution',
        scene: 'Bubble tea / QSR / chain stores',
        capabilities: [
          'Footfall counting & period comparison',
          'Checkout queue duration detection',
          'Peak-hour real-time alerts',
          'Per-store ROI report auto-generation',
        ],
        goal: 'Boost per-store ROI for clients and accelerate team revenue',
      },
      {
        tag: 'Enterprise & Gov',
        scene: 'Industrial parks / unmanned warehouses',
        capabilities: [
          'Stranger face whitelist auth',
          'Night anomaly real-time alerts',
          'Restricted zone intrusion detection',
          'Structured security event archive',
        ],
        goal: 'Meet essential security needs with high-value delivery',
      },
      {
        tag: 'AI Extensibility',
        scene: 'Factories / fire-risk zones / agriculture',
        capabilities: [
          'Unauthorized entry detection',
          'Fall / slip behavior recognition',
          'Smoke & open-flame sensing',
          'Community third-party model integration',
        ],
        goal: 'Low-cost expansion via open community and third-party model plugins',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding-friendly modern full-stack foundation',
    subtitle: 'One unified stack — no legacy baggage. Let AI be your best co-pilot for customization.',
    items: [
      {
        title: 'Core streaming gateway',
        description:
          'High-performance demux and WebRTC forwarding with minimal memory — ultra-low power at the edge. Zero GC pauses, millisecond latency.',
      },
      {
        title: 'Enterprise business core',
        description:
          'Aligned with frontend languages. Clear modular architecture with 95%+ AI prompt comprehension — scaffold a custom industry plugin in minutes with Vibe Coding.',
      },
      {
        title: 'Reliable data foundation',
        description:
          'Standard relational model for structured spatial events. Easy migration and scaling. TimescaleDB time-series extension supported.',
      },
      {
        title: 'Zero-latency real-time perception',
        description:
          'Leave behind 3–5s legacy streams. Cross-platform, plugin-free <500ms instant preview. End-to-end encryption, hijack-resistant by design.',
      },
    ],
    deployLabel: 'One-click local deploy',
    tagSetup: '30 min setup',
    tagSovereignty: 'Data stays on-prem',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'An event-driven engine — not a traditional DVR',
    subtitle: 'Six core capabilities that redefine what cameras can do.',
    items: [
      {
        title: 'Zero hardware replacement',
        description:
          'Reuse Hikvision, Dahua, and generic IP cameras. 100% compatibility with ONVIF/RTSP devices.',
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
    title: 'The "vision" link in a six-product value chain',
    subtitle:
      'VistaCast is not an isolated SaaS — it is a key piece of the LuminaryWorks spatial intelligence ecosystem.',
    youAreHere: 'YOU ARE HERE',
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
    title: 'Siblings with clear roles: VistaCast vs VistaRemote',
    subtitle:
      'Both under LuminaryWorks — complementary division of labor for spatial perception and execution.',
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
    badge: 'Early Access · M1 pilot open',
    title: 'Shape the future of spatial intelligence together',
    description:
      'Experience the fluidity of WebRTC and a modern full stack. Whether you are a chain operator or developer — join us shaping the M1 pilot.',
    perks: ['Free M1 pilot access', 'Low-latency WebRTC', 'Full source access', 'Dedicated support'],
    primary: 'Book early pilot (free)',
    secondary: 'Star on GitHub',
    finePrint: 'No credit card · data sovereignty · leave anytime',
  },
  footer: {
    docs: 'Documentation',
    github: 'GitHub',
    ecosystem: 'LuminaryWorks Ecosystem',
    privacy: 'Privacy & Compliance',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Technology for good — employee behavior monitoring off by default. Privacy is our default stance, not a feature.',
  },
}

export default en
