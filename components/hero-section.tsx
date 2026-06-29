'use client'

import React from 'react'
import { Row, Col, Typography, Button, Space, Badge, Tag } from 'antd'
import {
  RightOutlined,
  ArrowRightOutlined,
  ApiOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph, Text } = Typography

function SourceCard({ inputSource }: { inputSource: string }) {
  return (
    <div className="vc-source-card" style={{
      padding: '14px 16px',
      borderRadius: 10,
      background: 'rgba(14,24,46,0.9)',
      border: '1px solid rgba(24,144,255,0.18)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <ApiOutlined style={{ color: '#1890ff', fontSize: 14 }} />
        <Text style={{ color: '#dce6f5', fontWeight: 600, fontSize: 12 }}>{inputSource}</Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Tag color="blue" style={{ fontSize: 11, margin: 0 }}>RTSP Stream</Tag>
        <Tag color="geekblue" style={{ fontSize: 11, margin: 0 }}>ONVIF Network Camera</Tag>
        <Tag color="cyan" style={{ fontSize: 11, margin: 0 }}>WebRTC Feed</Tag>
      </div>
    </div>
  )
}

function CoreCard() {
  return (
    <div className="vc-core-card" style={{
      padding: '20px',
      borderRadius: 12,
      background: 'rgba(10,30,64,0.95)',
      border: '1px solid rgba(24,144,255,0.4)',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 12,
        background: 'rgba(24,144,255,0.15)',
        marginBottom: 12,
      }}>
        <ThunderboltOutlined style={{ color: '#36cfc9', fontSize: 22 }} />
      </div>
      <div style={{ marginBottom: 4 }}>
        <Text style={{ color: '#dce6f5', fontWeight: 700, fontSize: 13, display: 'block' }}>
          VistaCast Core
        </Text>
        <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 11 }}>Rust / NestJS</Text>
      </div>
      <div style={{
        marginTop: 12,
        padding: '8px 10px',
        background: 'rgba(24,144,255,0.08)',
        borderRadius: 8,
        border: '1px solid rgba(24,144,255,0.15)',
      }}>
        <Text style={{ color: 'rgba(220,230,245,0.75)', fontSize: 11 }}>
          WebRTC Stream Gateway
        </Text>
        <br />
        <Text style={{ color: 'rgba(220,230,245,0.75)', fontSize: 11 }}>
          &amp; Rule Engine
        </Text>
      </div>
    </div>
  )
}

function PluginCard({ name, statusText, status }: {
  name: string
  statusText: string
  status: 'processing' | 'default' | 'warning'
}) {
  return (
    <div className="vc-plugin-card" style={{
      padding: '12px 14px',
      borderRadius: 10,
      background: 'rgba(12,22,42,0.9)',
      border: '1px solid rgba(54,207,201,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AppstoreOutlined style={{ color: '#36cfc9', fontSize: 13 }} />
        <Text style={{ color: '#dce6f5', fontSize: 12, fontWeight: 600 }}>Plugin: {name}</Text>
      </div>
      <Badge status={status} text={<span style={{ color: 'rgba(220,230,245,0.6)', fontSize: 11 }}>{statusText}</span>} />
    </div>
  )
}

export default function HeroSection() {
  const t = useT()

  return (
    <section className="vc-hero" id="hero">
      <div className="vc-hero-glow-1" />
      <div className="vc-hero-glow-2" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <Row gutter={[48, 48]} align="middle">
          <div>
            <Tag
              color="blue"
              style={{ marginBottom: 20, fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}
            >
              {t.hero.badge}
            </Tag>

            <Title
              level={1}
              className="vc-hero-title"
              style={{
                color: '#dce6f5',
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.2,
                fontWeight: 800,
              }}
            >

              <span
                className="vc-hero-title-gradient"
                style={{
                  background: 'linear-gradient(90deg, #1890ff, #36cfc9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginRight: '.6em',
                }}
              >
                {t.hero.title}
              </span>
              {t.hero.titleGradient}

            </Title>
            <Text style={{
              display: 'block',
              color: 'rgba(220,230,245,0.75)',
              fontSize: 16,
              marginBottom: 24,
              fontStyle: 'italic',
            }}>
              {t.hero.tagline}
            </Text>
          </div>
          <Col xs={24} lg={6}>
            <Space direction="vertical" size={0} style={{ width: '100%' }}>


              <Paragraph style={{
                color: 'rgba(220,230,245,0.65)',
                fontSize: 15,
                lineHeight: 1.75,
                margin: '0 0 36px 0',
              }}>
                {t.hero.description}
              </Paragraph>

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
                  href="#architecture"
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
            </Space>
          </Col>

          <Col xs={24} lg={18}>
            <div className="vc-arch-panel" style={{
              padding: '24px',
              borderRadius: 16,
              background: 'rgba(8,16,32,0.6)',
              border: '1px solid rgba(24,144,255,0.12)',
              backdropFilter: 'blur(8px)',
            }}>
              <Text style={{ color: 'rgba(220,230,245,0.4)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, display: 'block' }}>
                {t.hero.archCanvas}
              </Text>

              <div className="vc-arch-flow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <Text style={{ color: 'rgba(220,230,245,0.4)', fontSize: 11, display: 'block', marginBottom: 8, textAlign: 'center' }}>
                    {t.hero.input}
                  </Text>
                  <SourceCard inputSource={t.hero.inputSource} />
                </div>

                <div className="vc-arch-arrow" style={{ color: 'rgba(24,144,255,0.5)', fontSize: 20, flexShrink: 0 }}>
                  <ArrowRightOutlined />
                </div>

                <div style={{ flex: 1.2 }}>
                  <Text style={{ color: 'rgba(220,230,245,0.4)', fontSize: 11, display: 'block', marginBottom: 8, textAlign: 'center' }}>
                    {t.hero.coreEngine}
                  </Text>
                  <CoreCard />
                </div>

                <div className="vc-arch-arrow" style={{ color: 'rgba(54,207,201,0.5)', fontSize: 20, flexShrink: 0 }}>
                  <ArrowRightOutlined />
                </div>

                <div style={{ flex: 1.2 }}>
                  <Text style={{ color: 'rgba(220,230,245,0.4)', fontSize: 11, display: 'block', marginBottom: 8, textAlign: 'center' }}>
                    {t.hero.pluginPipeline}
                  </Text>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <PluginCard name={t.plugins.retail.name} statusText={t.plugins.retail.status} status="processing" />
                    <PluginCard name={t.plugins.warehouse.name} statusText={t.plugins.warehouse.status} status="processing" />
                    <PluginCard name={t.plugins.industrial.name} statusText={t.plugins.industrial.status} status="default" />
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
              }}>
                <Space size={4}>
                  <Badge status="processing" />
                  <Text style={{ color: 'rgba(220,230,245,0.45)', fontSize: 11 }}>{t.plugins.legendDeployed}</Text>
                </Space>
                <Space size={4}>
                  <Badge status="default" />
                  <Text style={{ color: 'rgba(220,230,245,0.45)', fontSize: 11 }}>{t.plugins.legendPlanned}</Text>
                </Space>
                <Space size={4}>
                  <ThunderboltOutlined style={{ color: '#36cfc9', fontSize: 11 }} />
                  <Text style={{ color: 'rgba(220,230,245,0.45)', fontSize: 11 }}>{t.plugins.legendLatency}</Text>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
