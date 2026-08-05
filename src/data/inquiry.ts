/**
 * Google Form URLs for client inquiries.
 *
 * Override at build time via environment variable:
 *   PUBLIC_BOOKING_INQUIRY_FORM_URL=https://docs.google.com/forms/d/e/.../viewform
 */
const DEFAULT_BOOKING_INQUIRY_FORM_URL = 'https://forms.gle/nvrUveKvYZqW7s2R7';

export const inquiryUrls = {
  booking: import.meta.env.PUBLIC_BOOKING_INQUIRY_FORM_URL ?? DEFAULT_BOOKING_INQUIRY_FORM_URL,
};

export const inquiryFormNotice =
  'This opens a Google Form in a new tab. Google may ask you to sign in; you can usually submit as a guest.';

export const bookingInquiry = {
  title: 'Inquire about the booking app',
  description:
    'Tell me about your school or studio and what you need. The short Google Form opens in a new tab — I will follow up by email, usually within one business day.',
  backLink: { href: '/projects/booking-scheduling', label: 'Back to project overview' },
  /** Suggested fields when creating the Google Form */
  suggestedFields: [
    'Name (short answer, required)',
    'Email (short answer, required)',
    'School or organization (short answer, required)',
    'Phone (short answer, optional)',
    'What are you looking for? (paragraph, required)',
    'Features or changes you have in mind (paragraph, optional)',
  ],
};
