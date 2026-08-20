import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import BookLessonForm from "@/components/BookLessonForm";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Lesson | Arizona Alpine Academy",
  description: "Request a ski or snowboard lesson for your first trip to Arizona Snowbowl, Sunrise Park Resort, or Mount Lemmon Ski Valley. Call 844-967-5247.",
};

const NEXT_STEPS = [
  { title: "We'll reach out", body: "Usually within one business day, to confirm your experience level and preferred resort." },
  { title: "We recommend a format", body: "Private or group instruction, based on what you're looking for." },
  { title: "We walk you through it", body: "What a lesson actually covers, so you know what to expect before you show up." },
  { title: "No obligation", body: "This is the start of a conversation about what you need, not a locked-in commitment." },
];

export default function BookLessonPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book a Lesson", path: "/book-a-lesson/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Book a Lesson</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6 max-w-3xl">
            Book a Lesson
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            Tell us your experience level and which resort you&apos;re headed to, and we&apos;ll
            set you up with the right lesson — private or group, adult or kids, whatever fits
            your trip.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">What Happens After You Book</h2>
              <ul className="space-y-4">
                {NEXT_STEPS.map((step) => (
                  <li key={step.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-juniper shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="text-sm text-inkSoft leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">Who This Is For</h2>
              <p className="text-inkSoft leading-relaxed">
                Whether you&apos;ve never touched a pair of skis or a snowboard, you tried once
                years ago and want a real refresher, or you&apos;re booking for your kids and
                want to be there to help, tell us where you&apos;re starting from. There&apos;s
                no experience level too basic — &quot;I&apos;ve genuinely never done this&quot;
                is the most common starting point we hear, and it&apos;s exactly who this academy
                is built for.
              </p>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">Private or Group — We&apos;ll Help You Decide</h2>
              <p className="text-inkSoft leading-relaxed">
                If you&apos;re not sure whether a private or group lesson is the better fit,
                that&apos;s a normal question and part of what we&apos;ll help you sort out.
                Private lessons move at your exact pace and work well for nervous beginners,
                tight timelines, or small groups who want full attention. Group lessons put you
                with other beginners at a similar stage and tend to cost less per person — a good
                option if you&apos;re comfortable learning alongside others.
              </p>
            </div>

            <div className="rounded-xl bg-paperRaised border border-juniper/20 p-5">
              <p className="text-sm text-inkSoft leading-relaxed">
                Lessons book up faster than people expect, especially around weekends, holidays,
                and any stretch right after a fresh snowfall — the same stretches when the
                resorts themselves are busiest. If you already have a trip date in mind,
                requesting a lesson as early as you can gives you the most flexibility on timing
                and format.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <BookLessonForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
