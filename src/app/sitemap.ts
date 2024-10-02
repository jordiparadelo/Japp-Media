import { SITEMAP_CONFIG } from '@/data/config';

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_CONFIG;
}