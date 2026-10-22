'use client'

import React from 'react'
import { ConfigProvider, Layout, theme } from 'antd'

import BackTopButton from '@/components/back-top-button'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { I18nProvider } from '@/lib/i18n/context'

const { Content } = Layout

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#1890ff',
            colorBgBase: '#070d1a',
            colorBgContainer: '#0c1a35',
            colorBgElevated: '#0f2040',
            colorBorder: 'rgba(255,255,255,0.10)',
            colorBorderSecondary: 'rgba(255,255,255,0.06)',
            colorText: '#dce6f5',
            colorTextSecondary: 'rgba(220,230,245,0.65)',
            colorTextTertiary: 'rgba(220,230,245,0.40)',
            colorSuccess: '#52c41a',
            colorWarning: '#faad14',
            colorError: '#ff4d4f',
            colorInfo: '#1890ff',
            borderRadius: 10,
            borderRadiusLG: 14,
            fontFamily:
              "'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 14,
            lineHeight: 1.6,
          },
          components: {
            Layout: {
              headerBg: 'rgba(7,13,26,0.88)',
              footerBg: 'rgba(4,8,18,0.98)',
              bodyBg: '#070d1a',
            },
            Button: { primaryColor: '#fff' },
          },
        }}
      >
        <Layout style={{ minHeight: '100vh', background: '#070d1a' }}>
          <SiteHeader />
          <Content style={{ background: '#070d1a' }}>{children}</Content>
          <SiteFooter />
        </Layout>
        <BackTopButton />
      </ConfigProvider>
    </I18nProvider>
  )
}
