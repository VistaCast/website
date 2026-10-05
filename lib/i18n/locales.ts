import type { Locale } from './types'
import { detectClientPreferredLocale } from './preferred-locale'

export interface LocaleInfo {
  key: Locale
  label: string
  short: string
  htmlLang: string
  ogLocale: string
}

export const LOCALES: LocaleInfo[] = [
  { key: 'en',    label: 'English',    short: 'EN', htmlLang: 'en',    ogLocale: 'en_US' },
  { key: 'zh-CN', label: '简体中文',   short: '简', htmlLang: 'zh-CN', ogLocale: 'zh_CN' },
  { key: 'zh-TW', label: '繁體中文',   short: '繁', htmlLang: 'zh-TW', ogLocale: 'zh_TW' },
  { key: 'es',    label: 'Español',    short: 'ES', htmlLang: 'es',    ogLocale: 'es_ES' },
  { key: 'pt',    label: 'Português',  short: 'PT', htmlLang: 'pt',    ogLocale: 'pt_BR' },
  { key: 'nl',    label: 'Nederlands', short: 'NL', htmlLang: 'nl',    ogLocale: 'nl_NL' },
  { key: 'it',    label: 'Italiano',   short: 'IT', htmlLang: 'it',    ogLocale: 'it_IT' },
  { key: 'ja',    label: '日本語',     short: 'JA', htmlLang: 'ja',    ogLocale: 'ja_JP' },
  { key: 'ko',    label: '한국어',     short: 'KO', htmlLang: 'ko',    ogLocale: 'ko_KR' },
  { key: 'fr',    label: 'Français',   short: 'FR', htmlLang: 'fr',    ogLocale: 'fr_FR' },
]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'vistacast-locale'

export function getLocaleInfo(locale: Locale): LocaleInfo {
  return LOCALES.find((l) => l.key === locale) ?? LOCALES[0]
}

export function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.key === value)
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  return detectClientPreferredLocale(null) as Locale
}
