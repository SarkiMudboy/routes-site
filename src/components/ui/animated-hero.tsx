import { useEffect, useMemo, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_GROUP_INVITE_LINK,
  driverTel,
} from "@/lib/links";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["guaranteed.", "prepaid.", "on time.", "never squeezed.", "yours."],
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, prefersReducedMotion]);

  // Teal for every rotating word except the final resting emphasis "yours." (terracotta).
  const colorFor = (index: number) =>
    index === titles.length - 1 ? "text-terracotta" : "text-teal";

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-6 py-12 lg:py-24 items-center md:items-start justify-center md:justify-start flex-col">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 h-auto min-h-[36px] max-w-full whitespace-normal text-left py-1.5"
              asChild
            >
              <a href="#timetable">4-week pilot · Kubwa → Berger/Wuse</a>
            </Button>
          </div>

          <div className="flex gap-5 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tight text-center md:text-left font-bold text-ink">
              <span className="block">A seat that's</span>
              {/* Reserved-height rotating region — prevents cumulative layout shift */}
              <span className="relative flex w-full justify-center md:justify-start overflow-hidden h-[1.2em] mt-1">
                {prefersReducedMotion ? (
                  <span className={`font-bold ${colorFor(0)}`}>{titles[0]}</span>
                ) : (
                  titles.map((title, index) => (
                    <m.span
                      key={index}
                      className={`absolute font-bold ${colorFor(index)}`}
                      initial={{ opacity: 0, y: -100 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      {title}
                    </m.span>
                  ))
                )}
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center md:text-left">
              Four seats, never six. A numbered, air-conditioned seat on the
              Kubwa → Berger/Wuse route that departs on schedule — whether the
              car is full or not.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              size="lg"
              className="gap-3 min-h-[44px] h-auto py-3 w-full sm:w-auto whitespace-normal text-center"
              asChild
            >
              <a href={WHATSAPP_GROUP_INVITE_LINK}>
                Join the WhatsApp group to book{" "}
                <MoveRight className="w-4 h-4 shrink-0" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-3 min-h-[44px] h-auto py-3 w-full sm:w-auto whitespace-normal text-center"
              asChild
            >
              <a href={driverTel}>
                I drive this route <PhoneCall className="w-4 h-4 shrink-0" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left max-w-2xl">
            Founding rider price ₦1,400 (₦1,800 after the first 30 riders) ·
            Limited to 50 riders · Book one way or both ways
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroWrapper() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Hero />
    </LazyMotion>
  );
}

export { HeroWrapper as Hero };
