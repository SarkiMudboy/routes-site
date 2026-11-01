import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";
import { Container } from "@/components/layout";

export default function AgencyHeroSection({ children }: { children?: React.ReactNode }) {
  // Seat numbers, not stock faces: there are no riders to show yet.
  const avatarList: AvatarList[] = [{ label: "1" }, { label: "2" }, { label: "3" }, { label: "4" }];

  const navigationData: NavigationSection[] = [
    { title: "Price", href: "#price" },
    { title: "Timetable", href: "#timetable" },
    { title: "How it works", href: "#how-it-works" },
    { title: "Promises", href: "#promises" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main id="top">
        {/* Minimal hero: fills the first screen below the 64px header, content centred */}
        <section
          aria-labelledby="hero-title"
          className="flex min-h-[calc(100svh-4rem)] items-center py-16 md:py-24"
        >
          <Container>
            <HeroSection avatarList={avatarList} />
          </Container>
        </section>
        {children}
      </main>
    </div>
  );
}
