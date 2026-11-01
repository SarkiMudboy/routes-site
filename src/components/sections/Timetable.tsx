import { Sunrise, Sunset } from "lucide-react";
import { Section } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

/**
 * Departures board, after the p-table-4 flight table (prompt.md). Kept: the
 * framed card table, the dot–dash–dot route connector, outline badges with a
 * status dot (here: when booking closes) and with an icon (morning/evening),
 * and a footer strip for notes. Dropped as irrelevant for four fixed
 * departures: TanStack Table, row selection, sorting, pagination, and live
 * status or arrival times (not published, so not shown).
 */

type Departure = {
  period: "Morning" | "Evening";
  time: string;
  from: string;
  to: string;
  closes: string;
};

const MORNING_CLOSE = "Book by 9 PM the night before";
const EVENING_CLOSE = "Book up to 1 hour before";

const departures: Departure[] = [
  { period: "Morning", time: "7:30 AM", from: "Federal Housing & Under Bridge", to: "City", closes: MORNING_CLOSE },
  { period: "Morning", time: "8:10 AM", from: "Federal Housing & Under Bridge", to: "City", closes: MORNING_CLOSE },
  { period: "Evening", time: "5:30 PM", from: "Berger, Wuse & NICON", to: "Kubwa", closes: EVENING_CLOSE },
  { period: "Evening", time: "6:10 PM", from: "Berger, Wuse & NICON", to: "Kubwa", closes: EVENING_CLOSE },
];

/** Pick-up ○– – –● drop-off, as in the flight table's time connector. */
function Connector() {
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center">
      <span className="h-2 w-2 rounded-full border border-slate" />
      <span className="w-6 border-t border-dashed border-slate" />
      <span className="h-2 w-2 rounded-full bg-slate" />
    </span>
  );
}

function PeriodBadge({ period }: { period: Departure["period"] }) {
  const Icon = period === "Morning" ? Sunrise : Sunset;
  return (
    <Badge variant="outline" className="font-medium">
      <Icon className="h-4 w-4 text-slate" aria-hidden="true" />
      {period}
    </Badge>
  );
}

function ClosesBadge({ closes }: { closes: string }) {
  return (
    <Badge variant="outline" className="font-medium">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-leaf ring-1 ring-ink/20" />
      {closes}
    </Badge>
  );
}

export function Timetable() {
  return (
    <Section id="timetable" title="Timetable" intro="Weekdays only during the pilot.">
      <div className="overflow-hidden rounded-xl border border-rule bg-white">
        <Table>
          <TableCaption className="sr-only">Weekday departures, pick-up and drop-off, and when booking closes</TableCaption>
          <TableHeader className="bg-wash">
            <TableRow>
              {/* Under 640px the time folds into the route cell, so the route
                  and badges get the full card width instead of being clipped. */}
              <TableHead className="hidden w-32 sm:table-cell">Departs</TableHead>
              <TableHead>
                <span className="sm:hidden">Departure</span>
                <span className="hidden sm:inline">Route</span>
              </TableHead>
              <TableHead className="hidden md:table-cell">Period</TableHead>
              <TableHead className="hidden md:table-cell">Seats close</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departures.map((d) => (
              <TableRow key={d.time}>
                <TableCell className="hidden align-top sm:table-cell md:align-middle">
                  <span className="whitespace-nowrap font-heading text-2xl font-bold tabular-nums text-ink">
                    {d.time}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    <span className="whitespace-nowrap font-heading text-2xl font-bold tabular-nums text-ink sm:hidden">
                      {d.time}
                    </span>
                    <p className="flex flex-wrap items-center gap-2 text-base text-ink">
                      <span className="font-semibold">{d.from}</span>
                      <Connector />
                      <span className="sr-only">to</span>
                      <span className="font-semibold">{d.to}</span>
                    </p>
                    {/* on small screens the extra columns fold under the route */}
                    <div className="flex flex-wrap gap-2 md:hidden">
                      <PeriodBadge period={d.period} />
                      <ClosesBadge closes={d.closes} />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <PeriodBadge period={d.period} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <ClosesBadge closes={d.closes} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="border-t border-rule bg-wash px-4 py-4 text-sm leading-relaxed text-slate">
          Evening seats can be booked with your morning seat, or same-day until one hour before departure.
        </p>
      </div>
    </Section>
  );
}
