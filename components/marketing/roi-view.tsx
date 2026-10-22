'use client'

import React, { useMemo, useState } from 'react'

import { ContactActions, PageHero, RelatedLinks } from '@/components/marketing/blocks'
import SiteFrame from '@/components/marketing/site-frame'
import { useI18n, useT } from '@/lib/i18n/context'
import type { RoiFieldCopy, RoiPageCopy } from '@/lib/i18n/marketing-types'
import {
  calcQuality,
  calcRetail,
  calcWarehouse,
  parseFee,
  parseRequired,
  type Payback,
  type QualityResult,
  type RetailResult,
  type WarehouseResult,
} from '@/lib/roi/calculate'

/** Example starting values. They are not a measured effect. */
const QUALITY_EXAMPLE = {
  inspectors: '4',
  monthlySalary: '6000',
  dailyOutput: '500',
  workingDays: '250',
  payoutEach: '80',
  escapeRate: '1',
  laborCut: '10',
  payoutCut: '10',
  annualFee: '',
}

const RETAIL_EXAMPLE = {
  dailyVisits: '400',
  ticket: '35',
  openDays: '360',
  conversionLift: '1',
  annualFee: '',
}

const WAREHOUSE_EXAMPLE = {
  theftLoss: '200000',
  guards: '3',
  guardSalary: '5000',
  theftCut: '10',
  guardCut: '0',
  annualFee: '',
}

function formatAmount(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value)
}

function formatMonths(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)
}

function money(symbol: string, value: number, locale: string): string {
  const formatted = formatAmount(value, locale)
  const prefix = symbol.trim()
  return prefix ? `${prefix}${formatted}` : formatted
}

