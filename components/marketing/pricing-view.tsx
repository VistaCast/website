'use client'

import React from 'react'

import { ContactActions, PageHero, RelatedLinks } from '@/components/marketing/blocks'
import SiteFrame from '@/components/marketing/site-frame'
import { useT } from '@/lib/i18n/context'

function PricingBody() {
  const t = useT()
  const page = t.marketing.pricing

  return (
    <main className="vc-mkt">
      <PageHero kicker={page.kicker} title={page.title} lead={page.lead} />
      <p className="vc-example-note">{page.noPrice}</p>

      <section className="vc-mkt-section" aria-labelledby="billing">
        <h2 id="billing">{page.billingTitle}</h2>
        <div className="vc-split">
          <article>
            <h3>{page.subscribeTitle}</h3>
            <p>{page.subscribeBody}</p>
          </article>
          <article>
            <h3>{page.buyoutTitle}</h3>
            <p>{page.buyoutBody}</p>
          </article>
        </div>
        <p>{page.hardwareNote}</p>
      </section>

      <section className="vc-mkt-section" aria-labelledby="packages">
        <h2 id="packages">{page.includesLabel}</h2>
        <ul className="vc-price-cards">
          {page.packages.map((item) => (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <p className="vc-price-unit">{item.unit}</p>
              <p>{item.summary}</p>
              <p className="vc-price-includes">{page.includesLabel}</p>
              <ul>
                {item.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="vc-mkt-section" aria-labelledby="poc">
        <h2 id="poc">{page.pocTitle}</h2>
        <p>{page.pocLead}</p>
        <ol className="vc-steps">
          {page.pocSteps.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="vc-mkt-section" aria-labelledby="contact">
        <h2 id="contact">{page.contactTitle}</h2>
        <p>{page.contactBody}</p>
        <ContactActions secondaryHref="/roi" secondaryLabel={t.nav.roi} />
      </section>
      <RelatedLinks />
    </main>
  )
}

export default function PricingView() {
  return (
    <SiteFrame>
      <PricingBody />
    </SiteFrame>
  )
}
