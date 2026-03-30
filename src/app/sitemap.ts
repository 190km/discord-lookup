import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
  ];
}
