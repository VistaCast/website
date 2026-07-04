'use client'

import React from 'react'
import { Row, Col, Typography, Tag, Space } from 'antd'
import {
  ArrowRightOutlined,
  LinkOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph, Text } = Typography

const ECO_NAMES = ['BlockyEdu', 'SyncroBrain', 'DataLuminary', 'VistaCast', 'VistaRemote', 'DoerFlow']
const ECO_URLS = [
  'https://blockyedu.com',
  'https://syncrobrain.com',
  'https://dataluminary.dev',
  'https://vistacast.dev',
  'https://remote.vistacast.dev',
  'https://doerflow.dev',
]
const ECO_synergies_URLS = [
  'https://dataluminary.dev',
  'https://syncrobrain.com',
  'https://remote.vistacast.dev',
]
const ECO_COLORS = ['#52c41a', '#1890ff', '#722ed1', '#36cfc9', '#fa8c16', '#eb2f96']
const SYNERGY_TARGETS = ['DataLuminary BI', 'SyncroBrain IoT', 'VistaRemote']
const SYNERGY_COLORS = ['#722ed1', '#1890ff', '#fa8c16']

export default function EcosystemSection() {
  const t = useT()

  return (
    <section className="vc-section" id="roadmap">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title
          level={2}
          className="vc-section-title"
          style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}
        >
          {t.ecosystem.title}
        </Title>
        <Text
          className="vc-section-subtitle"
          style={{ color: 'rgba(220,230,245,0.6)', fontSize: 15, lineHeight: 1.7 }}
        >
          {t.ecosystem.subtitle}
        </Text>

        <div className="vc-ecosystem-chain" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 56,
        }}>
          {t.ecosystem.products.map((p, i) => {
            const isActive = i === 3
            const color = ECO_COLORS[i]
            return (
              <React.Fragment key={ECO_NAMES[i]}>
                <a
                  className={`vc-ecosystem-step${isActive ? ' active' : ''}`}
                  style={{
                    padding: '16px 20px',
                    borderRadius: 12,
                    background: isActive ? `${color}10` : 'rgba(11,20,40,0.6)',
                    border: `1px solid ${isActive ? color + '55' : 'rgba(255,255,255,0.06)'}`,
                    textAlign: 'center',
                    minWidth: 110,
                    transition: 'border-color 0.2s',
                    position: 'relative',
                    display:'block'
                  }}
                  href={isActive?'https://vistacast.dev':ECO_URLS[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text style={{
                    color: 'rgba(220,230,245,0.45)',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: 6,
                  }}>
                    {p.role}
                  </Text>
                  <Text style={{
                    display: 'block',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: isActive ? 15 : 13,
                    color: isActive ? color : '#dce6f5',
                    marginBottom: 4,
                  }}>
                    {ECO_NAMES[i]}
                  </Text>
                  <Text style={{ color: 'rgba(220,230,245,0.45)', fontSize: 11 }}>{p.subtitle}</Text>
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      top: -8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: color,
                      color: '#070d1a',
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '1px 8px',
                      borderRadius: 10,
                      whiteSpace: 'nowrap',
                    }}>
                      {t.ecosystem.youAreHere}
                    </div>
                  )}
                </a>
                {i < t.ecosystem.products.length - 1 && (
                  <ArrowRightOutlined style={{ color: 'rgba(255,255,255,0.18)', fontSize: 16, flexShrink: 0 }} />
                )}
              </React.Fragment>
            )
          })}
        </div>

        <div style={{ marginBottom: 16 }}>
          <Text style={{
            color: 'rgba(220,230,245,0.4)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            textAlign: 'center',
            marginBottom: 24,
          }}>
            {t.ecosystem.synergyTitle}
          </Text>
        </div>
        <Row gutter={[20, 20]}>
          {t.ecosystem.synergies.map((s, i) => (
            <Col xs={24} md={8} key={SYNERGY_TARGETS[i]}>
              <a style={{
                padding: '20px 22px',
                borderRadius: 12,
                background: 'rgba(11,20,40,0.7)',
                border: `1px solid ${SYNERGY_COLORS[i]}25`,
                height: '100%',
                transition: 'border-color 0.2s',
                display:'block'
              }}
              href={ECO_synergies_URLS[i]}
              target="_blank"
              >
                <Space size={8} style={{ marginBottom: 12 }}>
                  <LinkOutlined style={{ color: SYNERGY_COLORS[i], fontSize: 14 }} />
                  <Tag style={{
                    background: `${SYNERGY_COLORS[i]}18`,
                    borderColor: `${SYNERGY_COLORS[i]}40`,
                    color: SYNERGY_COLORS[i],
                    fontWeight: 700,
                    fontSize: 11,
                  }}>
                    {SYNERGY_TARGETS[i]}
                  </Tag>
                </Space>
                <Paragraph style={{ color: 'rgba(220,230,245,0.65)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </Paragraph>
              </a>
            </Col>
          ))}
        </Row>

        <div style={{
          marginTop: 40,
          padding: '16px 24px',
          borderRadius: 10,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}>
          <Text style={{ color: 'rgba(220,230,245,0.4)', fontSize: 13 }}>
            {t.ecosystem.baseNote}
          </Text>
        </div>
      </div>
    </section>
  )
}
