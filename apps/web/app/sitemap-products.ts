import type { MetadataRoute } from 'next';

export default function sitemapProducts(): MetadataRoute.Sitemap {
  const baseUrl = 'https://open-seek.com'; // Replace with your actual domain

  // Product routes - you would typically fetch these from a database or CMS
  const productRoutes = [
    {
      url: `${baseUrl}/products/ai-editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/text-editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/code-assistant`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return productRoutes;
}
