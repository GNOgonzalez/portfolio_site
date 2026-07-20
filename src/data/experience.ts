export type ExperienceBullet = {
  text: string;
  link?: { href: string; label: string };
};

export type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  dates: string;
  blurb: string;
  bullets: ExperienceBullet[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Reflet Online Language School',
    location: 'Remote (Ofuna, JP)',
    role: 'English & Japanese Tutor · Internal Tools Developer',
    dates: 'Jan 2024 – Present',
    blurb: 'SimplyBook → Sheets → AppSheet pipeline plus GAS automations for a Japanese language school.',
    bullets: [
      {
        text: 'Built Google Apps Script to pull SimplyBook API data, clean records, assign custom IDs, and sync booking, student, and teacher data into Google Sheets. Maintaining and expanding the script to handle more data and edge cases.',
        link: { href: '/projects/reflet-ops', label: 'View project' },
      },
      {
        text: 'Tied bookings, session reporting, and student progress tracking together in AppSheet; connected Sheets to Google Data Studio for monthly progress reports.',
        link: { href: '/projects/reflet-ops#architecture', label: 'See architecture' },
      },
      {
        text: 'Later built a full-stack student portal (FastAPI, React) when AppSheet limits required a custom web app for curriculum roadmaps.',
        link: { href: '/projects/reflet-booking', label: 'See what came next' },
      },
    ],
  },
  {
    company: 'Vantage International School',
    location: 'Sunnyvale, CA',
    role: 'Curriculum Development & Tutoring',
    dates: 'Sep 2012 – Dec 2024',
    blurb: 'Curriculum design and tutoring for 100+ K–12 through adult learners.',
    bullets: [
      {
        text: 'Developed curricula and delivered English instruction (1-on-1 and groups) for preschool through adult learners.',
      },
      {
        text: 'Tracked coursework and progress for 100+ students; coordinated with parents in English and Japanese.',
      },
    ],
  },
  {
    company: 'Helppo, Inc.',
    location: 'Hong Kong (remote)',
    role: 'Curriculum Development & Marketing',
    dates: 'Sep 2018 – Dec 2020',
    blurb: 'Online tutoring platform curricula, Masterclass scripts, and SaaS marketing.',
    bullets: [
      {
        text: 'Built K–12, IELTS, and conversational English curricula for an online tutoring platform.',
      },
      {
        text: 'Wrote Masterclass video scripts and promotional copy; supported VC/incubator pitch decks.',
      },
    ],
  },
  {
    company: 'Xklaim, Inc.',
    location: 'San Francisco, CA',
    role: 'Product Tester and Administrator',
    dates: 'September 2013 – September 2014',
    blurb: 'Product Tester and Accounts Administrator for a San Francisco-based ecommerce startup.',
    bullets: [
      {
        text: 'Payroll and AP (QuickBooks, ADP); client accounts;',
      },
      {
        text: 'iOS e-commerce app testing.',
      },
      {
        text: 'Sales/marketing campaigns and creative assets (Photoshop, Camtasia, PowerPoint).',
      },
    ],
  },
];
