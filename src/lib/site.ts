export const SITE = {
  name: "Arizona Alpine Academy",
  shortName: "Arizona Alpine Academy",
  domain: "arizonaalpineacademy.com",
  url: "https://arizonaalpineacademy.com",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  tagline: "Learn to ski or snowboard in Arizona.",
};

export const RESORTS = [
  { name: "Arizona Snowbowl", location: "Flagstaff, AZ" },
  { name: "Sunrise Park Resort", location: "Greer, AZ" },
  { name: "Mount Lemmon Ski Valley", location: "Tucson, AZ" },
];

export type ClusterPage = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
};

export const CLUSTER_PAGES: ClusterPage[] = [
  {
    slug: "ski-lessons",
    navLabel: "Ski Lessons",
    h1: "Ski Lessons for First-Timers and Beginners",
    metaTitle: "Ski Lessons in Arizona for Beginners | Arizona Alpine Academy",
    metaDescription:
      "Private and group ski lessons for Phoenix and Tucson first-timers headed to Arizona's ski resorts. Call 844-967-5247.",
    teaser: "Never skied before? Start with real instruction, not guesswork on the bunny slope.",
  },
  {
    slug: "snowboard-lessons",
    navLabel: "Snowboard Lessons",
    h1: "Snowboard Lessons for First-Timers and Beginners",
    metaTitle: "Snowboard Lessons in Arizona for Beginners | Arizona Alpine Academy",
    metaDescription:
      "Private and group snowboard lessons for Arizona first-timers, taught by instructors who focus on beginners. Call 844-967-5247.",
    teaser: "Snowboarding has its own learning curve — lessons built for a true first-timer.",
  },
  {
    slug: "kids-family-ski-programs",
    navLabel: "Kids & Family Ski Programs",
    h1: "Kids & Family Ski Programs",
    metaTitle: "Kids & Family Ski Lessons in Arizona | Arizona Alpine Academy",
    metaDescription:
      "Beginner-friendly ski and snowboard programs for kids and families planning a first trip to an Arizona resort. Call 844-967-5247.",
    teaser: "A first snow day the whole family can enjoy together, not just the confident skier.",
  },
  {
    slug: "first-time-at-arizona-snowbowl",
    navLabel: "First Time at Arizona Snowbowl",
    h1: "First Time at Arizona Snowbowl: What to Know",
    metaTitle: "First Time at Arizona Snowbowl: A Beginner's Guide | Arizona Alpine Academy",
    metaDescription:
      "Is Arizona Snowbowl good for beginners? What to expect, what to bring, and how lessons help your first day go smoothly. Call 844-967-5247.",
    teaser: "Arizona's biggest resort, explained for someone who's never been.",
  },
  {
    slug: "sunrise-mount-lemmon-trip-prep",
    navLabel: "Sunrise & Mount Lemmon Trip Prep",
    h1: "Trip Prep for Sunrise Park Resort & Mount Lemmon Ski Valley",
    metaTitle: "Sunrise & Mount Lemmon Ski Trip Prep | Arizona Alpine Academy",
    metaDescription:
      "What to know before your first trip to Sunrise Park Resort or Mount Lemmon Ski Valley. Call 844-967-5247.",
    teaser: "Two more Arizona resorts worth knowing — and how to pick the right one for your trip.",
  },
];

export function getClusterPage(slug: string) {
  return CLUSTER_PAGES.find((c) => c.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  relatedClusters: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "is-snowbowl-good-for-beginners",
    title: "Is Arizona Snowbowl Good for Beginners?",
    metaTitle: "Is Arizona Snowbowl Good for Beginners?",
    metaDescription: "A direct, honest answer for first-timers considering Arizona Snowbowl for their first ski or snowboard trip.",
    date: "2026-09-14",
    excerpt: "A direct, honest answer for first-timers considering Arizona Snowbowl for their first ski or snowboard trip.",
    relatedClusters: ["first-time-at-arizona-snowbowl"],
  },
  {
    slug: "cost-to-ski-in-flagstaff",
    title: "How Much Does It Cost to Ski in Flagstaff? A Real Budget Breakdown",
    metaTitle: "How Much Does It Cost to Ski in Flagstaff?",
    metaDescription: "What a first day of skiing at Arizona Snowbowl actually costs — lift tickets, rentals, lessons, and the extras nobody mentions.",
    date: "2026-09-28",
    excerpt: "What a first day of skiing at Arizona Snowbowl actually costs — lift tickets, rentals, lessons, and the extras nobody mentions.",
    relatedClusters: ["first-time-at-arizona-snowbowl", "ski-lessons"],
  },
  {
    slug: "first-timer-gear-checklist",
    title: "What to Bring: A First-Timer's Gear Checklist for Arizona Skiing",
    metaTitle: "First-Timer's Gear Checklist for Arizona Skiing",
    metaDescription: "What you actually need for your first ski trip when you don't own winter gear and live in the desert.",
    date: "2026-10-12",
    excerpt: "What you actually need for your first ski trip when you don't own winter gear and live in the desert.",
    relatedClusters: ["ski-lessons", "kids-family-ski-programs"],
  },
  {
    slug: "snowbowl-vs-sunrise-vs-mount-lemmon",
    title: "Snowbowl vs. Sunrise vs. Mount Lemmon: Which Arizona Resort Is Right for Your First Trip?",
    metaTitle: "Snowbowl vs. Sunrise vs. Mount Lemmon: Which Is Right for You?",
    metaDescription: "How Arizona's three ski areas compare for a first-timer, and how to pick the right one for your trip.",
    date: "2026-10-26",
    excerpt: "How Arizona's three ski areas compare for a first-timer, and how to pick the right one for your trip.",
    relatedClusters: ["first-time-at-arizona-snowbowl", "sunrise-mount-lemmon-trip-prep"],
  },
];

