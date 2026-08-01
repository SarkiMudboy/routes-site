function Row({ time, children }: { time: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-rule">
      <span className="font-mono tabular-nums text-lg font-bold text-ink whitespace-nowrap">
        {time}
      </span>
      <span className="text-[0.95rem] text-right text-ink">{children}</span>
    </div>
  );
}

export function Timetable() {
  return (
    <section id="timetable" className="border-t border-rule scroll-mt-4">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-24">
        <h2 className="text-2xl mb-6">Timetable</h2>

        <div className="mb-7">
          <p className="text-[0.8rem] font-bold tracking-wider uppercase text-teal pb-2 border-b border-rule">
            Morning · Kubwa → city
          </p>
          <Row time="7:30 AM">
            from <span className="text-teal font-semibold">Federal Housing</span>{" "}
            &amp; <span className="text-teal font-semibold">Under Bridge</span>
          </Row>
          <Row time="8:10 AM">
            from <span className="text-teal font-semibold">Federal Housing</span>{" "}
            &amp; <span className="text-teal font-semibold">Under Bridge</span>
          </Row>
        </div>

        <div className="mb-3">
          <p className="text-[0.8rem] font-bold tracking-wider uppercase text-teal pb-2 border-b border-rule">
            Evening · city → Kubwa
          </p>
          <Row time="5:30 PM">
            from <span className="text-teal font-semibold">Berger</span>,{" "}
            <span className="text-teal font-semibold">Wuse</span> &amp;{" "}
            <span className="text-teal font-semibold">NICON</span>
          </Row>
          <Row time="6:10 PM">
            from <span className="text-teal font-semibold">Berger</span>,{" "}
            <span className="text-teal font-semibold">Wuse</span> &amp;{" "}
            <span className="text-teal font-semibold">NICON</span>
          </Row>
        </div>

        <p className="text-sm text-ink/80 mt-4">Weekdays only during the pilot.</p>
      </div>
    </section>
  );
}
