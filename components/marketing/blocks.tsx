'use client'

import React from 'react'
import { Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'
import { SALES_EMAIL, salesMailto } from '@/lib/marketing/contact'
import type { MarketingCard, MarketingStep } from '@/lib/i18n/marketing-types'

const LINKS = [
  { href: '/solutions/aoi', key: 'solutionAoi' as const },
  { href: '/solutions/warehouse-security', key: 'solutionWarehouse' as const },
  { href: '/solutions/retail', key: 'solutionRetail' as const },
  { href: '/pricing', key: 'pricing' as const },
  { href: '/roi', key: 'roi' as const },
]

export function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return (
    <header className="vc-mkt-hero">
      <p className="vc-mkt-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="vc-mkt-lead">{lead}</p>
    </header>
  )
}

export function Boundary({ title, body }: { title: string; body: string }) {
  return (
    <aside className="vc-boundary">
      <h2>{title}</h2>
      <p>{body}</p>
    </aside>
  )
}

export function CardGrid({ cards }: { cards: MarketingCard[] }) {
  return (
    <ul className="vc-mkt-cards">
      {cards.map((card) => (
        <li key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </li>
      ))}
    </ul>
  )
}

export function StationFlow({ label, stations }: { label: string; stations: string[] }) {
  return (
    <ol className="vc-flow" aria-label={label}>
      {stations.map((name, index) => (
        <li key={`${name}-${index}`}>{name}</li>
      ))}
    </ol>
  )
}

export function CameraSteps({
  steps,
  recommendedLabel,
}: {
  steps: MarketingStep[]
  recommendedLabel: string
}) {
  return (
    <ol className="vc-cams">
      {steps.map((step) => (
        <li key={step.id} className={step.recommended ? 'is-start' : undefined}>
          <p className="vc-cam-id">
            <span>{step.id}</span>
            {step.recommended ? <em>{recommendedLabel}</em> : null}
          </p>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function RelatedLinks() {
  const t = useT()
  return (
    <nav className="vc-mkt-related" aria-label={t.marketing.relatedLabel}>
      {LINKS.map((link) => (
        <a key={link.href} href={link.href}>
          {t.nav[link.key]}
        </a>
      ))}
    </nav>
  )
}

export function ContactActions({ secondaryHref, secondaryLabel }: { secondaryHref: string; secondaryLabel: string }) {
  const t = useT()
  return (
    <div className="vc-mkt-actions">
      <Button type="primary" size="large" href={salesMailto(t.marketing.contactSubject)} icon={<MailOutlined />}>
        {t.marketing.contactCta}
      </Button>
      <Button size="large" href={secondaryHref}>
        {secondaryLabel}
      </Button>
      <p className="vc-mkt-mail">
        <a href={salesMailto(t.marketing.contactSubject)}>{SALES_EMAIL}</a>
      </p>
    </div>
  )
}
