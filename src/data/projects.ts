import { demoUrls } from './demo';

export type ProjectStatus =
  | 'live'
  | 'shipped'
  | 'on-hold'
  | 'coming-soon'
  | 'in-progress';

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  stack: string[];
  problem: string;
  solution: string;
  buildStory: string[];
  whereNow: string;
  screenshots: ProjectScreenshot[];
  hasArchitectureDiagram?: boolean;
  demoUrl?: string;
  demoNote?: string;
  demoCredentials?: { label: string; value: string }[];
  githubUrl?: string;
  githubNote?: string;
  trySteps?: string[];
};

export const projects: Project[] = [
  {
    slug: 'reflet-ops',
    order: 1,
    title: 'Reflet Ops — SimplyBook, Sheets & AppSheet',
    subtitle: 'Booking visibility, session reporting, and student progress tracking',
    status: 'shipped',
    stack: [
      'Google Apps Script',
      'Google AppSheet',
      'Google Sheets',
      'SimplyBook API',
      'Google Data Studio',
    ],
    problem:
      'Reflet needed an easy way to view bookings from SimplyBook, report sessions, and track student data over time — management asked me to tie booking, student, and teacher data together so staff could actually use it day to day.',
    solution:
      'A SimplyBook → Google Sheets → AppSheet pipeline, connected with Google Apps Script. GAS pulls booking, student, and teacher data from the SimplyBook API, cleans it, assigns custom IDs, and pushes it into Sheets where AppSheet and Google Data Studio can consume it.',
    buildStory: [
      'Wrote GAS to pull from the SimplyBook API, clean records, add custom IDs, and sync into Google Sheets.',
      'Built AppSheet apps so staff could view bookings and report sessions in one place.',
      'Used AppSheet to track student data across sessions as management requested.',
      'Connected Sheets to Google Data Studio for monthly progress reports.',
      'Added scheduleWeeklyBookings — AppSheet triggers automated booking sync with toast feedback to staff.',
    ],
    whereNow:
      'Pipeline in production at Reflet — staff use AppSheet daily and Data Studio for monthly reports. Booking UX eventually needed more than Sheets could offer → led to Project 2.',
    screenshots: [
      {
        src: '/screenshots/reflet-ops/placeholder-architecture.svg',
        alt: 'Placeholder for SimplyBook to Sheets pipeline architecture',
        caption: 'SimplyBook → GAS → Sheets → AppSheet — diagram below',
      },
      {
        src: '/screenshots/reflet-ops/placeholder-portal.svg',
        alt: 'Placeholder for AppSheet or Data Studio view',
        caption: 'AppSheet / Data Studio views — screenshot coming soon',
      },
    ],
    hasArchitectureDiagram: true,
  },
  {
    slug: 'reflet-booking',
    order: 2,
    title: 'Reflet Student Portal',
    subtitle: 'Multi-role web app for students, teachers, and staff',
    status: 'on-hold',
    stack: ['Python', 'FastAPI', 'React', 'JWT', 'SQLAlchemy'],
    problem:
      'Reflet needed a proper multi-role web app for students, teachers, and staff.',
    solution:
      'A Python FastAPI backend with a React frontend, built as a learning project to understand API design, auth, and client/server structure while prototyping Reflet booking.',
    buildStory: [
      'Built a working booking prototype for teachers and students.',
      'Management was very interested in the demo and asked me to continue building the project.',
    ],
    whereNow:
      'On hold — not in production. The experience let me start a separate passion project: a booking scheduling app (Project 3).',
    screenshots: [
      {
        src: '/screenshots/reflet-booking/placeholder-prototype.svg',
        alt: 'Placeholder for Reflet booking prototype',
        caption: 'Booking prototype UI — screenshot coming soon',
      },
    ],
  },
  {
    slug: 'booking-scheduling',
    order: 3,
    title: 'Booking & Scheduling App',
    subtitle: 'Passion project — a booking system language schools actually need',
    status: demoUrls.booking ? 'live' : 'coming-soon',
    stack: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    problem:
      'Across several language schools I have worked at, scheduling was always painful — teachers juggling availability in spreadsheets, students unsure what their learning options were, staff piecing together membership and class info by hand. I wanted to build the system these schools deserved.',
    solution:
      'A personal passion project: full Django + DRF backend with a React SPA for teacher availability, class catalog, student membership, booking, and cancellation. Designed for how language schools actually operate, not tied to one employer.',
    buildStory: [
      'Started from patterns I saw at multiple schools — availability blocks, class offerings, membership gating.',
      'Chose Django for ORM, admin, auth groups, and long-term maintainability.',
      'Built scheduling services and a React SPA with role-based routes for students, teachers, and staff.',
      'Added a demo sandbox so anyone can try it without touching real school data.',
    ],
    whereNow:
      'Production-ready passion project with a public demo. The flagship app I keep building because I have seen firsthand how much language schools need tools like this.',
    screenshots: [
      {
        src: '/screenshots/booking-scheduling/placeholder-student.svg',
        alt: 'Placeholder for student booking view',
        caption: 'Student session booking — screenshot coming soon',
      },
      {
        src: '/screenshots/booking-scheduling/placeholder-teacher.svg',
        alt: 'Placeholder for teacher availability calendar',
        caption: 'Teacher availability calendar — screenshot coming soon',
      },
    ],
    demoUrl: demoUrls.booking || undefined,
    demoNote: demoUrls.booking
      ? 'First load may take ~50s on free-tier hosting while the API wakes up.'
      : 'Live demo deploying soon. First load may take ~50s on free-tier hosting.',
    demoCredentials: [
      { label: 'Student', value: 'demo_student / demo1234' },
      { label: 'Teacher', value: 'demo_teacher / demo1234' },
      { label: 'Staff', value: 'demo_staff / demo1234' },
    ],
    githubUrl: 'https://github.com/GNOgonzalez/booking_system',
    trySteps: [
      'Log in as demo_student and browse open sessions.',
      'Book a session from the student calendar.',
      'Switch to demo_teacher to view availability.',
    ],
  },
  {
    slug: 'pomodoro-game',
    order: 4,
    title: 'Pomodoro Todo & Game',
    subtitle: 'ADHD-friendly focus tool — no AI, built to prove the craft',
    status: demoUrls.pomodoro ? 'live' : 'in-progress',
    stack: ['Python', 'CS50P', 'Vite', 'JavaScript'],
    problem:
      'I have ADHD and wanted a tool that works with hyperfocus and digital body doubling — structure and accountability cues instead of fighting how my brain works. I also wanted to prove I love coding and keep improving without AI assistance.',
    solution:
      'Pomodoro timer + todo list + reward game, built without AI, following CS50P week by week: CLI first, then web UI and gamification — all written by hand.',
    buildStory: [
      'App is still in progress, but I have learned a lot about the craft of coding and how to build a web app from scratch.',
    ],
    whereNow:
      'Week 2 CLI in progress; web demo ready to deploy. Personal project for focus, fundamentals, and honest skill-building.',
    demoUrl: demoUrls.pomodoro || undefined,
    demoNote: demoUrls.pomodoro ? undefined : 'Web demo ready — deploy todo_pomodoro/web to Vercel.',
    screenshots: [
      {
        src: '/screenshots/pomodoro-game/placeholder-cli.svg',
        alt: 'Placeholder for Pomodoro CLI',
        caption: 'CLI Pomodoro — screenshot coming soon',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const sorted = getSortedProjects();
  const index = sorted.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? sorted[index - 1]! : null,
    next: index < sorted.length - 1 ? sorted[index + 1]! : null,
  };
}
