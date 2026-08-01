import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="max-w-[720px] mx-auto px-7 py-4 flex items-center justify-between gap-3">
      <Logo />
      <span className="inline-block text-xs font-bold tracking-wide text-teal border border-teal rounded-full px-3 py-1.5 whitespace-nowrap">
        4-week pilot
      </span>
    </header>
  );
}
