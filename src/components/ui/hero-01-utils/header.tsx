import { Menu, MoveRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WHATSAPP_GROUP_INVITE_LINK } from "@/lib/links";
import { cn } from "@/lib/utils";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

export default function Header({ navigationData }: { navigationData: NavigationSection[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="routes, back to top" className="flex min-h-11 items-center">
          <Logo className="h-6 w-auto text-black" />
        </a>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden lg:flex" aria-label="Sections">
          <NavigationMenuList>
            {navigationData.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  active={item.isActive}
                  aria-current={item.isActive ? "page" : undefined}
                  className={cn(navigationMenuTriggerStyle(), "text-ink")}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="gap-2">
            <a href={WHATSAPP_GROUP_INVITE_LINK}>
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book on WhatsApp</span>
              <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </Button>

          {/* Mobile navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined} className="flex flex-col gap-8">
              <SheetHeader className="text-left">
                <SheetTitle className="font-heading text-ink">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Sections">
                <ul className="flex flex-col">
                  {navigationData.map((item) => (
                    <li key={item.href} className="border-b border-rule">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          aria-current={item.isActive ? "page" : undefined}
                          className="flex min-h-12 items-center text-base font-medium text-ink"
                        >
                          {item.title}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* size default (px-4) + wrapping: the panel is narrow on small phones */}
              <Button asChild className="min-h-12 gap-2 whitespace-normal text-center">
                <a href={WHATSAPP_GROUP_INVITE_LINK}>
                  Book on WhatsApp
                  <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
