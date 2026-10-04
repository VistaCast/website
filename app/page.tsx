'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { ConfigProvider, Layout, theme } from 'antd'

import { I18nProvider } from '@/lib/i18n/context'

import SiteHeader from '@/components/site-header'
import HeroSection from '@/components/hero-section'

const StrategySection = dynamic(() => import('@/components/strategy-section'), {
  ssr: true,
})
const TechStackSection = dynamic(() => import('@/components/techstack-section'), {
  ssr: true,
})
const FeaturesSection = dynamic(() => import('@/components/features-section'), {
  ssr: true,
})
const EcosystemSection = dynamic(() => import('@/components/ecosystem-section'), {
  ssr: true,
})
const ComparisonSection = dynamic(() => import('@/components/comparison-section'), {
  ssr: true,
})
const CTASection = dynamic(() => import('@/components/cta-section'), {
  ssr: true,
})
const SiteFooter = dynamic(() => import('@/components/site-footer'), {
  ssr: true,
})
const BackTopButton = dynamic(() => import('@/components/back-top-button'), {
  ssr: false,
})

const { Content } = Layout

export default function VistaCastPage() {
  return (
    <I18nProvider>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary:         '#1890ff',
          colorBgBase:          '#070d1a',
          colorBgContainer:     '#0c1a35',
          colorBgElevated:      '#0f2040',
          colorBorder:          'rgba(255,255,255,0.10)',
          colorBorderSecondary: 'rgba(255,255,255,0.06)',
          colorText:            '#dce6f5',
          colorTextSecondary:   'rgba(220,230,245,0.65)',
          colorTextTertiary:    'rgba(220,230,245,0.40)',
          colorSuccess:         '#52c41a',
          colorWarning:         '#faad14',
          colorError:           '#ff4d4f',
          colorInfo:            '#1890ff',
          borderRadius:         10,
          borderRadiusLG:       14,
          fontFamily:
            "'PingFang SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize:   14,
          lineHeight: 1.6,
        },
        components: {
          Layout: {
            headerBg: 'rgba(7,13,26,0.88)',
            footerBg: 'rgba(4,8,18,0.98)',
            bodyBg:   '#070d1a',
          },
          Menu: {
            darkItemBg:               'transparent',
            darkItemHoverBg:          'transparent',
            horizontalItemSelectedBg: 'transparent',
            itemColor:                'rgba(220,230,245,0.70)',
            itemHoverColor:           '#36cfc9',
            itemSelectedColor:        '#1890ff',
          },
          Button: {
            primaryColor: '#fff',
          },
          Table: {
            headerBg:         '#0c1a35',
            rowHoverBg:       'rgba(24,144,255,0.04)',
            borderColor:      'rgba(255,255,255,0.06)',
            colorBgContainer: '#091729',
          },
          Tabs: {
            inkBarColor:       '#1890ff',
            itemColor:         'rgba(220,230,245,0.55)',
            itemHoverColor:    '#dce6f5',
            itemSelectedColor: '#1890ff',
          },
          Tag: {
            defaultBg:    'rgba(255,255,255,0.06)',
            defaultColor: 'rgba(220,230,245,0.65)',
          },
          Card: {
            colorBgContainer: '#0c1a35',
          },
          Drawer: {
            colorBgElevated: '#0c1a35',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#070d1a' }}>
        <SiteHeader />
        <Content style={{ background: '#070d1a' }}>
          <HeroSection />
          <StrategySection />
          <TechStackSection />
          <FeaturesSection />
          <EcosystemSection />
          <ComparisonSection />
          <CTASection />
        </Content>
        <SiteFooter />
      </Layout>

      <BackTopButton />
    </ConfigProvider>
    </I18nProvider>
  )
}
