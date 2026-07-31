export type DemoGuideNote = {
  label: string;
  detail: string;
};

export type DemoGuideLogin = {
  role: string;
  username: string;
  summary: string;
};

export type DemoGuideFeature = {
  page: string;
  description: string;
};

export type DemoGuideRole = {
  title: string;
  intro: string;
  features: DemoGuideFeature[];
};

export type DemoGuideWalkthrough = {
  title: string;
  steps: string[];
  note?: string;
};

export type DemoGuideConcept = {
  term: string;
  meaning: string;
};

export type DemoGuideTroubleshooting = {
  problem: string;
  fix: string;
};

export type DemoGuideInquiry = {
  title: string;
  description: string;
  emailSubject: string;
  highlights: string[];
};

export type DemoGuide = {
  password: string;
  intro: string;
  notes: DemoGuideNote[];
  logins: DemoGuideLogin[];
  registrationNote?: string;
  roles: DemoGuideRole[];
  walkthrough: DemoGuideWalkthrough[];
  concepts: DemoGuideConcept[];
  troubleshooting: DemoGuideTroubleshooting[];
  inquiry?: DemoGuideInquiry;
};

export function inquiryMailto(inquiry: DemoGuideInquiry, email: string): string {
  const body = [
    "Hi Gino,",
    '',
    "I'm interested in using the booking & scheduling app for our organization.",
    '',
    'Organization / school name:',
    'What we need:',
    'Timeline:',
    '',
    'Thanks,',
  ].join('\n');

  return `mailto:${email}?subject=${encodeURIComponent(inquiry.emailSubject)}&body=${encodeURIComponent(body)}`;
}

