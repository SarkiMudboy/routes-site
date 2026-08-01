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
    <section className="border-t border-rule">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-24">
        <h2 className="text-2xl mb-6">The promises</h2>
        <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
          {promises.map((text) => (
            <li
              key={text}
              className="relative py-3.5 pl-5 border-b border-rule text-base font-semibold"
            >
              <span className="absolute left-0 top-[1.35rem] w-2 h-2 rounded-full border-2 border-teal bg-white" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
