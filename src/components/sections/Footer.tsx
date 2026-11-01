import { MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout";
import {
  CAC_RC_NUMBER,
  DRIVER_PHONE_NUMBER,
  SUPPORT_PHONE_NUMBER,
  WHATSAPP_GROUP_INVITE_LINK,
  driverTel,
  supportWa,
} from "@/lib/links";

const sections = [
  { title: "Price", href: "#price" },
  { title: "Timetable", href: "#timetable" },
  { title: "How it works", href: "#how-it-works" },
  { title: "FAQ", href: "#faq" },
];

/** Round icon button, as in the reference footer's social buttons (48px tap target). */
function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-wash text-ink transition-colors hover:bg-leaf"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule bg-white py-16 md:py-24">
      <Container className="flex flex-col gap-8">
        {/* Top row: logo, quick actions */}
        <div className="flex items-center justify-between gap-4 border-b border-rule pb-8">
          <a href="#top" aria-label="routes, back to top" className="flex min-h-11 items-center">
            <Logo className="h-7 w-auto text-black" />
          </a>
          <div className="flex items-center gap-3">
            <IconLink href={WHATSAPP_GROUP_INVITE_LINK} label="Join the WhatsApp group to book">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </IconLink>
            <IconLink href={supportWa} label={`WhatsApp support: ${SUPPORT_PHONE_NUMBER}`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </IconLink>
          </div>
        </div>

        {/* Bottom row: legal left, links right */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2 text-sm leading-relaxed text-slate">
            <p>© {new Date().getFullYear()} Routes · Kubwa – Berger/Wuse pilot</p>
            <p>Abuja, FCT</p>
            <p>RC: {CAC_RC_NUMBER}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {sections.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="inline-flex min-h-11 items-center text-ink hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate">
              <li>
                <a href={supportWa} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                  WhatsApp us: {SUPPORT_PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={driverTel} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                  Drivers: {DRIVER_PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
