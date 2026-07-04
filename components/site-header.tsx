'use client'

import React, { useState } from 'react'
import { Layout, Menu, Button, Space, Drawer, Typography, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuOutlined,
  GlobalOutlined,
  LoginOutlined,
  CheckOutlined,
  GithubOutlined,
} from '@ant-design/icons'

import BrandLogo from '@/components/brand-logo'
import { useI18n } from '@/lib/i18n/context'
import { LOCALES } from '@/lib/i18n/locales'
import type { Locale } from '@/lib/i18n/types'

const { Header } = Layout
const { Text } = Typography
const loginUrl = 'https://login.vistacast.com'
const githubUrl = 'https://github.com/VistaCast'

export default function SiteHeader() {
  const { locale, setLocale, messages: t } = useI18n()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const current = LOCALES.find((l) => l.key === locale) ?? LOCALES[0]

  const navLinks = [
    { key: 'architecture', href: '#architecture', label: t.nav.architecture },
    { key: 'plugins',      href: '#plugins',      label: t.nav.plugins },
    { key: 'techstack',    href: '#techstack',    label: t.nav.techstack },
    { key: 'roadmap',      href: '#roadmap',      label: t.nav.roadmap },
  ]

  const drawerItems: MenuProps['items'] = navLinks.map((link) => ({
    key: link.key,
    label: <a href={link.href}>{link.label}</a>,
  }))

  const localeMenu: MenuProps = {
    items: LOCALES.map((l) => ({
      key: l.key,
      label: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 110 }}>
          {l.label}
          {locale === l.key && <CheckOutlined style={{ marginLeft: 'auto', color: '#36cfc9', fontSize: 11 }} />}
        </span>
      ),
    })),
    onClick: ({ key }) => setLocale(key as Locale),
    style: { background: '#0c1a35', border: '1px solid rgba(255,255,255,0.08)' },
  }

  return (
    <Header className="vc-header">
      <div
        className="vc-header-inner"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#" style={{ display: 'flex', textDecoration: 'none', flexShrink: 0 }}>
          <BrandLogo size={34} />
        </a>

        <nav className="vc-desktop-nav vc-nav-bar" aria-label="Main">
          <ul className="vc-nav-list">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a href={link.href} className="vc-nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Space size={6} style={{ flexShrink: 0 }}>
          <Dropdown menu={localeMenu} placement="bottomRight" trigger={['click']}>
            <Button
              type="text"
              icon={<GlobalOutlined />}
              style={{ color: 'rgba(220,230,245,0.65)', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <span className="vc-btn-label" style={{ fontSize: 13 }}>{current.short}</span>
            </Button>
          </Dropdown>

          <Button
            className="vc-header-login"
            icon={<LoginOutlined />}
            style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.15)', color: '#dce6f5' }}
            href={loginUrl}
            target='_blank'
            rel='noreferrer'
          >
            <span className="vc-btn-label">{t.nav.login}</span>
          </Button>

          <Button
            icon={<MenuOutlined />}
            type="text"
            style={{ color: '#dce6f5', display: 'none' }}
            className="vc-mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
          />
        </Space>
      </div>

      <Drawer
        title={<Text strong style={{ color: '#dce6f5' }}>{t.header.drawerTitle}</Text>}
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        styles={{
          body: { padding: 0 },
          header: { background: '#0c1a35', borderBottom: '1px solid rgba(255,255,255,0.06)' },
          wrapper: { background: '#0c1a35' },
        }}
      >
        <Menu
          mode="inline"
          items={[
            ...drawerItems,
            { type: 'divider' },
            { key: 'login',  icon: <LoginOutlined />,  label: <a href={loginUrl} target="_blank" rel="noreferrer">{t.nav.login}</a> },
            { key: 'github', icon: <GithubOutlined />,  label: <a href={githubUrl} target="_blank" rel="noreferrer">{t.nav.github}</a> },
          ]}
          selectable={false}
          theme="dark"
          style={{ background: '#0c1a35', border: 'none' }}
          onClick={() => setDrawerOpen(false)}
        />
      </Drawer>
    </Header>
  )
}
