import { Eyebrow, Section } from "@/components/layout";

function Fare({
  label,
  price,
  emphasis = false,
}: {
  label: string;
  price: string;
  emphasis?: boolean;
}) {
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-rule bg-white p-6">
      <Eyebrow className={emphasis ? undefined : "text-ink/70"}>{label}</Eyebrow>
      <p className="flex items-baseline gap-2">
        <span
          className={`font-heading text-5xl font-bold leading-none tabular-nums ${emphasis ? "text-terracotta" : "text-ink"}`}
        >
          {price}
        </span>
        <span className="text-sm text-ink">per seat</span>
      </p>
    </li>
  );
}

export function PriceBlock() {
  return (
    <Section id="price" title="Price" intro="Founding rider price — first 30 riders only." tone="wash">
      <div className="flex flex-col gap-6">
        <ul className="grid gap-6 md:grid-cols-3">
          <Fare label="Founding rider · first 30 only" price="₦1,400" emphasis />
          <Fare label="Standard fare · after the first 30" price="₦1,800" />
          <Fare label="Front seat, sold alone" price="₦1,900" />
        </ul>
        <p className="max-w-2xl leading-relaxed text-ink">
          Prices are fixed and published. No surge, no negotiation at the window — everyone in the car paid the same
          fare.
        </p>
      </div>
    </Section>
  );
}
