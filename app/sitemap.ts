import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  "",
  "/services",
  "/how-it-works",
  "/pricing",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
