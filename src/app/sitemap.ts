import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { blogPosts } from "@/content/insights";

const BASE_URL = "https://iteranium.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${BASE_URL}/services/digital-transformation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/industry-4-0`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ai-intelligent-systems`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      priority: 0.7,
    },
    { url: `${BASE_URL}/training`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.6,
  }));

  return [...staticPages, ...industryPages, ...blogPages];
}
