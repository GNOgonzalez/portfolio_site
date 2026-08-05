/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_BOOKING_DEMO_URL?: string;
  readonly PUBLIC_POMODORO_DEMO_URL?: string;
  readonly PUBLIC_BOOKING_INQUIRY_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
