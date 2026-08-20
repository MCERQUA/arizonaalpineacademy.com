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
  { category: "Getting Started", q: "I've genuinely never skied or snowboarded — is that a problem?", a: "Not at all — most of our students start from exactly there. This academy is built specifically for complete beginners, not people brushing up on existing skills." },
  { category: "Getting Started", q: "Is Arizona Snowbowl good for beginners?", a: "Yes — Snowbowl has a dedicated beginner area (around Hart Prairie Lodge) with gentle, wide terrain separate from its more advanced runs, which is part of why it's the most common first stop for Valley residents." },
  { category: "Getting Started", q: "Is Flagstaff good for skiing overall, or just for beginners?", a: "Snowbowl has real terrain across the difficulty range, not just beginner runs — its well-separated, dedicated beginner area is exactly why it works so well as a first stop, but there's plenty of mountain to grow into as you improve." },
  { category: "Getting Started", q: "How many lessons does it take before I can ski or ride on my own?", a: "It varies by person, but many beginners feel comfortable on easy green runs after one solid lesson, with a second lesson building real confidence and consistency. We'll give you an honest read on where you stand after your first session rather than a generic promise." },
  { category: "Cost & Logistics", q: "How much are ski lessons per hour?", a: "Pricing depends on whether you choose private or group instruction and how long the lesson runs — private lessons cost more per person but offer full individual attention, while group lessons cost less per person. Tell us your preference when you book and we'll give you a straight answer." },
  { category: "Cost & Logistics", q: "How much does it cost to ski in Flagstaff for a full first trip?", a: "Between a lift ticket, equipment rental, and a lesson, a first trip typically costs more than a lot of first-timers expect going in. See our full cost breakdown blog post for real numbers rather than a vague estimate." },
  { category: "Cost & Logistics", q: "How long is the drive from Phoenix to Arizona Snowbowl?", a: "About two and a half hours in good conditions, longer if winter weather affects driving on I-17 — which happens more often than out-of-state visitors expect. Build in extra time, especially for an early-morning trip." },
  { category: "Cost & Logistics", q: "How far is Mount Lemmon from Tucson?", a: "Roughly an hour up the Catalina Highway — the main reason it's the obvious choice for Tucson-area residents who don't want the longer drive to Flagstaff." },
  { category: "Gear & Preparation", q: "Do I need to already own ski or snowboard gear?", a: "No — boots, skis or a snowboard, and poles are all available to rent at every Arizona resort. Renting makes sense for at least your first several trips, before you know how often you'll actually go." },
  { category: "Gear & Preparation", q: "What should I wear if I don't own any winter gear?", a: "Waterproof, layered clothing matters most — a waterproof jacket and pants, warm layers underneath, and real gloves and a hat. Arizona's resorts sit at real elevation, and the temperature difference from the Valley floor is significant even on a sunny day." },
  { category: "Gear & Preparation", q: "Do I need to be in good physical shape to start?", a: "No specific fitness level is required for a beginner lesson. Skiing and snowboarding both use muscles most people don't expect, and a good instructor paces the lesson to your comfort and energy level rather than pushing a fixed pace regardless of how you're doing." },
  { category: "Kids & Families", q: "What age can kids start lessons?", a: "It varies by child, but many kids are ready for a real first lesson around age 5 or 6, once they can follow simple directions and have enough body control for the fundamentals to click." },
  { category: "Kids & Families", q: "Should my kid learn to ski or snowboard first?", a: "Most kids start on skis, since two independent skis tend to be more forgiving for younger beginners than a single fixed board — but it's not a hard rule, and some kids do better starting on a snowboard. Tell us your child's age and any preference when you book." },
  { category: "Kids & Families", q: "Can our family book a lesson together even with different experience levels?", a: "Sometimes, depending on the age and skill gap — a lesson paced for a confident preteen isn't right for a nervous 5-year-old. Tell us everyone's age and experience level and we'll recommend whether a shared or separate lesson makes more sense." },
  { category: "Booking", q: "How far in advance should I book a lesson?", a: "As early as you can, especially around weekends, holidays, and stretches right after fresh snowfall — those are the busiest times for lessons and for the resorts themselves. If you don't have a firm trip date yet, you can still get the fundamentals in place ahead of time." },
  { category: "Booking", q: "Do you sell lift tickets or resort rentals?", a: "No — those go directly through the resort (Arizona Snowbowl, Sunrise Park Resort, or Mount Lemmon Ski Valley). We handle instruction and trip prep, and we'll always point you to book tickets and on-mountain rentals directly with the resort you're headed to." },
];
