import type { MetadataRoute } from 'next'

const SITE_URL = 'https://vistacast.dev'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/download', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/solutions/aoi', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/warehouse-security', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/retail', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/roi', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
