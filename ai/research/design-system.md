# Design System — arizonaalpineacademy.com

Light, warm, welcoming local-service aesthetic per FLAGSHIP "NOT DARK" override. Third distinct
palette in this session's build set (subcontractorindemnityagreement.com used rust/forest/amber;
scottsdaleskimachine.com used copper/saguaro/gold) — same warm-earth-tone family by house rule,
but genuinely distinct exact hexes, a different accent role, a different typography pairing, and
a different motif. Explicitly avoids icy-blue/silver "snow" clichés again, per instruction — the
desert-to-alpine visual hook comes from warm golden trailhead/mountain-sun photography, not a
cool palette.

## Palette (exact hexes, hue-verified against the palette gate)
| Token | Hex | Role |
|---|---|---|
| `gold` (primary) | `#B8862E` | Primary brand accent — CTAs, links, active states (a warm ponderosa/trailhead-marker gold, not the same as either prior build's primary) |
| `goldDark` | `#93691F` | Hover/pressed states on gold |
| `juniper` (secondary green) | `#435C42` | Secondary accent — trust bar, badges, mountain/pine motif |
| `juniperDark` | `#324434` | Hover/pressed states on juniper |
| `rust` (accent) | `#9C4A2E` | Sparingly — stat callouts, badges, highlighted terms |
| `timberline` (inverted band) | `#241E16` | Dark band background — warm near-black brown |
| `paper` (base bg) | `#F7F1E4` | Page background — warm stone/cream, distinct tone from prior two builds |
| `paperRaised` | `#ECE1CB` | Elevated/tinted band background |
| `ink` (text) | `#2A241B` | Body text — warm dark brown-black |
| `inkSoft` | `#5C5442` | Secondary/muted text |

Hue check: gold hue ≈38°, juniper hue ≈118°, rust hue ≈14°, timberline hue ≈27° — all warm-earth
or natural-green, zero overlap with the banned 255-340° purple/rose band, no blue gradients.

## Typography
- **Headline:** Bitter (slab-leaning serif, sturdy trailhead-sign character) — a deliberately
  different pairing from both prior builds (which used Fraunces), giving this site its own
  typographic identity while staying in the "credible, warm, not corporate-cold" register.
- **Body:** Work Sans — clean, friendly, slightly more casual than Inter, matching an
  outdoor-instruction brand voice.

## Section rhythm
Rotate: `paper` base → `paperRaised` tinted band → `timberline` inverted band (trust bar / CTA)
→ occasional full-bleed image band with a neutral dark scrim (never below 50% opacity where copy
sits). Cards use white/paperRaised surfaces with a thin gold/juniper accent border.

## Motif
Trailhead / mountain-sun: warm gold "sun over a mountain ridge" concept, trail-marker iconography
(lucide-react: `mountain`, `map-pin`, `compass`, `users`, `award`, `sun`, `snowflake` — the
snowflake rendered in warm gold, never blue). Photography style: real-feeling golden-hour or
bright-daylight Arizona mountain/ski scenes — families and first-timers on the slopes, gear
laid out for a trip, the drive-up mountain road — not moody blue-toned ski-brochure clichés.

## Stitch design-director brief (used verbatim as the create_design_system designMd + generate prompts)
"Local ski & snowboard instruction academy website serving Phoenix/Tucson, Arizona residents
preparing for their first ski trip to Arizona's own resorts (Arizona Snowbowl, Sunrise Park
Resort, Mount Lemmon Ski Valley). Light, warm, welcoming — explicitly AVOID icy blue, white-and-
silver, or cold 'ski brochure' color cliches; the visual concept is warm golden-hour or bright
Arizona-mountain-sun photography, not a cold-toned winter look. Palette: warm trailhead gold
#B8862E primary, juniper green #435C42 secondary, canyon rust #9C4A2E sparingly, warm stone/cream
paper #F7F1E4 background, timberline dark-brown #241E16 for dark inverted bands (never pure
black, never navy). Headline font: Bitter (sturdy slab-leaning serif). Body font: Work Sans.
Motif: trailhead/mountain-sun — mountain, compass, map-pin, award, sun, snowflake iconography
rendered in warm gold/rust, never blue. Section rhythm: alternate cream base, tinted band, and a
timberline-brown inverted trust band — never two adjacent sections share a background. Tone:
encouraging and beginner-friendly — speaks to a desert-city family who has never skied before,
not to expert skiers. Primary CTA throughout: 'Book a Lesson' or 'Plan My First Trip'. Zero
purple/pink/blue-gradient, zero emoji as UI icons."
