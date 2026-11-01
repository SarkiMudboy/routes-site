import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Sliding word effect from the PremiumHero component (prompt.md): every word is
 * stacked in the same slot; the active one springs in, the others slide out
 * up or down. The slot's width eases to fit the active word, so it can sit
 * inside a bordered pill without leaving gaps.
 *
 * Visual only — give the heading a static accessible name elsewhere.
 * With prefers-reduced-motion it shows the first word and never rotates.
 */
export function RotatingWords({
  words,
  interval = 2500,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  // Measure every word, and re-measure whenever a ruler's rendered size
  // changes (breakpoint font sizes, or the heading font loading late).
  useLayoutEffect(() => {
    const els = measureRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    const measure = () => setWidths(measureRefs.current.map((el) => el?.offsetWidth ?? 0));
    measure();
    const observer = new ResizeObserver(measure);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [words]);

  const active = reduceMotion ? 0 : index;

  return (
    <LazyMotion features={domAnimation} strict>
      <span
        className={cn("relative block overflow-hidden transition-[width] duration-500 ease-out", className)}
        style={widths[active] ? { width: widths[active] } : undefined}
      >
        {/* in-flow copy: gives the slot its height (and width before measuring) */}
        <span className="invisible block whitespace-nowrap">{words[active]}</span>

        {/* hidden rulers used for width measurement */}
        {words.map((w, i) => (
          <span
            key={`measure-${w}`}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            className="invisible absolute left-0 top-0 whitespace-nowrap"
          >
            {w}
          </span>
        ))}

        {words.map((w, i) => (
          <m.span
            key={w}
            className="absolute inset-x-0 top-0 whitespace-nowrap text-center"
            initial={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={active === i ? { y: 0, opacity: 1 } : { y: active > i ? "-150%" : "150%", opacity: 0 }}
          >
            {w}
          </m.span>
        ))}
      </span>
    </LazyMotion>
  );
}
