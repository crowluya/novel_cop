import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
    },
    sitemap: 'https://open-seek.com/sitemap.xml', // Replace with your actual domain
  };
}
