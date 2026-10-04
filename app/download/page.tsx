'use client'

import { useEffect, useState } from 'react'
import { ConfigProvider, theme, Button, Typography, Space, Alert } from 'antd'
import { DownloadOutlined, AndroidOutlined, WindowsOutlined, AppleOutlined } from '@ant-design/icons'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { I18nProvider } from '@/lib/i18n/context'

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

export default function DownloadPage() {
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

  return (
    <I18nProvider>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: TOKEN }}>
        <SiteHeader />
        <main className="vc-download-page">
          <Typography.Title level={1} className="vc-download-title">
            下载 VistaCast
          </Typography.Title>
          <Typography.Paragraph className="vc-download-lead">
            {versionLabel ? `当前最新 ${versionLabel}：` : ''}
            门店工作站 Windows / macOS，以及 Android 侧载 APK（可选）。按钮始终指向最新安装包。
          </Typography.Paragraph>
          <Typography.Paragraph className="vc-download-meta">
            安装包托管在公开仓库{' '}
            <a href="https://github.com/VistaCast/downloads/releases">
              VistaCast/downloads
            </a>
            （源码仓保持私有）。
          </Typography.Paragraph>
          <Alert
            type="warning"
            showIcon
            className="vc-download-alert"
            message="安装包未代码签名 / 未公证。Windows SmartScreen 选「仍要运行」；macOS 对 App 右键 →「打开」。Android 需允许未知来源。"
          />
          <Space direction="vertical" size="large" className="vc-download-stack">
            <section className="vc-download-section">
              <Typography.Title level={3} className="vc-download-section-title">
                <WindowsOutlined /> / <AppleOutlined /> 门店工作站
              </Typography.Title>
              <Typography.Paragraph className="vc-download-section-body">
                Electron 端：本地 Detect / Admin 壳。需本机或局域网可达 Admin / client-infer。
              </Typography.Paragraph>
              <Space wrap className="vc-download-actions">
                <Button type="primary" icon={<DownloadOutlined />} href={WIN_SETUP} size="large">
                  Windows 安装包 (NSIS)
                </Button>
                <Button icon={<DownloadOutlined />} href={WIN_PORTABLE} size="large">
                  Windows 便携版
                </Button>
                <Button icon={<AppleOutlined />} href={MAC_DMG} size="large">
                  macOS DMG
                </Button>
              </Space>
            </section>
            <section className="vc-download-section">
              <Typography.Title level={3} className="vc-download-section-title">
                <AndroidOutlined /> Android 伴侣
              </Typography.Title>
              <Typography.Paragraph className="vc-download-section-body">
                侧载 APK（非 Play）。若 Release 尚无 APK，请用 Expo Go 或等待后续构建。
              </Typography.Paragraph>
              <div className="vc-download-actions">
                <Button type="primary" icon={<DownloadOutlined />} href={ANDROID_APK} size="large">
                  下载 APK
                </Button>
              </div>
            </section>
            <Typography.Paragraph className="vc-download-links">
              <Link href="/">← 返回首页</Link>
              {' · '}
              <a href="https://docs.vistacast.dev/guide/device-setup">设备接入文档</a>
            </Typography.Paragraph>
          </Space>
        </main>
        <SiteFooter />
      </ConfigProvider>
    </I18nProvider>
  )
}
