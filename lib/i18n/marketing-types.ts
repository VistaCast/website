export interface MarketingCard {
  title: string
  body: string
}

export interface MarketingStep {
  id: string
  title: string
  body: string
  recommended?: boolean
}

/** Warehouse and retail share this shape. `formula*` explains a definition, not a promised result. */
export interface StoryPage {
  metaTitle: string
  metaDescription: string
  ogAlt: string
  kicker: string
  title: string
  lead: string
  boundaryTitle: string
  boundaryBody: string
  cards: MarketingCard[]
  methodTitle: string
  methodBody: string
  formulaTitle: string
  formulaBody: string
}

export interface AoiPageCopy {
  metaTitle: string
  metaDescription: string
  ogAlt: string
  kicker: string
  title: string
  lead: string
  boundaryTitle: string
  boundaryBody: string
  cards: MarketingCard[]
  methodTitle: string
  methodBody: string
  smtTitle: string
  smtLead: string
  smtFlowLabel: string
  smtFlow: string[]
  smtSteps: MarketingStep[]
  waveTitle: string
  waveLead: string
  waveFlowLabel: string
  waveFlow: string[]
  waveSteps: MarketingStep[]
  waveAdvice: string
  outcomesTitle: string
  outcomes: MarketingCard[]
  recommendedLabel: string
  pocNote: string
}

export interface PricingPackageCopy {
  name: string
  unit: string
  summary: string
  includes: string[]
}

export interface PricingPageCopy {
  metaTitle: string
  metaDescription: string
  ogAlt: string
  kicker: string
  title: string
  lead: string
  noPrice: string
  billingTitle: string
  subscribeTitle: string
  subscribeBody: string
  buyoutTitle: string
  buyoutBody: string
  hardwareNote: string
  includesLabel: string
  packages: PricingPackageCopy[]
  pocTitle: string
  pocLead: string
  pocSteps: MarketingCard[]
  contactTitle: string
  contactBody: string
}

export interface RoiFieldCopy {
  label: string
  hint: string
}

export interface RoiFields {
  inspectors: RoiFieldCopy
  monthlySalary: RoiFieldCopy
  dailyOutput: RoiFieldCopy
  workingDays: RoiFieldCopy
  payoutEach: RoiFieldCopy
  escapeRate: RoiFieldCopy
  laborCut: RoiFieldCopy
  payoutCut: RoiFieldCopy
  annualFee: RoiFieldCopy
  dailyVisits: RoiFieldCopy
  ticket: RoiFieldCopy
  openDays: RoiFieldCopy
  conversionLift: RoiFieldCopy
  theftLoss: RoiFieldCopy
  guards: RoiFieldCopy
  guardSalary: RoiFieldCopy
  theftCut: RoiFieldCopy
  guardCut: RoiFieldCopy
}

export interface RoiPageCopy {
  metaTitle: string
  metaDescription: string
  ogAlt: string
  kicker: string
  title: string
  lead: string
  banner: string
  disclaimer: string
  currencyLabel: string
  currencyHint: string
  qualityTitle: string
  qualityLead: string
  qualityFormula: string[]
  retailTitle: string
  retailLead: string
  retailFormula: string[]
  warehouseTitle: string
  warehouseLead: string
  warehouseFormula: string[]
  fields: RoiFields
  annualLabor: string
  annualEscape: string
  annualSaving: string
  annualUplift: string
  annualOffset: string
  guardAnnual: string
  monthly: string
  payback: string
  months: string
  paybackNeedQuote: string
  paybackNoBenefit: string
  invalid: string
  formulaHeading: string
}

export interface MarketingMessages {
  contactCta: string
  contactSubject: string
  exampleTag: string
  relatedLabel: string
  aoi: AoiPageCopy
  warehouse: StoryPage
  retail: StoryPage
  pricing: PricingPageCopy
  roi: RoiPageCopy
}
