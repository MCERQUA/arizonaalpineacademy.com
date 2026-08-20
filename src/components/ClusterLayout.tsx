import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import CtaBand from "./CtaBand";
import { CLUSTER_PAGES, getClusterPage } from "@/lib/site";

export type ClusterSection = { heading: string; body: string[] };

export type ClusterContent = {
  slug: string;
  intro: string;
  image: string;
  sections: ClusterSection[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
};

export default function ClusterLayout({ content }: { content: ClusterContent }) {
  const page = getClusterPage(content.slug)!;
  const related = content.relatedSlugs
    .map((s) => CLUSTER_PAGES.find((c) => c.slug === s))
    .filter(Boolean) as typeof CLUSTER_PAGES;

  return (
    <>
      <section className="relative bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Program</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
            {page.h1}
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed">{content.intro}</p>
        </div>
      </section>

      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image src={content.image} alt={page.h1} fill className="object-cover" priority />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">{s.heading}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="text-inkSoft leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-4">
          <h2 className="font-head text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={content.faq} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paperRaised">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-head text-2xl font-bold text-ink mb-6">Related Programs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-white border border-ink/10 px-5 py-4 hover:border-gold transition-colors"
                >
                  <span className="font-medium text-ink group-hover:text-gold transition-colors">
                    {c.navLabel}
                  </span>
                  <ArrowRight size={18} className="text-gold shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
