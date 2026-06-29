'use client'

import React from 'react'
import { Typography, Table, Tag } from 'antd'
import type { TableColumnsType } from 'antd'
import {
  VideoCameraOutlined,
  MobileOutlined,
} from '@ant-design/icons'

import { useT } from '@/lib/i18n/context'

const { Title, Text } = Typography

interface CompRow {
  key: string
  dimension: string
  vistacast: React.ReactNode
  vistaremote: React.ReactNode
}

export default function ComparisonSection() {
  const t = useT()

  const data: CompRow[] = t.comparison.rows.map((row, i) => ({
    key: String(i + 1),
    dimension: row.dimension,
    vistacast: i === 2 ? (
      <Tag color="cyan" style={{ fontSize: 12, padding: '2px 10px', whiteSpace: 'normal', height: 'auto', lineHeight: 1.6 }}>
        {row.vistacast}
      </Tag>
    ) : (
      <Text style={{ color: 'rgba(220,230,245,0.85)', fontSize: 14 }}>{row.vistacast}</Text>
    ),
    vistaremote: i === 2 ? (
      <Tag color="orange" style={{ fontSize: 12, padding: '2px 10px', whiteSpace: 'normal', height: 'auto', lineHeight: 1.6 }}>
        {row.vistaremote}
      </Tag>
    ) : (
      <Text style={{ color: 'rgba(220,230,245,0.85)', fontSize: 14 }}>{row.vistaremote}</Text>
    ),
  }))

  const columns: TableColumnsType<CompRow> = [
    {
      title: t.comparison.columnDimension,
      dataIndex: 'dimension',
      key: 'dimension',
      width: '18%',
      render: (val) => (
        <Text style={{ color: 'rgba(220,230,245,0.5)', fontSize: 13, fontWeight: 600 }}>{val}</Text>
      ),
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <VideoCameraOutlined style={{ color: '#36cfc9' }} />
          <span style={{ color: '#36cfc9' }}>{t.comparison.columnVistacast}</span>
        </div>
      ),
      dataIndex: 'vistacast',
      key: 'vistacast',
      width: '41%',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <MobileOutlined style={{ color: '#fa8c16' }} />
          <span style={{ color: '#fa8c16' }}>{t.comparison.columnVistaremote}</span>
        </div>
      ),
      dataIndex: 'vistaremote',
      key: 'vistaremote',
      width: '41%',
    },
  ]

  return (
    <section className="vc-section-alt" id="comparison">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Title
          level={2}
          className="vc-section-title"
          style={{ color: '#dce6f5', fontWeight: 800, fontSize: 'clamp(22px,3vw,36px)' }}
        >
          {t.comparison.title}
        </Title>
        <Text
          className="vc-section-subtitle"
          style={{ color: 'rgba(220,230,245,0.6)', fontSize: 15, lineHeight: 1.7 }}
        >
          {t.comparison.subtitle}
        </Text>

        <div className="vc-comparison-scroll">
          <div className="vc-comparison-table">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered={false}
              size="middle"
              style={{ borderRadius: 12, overflow: 'hidden' }}
            />
          </div>
        </div>

        <div className="vc-comparison-note" style={{
          marginTop: 28,
          padding: '16px 22px',
          borderRadius: 10,
          background: 'rgba(54,207,201,0.04)',
          border: '1px solid rgba(54,207,201,0.15)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
        }}>
          <Text style={{ color: '#36cfc9', fontSize: 18, flexShrink: 0 }}>⟳</Text>
          <Text style={{ color: 'rgba(220,230,245,0.6)', fontSize: 13.5, lineHeight: 1.7 }}>
            <Text strong style={{ color: '#dce6f5' }}>{t.comparison.synergyTitle}</Text>
            {' '}{t.comparison.synergyBody}
          </Text>
        </div>
      </div>
    </section>
  )
}
