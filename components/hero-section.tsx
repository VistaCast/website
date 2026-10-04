'use client'

import React from 'react'
import { Typography, Button, Space, Tag } from 'antd'
import {
  RightOutlined,
  ArrowRightOutlined,
  ApiOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph } = Typography

const INPUT_FEEDS = ['RTSP', 'ONVIF', 'WebRTC'] as const

function ArchitectureCanvas() {
  const t = useT()
  const plugins = [
    { name: t.plugins.retail.name, status: t.plugins.retail.status },
    { name: t.plugins.warehouse.name, status: t.plugins.warehouse.status },
    { name: t.plugins.aoi.name, status: t.plugins.aoi.status },
    { name: t.plugins.industrial.name, status: t.plugins.industrial.status },
  ]

  return (
    <div className="vc-arch-panel">
      <p className="vc-arch-kicker">{t.hero.archCanvas}</p>
      <div className="vc-arch-board">
        <section className="vc-arch-lane">
          <h3 className="vc-arch-lane-label">{t.hero.input}</h3>
          <ul className="vc-arch-list vc-arch-list-fill">
            <li className="vc-arch-row vc-arch-row-lead">
              <ApiOutlined className="vc-arch-row-icon" />
              <span className="vc-arch-row-name">{t.hero.inputSource}</span>
            </li>
            {INPUT_FEEDS.map((feed) => (
              <li key={feed} className="vc-arch-row">
                <span className="vc-arch-dot" />
                <span className="vc-arch-row-name">{feed}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="vc-arch-join" aria-hidden="true">
          <ArrowRightOutlined />
        </div>

        <section className="vc-arch-lane">
          <h3 className="vc-arch-lane-label">{t.hero.coreEngine}</h3>
          <div className="vc-arch-core">
            <span className="vc-arch-core-mark">
              <ThunderboltOutlined />
            </span>
            <strong>{t.hero.coreTitle}</strong>
            <span className="vc-arch-core-role">{t.hero.coreNote}</span>
          </div>
        </section>

        <div className="vc-arch-join" aria-hidden="true">
          <ArrowRightOutlined />
        </div>

        <section className="vc-arch-lane">
          <h3 className="vc-arch-lane-label">{t.hero.pluginPipeline}</h3>
          <ul className="vc-arch-list vc-arch-list-fill">
            {plugins.map((plugin) => (
              <li key={plugin.name} className="vc-arch-row">
                <AppstoreOutlined className="vc-arch-row-icon" />
                <span className="vc-arch-row-name">{plugin.name}</span>
                <span className="vc-arch-pill vc-arch-pill-scene">{plugin.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="vc-arch-legend-note">{t.plugins.legendDeployed}</p>
    </div>
  )
}

export default function HeroSection() {
  const t = useT()

  return (
    <section className="vc-hero" id="hero">
      <div className="vc-hero-glow-1" />
      <div className="vc-hero-glow-2" />

      <div className="vc-hero-inner">
        <div className="vc-hero-lead">
          <Tag
            color="blue"
            style={{ marginBottom: 20, fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}
          >
            {t.hero.badge}
          </Tag>
          <Title level={1} className="vc-hero-title">
            <span className="vc-hero-title-gradient">{t.hero.title}</span>
            {t.hero.titleGradient}
          </Title>
          <p className="vc-hero-tagline">{t.hero.tagline}</p>
        </div>
        <div className="vc-hero-layout">
          <div className="vc-hero-copy">
            <Paragraph className="vc-hero-description">{t.hero.description}</Paragraph>
            <Space size={12} wrap>
              <Button
                type="primary"
                size="large"
                href="#cta"
                icon={<RightOutlined />}
                style={{ fontWeight: 600, height: 46, paddingInline: 24 }}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                size="large"
                href="https://docs.vistacast.dev"
                target="_blank"
                rel="noreferrer"
                icon={<ArrowRightOutlined />}
                style={{
                  borderColor: 'rgba(255,255,255,0.18)',
                  color: '#dce6f5',
                  background: 'transparent',
                  height: 46,
                  paddingInline: 24,
                }}
              >
                {t.hero.ctaSecondary}
              </Button>
            </Space>
          </div>
          <ArchitectureCanvas />
        </div>
      </div>
    </section>
  )
}
