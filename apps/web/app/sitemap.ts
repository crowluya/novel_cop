import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://open-seek.com'; // Replace with your actual domain

  // Main routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ai-editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Add language-specific routes
  const languages = ['en', 'zh'];
  languages.forEach(lang => {
    routes.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/${lang}/ai-editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    });
  });

  return routes;
}
