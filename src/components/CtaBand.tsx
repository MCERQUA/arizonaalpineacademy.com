import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CtaBand({
  heading = "Ready to Plan Your First Trip?",
  body = "Tell us your experience level and which resort you're headed to, and we'll set you up with the right lesson.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-timberline">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-paper/75 mb-8 max-w-2xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-a-lesson/"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white hover:bg-goldDark transition-colors"
          >
            Book a Lesson
          </Link>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={16} className="text-gold" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
