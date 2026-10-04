'use client'

import React from 'react'
import { FloatButton } from 'antd'
import { UpOutlined } from '@ant-design/icons'

export default function BackTopButton() {
  return (
    <FloatButton.BackTop
      className="vc-back-top"
      icon={<UpOutlined />}
      style={{ bottom: 40, right: 32 }}
      visibilityHeight={400}
    />
  )
}
