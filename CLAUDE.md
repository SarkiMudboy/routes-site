## Spacing and rhythm

All spacing must come from a single scale. Use Tailwind's spacing scale only, and within
sections restrict yourself to these steps: 2, 4, 6, 8, 12, 16, 24. Never use arbitrary
values like `mt-[13px]` or `py-[37px]` — if a design seems to need an off-scale number,
pick the nearest step.

**Between sections:** every top-level page section gets identical vertical padding:
`py-16 md:py-24`. No exceptions per section — rhythm comes from repetition, not variety.
If two adjacent sections share a background color, separate them with a hairline rule
(`border-t border-[#D9E2E3]`), not extra padding.

**Within a section:** spacing must encode hierarchy. Related elements sit closer than
unrelated ones — the gap between a heading and its body (`mb-4`) must always be smaller
than the gap between one heading-body group and the next (`mt-12`). If everything is
evenly spaced, hierarchy is lost; if gaps are inconsistent for the same relationship,
rhythm is lost. The same relationship always gets the same gap everywhere on the page:
- section heading → section body: `mb-4`
- body → CTA or interactive element: `mt-8`
- items in a list/grid: `gap-6`
- label → its value or field: `mb-2`

**Method:** prefer parent-driven spacing (`flex flex-col gap-*`, or `space-y-*`) over
per-child margins. A child component must not carry outer margins — spacing between
siblings is the parent's job. This is what keeps components reusable without spacing
bugs.

**Breathability:** body text max-width `max-w-prose` (or `max-w-2xl`); never let text
run edge-to-edge on desktop. Horizontal page padding `px-4 md:px-6` minimum. Line
height for body ≥ 1.6. Interactive elements need ≥ 44px tap targets and must not sit
closer than `gap-3` to each other.

**Self-check before finishing any layout work:** scan the rendered page top to bottom
and confirm (1) all section gaps are visually identical, (2) no element touches another
without an intentional scale gap, (3) nothing uses an off-scale or arbitrary spacing
value, and (4) no component sets its own external margin. If any check fails, fix it
before reporting done.