function Field({
  id,
  copy,
  value,
  onChange,
}: {
  id: string
  copy: RoiFieldCopy
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="vc-field">
      <label htmlFor={id}>{copy.label}</label>
      <input
        id={id}
        name={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        spellCheck={false}
        value={value}
        aria-describedby={`${id}-hint roi-example`}
        onChange={(event) => onChange(event.target.value)}
      />
      <p id={`${id}-hint`} className="vc-field-hint">
        {copy.hint}
      </p>
    </div>
  )
}

function PaybackLine({
  copy,
  result,
  locale,
}: {
  copy: RoiPageCopy
  result: Payback
  locale: string
}) {
  if (result.state === 'need-quote') return <p>{copy.paybackNeedQuote}</p>
  if (result.state === 'no-benefit') return <p>{copy.paybackNoBenefit}</p>
  if (result.months == null) return null
  return (
    <p>
      <strong>{copy.payback}</strong> {formatMonths(result.months, locale)} {copy.months}
    </p>
  )
}

function QualityCalc({
  copy,
  locale,
  symbol,
}: {
  copy: RoiPageCopy
  locale: string
  symbol: string
}) {
  const [fields, setFields] = useState(QUALITY_EXAMPLE)
  const set = (key: keyof typeof QUALITY_EXAMPLE) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
  }
  const result = useMemo((): QualityResult | null => {
    const inspectors = parseRequired(fields.inspectors)
    const monthlySalary = parseRequired(fields.monthlySalary)
    const dailyOutput = parseRequired(fields.dailyOutput)
    const workingDays = parseRequired(fields.workingDays)
    const payoutEach = parseRequired(fields.payoutEach)
    const escapeRatePct = parseRequired(fields.escapeRate)
    const laborCutPct = parseRequired(fields.laborCut)
    const payoutCutPct = parseRequired(fields.payoutCut)
    const annualFee = parseFee(fields.annualFee)
    if (
      inspectors == null ||
      monthlySalary == null ||
      dailyOutput == null ||
      workingDays == null ||
      payoutEach == null ||
      escapeRatePct == null ||
      laborCutPct == null ||
      payoutCutPct == null ||
      annualFee === 'invalid'
    ) {
      return null
    }
    return calcQuality({
      inspectors,
      monthlySalary,
      dailyOutput,
      workingDays,
      payoutEach,
      escapeRatePct,
      laborCutPct,
      payoutCutPct,
      annualFee,
    })
  }, [fields])
  const f = copy.fields
  const show = (value: number) => money(symbol, value, locale)

  return (
    <section className="vc-roi-block" aria-labelledby="roi-quality">
      <h2 id="roi-quality">{copy.qualityTitle}</h2>
      <p>{copy.qualityLead}</p>
      <div className="vc-roi-layout">
        <form noValidate onSubmit={(event) => event.preventDefault()}>
          <Field id="q-inspectors" copy={f.inspectors} value={fields.inspectors} onChange={set('inspectors')} />
          <Field id="q-salary" copy={f.monthlySalary} value={fields.monthlySalary} onChange={set('monthlySalary')} />
          <Field id="q-output" copy={f.dailyOutput} value={fields.dailyOutput} onChange={set('dailyOutput')} />
          <Field id="q-days" copy={f.workingDays} value={fields.workingDays} onChange={set('workingDays')} />
          <Field id="q-payout" copy={f.payoutEach} value={fields.payoutEach} onChange={set('payoutEach')} />
          <Field id="q-escape" copy={f.escapeRate} value={fields.escapeRate} onChange={set('escapeRate')} />
          <Field id="q-labor" copy={f.laborCut} value={fields.laborCut} onChange={set('laborCut')} />
          <Field id="q-avoid" copy={f.payoutCut} value={fields.payoutCut} onChange={set('payoutCut')} />
          <Field id="q-fee" copy={f.annualFee} value={fields.annualFee} onChange={set('annualFee')} />
        </form>
        <div className="vc-roi-result" aria-live="polite">
          <h3>{copy.formulaHeading}</h3>
          <ul className="vc-formula">
            {copy.qualityFormula.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {result ? (
            <>
              <p>
                {copy.annualLabor} {show(result.annualLabor)} = {f.inspectors.label} {fields.inspectors} × {f.monthlySalary.label} {fields.monthlySalary} × 12
              </p>
              <p>
                {copy.annualEscape} {show(result.annualEscape)} = {f.dailyOutput.label} {fields.dailyOutput} × {f.workingDays.label} {fields.workingDays} × {f.payoutEach.label} {fields.payoutEach} × {fields.escapeRate}%
              </p>
              <p>
                {copy.annualSaving} {show(result.annualSaving)} = {copy.annualLabor} × {fields.laborCut}% + {copy.annualEscape} × {fields.payoutCut}%
              </p>
              <p>
                {copy.monthly} {show(result.monthly)} = {copy.annualSaving} ÷ 12
              </p>
              <PaybackLine copy={copy} result={result} locale={locale} />
            </>
          ) : (
            <p>{copy.invalid}</p>
          )}
        </div>
      </div>
    </section>
  )
}

function RetailCalc({
  copy,
  locale,
  symbol,
}: {
  copy: RoiPageCopy
  locale: string
  symbol: string
}) {
  const [fields, setFields] = useState(RETAIL_EXAMPLE)
  const set = (key: keyof typeof RETAIL_EXAMPLE) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
  }
  const result = useMemo((): RetailResult | null => {
    const dailyVisits = parseRequired(fields.dailyVisits)
    const openDays = parseRequired(fields.openDays)
    const ticket = parseRequired(fields.ticket)
    const conversionLiftPoints = parseRequired(fields.conversionLift)
    const annualFee = parseFee(fields.annualFee)
    if (
      dailyVisits == null ||
      openDays == null ||
      ticket == null ||
      conversionLiftPoints == null ||
      annualFee === 'invalid'
    ) {
      return null
    }
    return calcRetail({ dailyVisits, openDays, ticket, conversionLiftPoints, annualFee })
  }, [fields])
  const f = copy.fields
  const show = (value: number) => money(symbol, value, locale)

  return (
    <section className="vc-roi-block" aria-labelledby="roi-retail">
      <h2 id="roi-retail">{copy.retailTitle}</h2>
      <p>{copy.retailLead}</p>
      <div className="vc-roi-layout">
        <form noValidate onSubmit={(event) => event.preventDefault()}>
          <Field id="r-visits" copy={f.dailyVisits} value={fields.dailyVisits} onChange={set('dailyVisits')} />
          <Field id="r-ticket" copy={f.ticket} value={fields.ticket} onChange={set('ticket')} />
          <Field id="r-days" copy={f.openDays} value={fields.openDays} onChange={set('openDays')} />
          <Field id="r-lift" copy={f.conversionLift} value={fields.conversionLift} onChange={set('conversionLift')} />
          <Field id="r-fee" copy={f.annualFee} value={fields.annualFee} onChange={set('annualFee')} />
        </form>
        <div className="vc-roi-result" aria-live="polite">
          <h3>{copy.formulaHeading}</h3>
          <ul className="vc-formula">
            {copy.retailFormula.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {result ? (
            <>
              <p>
                {copy.annualUplift} {show(result.annualUplift)} = {f.dailyVisits.label} {fields.dailyVisits} × {f.openDays.label} {fields.openDays} × {f.ticket.label} {fields.ticket} × ({fields.conversionLift} ÷ 100)
              </p>
              <p>
                {copy.monthly} {show(result.monthly)} = {copy.annualUplift} ÷ 12
              </p>
              <PaybackLine copy={copy} result={result} locale={locale} />
            </>
          ) : (
            <p>{copy.invalid}</p>
          )}
        </div>
      </div>
    </section>
  )
}

function WarehouseCalc({
  copy,
  locale,
  symbol,
}: {
  copy: RoiPageCopy
  locale: string
  symbol: string
}) {
  const [fields, setFields] = useState(WAREHOUSE_EXAMPLE)
  const set = (key: keyof typeof WAREHOUSE_EXAMPLE) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
  }
  const result = useMemo((): WarehouseResult | null => {
    const theftLoss = parseRequired(fields.theftLoss)
    const guards = parseRequired(fields.guards)
    const guardSalary = parseRequired(fields.guardSalary)
    const theftCutPct = parseRequired(fields.theftCut)
    const guardCutPct = parseRequired(fields.guardCut)
    const annualFee = parseFee(fields.annualFee)
    if (
      theftLoss == null ||
      guards == null ||
      guardSalary == null ||
      theftCutPct == null ||
      guardCutPct == null ||
      annualFee === 'invalid'
    ) {
      return null
    }
    return calcWarehouse({ theftLoss, guards, guardSalary, theftCutPct, guardCutPct, annualFee })
  }, [fields])
  const f = copy.fields
  const show = (value: number) => money(symbol, value, locale)

  return (
    <section className="vc-roi-block" aria-labelledby="roi-warehouse">
      <h2 id="roi-warehouse">{copy.warehouseTitle}</h2>
      <p>{copy.warehouseLead}</p>
      <div className="vc-roi-layout">
        <form noValidate onSubmit={(event) => event.preventDefault()}>
          <Field id="w-theft" copy={f.theftLoss} value={fields.theftLoss} onChange={set('theftLoss')} />
          <Field id="w-guards" copy={f.guards} value={fields.guards} onChange={set('guards')} />
          <Field id="w-salary" copy={f.guardSalary} value={fields.guardSalary} onChange={set('guardSalary')} />
          <Field id="w-theft-cut" copy={f.theftCut} value={fields.theftCut} onChange={set('theftCut')} />
          <Field id="w-guard-cut" copy={f.guardCut} value={fields.guardCut} onChange={set('guardCut')} />
          <Field id="w-fee" copy={f.annualFee} value={fields.annualFee} onChange={set('annualFee')} />
        </form>
        <div className="vc-roi-result" aria-live="polite">
          <h3>{copy.formulaHeading}</h3>
          <ul className="vc-formula">
            {copy.warehouseFormula.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {result ? (
            <>
              <p>
                {copy.guardAnnual} {show(result.guardAnnual)} = {f.guards.label} {fields.guards} × {f.guardSalary.label} {fields.guardSalary} × 12
              </p>
              <p>
                {copy.annualOffset} {show(result.annualOffset)} = {f.theftLoss.label} {fields.theftLoss} × {fields.theftCut}% + {copy.guardAnnual} × {fields.guardCut}%
              </p>
              <p>
                {copy.monthly} {show(result.monthly)} = {copy.annualOffset} ÷ 12
              </p>
              <PaybackLine copy={copy} result={result} locale={locale} />
            </>
          ) : (
            <p>{copy.invalid}</p>
          )}
        </div>
      </div>
    </section>
  )
}

function RoiBody() {
  const t = useT()
  const { htmlLang } = useI18n()
  const copy = t.marketing.roi
  const [symbol, setSymbol] = useState('¥')

  return (
    <main className="vc-mkt">
      <PageHero kicker={copy.kicker} title={copy.title} lead={copy.lead} />
      <p id="roi-example" className="vc-example-note">
        <strong>{copy.banner}</strong> {copy.disclaimer}
      </p>
      <div className="vc-field vc-field-currency">
        <label htmlFor="roi-currency">{copy.currencyLabel}</label>
        <input
          id="roi-currency"
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={symbol}
          aria-describedby="roi-currency-hint roi-example"
          onChange={(event) => setSymbol(event.target.value)}
        />
        <p id="roi-currency-hint" className="vc-field-hint">
          {copy.currencyHint}
        </p>
      </div>
      <QualityCalc copy={copy} locale={htmlLang} symbol={symbol} />
      <RetailCalc copy={copy} locale={htmlLang} symbol={symbol} />
      <WarehouseCalc copy={copy} locale={htmlLang} symbol={symbol} />
      <ContactActions secondaryHref="/pricing" secondaryLabel={t.nav.pricing} />
      <RelatedLinks />
    </main>
  )
}

export default function RoiView() {
  return (
    <SiteFrame>
      <RoiBody />
    </SiteFrame>
  )
}
