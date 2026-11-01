import { MoveRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { WHATSAPP_GROUP_INVITE_LINK, SUPPORT_PHONE_NUMBER, supportWa } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-white md:py-24">
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Logo className="h-6 w-auto self-start text-white" />
          <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/70">
            <p>Routes · Kubwa – Berger/Wuse pilot · Abuja, FCT</p>
            <p>
              WhatsApp us:{" "}
              <a href={supportWa} className="font-semibold text-white underline underline-offset-4">
                {SUPPORT_PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>
        <Button asChild size="lg" className="gap-2 whitespace-normal md:justify-self-end">
          <a href={WHATSAPP_GROUP_INVITE_LINK}>
            Join the WhatsApp group to book
            <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </Button>
      </Container>
    </footer>
  );
}
