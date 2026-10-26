'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'

import { messages } from './messages'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectBrowserLocale,
  getLocaleInfo,
  isLocale,
} from './locales'
import type { Locale, Messages } from './types'

function pageTitle(pathname: string, copy: Messages): string | null {
  const path = pathname.split('?')[0].split('#')[0].replace(/\.html$/, '').replace(/\/+$/, '') || '/'
  if (path === '/') return copy.meta.title
  if (path === '/download') return `${copy.download.metaTitle} · VistaCast`
  const titles: Record<string, string> = {
    '/solutions/aoi': copy.marketing.aoi.metaTitle,
    '/solutions/warehouse-security': copy.marketing.warehouse.metaTitle,
    '/solutions/retail': copy.marketing.retail.metaTitle,
    '/pricing': copy.marketing.pricing.metaTitle,
    '/roi': copy.marketing.roi.metaTitle,
  }
  return titles[path] ? `${titles[path]} · VistaCast` : null
}

interface I18nContextValue {
  locale: Locale
  messages: Messages
  setLocale: (locale: Locale) => void
  htmlLang: string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored && isLocale(stored)) return stored
  return detectBrowserLocale()
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  const applyDocumentMeta = useCallback((next: Locale) => {
    const info = getLocaleInfo(next)
    document.documentElement.lang = info.htmlLang
    const copy = messages[next]
    const title = pageTitle(window.location.pathname, copy)
    if (title) document.title = title
  }, [])

  useLayoutEffect(() => {
    if (!ready) return
    applyDocumentMeta(locale)
  }, [locale, ready, pathname, applyDocumentMeta])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
    applyDocumentMeta(next)
  }, [applyDocumentMeta])

  useEffect(() => {
    if (!ready) return
    applyDocumentMeta(locale)
    const id = window.setTimeout(() => applyDocumentMeta(locale), 0)
    return () => window.clearTimeout(id)
  }, [locale, ready, pathname, applyDocumentMeta])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      messages: messages[locale],
      setLocale,
      htmlLang: getLocaleInfo(locale).htmlLang,
    }),
    [locale, setLocale],
  )

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}

export function useT(): Messages {
  return useI18n().messages
}
