import assert from 'node:assert/strict'
import test from 'node:test'

import { calcQuality, calcRetail, calcWarehouse } from './calculate.ts'

test('quality example uses only the published formula', () => {
  const result = calcQuality({
    inspectors: 4,
    monthlySalary: 6000,
    dailyOutput: 500,
    workingDays: 250,
    payoutEach: 80,
    escapeRatePct: 1,
    laborCutPct: 10,
    payoutCutPct: 10,
    annualFee: null,
  })
  assert.ok(result)
  assert.equal(result.annualLabor, 4 * 6000 * 12)
  assert.equal(result.annualEscape, (500 * 250 * 80 * 1) / 100)
  assert.equal(
    result.annualSaving,
    (result.annualLabor * 10) / 100 + (result.annualEscape * 10) / 100,
  )
  assert.equal(result.monthly, result.annualSaving / 12)
  assert.equal(result.state, 'need-quote')
  assert.equal(result.months, null)
})

test('payback uses the visitor quote, not a published price', () => {
  const result = calcQuality({
    inspectors: 4,
    monthlySalary: 6000,
    dailyOutput: 500,
    workingDays: 250,
    payoutEach: 80,
    escapeRatePct: 1,
    laborCutPct: 10,
    payoutCutPct: 10,
    annualFee: 12000,
  })
  assert.ok(result)
  assert.equal(result.state, 'months')
  assert.ok(result.months != null)
  assert.ok(Math.abs(result.months - 12000 / (result.annualSaving / 12)) < 1e-9)
})

test('retail uplift is visits × days × ticket × points / 100', () => {
  const result = calcRetail({
    dailyVisits: 400,
    openDays: 360,
    ticket: 35,
    conversionLiftPoints: 1,
    annualFee: null,
  })
  assert.ok(result)
  assert.equal(result.annualUplift, (400 * 360 * 35 * 1) / 100)
  assert.equal(result.state, 'need-quote')
})

test('warehouse offset can leave headcount unchanged', () => {
  const result = calcWarehouse({
    theftLoss: 200000,
    guards: 3,
    guardSalary: 5000,
    theftCutPct: 10,
    guardCutPct: 0,
    annualFee: null,
  })
  assert.ok(result)
  assert.equal(result.guardAnnual, 3 * 5000 * 12)
  assert.equal(result.annualOffset, (200000 * 10) / 100)
})

test('zero benefit does not invent a payback', () => {
  const result = calcRetail({
    dailyVisits: 100,
    openDays: 300,
    ticket: 20,
    conversionLiftPoints: 0,
    annualFee: 5000,
  })
  assert.ok(result)
  assert.equal(result.annualUplift, 0)
  assert.equal(result.state, 'no-benefit')
  assert.equal(result.months, null)
})

test('rejects negative amounts and percentages above 100', () => {
  assert.equal(
    calcQuality({
      inspectors: -1,
      monthlySalary: 1,
      dailyOutput: 1,
      workingDays: 1,
      payoutEach: 1,
      escapeRatePct: 1,
      laborCutPct: 1,
      payoutCutPct: 1,
      annualFee: null,
    }),
    null,
  )
  assert.equal(
    calcRetail({
      dailyVisits: 10,
      openDays: 10,
      ticket: 10,
      conversionLiftPoints: 101,
      annualFee: null,
    }),
    null,
  )
  assert.equal(
    calcWarehouse({
      theftLoss: 1,
      guards: 1,
      guardSalary: 1,
      theftCutPct: -0.1,
      guardCutPct: 0,
      annualFee: null,
    }),
    null,
  )
})
