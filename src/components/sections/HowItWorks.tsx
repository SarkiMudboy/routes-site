import { Section } from "@/components/layout";
import Features, { type Feature } from "@/components/ui/features-01";

const steps: Feature[] = [
  {
    icon: "📱",
    title: "Pick your departure",
    description: "Join the WhatsApp group and send your name and preferred departure.",
  },
  {
    icon: "💸",
    title: "Pay by transfer",
    description:
      "Book by bank transfer — your seat is numbered and held. Morning seats close 9 PM the night before; evening seats close one hour before departure.",
  },
  {
    icon: "🚙",
    title: "Get your car details",
    description:
      "Be at your stop 5 minutes early. Your driver, car and plate number are sent to you the night before.",
  },
  {
    icon: "💺",
    title: "Ride, four maximum",
    description:
      "Ride with four passengers maximum. Full refund if you cancel — by 9 PM the night before for morning seats, by 3 PM same day for evening seats.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      intro="Four steps, all on WhatsApp. No app to download."
      tone="wash"
      align="center"
    >
      <Features features={steps} ordered />
    </Section>
  );
}
