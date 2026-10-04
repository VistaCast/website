import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://vistacast.dev'
const SITE_NAME = 'VistaCast'
const DEFAULT_TITLE = 'VistaCast · 视界云遥 — 插件化 AI 摄像头云监控平台'
const DEFAULT_DESCRIPTION =
  '门店、仓储、产线，同一套视觉软件。已有摄像头按 RTSP / ONVIF 接入，新机位可定制专业摄像头模组。'
const OG_TITLE = 'VistaCast · 视界云遥'
const OG_DESCRIPTION =
  '门店、仓储、产线，同一套视觉软件。已有摄像头可接入，新机位可定制专业模组。'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s · VistaCast',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'VistaCast',
    '视界云遥',
    'AI 摄像头',
    'AI 监控',
    '客流统计',
    '仓储安防',
    '产线视觉',
    'ONVIF',
    'RTSP',
    'WebRTC',
    '边缘计算',
    '门店监控',
    'LuminaryWorks',
    '启明工坊',
  ],
  authors: [{ name: 'LuminaryWorks 启明工坊', url: 'https://luminaryworks.dev' }],
  creator: 'LuminaryWorks',
  publisher: 'LuminaryWorks',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'zh_CN',
    alternateLocale: ['en_US', 'zh_TW', 'ja_JP', 'ko_KR', 'es_ES', 'pt_BR', 'nl_NL', 'it_IT'],
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'VistaCast · 视界云遥 — 门店、仓储、产线视觉软件',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/brand/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/brand/logo-mark.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#070d1a',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'VistaCast',
      alternateName: ['视界云遥', 'VistaCast 视界云遥'],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand/logo-mark.png`,
      },
      image: `${SITE_URL}/og.png`,
      parentOrganization: {
        '@type': 'Organization',
        name: 'LuminaryWorks',
        alternateName: '启明工坊',
        url: 'https://luminaryworks.dev',
      },
      sameAs: [
        'https://github.com/VistaCast',
        'https://docs.vistacast.dev',
        'https://luminaryworks.dev',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: '视界云遥',
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      inLanguage: ['zh-CN', 'en', 'zh-TW', 'ja', 'ko', 'es', 'pt', 'nl', 'it'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'VistaCast',
      alternateName: '视界云遥',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'VideoSurveillance',
      operatingSystem: 'Windows, macOS, Android, Web',
      url: SITE_URL,
      downloadUrl: `${SITE_URL}/download`,
      image: `${SITE_URL}/og.png`,
      description: DEFAULT_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      featureList: [
        'RTSP / ONVIF 摄像头接入',
        'WebRTC 实时预览',
        '门店客流与仓储场景插件',
        '产线光学检测',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning style={{ background: '#070d1a' }}>
      <body style={{ margin: 0, padding: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
