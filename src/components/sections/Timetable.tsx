import { Eyebrow, Section } from "@/components/layout";

function Place({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-teal">{children}</span>;
}

function Row({ time, children }: { time: string; children: React.ReactNode }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-rule py-4">
      <span className="whitespace-nowrap font-heading text-2xl font-bold tabular-nums text-ink">{time}</span>
      <span className="text-right leading-relaxed text-ink">{children}</span>
    </li>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Eyebrow>{label}</Eyebrow>
      <ul className="flex flex-col border-t border-rule">{children}</ul>
    </div>
  );
}

export function Timetable() {
  return (
    <Section id="timetable" title="Timetable" intro="Weekdays only during the pilot.">
      <div className="flex flex-col gap-12">
        <div className="grid gap-12 md:grid-cols-2">
          <Group label="Morning · Kubwa → city">
            <Row time="7:30 AM">
              from <Place>Federal Housing</Place> &amp; <Place>Under Bridge</Place>
            </Row>
            <Row time="8:10 AM">
              from <Place>Federal Housing</Place> &amp; <Place>Under Bridge</Place>
            </Row>
          </Group>
          <Group label="Evening · city → Kubwa">
            <Row time="5:30 PM">
              from <Place>Berger</Place>, <Place>Wuse</Place> &amp; <Place>NICON</Place>
            </Row>
            <Row time="6:10 PM">
              from <Place>Berger</Place>, <Place>Wuse</Place> &amp; <Place>NICON</Place>
            </Row>
          </Group>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
          Evening seats can be booked with your morning seat, or same-day until one hour before departure.
        </p>
      </div>
    </Section>
  );
}
