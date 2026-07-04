'use client'

import React from 'react'
import { Layout, Typography, Space, Divider } from 'antd'
import { SafetyOutlined } from '@ant-design/icons'

import BrandLogo from '@/components/brand-logo'
import { useT } from '@/lib/i18n/context'

const { Footer } = Layout
const { Text, Link } = Typography

export default function SiteFooter() {
  const t = useT()

  const footerLinks = [
    { label: t.footer.docs, href: 'https://github.com/VistaCast/docs' },
    { label: t.footer.github, href: 'https://github.com/VistaCast' },
    { label: t.footer.ecosystem, href: 'https://luminaryworks.dev/' },
    { label: t.footer.privacy, href: '#' },
  ]

  return (
    <Footer className="vc-footer">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="vc-footer-top" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 24,
        }}>
          <BrandLogo size={30} fontSize={14} />

          <Space size={24} wrap>
            {footerLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                style={{ color: 'rgba(220,230,245,0.5)', fontSize: 13 }}
              >
                {l.label}
              </Link>
            ))}
          </Space>
        </div>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.05)', margin: '0 0 20px 0' }} />

        <div className="vc-footer-bottom" style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <Text style={{ color: 'rgba(220,230,245,0.35)', fontSize: 12 }}>
            © {new Date().getFullYear()} VistaCast · {t.brand.subtitle} · {t.footer.copyright}
          </Text>

          <div className="vc-footer-privacy" style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            maxWidth: 480,
          }}>
            <SafetyOutlined style={{ color: '#36cfc9', fontSize: 13, marginTop: 1, flexShrink: 0 }} />
            <Text style={{ color: 'rgba(220,230,245,0.35)', fontSize: 12, lineHeight: 1.6 }}>
              {t.footer.privacyNote}
            </Text>
          </div>
        </div>
      </div>
    </Footer>
  )
}
