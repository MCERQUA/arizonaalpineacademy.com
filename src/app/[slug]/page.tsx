import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ClusterLayout from "@/components/ClusterLayout";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CLUSTER_PAGES, getClusterPage } from "@/lib/site";
import { CLUSTER_CONTENT } from "@/content/clusters";

export function generateStaticParams() {
  return CLUSTER_PAGES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getClusterPage(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ClusterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getClusterPage(slug);
  const content = CLUSTER_CONTENT[slug];
  if (!page || !content) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.navLabel, path: `/${page.slug}/` }]),
          faqSchema(content.faq),
        ]}
      />
      <ClusterLayout content={content} />
    </>
  );
}
