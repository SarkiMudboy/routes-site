import { Check, X } from "lucide-react";
import { Section } from "@/components/layout";

/**
 * Promises as a before/after: each row pairs what the junction does with what
 * routes promises instead. The routes column is the page's one dark (ink)
 * surface, so the promises carry the visual weight.
 */
const rows = [
  { junction: "Six in a four-seater, two squeezed in front", promise: "Four passengers maximum — the front seat is one person's seat" },
  { junction: "Leaves when the car is full", promise: "Departs on schedule, full or not" },
  { junction: "Windows down, no AC", promise: "AC on for the whole trip" },
  { junction: "Whoever is driving, whatever the car", promise: "Verified driver — licence, vehicle papers and car inspected by us" },
  { junction: "Price called at the window, cash in hand", promise: "Fixed published fares, prepaid — no cash in the car" },
  { junction: "If it doesn't come, you keep waiting", promise: "Full refund if we cancel, plus your next ride free" },
];

export function Promises() {
  return (
    <Section id="promises" title="The promises" intro="What changes when you stop waiting at the junction.">
      <div className="overflow-hidden rounded-xl border border-rule">
        {/* column headings (on small screens each cell is labelled instead) */}
        <div aria-hidden="true" className="hidden md:grid md:grid-cols-2">
          <p className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate">At the junction</p>
          <p className="bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/70">With routes</p>
        </div>

        <ul>
          {rows.map((r) => (
            <li key={r.promise} className="grid md:grid-cols-2">
              <div className="flex items-start gap-4 border-t border-rule bg-white p-6">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rule text-slate"
                >
                  <X className="h-4 w-4" />
                </span>
                <p className="flex flex-col gap-2 leading-relaxed text-slate">
                  <span className="text-xs font-bold uppercase tracking-wider md:sr-only">At the junction</span>
                  {r.junction}
                </p>
              </div>
              <div className="flex items-start gap-4 border-t border-white/10 bg-ink p-6">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf text-white"
                >
                  <Check className="h-4 w-4" />
                </span>
                <p className="flex flex-col gap-2 font-semibold leading-relaxed text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/70 md:sr-only">With routes</span>
                  {r.promise}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
