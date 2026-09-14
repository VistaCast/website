'use client'

import { ConfigProvider, theme, Button, Typography, Space, Alert } from 'antd'
import { DownloadOutlined, AndroidOutlined, WindowsOutlined } from '@ant-design/icons'
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

const RELEASE_VERSION = process.env.NEXT_PUBLIC_RELEASE_VERSION ?? '0.1.0'
const RELEASE_BASE =
  process.env.NEXT_PUBLIC_RELEASE_BASE ??
  'https://github.com/VistaCast/downloads/releases/latest/download'

const WIN_SETUP = `${RELEASE_BASE}/VistaCast-${RELEASE_VERSION}-win-setup.exe`
const WIN_PORTABLE = `${RELEASE_BASE}/VistaCast-${RELEASE_VERSION}-win.exe`
const ANDROID_APK =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ??
  `${RELEASE_BASE}/VistaCast-${RELEASE_VERSION}.apk`

export default function DownloadPage() {
  return (
    <I18nProvider>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: TOKEN }}>
      <SiteHeader />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px', minHeight: '70vh' }}>
        <Typography.Title level={1} style={{ color: '#dce6f5', marginBottom: 8 }}>
          下载 VistaCast
        </Typography.Title>
        <Typography.Paragraph style={{ color: 'rgba(220,230,245,0.65)', fontSize: 16 }}>
          v{RELEASE_VERSION}：Windows 门店工作站安装包 / 便携版，以及 Android 侧载 APK（可选）。
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: 'rgba(220,230,245,0.55)', fontSize: 14 }}>
          安装包托管在公开仓库{' '}
          <a href="https://github.com/VistaCast/downloads/releases" style={{ color: '#1890ff' }}>
            VistaCast/downloads
          </a>
          （源码仓保持私有）。
        </Typography.Paragraph>
        <Alert
          type="warning"
          showIcon
          style={{ marginBottom: 28 }}
          message="安装包暂未代码签名。Windows SmartScreen 可能提示「未知发布者」，选择「仍要运行」即可。Android 需允许未知来源。"
        />
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <section style={{ background: '#0c1a35', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, padding: 24 }}>
            <Typography.Title level={3} style={{ color: '#dce6f5', marginTop: 0 }}>
              <WindowsOutlined /> Windows 门店工作站
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(220,230,245,0.65)' }}>
              Electron 端：本地 Detect / Admin 壳。需本机或局域网可达 Admin / client-infer。
            </Typography.Paragraph>
            <Space wrap>
              <Button type="primary" icon={<DownloadOutlined />} href={WIN_SETUP} size="large">
                下载安装包 (NSIS)
              </Button>
              <Button icon={<DownloadOutlined />} href={WIN_PORTABLE} size="large">
                便携版 Portable
              </Button>
            </Space>
          </section>
          <section style={{ background: '#0c1a35', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, padding: 24 }}>
            <Typography.Title level={3} style={{ color: '#dce6f5', marginTop: 0 }}>
              <AndroidOutlined /> Android 伴侣
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(220,230,245,0.65)' }}>
              侧载 APK（非 Play）。若 Release 尚无 APK，请用 Expo Go 或等待后续构建。
            </Typography.Paragraph>
            <Button type="primary" icon={<DownloadOutlined />} href={ANDROID_APK} size="large">
              下载 APK
            </Button>
          </section>
          <Typography.Paragraph style={{ color: 'rgba(220,230,245,0.55)' }}>
            <Link href="/" style={{ color: '#1890ff' }}>← 返回首页</Link>
            {' · '}
            <a href="https://docs.vistacast.dev/guide/device-setup" style={{ color: '#1890ff' }}>
              设备接入文档
            </a>
          </Typography.Paragraph>
        </Space>
      </main>
      <SiteFooter />
    </ConfigProvider>
    </I18nProvider>
  )
}
