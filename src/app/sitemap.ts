import type { MetadataRoute } from "next";
import { SITE, CLUSTER_PAGES, BLOG_POSTS } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about/", "/contact/", "/book-a-lesson/", "/faq/", "/blog/", "/privacy/", "/terms/"];
  const clusterPaths = CLUSTER_PAGES.map((c) => `/${c.slug}/`);
  const blogPaths = BLOG_POSTS.map((p) => `/blog/${p.slug}/`);
  const all = [...staticPaths, ...clusterPaths, ...blogPaths];
  return all.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
