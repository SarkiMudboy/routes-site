export function PriceBlock() {
  return (
    <section className="bg-wash">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-24">
        <p className="text-sm font-bold tracking-wider uppercase text-teal mb-6">
          Founding rider price — first 30 riders only
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Founding rider price */}
          <div className="bg-white border border-rule rounded-md p-5">
            <p className="text-xs font-bold tracking-wider uppercase text-teal mb-2 m-0">
              Founding rider · first 30 only
            </p>
            <p className="flex items-baseline gap-2 m-0">
              <span className="text-5xl font-bold leading-none text-terracotta font-heading">
                ₦1,400
              </span>
              <span className="text-sm text-ink">per seat</span>
            </p>
          </div>

          {/* Standard fare — pronounced, not struck through */}
          <div className="bg-white border border-rule rounded-md p-5">
            <p className="text-xs font-bold tracking-wider uppercase text-ink/70 mb-2 m-0">
              Standard fare · after the first 30
            </p>
            <p className="flex items-baseline gap-2 m-0">
              <span className="text-5xl font-bold leading-none text-ink font-heading">
                ₦1,800
              </span>
              <span className="text-sm text-ink">per seat</span>
            </p>
          </div>
        </div>

        <p className="text-base font-bold mt-6 mb-4">
          Front seat, sold alone — ₦1,900
        </p>
        <p className="text-[0.95rem] max-w-[46ch] m-0">
          Prices are fixed and published. No surge, no negotiation at the window
          — everyone in the car paid the same fare.
        </p>
      </div>
    </section>
  );
}
