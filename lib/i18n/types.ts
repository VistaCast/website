export type Locale =
  | 'en'
  | 'zh-CN'
  | 'zh-TW'
  | 'es'
  | 'pt'
  | 'nl'
  | 'it'
  | 'ja'
  | 'ko'

export interface ScenarioMessages {
  tag: string
  scene: string
  capabilities: string[]
  goal: string
}

export interface FeatureMessages {
  title: string
  description: string
}

export interface TechItemMessages {
  title: string
  description: string
}

export interface EcoProductMessages {
  subtitle: string
  role: string
}

export interface SynergyMessages {
  desc: string
}

export interface ComparisonRowMessages {
  dimension: string
  vistacast: string
  vistaremote: string
}

export interface Messages {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  brand: {
    subtitle: string
  }
  nav: {
    architecture: string
    plugins: string
    techstack: string
    roadmap: string
    login: string
    github: string
  }
  header: {
    drawerTitle: string
  }
  hero: {
    badge: string
    title: string
    titleGradient: string
    tagline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    archCanvas: string
    input: string
    coreEngine: string
    pluginPipeline: string
    inputSource: string
  }
  plugins: {
    retail: { name: string; status: string }
    warehouse: { name: string; status: string }
    industrial: { name: string; status: string }
    legendDeployed: string
    legendPlanned: string
    legendLatency: string
  }
  strategy: {
    title: string
    subtitle: string
    tabRetail: string
    tabWarehouse: string
    tabIndustrial: string
    coreCapabilities: string
    businessGoal: string
    scenarios: ScenarioMessages[]
  }
  techstack: {
    title: string
    subtitle: string
    items: TechItemMessages[]
    deployLabel: string
    tagSetup: string
    tagSovereignty: string
    tagLicense: string
  }
  features: {
    title: string
    subtitle: string
    items: FeatureMessages[]
  }
  ecosystem: {
    title: string
    subtitle: string
    youAreHere: string
    synergyTitle: string
    products: EcoProductMessages[]
    synergies: SynergyMessages[]
    baseNote: string
  }
  comparison: {
    title: string
    subtitle: string
    columnDimension: string
    columnVistacast: string
    columnVistaremote: string
    rows: ComparisonRowMessages[]
    synergyTitle: string
    synergyBody: string
  }
  cta: {
    badge: string
    title: string
    description: string
    perks: string[]
    primary: string
    secondary: string
    finePrint: string
  }
  footer: {
    docs: string
    github: string
    ecosystem: string
    privacy: string
    copyright: string
    privacyNote: string
  }
}
