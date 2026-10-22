/**
 * ROI formulas shown on /roi.
 * Percent inputs are 0–100. Annual fee `null` means the visitor has not entered a quote.
 * Nothing here is a measured product effect.
 *
 * Quality:
 *   annualLabor = inspectors × monthlySalary × 12
 *   annualEscape = dailyOutput × workingDays × payoutEach × escapeRatePct / 100
 *   annualSaving = annualLabor × laborCutPct / 100 + annualEscape × payoutCutPct / 100
 * Retail:
 *   annualUplift = dailyVisits × openDays × ticket × conversionLiftPoints / 100
 * Warehouse:
 *   guardAnnual = guards × guardSalary × 12
 *   annualOffset = theftLoss × theftCutPct / 100 + guardAnnual × guardCutPct / 100
 * Payback months = annualFee / (annualBenefit / 12), only when fee is set and benefit > 0.
 */

export type PaybackState = 'months' | 'need-quote' | 'no-benefit'

export interface Payback {
  state: PaybackState
  months: number | null
}

export interface QualityInput {
  inspectors: number
  monthlySalary: number
  dailyOutput: number
  workingDays: number
  payoutEach: number
  escapeRatePct: number
  laborCutPct: number
  payoutCutPct: number
  annualFee: number | null
}

export interface QualityResult extends Payback {
  annualLabor: number
  annualEscape: number
  annualSaving: number
  monthly: number
}

export interface RetailInput {
  dailyVisits: number
  openDays: number
  ticket: number
  conversionLiftPoints: number
  annualFee: number | null
}

export interface RetailResult extends Payback {
  annualUplift: number
  monthly: number
}

export interface WarehouseInput {
  theftLoss: number
  guards: number
  guardSalary: number
  theftCutPct: number
  guardCutPct: number
  annualFee: number | null
}

export interface WarehouseResult extends Payback {
  guardAnnual: number
  annualOffset: number
  monthly: number
}

function invalidCount(value: number): boolean {
  return !Number.isFinite(value) || value < 0
}

function invalidPct(value: number): boolean {
  return !Number.isFinite(value) || value < 0 || value > 100
}

function invalidFee(value: number | null): boolean {
  return value != null && (!Number.isFinite(value) || value < 0)
}

export function paybackFor(annualBenefit: number, annualFee: number | null): Payback {
  if (annualFee == null) return { state: 'need-quote', months: null }
  if (annualBenefit <= 0) return { state: 'no-benefit', months: null }
  return { state: 'months', months: annualFee / (annualBenefit / 12) }
}

export function calcQuality(input: QualityInput): QualityResult | null {
  const counts = [
    input.inspectors,
    input.monthlySalary,
    input.dailyOutput,
    input.workingDays,
    input.payoutEach,
  ]
  if (counts.some(invalidCount)) return null
  if ([input.escapeRatePct, input.laborCutPct, input.payoutCutPct].some(invalidPct)) return null
  if (invalidFee(input.annualFee)) return null

  const annualLabor = input.inspectors * input.monthlySalary * 12
  const annualEscape =
    (input.dailyOutput * input.workingDays * input.payoutEach * input.escapeRatePct) / 100
  const annualSaving =
    (annualLabor * input.laborCutPct) / 100 + (annualEscape * input.payoutCutPct) / 100
  return {
    annualLabor,
    annualEscape,
    annualSaving,
    monthly: annualSaving / 12,
    ...paybackFor(annualSaving, input.annualFee),
  }
}

export function calcRetail(input: RetailInput): RetailResult | null {
  if ([input.dailyVisits, input.openDays, input.ticket].some(invalidCount)) return null
  if (invalidPct(input.conversionLiftPoints)) return null
  if (invalidFee(input.annualFee)) return null

  const annualUplift =
    (input.dailyVisits * input.openDays * input.ticket * input.conversionLiftPoints) / 100
  return {
    annualUplift,
    monthly: annualUplift / 12,
    ...paybackFor(annualUplift, input.annualFee),
  }
}

export function calcWarehouse(input: WarehouseInput): WarehouseResult | null {
  if ([input.theftLoss, input.guards, input.guardSalary].some(invalidCount)) return null
  if ([input.theftCutPct, input.guardCutPct].some(invalidPct)) return null
  if (invalidFee(input.annualFee)) return null

  const guardAnnual = input.guards * input.guardSalary * 12
  const annualOffset =
    (input.theftLoss * input.theftCutPct) / 100 + (guardAnnual * input.guardCutPct) / 100
  return {
    guardAnnual,
    annualOffset,
    monthly: annualOffset / 12,
    ...paybackFor(annualOffset, input.annualFee),
  }
}

/** Empty string is missing. Commas are ignored. */
export function parseRequired(raw: string): number | null {
  const trimmed = raw.trim().replace(/,/g, '')
  if (trimmed === '') return null
  const value = Number(trimmed)
  if (!Number.isFinite(value)) return null
  return value
}

/** Empty string means "no quote yet". Invalid text is null. */
export function parseFee(raw: string): number | null | 'invalid' {
  const trimmed = raw.trim().replace(/,/g, '')
  if (trimmed === '') return null
  const value = Number(trimmed)
  if (!Number.isFinite(value)) return 'invalid'
  return value
}
