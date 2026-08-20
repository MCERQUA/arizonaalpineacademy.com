import type { ClusterContent } from "@/components/ClusterLayout";

export const CLUSTER_CONTENT: Record<string, ClusterContent> = {
  "ski-lessons": {
    slug: "ski-lessons",
    image: "/images/lesson-ski.jpg",
    intro:
      "If you've never skied before, the idea of standing on two thin planks and pointing yourself downhill is a strange one — and it should feel a little strange the first time. That's normal, and it's exactly what a good first lesson is built to work through. Arizona Alpine Academy teaches the real fundamentals of skiing to complete beginners, so your first day on the mountain is about building confidence instead of just surviving it.",
    sections: [
      {
        heading: "Who This Is For",
        body: [
          "This isn't instruction built for people who already ski and want to get better — it's built specifically for people who have never clipped into a pair of skis in their life. Most of our students are adults from Phoenix, Tucson, and the surrounding Valley who grew up somewhere without snow, or who simply never had the chance to try it. Some are planning a first trip with friends and don't want to be the one person on the mountain who has no idea what they're doing. Others are parents who want to learn alongside their kids instead of watching from the lodge. Whatever brought you here, if the honest answer to \"have you skied before\" is no, you're exactly who this is for.",
        ],
      },
      {
        heading: "What a Lesson Actually Covers",
        body: [
          "A real beginner ski lesson isn't just \"here are your skis, go.\" We start with the fundamentals that make everything after them possible: how to stand in your boots and skis without fighting your own balance, how to move and glide on flat ground before you ever face a slope, how to control your speed and come to a stop on purpose, and how to turn — which is the single skill that turns \"sliding downhill\" into \"skiing.\" We also cover the practical stuff nobody thinks to explain: how to get on and off a chairlift, how to read a trail map and understand what green, blue, and black runs actually mean, and basic mountain etiquette so you're not accidentally in someone's way.",
        ],
      },
      {
        heading: "Private vs. Group Lessons",
        body: [
          "We offer both formats, and which one makes sense depends on what you're looking for. Private lessons move at your exact pace, with full attention on your specific sticking points — a good option if you're nervous, want to move quickly, or are booking for just yourself or one other person. Group lessons put you with other beginners at a similar stage, which some people actually prefer: there's something reassuring about learning alongside other people who are just as new to it as you are, and it tends to cost less per person. Tell us your preference and group size when you book and we'll set up the right format.",
        ],
      },
      {
        heading: "What to Expect on Lesson Day",
        body: [
          "Plan for a lesson to run a few hours, depending on the format and how the group (or you individually) is progressing. We'll start on the flattest, most forgiving terrain available and only move to anything with real slope once the fundamentals are solid — rushing a beginner onto real terrain too fast is one of the most common reasons first-timers have a bad first experience, and we deliberately don't do that. By the end of a solid first lesson, most beginners can make basic turns, control their speed, and stop reliably on gentle beginner terrain, which is exactly the foundation you need for your first real runs.",
        ],
      },
      {
        heading: "Gear: What You Need vs. What You Can Rent",
        body: [
          "You do not need to own any ski gear to take a lesson or plan your first trip. Boots, skis, and poles are all available to rent at every Arizona resort, and renting is the right call for at least your first several outings — there's no reason to buy equipment before you know how often you'll actually use it. What you do need to bring or plan for is appropriate clothing: waterproof layers, gloves, and a warm hat, since Arizona's resorts sit at real elevation and the temperature difference from the Valley floor is significant even on a sunny day.",
        ],
      },
    ],
    faq: [
      { q: "Do I need to be in good physical shape to take a ski lesson?", a: "No specific fitness level is required for a beginner lesson — skiing uses different muscles than most people expect, and a good instructor paces the lesson to match your comfort and energy level rather than pushing a fixed pace regardless of how you're doing." },
      { q: "How many lessons does it take before I can ski on my own?", a: "It varies by person, but many beginners feel comfortable on easy green runs after just one solid lesson, with a second lesson helping build real confidence and consistency. We'll give you an honest read on where you stand after your first session." },
    ],
    relatedSlugs: ["kids-family-ski-programs", "snowboard-lessons"],
  },

  "snowboard-lessons": {
    slug: "snowboard-lessons",
    image: "/images/lesson-snowboard.jpg",
    intro:
      "Snowboarding and skiing look similar from a distance — same mountain, same lift, same snow — but the actual skill of learning to ride is genuinely different from learning to ski, with its own learning curve, its own common frustrations, and its own fundamentals. Arizona Alpine Academy teaches beginner snowboarding specifically, not as an afterthought to ski instruction, so you're learning from someone who understands what actually trips up a first-time rider.",
    sections: [
      {
        heading: "Why Snowboarding Gets Its Own Lesson Track",
        body: [
          "A lot of ski schools treat snowboarding as a smaller version of their ski program, taught by whichever instructor happens to also ride. We treat it as its own discipline because the early learning curve really is different. Skiing lets you keep both feet independent and pointed mostly forward; snowboarding straps both feet to a single board turned sideways to your direction of travel, which means balance, falling, and turning all work differently from what most beginners expect. The good news is that once the fundamentals click, snowboarding tends to feel more intuitive to some people than skiing does — but getting to that point requires instruction built around how snowboarding actually works, not skiing instruction with a board swapped in.",
        ],
      },
      {
        heading: "What a Beginner Snowboard Lesson Covers",
        body: [
          "We start with the basics that make everything else possible: how to strap in and stand on the board, how to balance with both feet fixed at an angle instead of independent, and how to fall safely, since almost every beginner falls a lot in the first hour and knowing how to do it without hurting your wrists or tailbone matters. From there we cover the \"falling leaf\" — sliding side to side down the fall line with one edge of the board engaged, which is the foundational movement almost every rider learns first — followed by linking your first real turns and learning to control speed. We also cover the practical mechanics beginners don't expect: how to get on and off a chairlift with one foot unstrapped, and how to walk or shuffle across flat ground without both feet locked in.",
        ],
      },
      {
        heading: "The Learning Curve, Honestly",
        body: [
          "Most first-time snowboarders spend more time on the ground in their first hour than most first-time skiers do, and that's normal — it's part of how the sport works, not a sign you're bad at it. Where skiing lets you make small, controlled progress from the very first minute, snowboarding often involves a slower start followed by a faster breakthrough once the falling-leaf and basic-turn movements click. Knowing that going in helps — a lot of first-time snowboarders quit early because nobody told them the first hour is supposed to be the hardest part, not a preview of how the whole day will go.",
        ],
      },
      {
        heading: "Private vs. Group Lessons",
        body: [
          "Private lessons give you full instructor attention to work through your specific sticking points at your own pace — a strong option if you want to move past the frustrating early falls as quickly as possible. Group lessons put you with other beginner riders working through the same learning curve at the same time, which some people find genuinely reassuring — everyone around you is falling too, and that takes some of the self-consciousness out of it. Tell us your preference when you book.",
        ],
      },
      {
        heading: "Gear: What You Need vs. What You Can Rent",
        body: [
          "You don't need to own a snowboard, boots, or bindings to take a lesson — all of it is available to rent at every Arizona resort, and renting makes sense for your first several outings while you figure out whether you want to invest in your own setup. What matters more for a beginner is clothing: waterproof, breathable layers and real gloves matter even more for snowboarding than skiing, since you'll be sitting and kneeling in the snow far more often while you're learning.",
        ],
      },
    ],
    faq: [
      { q: "Is snowboarding harder to learn than skiing?", a: "The first hour is often harder — more falling, a steeper initial learning curve — but many riders find the middle stage clicks faster once the fundamentals set in. Neither is objectively harder overall; they're just different learning curves." },
      { q: "Should a total beginner learn to ski or snowboard first?", a: "Whichever one you're actually excited to try. Trying to \"start easier\" by picking skiing first doesn't necessarily make snowboarding easier later — if snowboarding is what you actually want to do, there's no reason to detour through skiing first." },
    ],
    relatedSlugs: ["kids-family-ski-programs", "ski-lessons"],
  },

  "kids-family-ski-programs": {
    slug: "kids-family-ski-programs",
    image: "/images/kids-family.jpg",
    intro:
      "Teaching a kid to ski or snowboard is a different job than teaching an adult — shorter attention spans, different fears, different motivations, and a completely different relationship to falling down. Arizona Alpine Academy's kids and family programs are built around how kids actually learn, not a scaled-down version of adult instruction, so your family's first snow trip together is a genuinely good one.",
    sections: [
      {
        heading: "Why Kids Need Their Own Approach",
        body: [
          "An adult beginner usually wants to understand the mechanics — why you turn the way you turn, why weight distribution matters. Most kids don't care about any of that, and trying to explain it to them the way you would an adult usually backfires. Kids learn skiing and snowboarding through play, repetition, and small, obvious wins: games that build balance without calling it \"balance practice,\" short goals they can hit in minutes instead of over a whole session, and instructors who read a kid's energy and frustration level in real time and adjust instead of pushing through a fixed lesson plan. That's the approach we use, and it's a big part of why kids often pick up the fundamentals faster than adults do, once the lesson is actually built for them.",
        ],
      },
      {
        heading: "What Age Can Kids Start?",
        body: [
          "There's no single universal age, because it depends on the individual kid — their coordination, their comfort with cold and snow, and honestly their patience for instruction at all. That said, many kids are ready for a real first lesson somewhere around age 5 or 6, once they can follow simple directions and have enough body control to make the fundamentals click. Younger kids can sometimes start earlier in a very playful, low-pressure format focused purely on getting comfortable in the snow rather than actual skiing or riding technique. Tell us your child's age and personality when you book and we'll recommend the right starting point rather than assuming a one-size-fits-all age cutoff.",
        ],
      },
      {
        heading: "Skiing or Snowboarding for Kids?",
        body: [
          "Most kids start on skis rather than snowboards, mainly because skiing tends to be more forgiving for younger beginners — two independent skis are generally easier for a young kid to balance and control than a single board with both feet fixed. That's a general pattern, not a rule: some kids take to snowboarding just fine, especially slightly older kids with more developed balance and coordination. If your child has a strong preference either way, we'll work with that instead of steering them toward the \"usual\" choice.",
        ],
      },
      {
        heading: "Planning a Family Trip, Not Just a Kids' Lesson",
        body: [
          "A lot of what makes a family's first snow trip stressful has nothing to do with the actual skiing — it's the logistics. How do you keep a toddler warm and occupied while an older kid is in a lesson? What do you do if one parent skis and the other has never tried it? How long can a young kid realistically ski before they're cold, tired, and done for the day? We help families plan around these questions before the trip, not figure them out for the first time standing in a parking lot at 8,000 feet. That includes realistic expectations for how much actual ski time to plan per age group, and honest advice about whether a first trip should be a half-day or a full one.",
        ],
      },
      {
        heading: "What to Expect on Lesson Day",
        body: [
          "Kids' lessons run shorter than adult lessons and build in more breaks — cold, tired kids don't learn, no matter how good the instructor is. We focus on making the first hour genuinely fun rather than technically perfect, because a kid who has fun in their first lesson wants to come back, and a kid who doesn't usually won't. Parents are welcome to watch, and for younger or more nervous kids, we'll talk through whether having a parent nearby helps or actually makes a child more anxious about performing — it's different for every kid.",
        ],
      },
    ],
    faq: [
      { q: "My kid is nervous about trying skiing or snowboarding for the first time — is that normal?", a: "Very normal, and a good instructor expects it. We build in time to just get comfortable in boots and on snow before ever asking a nervous kid to try to ski or ride, rather than rushing straight into instruction." },
      { q: "Can siblings of different ages and skill levels take a lesson together?", a: "Sometimes, but it depends on the age and skill gap — a lesson paced for a confident 9-year-old often isn't right for a nervous 5-year-old. Tell us your kids' ages and experience levels and we'll recommend whether a shared or separate lesson makes more sense." },
    ],
    relatedSlugs: ["first-time-at-arizona-snowbowl", "ski-lessons"],
  },

  "first-time-at-arizona-snowbowl": {
    slug: "first-time-at-arizona-snowbowl",
    image: "/images/snowbowl-firsttimer.jpg",
    intro:
      "Arizona Snowbowl, just outside Flagstaff, is where most Phoenix and Valley residents end up for their first real day on snow — it's the biggest and most developed of Arizona's three ski areas, about two and a half hours north of Phoenix. If you're planning your first trip, here's what actually happens once you get there, not just the trail map and lift ticket prices.",
    sections: [
      {
        heading: "Is Arizona Snowbowl Good for Beginners?",
        body: [
          "Yes, genuinely. Snowbowl has dedicated beginner terrain — the Hart Prairie Lodge area is built around gentle, wide-open runs specifically for first-timers, separate from the steeper terrain higher on the mountain. That separation matters more than people realize: a lot of what makes a first day intimidating is worrying about accidentally ending up on terrain you're not ready for, and Snowbowl's beginner area is laid out so that's genuinely hard to do by accident. It's not a \"beginner slope tacked onto an expert mountain\" situation — the beginner terrain is a real, dedicated part of the resort.",
        ],
      },
      {
        heading: "Getting There and Parking",
        body: [
          "The drive from Phoenix is a little over two hours in good conditions, longer if winter weather affects driving on I-17 — which happens more often than out-of-state visitors expect, so build in extra time and check road conditions before you leave, especially early in the morning. Parking fills up on weekends and holidays, particularly once fresh snow has fallen, so arriving early in the day gives you a much better shot at close parking and shorter lift lines both.",
        ],
      },
      {
        heading: "What a First Day Actually Feels Like",
        body: [
          "The first hour is usually the strangest part — getting into rental boots (which feel foreign if you've never worn ski boots before), carrying gear you're not used to carrying, and adjusting to elevation that's significantly higher than the Valley floor. Don't be surprised if you feel a little more winded than expected just walking around before you've even started skiing — Snowbowl's base sits well above 9,000 feet, and that elevation is a real adjustment for anyone coming straight up from Phoenix. Once you're actually on the beginner terrain and moving, most first-timers find the intimidation fades fast — it usually takes less than an hour of practice before the mountain starts to feel manageable instead of overwhelming.",
        ],
      },
      {
        heading: "Crowds and Timing",
        body: [
          "Weekends, holidays, and any day right after a fresh snowfall are Snowbowl's busiest times — lift lines are longer, beginner areas are more crowded, and parking is tighter. If your schedule allows any flexibility at all, a weekday trip is a meaningfully easier first experience: shorter lines, more space on the beginner terrain, and a more relaxed pace to actually absorb what you're learning instead of feeling rushed by a crowd behind you.",
        ],
      },
      {
        heading: "What to Do Before You Go",
        body: [
          "The single biggest thing that changes a first-timer's day at Snowbowl is showing up with some fundamentals already in place instead of learning everything cold, in real time, on the mountain. That's the gap Arizona Alpine Academy fills — we teach the basics of stance, balance, turning, and stopping before your trip (or set you up with a lesson that fits into your Snowbowl day), so your actual time on the mountain is about building confidence on real terrain instead of surviving your first exposure to any of it.",
        ],
      },
      {
        heading: "Lift Tickets, Rentals, and Lessons: Who to Book With",
        body: [
          "We don't sell lift tickets, on-mountain rental equipment, or Snowbowl's own on-site lessons — those go directly through Arizona Snowbowl, and you should book those with the resort itself (snowbowl.ski) ahead of your trip, especially during busy periods when tickets and rentals can sell out. What we provide is the preparation layer before and around that: fundamentals instruction so you're not starting from zero, and honest advice on what to expect so nothing on the day catches you off guard.",
        ],
      },
    ],
    faq: [
      { q: "How much does it cost to ski at Arizona Snowbowl for the first time?", a: "Between a lift ticket, rental equipment, and a lesson, first-time costs add up — see our full cost breakdown blog post for real numbers instead of a vague estimate." },
      { q: "Is Flagstaff good for skiing, or is Snowbowl mostly a beginner hill?", a: "Snowbowl has real terrain across the difficulty range, not just beginner runs — but its dedicated, well-separated beginner area is exactly why it's the right first stop for someone who's never skied." },
    ],
    relatedSlugs: ["sunrise-mount-lemmon-trip-prep", "ski-lessons"],
  },

  "sunrise-mount-lemmon-trip-prep": {
    slug: "sunrise-mount-lemmon-trip-prep",
    image: "/images/sunrise-mountlemmon.jpg",
    intro:
      "Arizona Snowbowl gets most of the attention, but it isn't the only place to ski or snowboard in the state — and depending on where you're starting from and what kind of first trip you want, it might not even be the best fit. Sunrise Park Resort and Mount Lemmon Ski Valley are both real, worthwhile options, each with its own character worth understanding before you pick where to go.",
    sections: [
      {
        heading: "Sunrise Park Resort: The White Mountains Option",
        body: [
          "Sunrise Park Resort sits in the White Mountains near Greer, roughly a four-hour drive from Phoenix — longer than Snowbowl, which is exactly why it's worth knowing whether it fits your trip before committing to it. It's owned and operated by the White Mountain Apache Tribe, and it offers a genuinely different pace than Snowbowl: less crowded on an average day, more terrain spread across three separate peaks, and a quieter, more relaxed base area overall. For families or beginners who find Snowbowl's weekend crowds stressful, or who live closer to the White Mountains than to Flagstaff, Sunrise is a real alternative rather than a consolation prize.",
          "Who Sunrise fits best: families and beginners prioritizing a calmer, less crowded mountain over minimizing drive time, and anyone based in the eastern part of the state for whom Sunrise is actually the closer option. It's also a strong pick if you're planning a longer weekend trip rather than a single day, since the drive is substantial enough that a day trip alone is a lot of driving for the time on snow you'd actually get.",
          "What to know before you go: the extra distance means more planning around weather and road conditions than a Snowbowl day trip requires — check conditions on both the drive out and the mountain itself before you leave, and build in more buffer time than you think you need.",
        ],
      },
      {
        heading: "Mount Lemmon Ski Valley: Tucson's Own Mountain",
        body: [
          "Mount Lemmon Ski Valley rises above Tucson and holds a genuinely unusual distinction: it's the southernmost ski area in the continental United States. For Tucson-area residents, that makes it the obvious choice — a roughly hour-long drive up the Catalina Highway gets you from desert to snow without the multi-hour drive Phoenix residents deal with to reach Snowbowl.",
          "Mount Lemmon is smaller than Snowbowl, with less terrain overall and a shorter season that depends more heavily on natural snowfall year to year, since it has less snowmaking infrastructure than the bigger resorts. That makes it less of a guaranteed destination than Snowbowl, but it's genuinely useful for exactly what it is: a close, low-commitment way for Tucson-area beginners to get a first taste of skiing or snowboarding without a full-day production out of it.",
          "Who Mount Lemmon fits best: Tucson and southern Arizona residents who want to try skiing or snowboarding without a multi-hour drive, and anyone looking for a shorter, lower-pressure first outing rather than a full day trip.",
          "What to know before you go: because the season depends more on natural snowfall, check current conditions before you drive up — a mountain that had great snow two weeks ago isn't a guarantee for today. The smaller scale also means less beginner terrain overall than Snowbowl, so temper expectations around variety if it's your first time.",
        ],
      },
      {
        heading: "Picking the Right Resort for Your First Trip",
        body: [
          "If you're starting from Phoenix and want the most beginner infrastructure and the shortest reasonable drive, Snowbowl is usually the right default. If you're in Tucson, Mount Lemmon is the obvious low-commitment first step. If you're closer to the White Mountains, want a quieter mountain, or are planning a longer weekend trip rather than a single day, Sunrise is worth serious consideration over the longer drive to Snowbowl. None of these are wrong choices — they fit different starting points and different kinds of first trips.",
        ],
      },
      {
        heading: "We Prep You for Any of the Three",
        body: [
          "Wherever you're headed, the fundamentals we teach are the same — stance, balance, turning, stopping, and knowing what to actually expect on the mountain. We'll tailor the specifics (drive planning, what to expect on arrival, terrain layout) to whichever resort fits your trip, rather than assuming everyone is headed to Snowbowl.",
        ],
      },
    ],
    faq: [
      { q: "Is Sunrise Park Resort worth the longer drive from Phoenix?", a: "For a lot of people, yes — the quieter mountain and different terrain mix are a real draw, especially for a weekend trip rather than a single day. For a quick one-day outing, the shorter drive to Snowbowl is usually the more practical choice." },
      { q: "Does Mount Lemmon have real beginner terrain, or is it just small?", a: "It has genuine beginner-friendly terrain — it's simply smaller in total scale than Snowbowl, which makes it a great close-to-home first outing rather than a full day-trip destination." },
    ],
    relatedSlugs: ["first-time-at-arizona-snowbowl", "ski-lessons"],
  },
};
