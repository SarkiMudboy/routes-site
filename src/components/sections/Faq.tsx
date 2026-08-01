import { DRIVER_PHONE_NUMBER, driverTel } from "@/lib/links";

function Item({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="border-b border-rule py-1 first:border-t first:border-rule group">
      <summary className="cursor-pointer list-none flex items-center pr-7 py-3.5 font-bold text-[1.02rem] min-h-[44px] relative">
        {q}
        <span
          className="absolute right-1 top-1/2 -translate-y-1/2 text-teal text-2xl leading-none font-bold group-open:hidden"
          aria-hidden="true"
        >
          +
        </span>
        <span
          className="absolute right-1 top-1/2 -translate-y-1/2 text-teal text-2xl leading-none font-bold hidden group-open:inline"
          aria-hidden="true"
        >
          –
        </span>
      </summary>
      <div className="text-[0.98rem] max-w-[52ch] mb-3.5">{children}</div>
    </details>
  );
}

export function Faq() {
  return (
    <section className="bg-wash border-t border-rule">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-24">
        <h2 className="text-2xl mb-6">Short FAQ</h2>
        <Item q="Why prepay?">
          Prepayment is what lets us guarantee your seat and depart on time. If
          you cancel by 9pm the night before, you get every naira back by
          transfer.
        </Item>
        <Item q="What if the driver doesn't show?">
          Full refund plus your next ride free, and we put you on the next
          departure.
        </Item>
        <Item q="Is this Bolt?">
          No. Routes is scheduled seat-sharing on a fixed route — a fraction of
          the price of a private hire, without the squeeze of the junction.
        </Item>
        <Item q="I drive this route. Can I join?">
          We onboard a small number of vetted drivers. Call{" "}
          <a href={driverTel} className="text-teal font-semibold underline">
            {DRIVER_PHONE_NUMBER}
          </a>{" "}
          — driver places are not through the passenger group.
        </Item>
      </div>
    </section>
  );
}
