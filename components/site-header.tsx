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
  ReadOutlined,
} from '@ant-design/icons'

import BrandLogo from '@/components/brand-logo'
import { useI18n } from '@/lib/i18n/context'
import { LOCALES } from '@/lib/i18n/locales'
import type { Locale } from '@/lib/i18n/types'

const { Header } = Layout
const { Text } = Typography
const loginUrl = 'https://login.vistacast.com'
const githubUrl = 'https://github.com/VistaCast'
const docsUrl = 'https://docs.vistacast.dev'

export default function SiteHeader() {
  const { locale, setLocale, messages: t } = useI18n()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerMounted, setDrawerMounted] = useState(false)

  const current = LOCALES.find((l) => l.key === locale) ?? LOCALES[0]

  const openDrawer = () => {
    setDrawerMounted(true)
    setDrawerOpen(true)
  }

  const navLinks = [
    { key: 'architecture', href: '/#architecture', label: t.nav.architecture },
    { key: 'plugins',      href: '/#plugins',      label: t.nav.plugins },
    { key: 'techstack',    href: '/#techstack',    label: t.nav.techstack },
    { key: 'ecosystem',    href: '/#ecosystem',    label: t.nav.roadmap },
    { key: 'download',     href: '/download',      label: t.nav.download },
    { key: 'docs',         href: docsUrl,          label: t.nav.docs, external: true },
  ]

  const drawerItems: MenuProps['items'] = navLinks.map((link) => ({
    key: link.key,
    icon: link.key === 'docs' ? <ReadOutlined /> : undefined,
    label: link.external ? (
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    ) : (
      <a href={link.href}>{link.label}</a>
    ),
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
        <a href="/" style={{ display: 'flex', textDecoration: 'none', flexShrink: 0 }}>
          <BrandLogo size={34} />
        </a>

        <nav className="vc-desktop-nav vc-nav-bar" aria-label="Main">
          <ul className="vc-nav-list">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="vc-nav-link"
                  {...(link.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Space size={4} className="vc-header-actions" style={{ flexShrink: 0 }}>
          <Button
            type="text"
            className="vc-header-action vc-header-docs-mobile"
            icon={<ReadOutlined />}
            href={docsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.docs}
          />

          <Dropdown menu={localeMenu} placement="bottomRight" trigger={['click']}>
            <Button
              type="text"
              className="vc-header-action"
              icon={<GlobalOutlined />}
              aria-label={current.label}
            >
              <span className="vc-btn-label">{current.short}</span>
            </Button>
          </Dropdown>

          <Button
            type="text"
            className="vc-header-action vc-header-login"
            icon={<LoginOutlined />}
            href={loginUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.login}
          >
            <span className="vc-btn-label">{t.nav.login}</span>
          </Button>

          <Button
            icon={<MenuOutlined />}
            type="text"
            style={{ color: '#dce6f5', display: 'none' }}
            className="vc-mobile-menu-btn"
            aria-label={t.header.drawerTitle}
            onClick={openDrawer}
          />
        </Space>
      </div>

      {drawerMounted ? (
        <Drawer
          title={<Text strong style={{ color: '#dce6f5' }}>{t.header.drawerTitle}</Text>}
          placement="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          destroyOnClose={false}
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
      ) : null}
    </Header>
  )
}
