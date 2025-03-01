import type { MetadataRoute } from 'next';

export default function sitemapBlog(): MetadataRoute.Sitemap {
  const baseUrl = 'https://open-seek.com'; // Replace with your actual domain

  // Blog routes - you would typically fetch these from a database or CMS
  const blogRoutes = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/introducing-open-seek`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-editor-features`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-writing-tips`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return blogRoutes;
}
