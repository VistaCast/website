import type { Metadata } from 'next'

import RoiView from '@/components/marketing/roi-view'
import { marketingJsonLd, marketingMetadata } from '@/lib/marketing/page-meta'
import marketingEn from '@/lib/i18n/messages/marketing/en'

const path = '/roi'
const copy = marketingEn.roi

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
      <RoiView />
    </>
  )
}
