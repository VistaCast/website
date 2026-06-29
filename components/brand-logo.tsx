'use client'

import React from 'react'
import {Typography} from 'antd'

import {useT} from '@/lib/i18n/context'

const {Text} = Typography

const MARK_PATH = '/brand/logo-mark.svg'

export interface BrandLogoProps {
  size?: number
  showWordmark?: boolean
  showZh?: boolean
  fontSize?: number
  className?: string
}

export function BrandLogo({
                            size = 34,
                            showWordmark = true,
                            showZh = true,
                            fontSize = 15,
                            className,
                          }: BrandLogoProps) {
  const t = useT()

  return (
    <div
      className={className}
      style={{display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 1}}
    >
      <img
        src={MARK_PATH}
        alt=""
        width={size}
        height={size}
        aria-hidden
        style={{display: 'block', flexShrink: 0}}
      />
      {showWordmark && (
        <div
          style={{
            color: '#dce6f5',
            fontSize,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '0.01em',
          }}
        >
          VistaCast{' '}
          {showZh && (
            <p
              className="vc-header-subtitle"
              style={{color: 'rgba(220,230,245,0.45)', fontWeight: 400, fontSize: fontSize - 4, margin: '4px 0 0'}}
            >
              {t.brand.subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default BrandLogo
