/**
 * Live demo URLs — set at build time via environment variables.
 *
 * Vercel → Project Settings → Environment Variables:
 *   PUBLIC_BOOKING_DEMO_URL=https://your-booking-frontend.vercel.app
 *   PUBLIC_POMODORO_DEMO_URL=https://your-pomodoro.vercel.app
 */
export const demoUrls = {
  booking: import.meta.env.PUBLIC_BOOKING_DEMO_URL ?? '',
  pomodoro: import.meta.env.PUBLIC_POMODORO_DEMO_URL ?? '',
};
