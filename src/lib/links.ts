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

export const driverTel = `tel:${DRIVER_PHONE_NUMBER}`;
export const supportWa = `https://wa.me/${SUPPORT_PHONE_NUMBER}`;
