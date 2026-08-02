/** Station-ring bullet reusing the logo's stop motif. */
function StopRing({ destination = false }: { destination?: boolean }) {
  return (
    <span className="flex-none mt-0.5" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18">
        {destination ? (
          <circle cx="9" cy="9" r="6" fill="#D2622A" />
        ) : (
          <circle
            cx="9"
            cy="9"
            r="5"
            fill="#FFFFFF"
            stroke="#0E6E6B"
            strokeWidth="3"
          />
        )}
      </svg>
    </span>
  );
}

const steps = [
  "Join the WhatsApp group and send your name and preferred departure.",
  "Book by bank transfer — your seat is numbered and held. Morning seats close 9 PM the night before; evening seats close one hour before departure.",
  "Be at your stop 5 minutes early. Your driver, car and plate number are sent to you the night before.",
  "Ride with four passengers maximum. Full refund if you cancel — by 9 PM the night before for morning seats, by 3 PM same day for evening seats.",
];

export function HowItWorks() {
  return (
    <section className="bg-wash border-t border-rule">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-24">
        <h2 className="text-2xl mb-6">How it works</h2>
        <ol className="list-none m-0 p-0">
          {steps.map((text, i) => (
            <li
              key={i}
              className="flex gap-4 py-4 border-b border-rule last:border-b-0"
            >
              <StopRing destination={i === steps.length - 1} />
              <span className="text-base">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
