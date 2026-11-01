import { ArrowLeft, MoveRight } from "lucide-react";
import { WHATSAPP_GROUP_INVITE_LINK } from "@/lib/links";

/**
 * One entry in the overlapping "avatar" stack. Pass `image` for a photo or
 * `label` for a text token. routes uses seat numbers rather than faces: the
 * pilot has no riders yet, so stock portraits would be invented social proof.
 */
export type AvatarList = {
  image?: string;
  label?: string;
  alt?: string;
};

function AvatarStack({ avatarList }: { avatarList: AvatarList[] }) {
  return (
    <ul className="flex -space-x-2" aria-hidden="true">
      {avatarList.map((a, i) => (
        <li
          key={i}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-ink text-xs font-bold text-white ring-2 ring-white"
        >
          {a.image ? <img src={a.image} alt={a.alt ?? ""} className="h-full w-full object-cover" /> : a.label}
        </li>
      ))}
    </ul>
  );
}

/** The logo mark in a black app-icon tile, sized to the headline (em units). */
function MarkTile() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-[0.85em] w-[0.85em] shrink-0 items-center justify-center rounded-[0.22em] bg-ink shadow-lg"
    >
      <svg viewBox="3.5 7.5 41 33" className="h-[0.42em] w-auto text-white">
        <path d="M9 35H24V13H39" fill="none" stroke="currentColor" strokeWidth="6" />
        <g fill="currentColor">
          <rect x="3.5" y="29.5" width="11" height="11" />
          <rect x="18.5" y="29.5" width="11" height="11" />
          <rect x="18.5" y="7.5" width="11" height="11" />
          <rect x="33.5" y="7.5" width="11" height="11" />
        </g>
      </svg>
    </span>
  );
}

export default function HeroSection({ avatarList }: { avatarList: AvatarList[] }) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex flex-col items-center gap-4">
        {/* Reads as "Four seats, never six." — decorative pieces are hidden from AT */}
        <h1
          id="hero-title"
          className="flex flex-col items-center gap-2 text-[2.75rem] leading-tight tracking-tighter sm:text-6xl lg:text-8xl"
        >
          <span className="flex items-center gap-4 lg:gap-6">
            Four
            <MarkTile />
            <em className="italic">seats</em>
            <span className="sr-only">,</span>
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="h-[0.7em] w-[0.7em] shrink-0" />
          </span>
          <span className="flex items-center gap-4 lg:gap-6">
            never
            <span aria-hidden="true" className="text-[0.75em] leading-none">
              🚗
            </span>
            <span className="flex items-center gap-2">
              <span className="rounded-full border-2 border-ink px-4 lg:border-4 lg:px-6">six</span>
              <span>.</span>
            </span>
          </span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Prepaid, air-conditioned seats from Kubwa to Berger, Wuse and NICON. Leaves on schedule, full or not.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={WHATSAPP_GROUP_INVITE_LINK}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-8 font-heading font-semibold text-white transition-colors hover:bg-ink/90"
          >
            Join the WhatsApp group
            <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          <a
            href="#timetable"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-rule px-8 text-ink transition-colors hover:border-ink"
          >
            See the timetable
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <AvatarStack avatarList={avatarList} />
          <p className="whitespace-nowrap text-sm text-muted-foreground">₦1,400 for the first 30 riders · 50 places</p>
        </div>
      </div>
    </div>
  );
}
