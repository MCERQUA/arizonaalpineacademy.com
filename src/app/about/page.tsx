import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Arizona Alpine Academy",
  description: "Ski and snowboard instruction for complete beginners across Phoenix, Tucson, and the rest of Arizona. Call 844-967-5247.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">About</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            About Arizona Alpine Academy
          </h1>
        </div>
      </section>

      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image src="/images/about-instructors.jpg" alt="Arizona Alpine Academy instructors" fill className="object-cover" priority />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          <p className="text-inkSoft leading-relaxed">
            Arizona Alpine Academy teaches skiing and snowboarding to beginners across Phoenix,
            Tucson, and the rest of Arizona — people who, like most of the state, grew up without
            easy access to snow and never had the chance to learn.
          </p>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Why We Exist</h2>
            <p className="text-inkSoft leading-relaxed mb-4">
              Arizona has three real ski resorts, and most of the state&apos;s population lives
              within a few hours of at least one of them. What&apos;s missing isn&apos;t the
              mountains — it&apos;s the instruction layer built specifically for people starting
              from zero. Most on-mountain ski schools do a fine job once you&apos;re there, but
              they&apos;re built around the assumption that you already have some baseline
              comfort with the basics: standing in boots, understanding a chairlift, knowing what
              a beginner run actually looks like. For someone whose only reference point for snow
              is a photo, that gap is bigger than it looks from the outside.
            </p>
            <p className="text-inkSoft leading-relaxed">
              We built this academy to close that gap before you ever get to the mountain —
              teaching the real fundamentals of skiing and snowboarding to complete beginners, in
              a way that assumes nothing and explains everything, so your first real day on snow
              is about building confidence instead of just getting through it.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Our Teaching Philosophy</h2>
            <p className="text-inkSoft leading-relaxed mb-4">
              We start from the assumption that you&apos;ve never done this before, because for
              most of our students, that&apos;s exactly true. There&apos;s no gatekeeping, no
              assumption that you should already know things, and no rushing beginners onto
              terrain they&apos;re not ready for just to move faster through a lesson plan.
              Skiing and snowboarding both have a real learning curve, and our instructors are
              focused on pacing that curve to the individual student or group in front of them —
              not on hitting a fixed lesson script regardless of how someone&apos;s actually
              doing.
            </p>
            <p className="text-inkSoft leading-relaxed">
              That applies just as much to kids as adults, and just as much to nervous
              first-timers as people who are excited and ready to go. A good instructor reads
              where a student actually is and adjusts, rather than teaching the same lesson the
              same way to everyone who walks in.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Who We Work With</h2>
            <p className="text-inkSoft leading-relaxed">
              Our students are adults trying skiing or snowboarding for the first time, families
              planning a first snow trip together, kids starting young, and anyone who&apos;s
              always wanted to try it but never had someone walk them through the fundamentals
              first. We don&apos;t require any prior experience, any owned gear, or any
              particular fitness level — just a willingness to try something new, which is the
              one thing every single one of our students already has in common by the time they
              book a lesson.
            </p>
          </div>

          <div className="rounded-2xl bg-paperRaised border border-juniper/20 p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-ink mb-3">What We Don&apos;t Do</h2>
            <p className="text-inkSoft leading-relaxed">
              We&apos;re not a ski resort, and we don&apos;t sell lift tickets, on-mountain
              rentals, or resort season passes — those go directly through Arizona Snowbowl,
              Sunrise Park Resort, or Mount Lemmon Ski Valley, and we&apos;ll always point you to
              book those directly with the resort you&apos;re headed to. We&apos;re also not a
              competitive racing program — if your goal is youth ski racing, a dedicated racing
              team is a better fit than what we teach. What we focus on, specifically, is
              instruction: taking someone with zero experience and getting them ready for a real,
              confident first day on the mountain.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Serving All of Arizona</h2>
            <p className="text-inkSoft leading-relaxed">
              We work with students from across the Valley and Tucson, prepping for trips to any
              of Arizona&apos;s three resorts — Arizona Snowbowl, Sunrise Park Resort, and Mount
              Lemmon Ski Valley. Wherever you&apos;re headed and wherever you&apos;re starting
              from, the fundamentals we teach are the same, and we&apos;ll tailor the trip-specific
              advice to whichever mountain fits your plans.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-ink mb-3">Get in Touch</h2>
            <p className="text-inkSoft leading-relaxed mb-4">
              Ready to learn the fundamentals before your first real day on the mountain?{" "}
              <Link href="/book-a-lesson/" className="text-gold underline">Book a Lesson</Link>,
              call {SITE.phone}, or email {SITE.email}.
            </p>
            <p className="text-sm text-inkSoft">
              {SITE.name} — {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
