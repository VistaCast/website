'use client'

import React from 'react'

import { Boundary, CardGrid, ContactActions, PageHero, RelatedLinks } from '@/components/marketing/blocks'
import SiteFrame from '@/components/marketing/site-frame'
import { useT } from '@/lib/i18n/context'

function StoryBody({ kind }: { kind: 'warehouse' | 'retail' }) {
  const t = useT()
  const page = t.marketing[kind]

  return (
    <main className="vc-mkt">
      <PageHero kicker={page.kicker} title={page.title} lead={page.lead} />
      <Boundary title={page.boundaryTitle} body={page.boundaryBody} />
      <CardGrid cards={page.cards} />
      <section className="vc-mkt-section" aria-labelledby={`${kind}-method`}>
        <h2 id={`${kind}-method`}>{page.methodTitle}</h2>
        <p>{page.methodBody}</p>
      </section>
      <section className="vc-mkt-section" aria-labelledby={`${kind}-formula`}>
        <h2 id={`${kind}-formula`}>{page.formulaTitle}</h2>
        <p className="vc-formula-line">{page.formulaBody}</p>
      </section>
      <ContactActions secondaryHref="/pricing" secondaryLabel={t.nav.pricing} />
      <RelatedLinks />
    </main>
  )
}

export function WarehouseView() {
  return (
    <SiteFrame>
      <StoryBody kind="warehouse" />
    </SiteFrame>
  )
}

export function RetailView() {
  return (
    <SiteFrame>
      <StoryBody kind="retail" />
    </SiteFrame>
  )
}
