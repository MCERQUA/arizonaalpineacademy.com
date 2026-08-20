import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, ArrowRight, Snowflake, Users, Mountain as MountainIcon, MapPin as MapPinIcon,
  ClipboardCheck, GraduationCap, TrendingUp, RotateCcw,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, CLUSTER_PAGES, FAQS, RESORTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn to Ski or Snowboard in Arizona",
  description:
    "Arizona Alpine Academy teaches Phoenix and Tucson beginners to ski and snowboard, then preps you for your first trip to Arizona Snowbowl, Sunrise Park Resort, or Mount Lemmon Ski Valley. Call 844-967-5247.",
};

const PROGRAM_ICONS: Record<string, typeof Snowflake> = {
  "ski-lessons": Snowflake,
  "snowboard-lessons": TrendingUp,
  "kids-family-ski-programs": Users,
  "first-time-at-arizona-snowbowl": MountainIcon,
  "sunrise-mount-lemmon-trip-prep": MapPinIcon,
};

const PROCESS = [
  { icon: ClipboardCheck, title: "Book a lesson", body: "Tell us your experience level, which resort you're headed to, and whether you're booking for yourself, your family, or your kids." },
  { icon: GraduationCap, title: "We teach the fundamentals", body: "Stance, movement, stopping, and what your first real runs will feel like — so the mountain isn't your first exposure to any of it." },
  { icon: MountainIcon, title: "You head up the mountain", body: "With the fundamentals down, your first real day is about building confidence and having fun, not surviving a steep learning curve." },
  { icon: RotateCcw, title: "You come back for more", body: "A good first day makes most people want a second one — we're here for that too, whether it's another lesson or quick advice." },
];

const FAQ_PREVIEW = FAQS.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* Hero — full-bleed image with scrim */}
      <section className="relative">
        <div className="relative h-[560px] sm:h-[600px]">
          <Image src="/images/hero-homepage.jpg" alt="A family learning to ski on a beginner slope in Arizona" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-timberline/95 via-timberline/80 to-timberline/55" />
          <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <p className="text-rust font-semibold text-sm uppercase tracking-wide mb-4">
                Ski &amp; Snowboard Instruction — Arizona
              </p>
              <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Learn to Ski or Snowboard in Arizona
              </h1>
              <p className="text-paper/85 text-lg leading-relaxed mb-8">
                Arizona Alpine Academy teaches Phoenix and Tucson-area beginners how to ski and
                snowboard, then gets you ready for your first real day at Arizona Snowbowl,
                Sunrise Park Resort, or Mount Lemmon Ski Valley. No winter gear, no snow
                experience, no problem.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/book-a-lesson/" className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white hover:bg-goldDark transition-colors">
                  Book a Lesson
                </Link>
                <a href="#programs" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  Plan My First Trip
                </a>
              </div>
              <a href={SITE.phoneHref} className="mt-6 flex items-center gap-2 text-white font-bold text-lg hover:text-rust transition-colors w-fit">
                <Phone size={20} className="text-rust" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Overview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-6">
            Why a Desert-Based Ski Academy Actually Makes Sense
          </h2>
          <p className="text-inkSoft leading-relaxed mb-4">
            It sounds backwards at first: a ski and snowboard academy based in a state best known
            for saguaro cactus and 110-degree summers. But that&apos;s exactly the problem Arizona
            Alpine Academy exists to solve. Arizona has three real, functioning ski resorts —
            Arizona Snowbowl outside Flagstaff, Sunrise Park Resort in the White Mountains, and
            Mount Lemmon Ski Valley above Tucson — and hundreds of thousands of Phoenix and
            Tucson residents live within a few hours&apos; drive of actual snow. Most of them
            have never skied a day in their life, and most of the instruction and rental
            infrastructure at those resorts is built assuming some baseline familiarity.
          </p>
          <p className="text-inkSoft leading-relaxed mb-4">
            That gap is where we come in. We&apos;re not the resort, and we&apos;re not trying to
            replace the on-mountain ski school you&apos;ll find once you&apos;re there —
            we&apos;re the layer before that. We teach the fundamentals, walk you through what a
            real day of skiing or snowboarding actually involves, help you figure out what gear
            you need, and make sure that when you do drive up the mountain for the first time,
            you&apos;re not starting from zero.
          </p>
          <p className="text-inkSoft leading-relaxed">
            We work with complete beginners of every age — adults trying it for the first time as
            much as kids, families planning their first snow trip together, and anyone who&apos;s
            always wanted to try skiing or snowboarding but never had someone show them the
            fundamentals before showing up at a lift line. You don&apos;t need previous
            experience, you don&apos;t need to already own gear, and you don&apos;t need to have
            grown up anywhere near snow.
          </p>
        </div>
      </section>

      {/* Program grid */}
      <section id="programs" className="bg-paperRaised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-3 text-center">
            What We Help You Learn
          </h2>
          <p className="text-inkSoft text-center max-w-2xl mx-auto mb-12">
            Instruction and trip prep for every kind of first-timer, tailored to whichever
            Arizona resort you&apos;re headed to.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLUSTER_PAGES.map((c) => {
              const Icon = PROGRAM_ICONS[c.slug] ?? Snowflake;
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="group flex flex-col rounded-2xl bg-white border border-ink/10 p-6 hover:border-gold hover:shadow-md transition-all"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-4">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-head font-bold text-ink mb-2 group-hover:text-gold transition-colors">
                    {c.navLabel}
                  </h3>
                  <p className="text-sm text-inkSoft leading-relaxed mb-4 flex-1">{c.teaser}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resorts we prep you for — inverted band */}
      <section className="bg-timberline">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            The Resorts We Prep You For
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {RESORTS.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <MountainIcon size={22} className="text-rust mb-4" />
                <h3 className="font-head font-bold text-white mb-1">{r.name}</h3>
                <p className="text-sm text-paper/60">{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-12 text-center">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-paperRaised border border-ink/10 p-6">
                <span className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white text-sm font-bold">
                  {i + 1}
                </span>
                <step.icon size={22} className="text-juniper mb-4" />
                <h3 className="font-head font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQ_PREVIEW} />
          <div className="text-center mt-8">
            <Link href="/faq/" className="text-gold font-semibold hover:underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-timberline">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Turn &quot;I&apos;ve Never Skied&quot; Into &quot;I Actually Did That&quot;?
          </h2>
          <p className="text-paper/75 mb-8 max-w-2xl mx-auto">
            Tell us your experience level and which Arizona resort you&apos;re headed to, and
            we&apos;ll build a lesson plan around it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-a-lesson/" className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white hover:bg-goldDark transition-colors">
              Book a Lesson
            </Link>
            <a href={SITE.phoneHref} className="flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone size={16} className="text-rust" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
