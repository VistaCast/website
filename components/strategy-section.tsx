'use client'

import React from 'react'
import { Row, Col, Typography, Tabs, Tag, Space, List } from 'antd'
import {
  ShopOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'
import type { ScenarioMessages } from '@/lib/i18n/types'

const { Title, Text } = Typography

const SCENARIO_ICONS = [
  <ShopOutlined style={{ fontSize: 28, color: '#1890ff' }} key="shop" />,
  <SafetyCertificateOutlined style={{ fontSize: 28, color: '#36cfc9' }} key="safety" />,
  <AlertOutlined style={{ fontSize: 28, color: '#faad14' }} key="alert" />,
]

const SCENARIO_COLORS = ['#1890ff', '#36cfc9', '#faad14']
const SCENARIO_TAG_COLORS = ['blue', 'cyan', 'gold']

function ScenarioPanel({ s, index }: { s: ScenarioMessages; index: number }) {
  const t = useT()
  const goalColor = SCENARIO_COLORS[index]
  const icon = SCENARIO_ICONS[index]
  const tagColor = SCENARIO_TAG_COLORS[index]

  return (
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={14}>
        <div className="vc-scenario-card" style={{
          padding: '28px 32px',
          borderRadius: 14,
          background: 'rgba(11,20,40,0.7)',
          border: `1px solid ${goalColor}28`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: `${goalColor}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {icon}
            </div>
            <div>
              <Tag color={tagColor} style={{ fontWeight: 600, marginBottom: 4 }}>{s.tag}</Tag>
              <Text style={{ color: '#dce6f5', fontSize: 15, fontWeight: 700, display: 'block' }}>
                {s.scene}
              </Text>
            </div>
          </div>

          <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
            {t.strategy.coreCapabilities}
          </Text>
          <List
            dataSource={s.capabilities}
            renderItem={(item) => (
              <List.Item style={{ borderBottom: 'none', padding: '6px 0' }}>
                <Space size={8}>
                  <CheckCircleOutlined style={{ color: goalColor, fontSize: 13 }} />
                  <Text style={{ color: 'rgba(220,230,245,0.8)', fontSize: 14 }}>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
        </div>
      </Col>

      <Col xs={24} md={10}>
        <div style={{
          padding: '24px',
          borderRadius: 14,
          background: `${goalColor}08`,
          border: `1px solid ${goalColor}30`,
          textAlign: 'center',
        }}>
          <ClockCircleOutlined style={{ fontSize: 32, color: goalColor, marginBottom: 16 }} />
          <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 10 }}>
            {t.strategy.businessGoal}
          </Text>
          <Text style={{ color: '#dce6f5', fontSize: 15, lineHeight: 1.6, display: 'block' }}>
            {s.goal}
          </Text>
        </div>
      </Col>
    </Row>
  )
}

export default function StrategySection() {
  const t = useT()

  return (
    <section className="vc-section-alt" id="plugins">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title level={2} className="vc-section-title" style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}>
          {t.strategy.title}
        </Title>
        <Text className="vc-section-subtitle" style={{ color: 'rgba(220,230,245,0.6)', fontSize: 15, lineHeight: 1.7 }}>
          {t.strategy.subtitle}
        </Text>

        <Tabs
          className="vc-strategy-tabs"
          defaultActiveKey="0"
          size="large"
          type="line"
          items={[
            {
              key: '0',
              label: (
                <Space>
                  <ShopOutlined />
                  <span>{t.strategy.tabRetail}</span>
                </Space>
              ),
              children: <ScenarioPanel s={t.strategy.scenarios[0]} index={0} />,
            },
            {
              key: '1',
              label: (
                <Space>
                  <SafetyCertificateOutlined />
                  <span>{t.strategy.tabWarehouse}</span>
                </Space>
              ),
              children: <ScenarioPanel s={t.strategy.scenarios[1]} index={1} />,
            },
            {
              key: '2',
              label: (
                <Space>
                  <AlertOutlined />
                  <span>{t.strategy.tabIndustrial}</span>
                </Space>
              ),
              children: <ScenarioPanel s={t.strategy.scenarios[2]} index={2} />,
            },
          ]}
        />
      </div>
    </section>
  )
}
