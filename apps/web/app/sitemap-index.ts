import type { MetadataRoute } from 'next';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://open-seek.com'; // Replace with your actual domain

  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-products.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
    },
  ];
}
