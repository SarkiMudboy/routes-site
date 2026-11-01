import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * features-01 card grid (prompt.md), adapted to the project:
 * - takes its items as props instead of hard-coded demo features
 * - heading/subtitle come from the surrounding <Section>, which owns section
 *   spacing (CLAUDE.md), so this renders the grid only
 * - `ordered` renders an <ol> with a step number on each card, for sequences
 * - spacing snapped to the scale and owned by parents (gap-*), no margins
 */
export type Feature = {
  /** A lucide icon, or an emoji string (rendered large in a pale badge). */
  icon: LucideIcon | string;
  title: string;
  description: React.ReactNode;
};

function FeatureIcon({ icon: Icon }: { icon: Feature["icon"] }) {
  if (typeof Icon === "string") {
    return (
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-wash text-4xl leading-none"
      >
        {Icon}
      </span>
    );
  }
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf">
      <Icon className="size-5 text-ink" aria-hidden="true" />
    </span>
  );
}

export default function Features({
  features,
  ordered = false,
  className,
}: {
  features: Feature[];
  ordered?: boolean;
  className?: string;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {features.map((feature, i) => (
        <li key={feature.title} className="flex flex-col gap-4 rounded-xl border border-rule bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <FeatureIcon icon={feature.icon} />
            {ordered && (
              <span aria-hidden="true" className="font-heading text-sm font-semibold tabular-nums text-slate">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-ink">{feature.title}</h3>
            <p className="leading-relaxed text-ink/80">{feature.description}</p>
          </div>
        </li>
      ))}
    </List>
  );
}
