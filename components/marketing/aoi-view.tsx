'use client'

import React from 'react'

import { Boundary, CameraSteps, CardGrid, ContactActions, PageHero, RelatedLinks, StationFlow } from '@/components/marketing/blocks'
import SiteFrame from '@/components/marketing/site-frame'
import { useT } from '@/lib/i18n/context'

function AoiBody() {
  const t = useT()
  const page = t.marketing.aoi

  return (
    <main className="vc-mkt">
      <PageHero kicker={page.kicker} title={page.title} lead={page.lead} />
      <Boundary title={page.boundaryTitle} body={page.boundaryBody} />
      <CardGrid cards={page.cards} />

      <section className="vc-mkt-section" aria-labelledby="aoi-method">
        <h2 id="aoi-method">{page.methodTitle}</h2>
        <p>{page.methodBody}</p>
      </section>

      <section className="vc-mkt-section" aria-labelledby="aoi-smt">
        <h2 id="aoi-smt">{page.smtTitle}</h2>
        <p>{page.smtLead}</p>
        <StationFlow label={page.smtFlowLabel} stations={page.smtFlow} />
        <CameraSteps steps={page.smtSteps} recommendedLabel={page.recommendedLabel} />
      </section>

      <section className="vc-mkt-section" aria-labelledby="aoi-wave">
        <h2 id="aoi-wave">{page.waveTitle}</h2>
        <p>{page.waveLead}</p>
        <StationFlow label={page.waveFlowLabel} stations={page.waveFlow} />
        <CameraSteps steps={page.waveSteps} recommendedLabel={page.recommendedLabel} />
        <p className="vc-mkt-advice">{page.waveAdvice}</p>
      </section>

      <section className="vc-mkt-section" aria-labelledby="aoi-outcomes">
        <h2 id="aoi-outcomes">{page.outcomesTitle}</h2>
        <CardGrid cards={page.outcomes} />
      </section>

      <p className="vc-mkt-note">{page.pocNote}</p>
      <ContactActions secondaryHref="/pricing" secondaryLabel={t.nav.pricing} />
      <RelatedLinks />
    </main>
  )
}

export default function AoiView() {
  return (
    <SiteFrame>
      <AoiBody />
    </SiteFrame>
  )
}
