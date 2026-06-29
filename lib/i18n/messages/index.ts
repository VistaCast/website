import type { Locale, Messages } from '../types'
import en from './en'
import es from './es'
import it from './it'
import ja from './ja'
import ko from './ko'
import nl from './nl'
import pt from './pt'
import zhCN from './zh-CN'
import zhTW from './zh-TW'

export const messages: Record<Locale, Messages> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
  pt,
  nl,
  it,
  ja,
  ko,
}