export const demoGuides: Record<string, DemoGuide> = {
  'booking-scheduling': {
    password: 'demo1234',
    intro:
      'A language-school-style booking system: students buy memberships and book lessons, teachers manage schedules and write progress reports, and staff run the studio from one dashboard. This is a sandbox prototype — data may reset, and the API can take up to a minute to wake up after idle time.',
    notes: [
      {
        label: 'Cold start',
        detail:
          'The first click after idle time may spin for 30–60 seconds while the API wakes up. Refresh once if a page stays blank.',
      },
      {
        label: 'Mock payments',
        detail: 'Membership purchases are simulated — no real card charges.',
      },
      {
        label: 'Shared demo',
        detail: 'Anyone can log in and change data. The database may reset when the server restarts.',
      },
      {
        label: 'No real email',
        detail: 'Confirmation emails are not sent in this environment.',
      },
      {
        label: 'Meeting links',
        detail: 'Video links are placeholders, not real Google Meet rooms.',
      },
    ],
    logins: [
      {
        role: 'Student',
        username: 'demo_student',
        summary: 'Booking, membership, progress, homework',
      },
      {
        role: 'Teacher',
        username: 'demo_teacher',
        summary: 'Schedule, class requests, reports, homework',
      },
      {
        role: 'Staff',
        username: 'demo_staff',
        summary: 'Studio-wide admin, plans, branding, metrics',
      },
    ],
    registrationNote: 'You can also create your own student account from the sign-in page.',
    roles: [
      {
        title: 'Student',
        intro:
          'Browse open lesson slots, book with tickets from a membership, request custom times, track skill progress, and complete homework.',
        features: [
          { page: 'Book a lesson', description: 'Calendar of open sessions — filter by subject, teacher, or time' },
          { page: 'Request a class', description: 'Ask for a specific time; teacher must approve before it is confirmed' },
          { page: 'My bookings', description: 'View and cancel upcoming lessons' },
          { page: 'Membership', description: 'Buy a mock subscription or ticket pack (Japanese or English plans)' },
          { page: 'My progress', description: 'Charts and session history with teacher feedback' },
          { page: 'Homework', description: 'View assignments and reply to journal prompts' },
        ],
      },
      {
        title: 'Teacher',
        intro:
          'Own a class catalog, publish availability, open sessions for students to book, approve class requests, and write session reports and homework.',
        features: [
          { page: 'My sessions', description: 'Calendar of all your lessons; see who is enrolled' },
          { page: 'Class requests', description: 'Approve or deny student-requested times' },
          { page: 'New session', description: 'Open a slot on the calendar (must fall in your availability)' },
          { page: 'Student reports', description: 'Rate skills and leave notes after a lesson' },
          { page: 'Homework', description: 'Assign file uploads or journal prompts' },
        ],
      },
      {
        title: 'Staff',
        intro:
          'Manage the whole studio: all teachers, membership plans, student accounts, branding, glossary labels, and reports.',
        features: [
          { page: 'Staff dashboard', description: 'List teachers; jump to their schedule or permissions' },
          { page: 'Studio schedule', description: 'Every teacher on one calendar' },
          { page: 'Memberships', description: 'Edit plan prices and ticket allowances' },
          { page: 'Glossary', description: 'Rename terms app-wide (e.g. Student → Client)' },
          { page: 'Sign-in branding', description: 'Logo and studio name on the login page' },
        ],
      },
    ],
    walkthrough: [
      {
        title: 'Student — buy membership and book a lesson',
        steps: [
          'Sign in as demo_student.',
          'Open Membership → choose Japanese or English → Purchase subscription (mock).',
          'Go to Book a lesson → pick an open session → Book.',
          'Open My bookings to confirm the reservation.',
        ],
        note: 'demo_student starts without a membership so you can try the purchase flow. Past sessions are pre-seeded for progress charts.',
      },
      {
        title: 'Student — request a custom time',
        steps: [
          'Open Request a class → choose demo_teacher and a class.',
          'Pick a time from the availability grid → submit.',
          'Tickets are held until the teacher responds.',
        ],
      },
      {
        title: 'Teacher — approve the request',
        steps: [
          'Sign out → sign in as demo_teacher.',
          'Open Class requests → review the pending request → Approve.',
        ],
      },
      {
        title: 'Teacher — reports and homework',
        steps: [
          'Student reports → open a past session → add skill ratings and notes.',
          'Homework → assign a journal prompt or file task.',
        ],
      },
      {
        title: 'Staff — studio overview',
        steps: [
          'Sign in as demo_staff.',
          'Staff dashboard → see teachers and open Permissions.',
          'Studio schedule → all sessions in one view.',
        ],
      },
    ],
    concepts: [
      { term: 'Class', meaning: 'A teachable offering (e.g. English Conversation · Intermediate)' },
      { term: 'Session', meaning: 'A specific time slot on the calendar' },
      { term: 'Booking', meaning: "A student's reserved seat in a session" },
      { term: 'Ticket', meaning: 'Currency used to book; comes from membership' },
      { term: 'Class request', meaning: 'Student asks for a custom time; teacher must approve' },
      { term: 'Membership', meaning: 'Subscription or ticket pack tied to a subject (Japanese / English)' },
    ],
    troubleshooting: [
      { problem: 'Login spins forever', fix: 'Wait up to 60s for the API cold start, then retry' },
      { problem: 'Login failed', fix: 'Use demo_student, demo_teacher, or demo_staff — password demo1234' },
      { problem: "Can't book", fix: 'Buy a mock membership first on the Membership page' },
      { problem: 'No open sessions', fix: 'Sign in as demo_teacher → New session to add a slot' },
      { problem: 'Data looks wrong', fix: 'Demo data may have been reset — run through the walkthrough again' },
    ],
    inquiry: {
      title: 'Interested in using this for your school?',
      description:
        'This booking system is built for language schools and tutoring studios. I can help with deployment, branding, workflow customization, and training for your team.',
      emailSubject: 'Inquiry: Booking & Scheduling App',
      highlights: [
        'Student booking, teacher availability, and staff admin in one place',
        'Membership plans and ticket-based scheduling',
        'Progress tracking, homework, and session reports',
        'Hosted setup or guidance for your own infrastructure',
      ],
    },
  },
};

export function getDemoGuide(slug: string): DemoGuide | undefined {
  return demoGuides[slug];
}
