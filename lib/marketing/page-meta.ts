import type { Metadata } from 'next'

const SITE_URL = 'https://vistacast.dev'

export function marketingMetadata(opts: {
  path: string
  title: string
  description: string
  ogAlt: string
}): Metadata {
  const url = `${SITE_URL}${opts.path}`
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: 'website',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: opts.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: ['/og.png'],
    },
  }
}

export function marketingJsonLd(opts: { path: string; title: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'VistaCast',
      url: SITE_URL,
    },
  }
}
