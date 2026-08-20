import Link from "next/link";
import { Phone, Mail, MapPin, Mountain } from "lucide-react";
import { SITE, CLUSTER_PAGES, BLOG_POSTS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-timberline text-paper/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-head font-bold text-white text-lg mb-3">
            <Mountain className="text-gold" size={22} />
            {SITE.name}
          </div>
          <p className="text-sm text-paper/70 mb-4">
            Ski and snowboard instruction and trip prep for Phoenix and Tucson first-timers
            headed to Arizona&apos;s own resorts.
          </p>
          <div className="space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={15} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={15} /> {SITE.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Programs</h3>
          <ul className="space-y-2 text-sm">
            {CLUSTER_PAGES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}/`} className="hover:text-gold transition-colors">{c.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Blog</h3>
          <ul className="space-y-2 text-sm">
            {BLOG_POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="hover:text-gold transition-colors">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/faq/" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link href="/contact/" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link href="/book-a-lesson/" className="hover:text-gold transition-colors">Book a Lesson</Link></li>
            <li><Link href="/privacy/" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms/" className="hover:text-gold transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 px-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
