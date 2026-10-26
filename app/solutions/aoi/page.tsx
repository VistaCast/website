import type { Metadata } from 'next'

import AoiView from '@/components/marketing/aoi-view'
import { marketingJsonLd, marketingMetadata } from '@/lib/marketing/page-meta'
import marketingEn from '@/lib/i18n/messages/marketing/en'

const path = '/solutions/aoi'
const copy = marketingEn.aoi

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
      <AoiView />
    </>
  )
}
