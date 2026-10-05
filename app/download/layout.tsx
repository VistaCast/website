import type { Metadata } from 'next'
import en from '@/lib/i18n/messages/en'

const SITE_URL = 'https://vistacast.dev'
const TITLE = en.download.metaTitle
const DESCRIPTION = en.download.metaDescription

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/download',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/download`,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: en.download.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/download`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'VistaCast',
    url: SITE_URL,
  },
  about: {
    '@type': 'SoftwareApplication',
    name: 'VistaCast',
    operatingSystem: 'Windows, macOS, Android',
    applicationCategory: 'BusinessApplication',
    downloadUrl: `${SITE_URL}/download`,
  },
}

export default function DownloadLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
