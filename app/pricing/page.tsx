import type { Metadata } from 'next'

import PricingView from '@/components/marketing/pricing-view'
import { marketingJsonLd, marketingMetadata } from '@/lib/marketing/page-meta'
import marketingEn from '@/lib/i18n/messages/marketing/en'

const path = '/pricing'
const copy = marketingEn.pricing

export const metadata: Metadata = marketingMetadata({
  path,
  title: copy.metaTitle,
  description: copy.metaDescription,
  ogAlt: copy.ogAlt,
})

export default function Page() {
  const jsonLd = marketingJsonLd({
    path,
    title: copy.metaTitle,
    description: copy.metaDescription,
  })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PricingView />
    </>
  )
}
