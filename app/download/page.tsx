'use client'

import { useEffect, useState } from 'react'
import { ConfigProvider, theme, Button, Typography, Space, Alert } from 'antd'
import { DownloadOutlined, AndroidOutlined, WindowsOutlined, AppleOutlined } from '@ant-design/icons'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { I18nProvider, useT } from '@/lib/i18n/context'

const TOKEN = {
  colorPrimary: '#1890ff',
  colorBgBase: '#070d1a',
  colorTextBase: '#dce6f5',
  borderRadius: 10,
  colorBgContainer: '#0c1a35',
  colorBorder: 'rgba(255,255,255,0.10)',
  fontFamily: "'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif",
}

const RELEASE_BASE =
  process.env.NEXT_PUBLIC_RELEASE_BASE ??
  'https://github.com/VistaCast/downloads/releases/latest/download'

const WIN_SETUP = `${RELEASE_BASE}/VistaCast-win-setup.exe`
const WIN_PORTABLE = `${RELEASE_BASE}/VistaCast-win.exe`
const MAC_DMG = `${RELEASE_BASE}/VistaCast-mac.dmg`
const ANDROID_APK =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? `${RELEASE_BASE}/VistaCast.apk`

const DOWNLOADS_API =
  process.env.NEXT_PUBLIC_DOWNLOADS_API ??
  'https://api.github.com/repos/VistaCast/downloads/releases/latest'

function DownloadPageContent() {
  const d = useT().download
  const [versionLabel, setVersionLabel] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(DOWNLOADS_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { tag_name?: string } | null) => {
        if (cancelled || !data?.tag_name) return
        setVersionLabel(data.tag_name.replace(/^v/, ''))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const latestPrefix = versionLabel
    ? `${d.latest.replace('{{version}}', versionLabel)} `
    : ''

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: TOKEN }}>
      <SiteHeader />
      <main className="vc-download-page">
        <Typography.Title level={1} className="vc-download-title">
          {d.title}
        </Typography.Title>
        <Typography.Paragraph className="vc-download-lead">
          {latestPrefix}
          {d.lead}
        </Typography.Paragraph>
        <Typography.Paragraph className="vc-download-meta">
          {d.hostedBefore}{' '}
          <a href="https://github.com/VistaCast/downloads/releases">VistaCast/downloads</a>
          {d.hostedAfter}
        </Typography.Paragraph>
        <Alert type="warning" showIcon className="vc-download-alert" message={d.unsigned} />
        <Space direction="vertical" size="large" className="vc-download-stack">
          <section className="vc-download-section">
            <Typography.Title level={3} className="vc-download-section-title">
              <WindowsOutlined /> / <AppleOutlined /> {d.workstation}
            </Typography.Title>
            <Typography.Paragraph className="vc-download-section-body">
              {d.workstationBody}
            </Typography.Paragraph>
            <Space wrap className="vc-download-actions">
              <Button type="primary" icon={<DownloadOutlined />} href={WIN_SETUP} size="large">
                {d.winSetup}
              </Button>
              <Button icon={<DownloadOutlined />} href={WIN_PORTABLE} size="large">
                {d.winPortable}
              </Button>
              <Button icon={<AppleOutlined />} href={MAC_DMG} size="large">
                {d.macDmg}
              </Button>
            </Space>
          </section>
          <section className="vc-download-section">
            <Typography.Title level={3} className="vc-download-section-title">
              <AndroidOutlined /> {d.android}
            </Typography.Title>
            <Typography.Paragraph className="vc-download-section-body">
              {d.androidBody}
            </Typography.Paragraph>
            <div className="vc-download-actions">
              <Button type="primary" icon={<DownloadOutlined />} href={ANDROID_APK} size="large">
                {d.apk}
              </Button>
            </div>
          </section>
          <Typography.Paragraph className="vc-download-links">
            <Link href="/">{d.backHome}</Link>
            {' · '}
            <a href="https://docs.vistacast.dev/guide/device-setup">{d.deviceDocs}</a>
          </Typography.Paragraph>
        </Space>
      </main>
      <SiteFooter />
    </ConfigProvider>
  )
}

export default function DownloadPage() {
  return (
    <I18nProvider>
      <DownloadPageContent />
    </I18nProvider>
  )
}
