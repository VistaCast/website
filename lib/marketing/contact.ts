/** Public LuminaryWorks sales inbox. VistaCast has no separate public address. */
export const SALES_EMAIL = 'admin@luminaryworks.dev'

export function salesMailto(subject: string): string {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`
}
