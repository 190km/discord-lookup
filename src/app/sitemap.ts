import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

const baseUrl = siteConfig.url;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
  ];

  return [...staticRoutes, ];
}
