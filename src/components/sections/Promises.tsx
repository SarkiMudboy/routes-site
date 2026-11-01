import { Section } from "@/components/layout";

const promises = [
  "Four passengers maximum — the front seat is one person's seat",
  "Departs on schedule, full or not",
  "AC on for the whole trip",
  "Verified driver — licence, vehicle papers and car inspected by us",
  "Fixed published fares, prepaid — no cash in the car",
  "Full refund if we cancel, plus your next ride free",
];

export function Promises() {
  return (
    <Section id="promises" title="The promises">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promises.map((text) => (
          <li key={text} className="flex items-start gap-4 border-t border-rule pt-6">
            <span aria-hidden="true" className="relative top-2 h-2 w-2 shrink-0 bg-teal" />
            <span className="font-semibold leading-relaxed text-ink">{text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
