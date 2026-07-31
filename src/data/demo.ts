/**
 * Live demo URLs — override at build time via environment variables.
 *
 * Vercel → Project Settings → Environment Variables:
 *   PUBLIC_BOOKING_DEMO_URL=https://your-booking-app.example.com/login
 *   PUBLIC_POMODORO_DEMO_URL=https://your-pomodoro.vercel.app
 */
const DEFAULT_BOOKING_DEMO_URL = 'https://booking-frontend-a6i2.onrender.com/login';

export const demoUrls = {
  booking: import.meta.env.PUBLIC_BOOKING_DEMO_URL ?? DEFAULT_BOOKING_DEMO_URL,
  pomodoro: import.meta.env.PUBLIC_POMODORO_DEMO_URL ?? '',
};
