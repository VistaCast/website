'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { messages } from './messages'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectBrowserLocale,
  getLocaleInfo,
  isLocale,
} from './locales'
import type { Locale, Messages } from './types'

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
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  const applyDocumentMeta = useCallback((next: Locale) => {
    const info = getLocaleInfo(next)
    document.documentElement.lang = info.htmlLang
    // Keep route-level Metadata titles (e.g. /download); only sync home title for i18n.
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    const copy = messages[next]
    if (path === '/') {
      document.title = copy.meta.title
    } else if (path === '/download') {
      document.title = `${copy.download.metaTitle} · VistaCast`
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
    applyDocumentMeta(next)
  }, [applyDocumentMeta])

  useEffect(() => {
    if (!ready) return
    applyDocumentMeta(locale)
  }, [locale, ready, applyDocumentMeta])

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
