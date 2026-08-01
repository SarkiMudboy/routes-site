/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_GROUP_INVITE_LINK?: string;
  readonly VITE_DRIVER_PHONE_NUMBER?: string;
  readonly VITE_SUPPORT_PHONE_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
