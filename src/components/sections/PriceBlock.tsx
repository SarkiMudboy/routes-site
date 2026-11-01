import { Section } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Fares as ride tickets: a fare half, a perforated tear line with notches,
 * and a stub with the seat and when the fare applies. The founding fare is
 * the one filled (sea) ticket, with a "first 30" stamp.
 */

type Fare = {
  label: string;
  price: string;
  seat: string;
  valid: string;
  founding?: boolean;
};

const fares: Fare[] = [
  { label: "Founding rider", price: "₦1,400", seat: "Back seat", valid: "First 30 riders", founding: true },
  { label: "Standard fare", price: "₦1,800", seat: "Back seat", valid: "After the first 30" },
  { label: "Front seat", price: "₦1,900", seat: "Front, sold alone", valid: "Every ride" },
];

/** Half-circle cut-outs on the tear line; the ticket's overflow-hidden clips the outer half. */
function Notch({ side, founding }: { side: "left" | "right"; founding?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-wash",
        side === "left" ? "-left-4" : "-right-4",
        !founding && "border border-rule",
      )}
    />
  );
}

function Ticket({ fare }: { fare: Fare }) {
  const { founding } = fare;
  // Founding ticket is the filled (sea, mint) one; every ticket uses ink text
  // (13.2:1 on mint) with slate labels (5.6:1 on mint, 7.9:1 on white).
  const label = "text-xs font-bold uppercase tracking-wider text-slate";
  return (
    <li
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border text-ink",
        founding ? "border-sea bg-sea" : "border-rule bg-white",
      )}
    >
      {founding && (
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 -rotate-12 rounded-md border-2 border-ink px-2 font-heading text-xs font-bold uppercase tracking-wider text-ink"
        >
          First 30
        </span>
      )}

      {/* fare half */}
      <div className="flex flex-col gap-4 p-6">
        <p className={label}>Kubwa ⇄ City · Weekdays</p>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-inherit">{fare.label}</h3>
          <p className="flex items-baseline gap-2">
            <span className="font-heading text-5xl font-bold leading-none tabular-nums">{fare.price}</span>
            <span className="text-sm">per seat</span>
          </p>
        </div>
      </div>

      {/* perforation */}
      <div className="relative h-8">
        <Notch side="left" founding={founding} />
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-6 top-1/2 border-t-2 border-dashed",
            founding ? "border-ink/30" : "border-rule",
          )}
        />
        <Notch side="right" founding={founding} />
      </div>

      {/* stub */}
      <dl className="grid grid-cols-2 gap-4 p-6 pt-2 text-sm">
        <div className="flex flex-col gap-2">
          <dt className={label}>Seat</dt>
          <dd className="font-semibold">{fare.seat}</dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className={label}>Valid</dt>
          <dd className="font-semibold">{fare.valid}</dd>
        </div>
      </dl>
    </li>
  );
}

export function PriceBlock() {
  return (
    <Section id="price" title="Price" intro="Founding rider price — first 30 riders only." tone="wash">
      <div className="flex flex-col gap-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {fares.map((f) => (
            <Ticket key={f.label} fare={f} />
          ))}
        </ul>
        <p className="max-w-2xl leading-relaxed text-ink">
          Prices are fixed and published. No surge, no negotiation at the window — everyone in the car paid the same
          fare.
        </p>
      </div>
    </Section>
  );
}