export const FAQS: { q: string; a: string; category: string }[] = [
  { category: "Cost & Booking", q: "How much are ski lessons per hour?", a: "Lesson pricing depends on group size (private vs. group), duration, and experience level. Tell us who's booking and their experience level and we'll give you a straightforward quote — no hidden fees." },
  { category: "Cost & Booking", q: "How much does it cost to ski in Flagstaff overall?", a: "A first day at Arizona Snowbowl typically includes a lift ticket, rental equipment, and a lesson — each priced separately by the resort and by us for lessons. See our cost breakdown blog post for real numbers, or ask us when you book and we'll help you budget the whole day." },
  { category: "Cost & Booking", q: "How far in advance should I book a lesson?", a: "For weekends and holiday periods, book 1-2 weeks ahead if you can — popular time slots fill up. For weekdays or less busy periods, a few days' notice is usually fine, but earlier is always better if you have a specific date in mind." },
  { category: "Is Arizona Skiing Any Good?", q: "Is Arizona Snowbowl good for beginners?", a: "Yes — Snowbowl has dedicated beginner terrain and a learning area separate from its more advanced runs, which is exactly why it's a common first stop for Phoenix-area first-timers. Starting with a lesson makes a much bigger difference to how your first day feels than which specific resort you choose." },
  { category: "Is Arizona Skiing Any Good?", q: "Is Flagstaff good for skiing in general?", a: "Yes, within reason — Flagstaff's Arizona Snowbowl is a real, functioning ski resort with a respectable vertical drop and a full range of terrain, though snow conditions vary year to year more than a mountain-state resort might. For a first-timer focused on learning fundamentals, conditions matter less than good instruction." },
  { category: "Gear & What to Bring", q: "Do I need to own my own ski or snowboard gear?", a: "No — nearly every first-timer rents. Arizona's resorts have on-site rental shops, and lessons don't require you to own anything beyond warm layers and waterproof gloves." },
  { category: "Gear & What to Bring", q: "What should I wear if I don't own winter gear?", a: "Layer with a base layer, an insulating mid-layer (fleece works), and a waterproof/windproof outer layer. Waterproof gloves and snow-appropriate footwear (ski boots are rented, but you'll want warm socks) matter more than any single expensive item. See our first-timer gear checklist for the full list." },
  { category: "Gear & What to Bring", q: "Can I rent everything I need at the resort?", a: "Yes — skis or a snowboard, boots, and poles are all available to rent on-site at Arizona's resorts. We can point you to rental options when you book a lesson." },
  { category: "Kids & Families", q: "What age can kids start ski or snowboard lessons?", a: "Most kids can start ski lessons around age 4-5, and snowboard lessons a bit later (around 6-7) since balance requirements differ. Tell us your child's age when you book and we'll recommend the right program." },
  { category: "Kids & Families", q: "Can our whole family take lessons together?", a: "Yes — we can arrange group or private family lessons that account for different experience levels within the same family. See our Kids & Family Ski Programs page for details." },
  { category: "Logistics", q: "How far is Arizona Snowbowl from Phoenix?", a: "It's roughly a 2.5 hour drive from the Phoenix metro area to Flagstaff, plus another 15-20 minutes up the mountain to the resort itself. Leaving early on a lesson day helps you avoid both traffic and the lift-ticket line." },
  { category: "Logistics", q: "How far is Mount Lemmon from Tucson?", a: "Mount Lemmon Ski Valley is about an hour's drive from Tucson, making it the most convenient option for Tucson-area residents specifically." },
  { category: "Logistics", q: "Do you sell lift tickets or season passes?", a: "No — lift tickets and season passes are sold directly by each resort. We handle instruction and trip prep; we'll point you to the right place to buy tickets when you book a lesson." },
];
