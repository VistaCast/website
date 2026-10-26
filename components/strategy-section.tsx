'use client'

import React, { useEffect, useState } from 'react'
import { Row, Col, Typography, Tabs, Tag, Space, List } from 'antd'
import {
  ShopOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExperimentOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'
import type { ScenarioMessages } from '@/lib/i18n/types'

const { Title, Text } = Typography

const SCENARIO_ICONS = [
  <ShopOutlined style={{ fontSize: 16, color: '#1890ff' }} key="shop" />,
  <SafetyCertificateOutlined style={{ fontSize: 16, color: '#36cfc9' }} key="warehouse" />,
  <ExperimentOutlined style={{ fontSize: 16, color: '#597ef7' }} key="aoi" />,
  <AlertOutlined style={{ fontSize: 16, color: '#faad14' }} key="factory" />,
  <HomeOutlined style={{ fontSize: 16, color: '#b37feb' }} key="home" />,
  <VideoCameraOutlined style={{ fontSize: 16, color: '#73d13d' }} key="site" />,
]

const SCENARIO_COLORS = ['#1890ff', '#36cfc9', '#597ef7', '#faad14', '#b37feb', '#73d13d']
const SCENARIO_TAG_COLORS = ['blue', 'cyan', 'geekblue', 'gold', 'purple', 'green']

function ScenarioPanel({ s, index }: { s: ScenarioMessages; index: number }) {
  const t = useT()
  const goalColor = SCENARIO_COLORS[index % SCENARIO_COLORS.length]
  const icon = SCENARIO_ICONS[index % SCENARIO_ICONS.length]
  const tagColor = SCENARIO_TAG_COLORS[index % SCENARIO_TAG_COLORS.length]

  return (
    <Row gutter={[16, 16]} align="stretch">
      <Col xs={24} md={12}>
        <div className="vc-scenario-card" style={{
          padding: '20px 22px',
          borderRadius: 14,
          background: 'rgba(11,20,40,0.7)',
          border: `1px solid ${goalColor}28`,
          height: '100%',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
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
            className="vc-scenario-caps"
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

      <Col xs={24} md={12}>
        <div
          className="vc-strategy-goal"
          style={{
            background: `${goalColor}08`,
            border: `1px solid ${goalColor}30`,
          }}
          aria-live="polite"
        >
          <div className="vc-strategy-goal-kicker">
            <ClockCircleOutlined style={{ color: goalColor, fontSize: 15 }} />
            <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {t.strategy.businessGoal}
            </Text>
          </div>
          <Text className="vc-strategy-goal-line">{s.goal}</Text>
          <Text className="vc-strategy-goal-detail">{s.detail}</Text>
        </div>
      </Col>
    </Row>
  )
}

const TAB_INTERVAL_MS = 4000

export default function StrategySection() {
  const t = useT()
  const count = t.strategy.scenarios.length
  const [active, setActive] = useState('0')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || count < 2) return
    const id = window.setInterval(() => {
      setActive((current) => String((Number(current) + 1) % count))
    }, TAB_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, count, active])

  return (
    <section
      className="vc-section-alt vc-defer-paint"
      id="plugins"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title level={2} className="vc-section-title vc-strategy-title" style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}>
          {t.strategy.title}
        </Title>

        <Tabs
          className="vc-strategy-tabs"
          activeKey={active}
          onChange={setActive}
          size="large"
          type="line"
          items={t.strategy.scenarios.map((scenario, index) => ({
            key: String(index),
            label: (
              <Space>
                {SCENARIO_ICONS[index % SCENARIO_ICONS.length]}
                <span>
                  {scenario.tab ??
                    [t.strategy.tabRetail, t.strategy.tabWarehouse, t.strategy.tabIndustrial][index] ??
                    scenario.scene}
                </span>
              </Space>
            ),
            children: <ScenarioPanel s={scenario} index={index} />,
          }))}
        />
      </div>
    </section>
  )
}
