import path from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Meta-Repo 根目录也有 pnpm-lock.yaml；显式指定官网子仓为 Turbopack 根，避免误解析到 Meta 根
  turbopack: {
    root: websiteRoot,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
