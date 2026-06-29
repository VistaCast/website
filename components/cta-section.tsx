'use client'

import React from 'react'
import { Typography, Button, Space, Tag } from 'antd'
import {
  RocketOutlined,
  GithubOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Paragraph, Text } = Typography

export default function CTASection() {
  const t = useT()

  return (
    <section className="vc-cta-section" id="cta">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Tag
          color="cyan"
          style={{ marginBottom: 24, fontSize: 12, padding: '4px 14px', borderRadius: 20, fontWeight: 500 }}
        >
          {t.cta.badge}
        </Tag>

        <Title
          level={2}
          style={{
            color: '#dce6f5',
            fontWeight: 800,
            fontSize: 'clamp(24px,4vw,44px)',
            lineHeight: 1.2,
            margin: '0 0 20px 0',
          }}
        >
          {t.cta.title}
        </Title>

        <Paragraph
          style={{
            color: 'rgba(220,230,245,0.65)',
            fontSize: 16,
            lineHeight: 1.75,
            maxWidth: 580,
            margin: '0 auto 36px auto',
          }}
        >
          {t.cta.description}
        </Paragraph>

        <div className="vc-cta-perks" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 40,
        }}>
          {t.cta.perks.map((p) => (
            <Space key={p} size={6}>
              <CheckCircleOutlined style={{ color: '#36cfc9', fontSize: 14 }} />
              <Text style={{ color: 'rgba(220,230,245,0.7)', fontSize: 14 }}>{p}</Text>
            </Space>
          ))}
        </div>

        <Space size={16} wrap style={{ justifyContent: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            style={{
              fontWeight: 700,
              height: 50,
              paddingInline: 32,
              fontSize: 15,
            }}
          >
            {t.cta.primary}
          </Button>
          <Button
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/VistaCast"
            target="_blank"
            style={{
              borderColor: 'rgba(255,255,255,0.18)',
              color: '#dce6f5',
              background: 'transparent',
              height: 50,
              paddingInline: 28,
              fontSize: 15,
            }}
          >
            {t.cta.secondary}
          </Button>
        </Space>

        <Text style={{
          display: 'block',
          color: 'rgba(220,230,245,0.3)',
          fontSize: 12,
          marginTop: 28,
        }}>
          {t.cta.finePrint}
        </Text>
      </div>
    </section>
  )
}
