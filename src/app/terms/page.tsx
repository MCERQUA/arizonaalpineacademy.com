import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | Arizona Alpine Academy",
  description: "Terms of use for arizonaalpineacademy.com, operated by Arizona Alpine Academy.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="font-head text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">Terms of Use</h1>
          <p className="text-inkSoft text-sm">Effective date: August 20, 2026</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <p className="text-inkSoft leading-relaxed">
            Welcome to {SITE.domain} (the &quot;Site&quot;), operated by {SITE.name} (&quot;we,&quot;
            &quot;us&quot;). By using this Site, you agree to these Terms of Use.
          </p>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Bookings and Instruction</h2>
            <p className="text-inkSoft leading-relaxed">
              Submitting a form on this Site is a lesson request, not a confirmed booking —
              lessons are confirmed after we follow up to verify availability, experience level,
              and scheduling. We are an independent ski and snowboard instruction and trip-prep
              service; we do not sell lift tickets, on-mountain rental equipment, or resort
              season passes, which must be purchased directly from the applicable resort (Arizona
              Snowbowl, Sunrise Park Resort, or Mount Lemmon Ski Valley).
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Assumption of Risk</h2>
            <p className="text-inkSoft leading-relaxed">
              Skiing and snowboarding carry inherent risks, including the risk of injury,
              regardless of instruction or skill level. By booking a lesson, you acknowledge
              these inherent risks. Specific liability waivers or additional risk acknowledgment
              forms may be required directly by the resort where your lesson takes place,
              separate from this Site.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Use of the Site</h2>
            <p className="text-inkSoft leading-relaxed">
              You agree to use this Site only for lawful purposes. You may not attempt to
              interfere with the Site&apos;s normal operation, misuse any form on the Site, or
              submit false information through any form for fraudulent purposes.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Intellectual Property</h2>
            <p className="text-inkSoft leading-relaxed">
              The content, design, and organization of this Site are the property of {SITE.name}{" "}
              unless otherwise noted. You may view and reference this content for personal
              informational use, but may not republish, redistribute, or reproduce substantial
              portions of this Site&apos;s content without our permission.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">No Warranty</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site and its content are provided &quot;as is,&quot; without warranties of any
              kind, express or implied. Mountain and weather conditions vary and are outside our
              control; current conditions should always be confirmed directly with the applicable
              resort before your trip.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Limitation of Liability</h2>
            <p className="text-inkSoft leading-relaxed">
              To the fullest extent permitted by law, {SITE.name} is not liable for any damages
              arising from your use of, or reliance on, this Site&apos;s content, separate from
              any service agreement terms confirmed directly for a booked lesson.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Third-Party Links</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site may reference or link to third-party resources, including resort
              websites. We are not responsible for the content, accuracy, or availability of
              third-party sites.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Changes to These Terms</h2>
            <p className="text-inkSoft leading-relaxed">
              We may update these Terms of Use from time to time. Continued use of the Site after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-xl bg-paperRaised border border-ink/10 p-6">
            <h2 className="font-head text-lg font-bold text-ink mb-2">Contact Us</h2>
            <p className="text-sm text-inkSoft leading-relaxed">
              {SITE.name}<br />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
              Phone: <a href={SITE.phoneHref} className="text-gold">{SITE.phone}</a><br />
              Email: <a href={`mailto:${SITE.email}`} className="text-gold">{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
