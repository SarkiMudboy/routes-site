import { Section } from "@/components/layout";

const steps = [
  "Join the WhatsApp group and send your name and preferred departure.",
  "Book by bank transfer — your seat is numbered and held. Morning seats close 9 PM the night before; evening seats close one hour before departure.",
  "Be at your stop 5 minutes early. Your driver, car and plate number are sent to you the night before.",
  "Ride with four passengers maximum. Full refund if you cancel — by 9 PM the night before for morning seats, by 3 PM same day for evening seats.",
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" title="How it works" tone="wash">
      <ol className="grid gap-6 md:grid-cols-2">
        {steps.map((text, i) => (
          <li key={i} className="flex flex-col gap-4 rounded-lg border border-rule bg-white p-6">
            {/* numbered square: the logo's stop motif */}
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center bg-ink font-heading text-sm font-bold text-white"
            >
              {i + 1}
            </span>
            <p className="max-w-prose leading-relaxed text-ink">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
