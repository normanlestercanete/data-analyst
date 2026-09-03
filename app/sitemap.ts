import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!profile.siteUrl) return [];
  return [
    { url: profile.siteUrl, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/work/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
