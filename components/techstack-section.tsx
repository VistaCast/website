'use client'

import React from 'react'
import { Row, Col, Typography, Tag, Space } from 'antd'
import {
  ThunderboltOutlined,
  NodeIndexOutlined,
  DatabaseOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph, Text } = Typography

const TECH_LANGS = ['Rust', 'NestJS + TypeScript', 'PostgreSQL + TypeORM', 'WebRTC']
const TECH_COLORS = ['#ff7a45', '#1890ff', '#36cfc9', '#b37feb']
const TECH_ICONS = [
  <ThunderboltOutlined style={{ fontSize: 22, color: '#ff7a45' }} key="rust" />,
  <NodeIndexOutlined style={{ fontSize: 22, color: '#1890ff' }} key="nestjs" />,
  <DatabaseOutlined style={{ fontSize: 22, color: '#36cfc9' }} key="pg" />,
  <VideoCameraOutlined style={{ fontSize: 22, color: '#b37feb' }} key="webrtc" />,
]

export default function TechStackSection() {
  const t = useT()

  return (
    <section className="vc-section" id="techstack">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title
          level={2}
          className="vc-section-title"
          style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}
        >
          {t.techstack.title}
        </Title>
        <Text
          className="vc-section-subtitle"
          style={{ color: 'rgba(220,230,245,0.6)', fontSize: 15, lineHeight: 1.7 }}
        >
          {t.techstack.subtitle}
        </Text>

        <Row gutter={[24, 24]}>
          {t.techstack.items.map((item, i) => (
            <Col xs={24} sm={12} lg={6} key={item.title}>
              <div className="vc-tech-card" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${TECH_COLORS[i]}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {TECH_ICONS[i]}
                  </div>
                  <Tag
                    className="vc-tech-lang-tag"
                    style={{
                      background: `${TECH_COLORS[i]}18`,
                      borderColor: `${TECH_COLORS[i]}40`,
                      color: TECH_COLORS[i],
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {TECH_LANGS[i]}
                  </Tag>
                </div>

                <Text style={{ color: '#dce6f5', fontSize: 15, fontWeight: 700, display: 'block', marginBottom: 10 }}>
                  {item.title}
                </Text>
                <Paragraph style={{ color: 'rgba(220,230,245,0.6)', fontSize: 13, lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {item.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        <div className="vc-docker-callout" style={{
          marginTop: 40,
          padding: '20px 28px',
          borderRadius: 12,
          background: 'rgba(24,144,255,0.05)',
          border: '1px solid rgba(24,144,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>
            {t.techstack.deployLabel}
          </Text>
          <div className="vc-docker-cmd" style={{
            flex: 1,
            fontFamily: 'monospace',
            fontSize: 14,
            color: '#36cfc9',
            background: 'rgba(0,0,0,0.3)',
            padding: '8px 16px',
            borderRadius: 8,
            minWidth: 200,
          }}>
            docker run -d -p 8080:8080 vistacast/vistacast:latest
          </div>
          <Space size={8} wrap>
            <Tag color="blue" style={{ fontSize: 11 }}>{t.techstack.tagSetup}</Tag>
            <Tag color="cyan" style={{ fontSize: 11 }}>{t.techstack.tagSovereignty}</Tag>
            <Tag style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(220,230,245,0.65)' }}>
              {t.techstack.tagLicense}
            </Tag>
          </Space>
        </div>
      </div>
    </section>
  )
}
