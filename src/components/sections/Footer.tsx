import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_GROUP_INVITE_LINK,
  SUPPORT_PHONE_NUMBER,
  supportWa,
} from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[720px] mx-auto px-7 py-16 md:py-20">
        <Button
          size="lg"
          className="gap-3 min-h-[44px] h-auto py-3 w-full mb-6 whitespace-normal text-center"
          asChild
        >
          <a href={WHATSAPP_GROUP_INVITE_LINK}>
            Join the WhatsApp group to book{" "}
            <MoveRight className="w-4 h-4 shrink-0" />
          </a>
        </Button>
        <p className="text-sm text-[#B9CBCB] mb-1.5">
          Routes · Kubwa – Berger/Wuse pilot · Abuja, FCT
        </p>
        <p className="text-sm text-[#B9CBCB] mb-0">
          WhatsApp us:{" "}
          <a href={supportWa} className="text-white font-semibold underline">
            {SUPPORT_PHONE_NUMBER}
          </a>
        </p>
      </div>
    </footer>
  );
}
