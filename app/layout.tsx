import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/brand/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/brand/logo-mark.svg', type: 'image/svg+xml' }],
  },
  title: 'VistaCast · 视界云遥 — 插件化 AI 摄像头云监控平台',
  description:
    '纯软件 AI 视频流边缘计算平台。WebRTC 毫秒级秒开，兼容存量 RTSP/ONVIF 摄像头，核心引擎 + 热插拔插件架构，全栈 TypeScript/Rust 二开，面向 Vibe Coding 时代。',
  keywords: [
    'AI 监控', 'WebRTC', 'ONVIF', 'RTSP', '客流统计', '边缘计算',
    'VistaCast', '视界云遥', 'LuminaryWorks', '启明工坊', '开源监控',
  ],
  authors: [{ name: 'LuminaryWorks 启明工坊', url: 'https://vistacast.dev' }],
  openGraph: {
    title: 'VistaCast · 视界云遥',
    description: '插件化 AI 摄像头云监控平台，WebRTC 低延迟，全栈 TypeScript/Rust 二开友好',
    url: 'https://vistacast.dev',
    siteName: 'VistaCast',
    locale: 'zh_CN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#070d1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning style={{ background: '#070d1a' }}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
