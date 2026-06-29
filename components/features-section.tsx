'use client'

import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  CameraOutlined,
  AimOutlined,
  ApiOutlined,
  CloudServerOutlined,
  SafetyOutlined,
  SendOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph, Text } = Typography

const ACCENT_COLORS = ['#1890ff', '#36cfc9', '#b37feb', '#ff7a45', '#52c41a', '#faad14']
const ICONS = [
  <CameraOutlined key="camera" />,
  <AimOutlined key="aim" />,
  <ApiOutlined key="api" />,
  <CloudServerOutlined key="cloud" />,
  <SafetyOutlined key="safety" />,
  <SendOutlined key="send" />,
]

export default function FeaturesSection() {
  const t = useT()

  return (
    <section className="vc-section-alt" id="architecture">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title
          level={2}
          className="vc-section-title"
          style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}
        >
          {t.features.title}
        </Title>
        <Text
          className="vc-section-subtitle"
          style={{ color: 'rgba(220,230,245,0.6)', fontSize: 15, lineHeight: 1.7 }}
        >
          {t.features.subtitle}
        </Text>

        <Row gutter={[24, 24]}>
          {t.features.items.map((f, i) => (
            <Col xs={24} sm={12} lg={8} key={f.title}>
              <div className="vc-feature-card" style={{ padding: '28px 24px', height: '100%' }}>
                <div className="vc-feature-icon" style={{ background: `${ACCENT_COLORS[i]}14`, color: ACCENT_COLORS[i] }}>
                  {ICONS[i]}
                </div>
                <Text style={{ color: '#dce6f5', fontSize: 15, fontWeight: 700, display: 'block', marginBottom: 10 }}>
                  {f.title}
                </Text>
                <Paragraph style={{ color: 'rgba(220,230,245,0.6)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
                  {f.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
