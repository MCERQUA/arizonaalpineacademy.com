# Stitch Design Log — arizonaalpineacademy.com

**Project:** `projects/7164676537522585668` ("Arizona Alpine Academy - Ski Instruction")
**Design system:** `assets/10284968058394400164` ("Trailhead Gold Academy", LIGHT mode, `#B8862E`)

## Font gotcha (recurring — 3rd build this session)
`BITTER` was rejected by `create_design_system` with "Request contains an invalid argument."
Same failure mode as `FRAUNCES` on both prior builds this session. Fell back to `SPACE_GROTESK`
for headlineFont (WORK_SANS for bodyFont, accepted on first try). The real coded Next.js build
applies the actually-intended Bitter/Work Sans pairing directly via `next/font/google` — do not
copy Stitch's rendered mockup fonts literally, per the stitch skill's own guidance.

## Path gotcha
Working script at `/skills/stitch/stitch-mcp.sh` (not `/mnt/shared-skills/stitch/` — that path
does not exist in this container, consistent with the note from the prior build's log).

## Screens generated — 4/4 succeeded, zero quota exhaustion, zero retries needed
| Slug | HTML size | PNG size |
|---|---|---|
| home.html | 14,765 B | 95,506 B |
| ski-lessons.html | 18,843 B | 69,368 B |
| first-time-at-arizona-snowbowl.html | 13,186 B | 94,452 B |
| book-a-lesson.html | 15,079 B | 77,385 B |

All confirmed on disk via `ls .stitch-pages/*.html`, all nonzero.

## Extraction gotcha found this run (new)
The `first-time-at-arizona-snowbowl` generate call returned an `outputComponents[].design.screens[]`
array with **2 screens**, not 1 — screen 0 was a standalone `screenType: "IMAGE"` asset (a
generated background photo with no `htmlCode` field at all), and screen 1 was the actual HTML
page. Blindly taking `screens[0]` (as done successfully on the two prior builds this session,
where responses only ever contained a single screen) would have grabbed the image asset and
thrown a `KeyError: 'htmlCode'`. Fixed by searching all screens in the array for the one
containing an `htmlCode` key, not assuming index 0. Flagging this for future builds — the
"one prompt → one screen at outputComponents[].design.screens[0]" assumption in the skill's own
docs held for 2/3 calls this build and 4/4 calls on both prior builds, but is not universally
safe; always search for the screen with `htmlCode` present rather than hardcoding an index.

## Scrim fix — 6 sub-50%-opacity stops found and fixed across 3 files
Per the site's pre-deploy gate (which has caught this on all 3 builds this session):
- `home.html` line 92: `from-dark/40` → `from-dark/55` (card image overlay)
- `home.html` line 134: `via-dark/40` → `via-dark/55` (card image overlay, `from-dark/90` was
  already fine but the gate takes the weakest stop on the line)
- `home.html` line 166: `group-hover:bg-dark/40` → `group-hover:bg-dark/60` (base `bg-dark/50`
  was already at the floor, but the hover-state stop on the same line was weaker)
- `ski-lessons.html` lines 221 and 232: `via-dark/40` → `via-dark/55` (both card image overlays)
- `first-time-at-arizona-snowbowl.html` line 89: `to-surface-dark/40` → `to-surface-dark/55`
  (this one sits directly behind the hero H1, not just a card — the most important fix of the
  batch)

Re-scanned all 4 files after fixing — zero remaining stops below 50%. All fixes used the
existing neutral dark token names (`dark`, `surface-dark`) already in the mockup, never the
brand gold/rust color, per the gate's requirement.

## Exact prompts used
See the 4 prompt files this run was built from (home, ski-lessons, first-time-at-arizona-
snowbowl, book-a-lesson) — each specified: continue the established design system, section-by-
section layout, explicit "no icy blue" instruction repeated per-page, and the correct H1/CTA
copy matching the site's content plan.
