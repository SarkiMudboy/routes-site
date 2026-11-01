// Read from Vite env vars (prefixed VITE_, inlined at build time).
// Falls back to a visible placeholder token if the var is unset, so an
// unconfigured build still renders and the missing value is obvious.
// This is useful for development and debugging.
export const WHATSAPP_GROUP_INVITE_LINK =
  import.meta.env.VITE_WHATSAPP_GROUP_INVITE_LINK ??
  "{{WHATSAPP_GROUP_INVITE_LINK}}";
export const DRIVER_PHONE_NUMBER =
  import.meta.env.VITE_DRIVER_PHONE_NUMBER ?? "{{DRIVER_PHONE_NUMBER}}";
export const SUPPORT_PHONE_NUMBER =
  import.meta.env.VITE_SUPPORT_PHONE_NUMBER ?? "{{SUPPORT_PHONE_NUMBER}}";
// `||` (not `??`): an empty `VITE_CAC_RC_NUMBER=` line also shows the placeholder.
export const CAC_RC_NUMBER =
  import.meta.env.VITE_CAC_RC_NUMBER?.trim() || "{{CAC_RC_NUMBER}}";

const digits = (n: string) => n.replace(/\D/g, "");

/**
 * Human-readable phone number. Nigerian numbers (234 + 10 digits) become
 * "+234 806 804 1254"; any other digits-only number just gets a leading "+".
 * Unset placeholders like "{{DRIVER_PHONE_NUMBER}}" are returned unchanged.
 */
export function formatPhone(n: string): string {
  const d = digits(n);
  if (!d || /[{}]/.test(n)) return n;
  const ng = d.match(/^234(\d{3})(\d{3})(\d{4})$/);
  return ng ? `+234 ${ng[1]} ${ng[2]} ${ng[3]}` : `+${d}`;
}

// tel: needs the "+" so phones dial internationally rather than as a local
// number; wa.me needs digits only.
export const driverTel = `tel:+${digits(DRIVER_PHONE_NUMBER)}`;
export const supportWa = `https://wa.me/${digits(SUPPORT_PHONE_NUMBER)}`;
