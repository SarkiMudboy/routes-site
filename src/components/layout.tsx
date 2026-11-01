import { cn } from "@/lib/utils";

/**
 * Spacing contract (CLAUDE.md):
 * - every top-level section: py-16 md:py-24, page padding px-4 md:px-6
 * - section heading → body: gap-4 · body → CTA: gap-8 · grid/list items: gap-6
 * - label → value: gap-2 · separate heading-body groups: gap-12
 * Components never set their own outer margin; parents own the gaps.
 */

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>{children}</div>;
}

const tones = {
  white: "bg-white",
  wash: "bg-wash",
} as const;

/**
 * Top-level page section. Heading → intro is gap-4; when there is an intro,
 * the heading group → content is gap-8. Without an intro the content is the
 * body and sits gap-4 below the heading.
 */
export function Section({
  id,
  title,
  intro,
  tone = "white",
  children,
}: {
  id: string;
  title: string;
  intro?: React.ReactNode;
  tone?: keyof typeof tones;
  children: React.ReactNode;
}) {
  const heading = (
    <h2 id={`${id}-title`} className="text-3xl tracking-tight md:text-4xl">
      {title}
    </h2>
  );
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-16 py-16 md:py-24", tones[tone])}>
      {intro ? (
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {heading}
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </div>
          {children}
        </Container>
      ) : (
        <Container className="flex flex-col gap-4">
          {heading}
          {children}
        </Container>
      )}
    </section>
  );
}

/** Small uppercase label sitting directly above its value. */
export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-xs font-bold uppercase tracking-wider text-teal", className)}>{children}</p>;
}
