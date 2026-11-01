import { Section } from "@/components/layout";
import { DRIVER_PHONE_NUMBER, driverTel } from "@/lib/links";

function Item({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-rule">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
        {q}
        <span aria-hidden="true" className="text-2xl leading-none text-teal group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="hidden text-2xl leading-none text-teal group-open:inline">
          –
        </span>
      </summary>
      <div className="max-w-prose pb-6 leading-relaxed text-ink">{children}</div>
    </details>
  );
}

export function Faq() {
  return (
    <Section id="faq" title="Short FAQ" tone="wash">
      <div className="max-w-3xl border-t border-rule">
        <Item q="Why prepay?">
          Prepayment is what lets us guarantee your seat and depart on time. If you cancel in time — by 9 PM the night
          before for morning seats, by 3 PM same day for evening seats — you get every naira back by transfer.
        </Item>
        <Item q="How do I book my ride home?">
          Book it together with your morning seat — just say "both ways" when you message us — or book any time before
          4:30 PM for the 5:30 and 6:10 departures from Berger, Wuse and NICON. Same price, same rules, full refund if
          you cancel by 3 PM. After 4:30 PM we'll put you on standby and confirm by 5:00 if a seat opens.
        </Item>
        <Item q="What if the driver doesn't show?">
          Full refund plus your next ride free, and we put you on the next departure.
        </Item>
        <Item q="Is this Bolt?">
          No. Routes is scheduled seat-sharing on a fixed route — a fraction of the price of a private hire, without
          the squeeze of the junction.
        </Item>
        <Item q="I drive this route. Can I join?">
          We onboard a small number of vetted drivers. Call{" "}
          <a href={driverTel} className="font-semibold text-teal underline underline-offset-4">
            {DRIVER_PHONE_NUMBER}
          </a>{" "}
          — driver places are not through the passenger group.
        </Item>
      </div>
    </Section>
  );
}
