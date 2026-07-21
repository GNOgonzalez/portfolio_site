export type ProjectArchitecture = {
  title: string;
  caption: string;
  diagram: string;
};

export const projectArchitectures: Record<string, ProjectArchitecture> = {
  'reflet-ops': {
    title: 'SimplyBook → Sheets pipeline',
    caption:
      'AppSheet triggers scheduleWeeklyBookings in Google Apps Script, which syncs client and teacher data from Sheets, calls SimplyBook via JSON-RPC, and writes bookings back. Cleaned records with custom IDs feed AppSheet for daily ops and Data Studio for monthly reports.',
    diagram: `flowchart TB
  subgraph staff["Staff (AppSheet)"]
    AS[AppSheet UI]
    TRG[Automation / action button]
  end

  subgraph gas["Google Apps Script"]
    SWB[scheduleWeeklyBookings]
    MAP[Lookup maps]
    VAL[Data validator]
    TOAST[Toast notifications]
  end

  subgraph sheets["Google Sheets"]
    CLIENT[Client records]
    BOOK[Booking records]
    TEACH[Teacher directory]
  end

  SB[(SimplyBook API)]
  DS[Google Data Studio]

  AS --> TRG --> SWB
  SWB --> MAP
  SWB --> VAL
  MAP --> CLIENT
  MAP --> TEACH
  SWB <-->|JSON-RPC| SB
  SWB --> BOOK
  BOOK --> AS
  BOOK --> DS
  SWB --> TOAST --> AS`,
  },
  'reflet-booking': {
    title: 'Multi-role booking prototype',
    caption:
      'React SPA with role-based views talks to a FastAPI backend. JWT auth gates booking routes; SQLAlchemy persists teachers, students, and sessions.',
    diagram: `flowchart LR
  subgraph client["React SPA"]
    STU[Student views]
    TCH[Teacher views]
    STF[Staff views]
  end

  subgraph api["FastAPI"]
    JWT[JWT auth]
    ROUTES[Booking API]
    ORM[SQLAlchemy]
  end

  DB[(Database)]

  STU --> JWT
  TCH --> JWT
  STF --> JWT
  JWT --> ROUTES --> ORM --> DB`,
  },
  'booking-scheduling': {
    title: 'Django + React scheduling stack',
    caption:
      'React SPA calls Django REST Framework with JWT. Scheduling services handle availability, membership gating, and bookings; PostgreSQL is the source of truth. Django admin supports staff operations.',
    diagram: `flowchart TB
  subgraph frontend["React SPA"]
    R[Routes by role]
    CAL[Calendars & booking UI]
  end

  subgraph backend["Django + DRF"]
    JWT[JWT auth]
    SCHED[Scheduling services]
    ADMIN[Django admin]
  end

  PG[(PostgreSQL)]

  R --> CAL
  CAL -->|REST + JWT| JWT
  JWT --> SCHED
  SCHED --> PG
  ADMIN --> PG`,
  },
  'pomodoro-game': {
    title: 'Pomodoro todo — CLI to web',
    caption:
      'Built week by week in CS50P: Python CLI for timer and todos first, then a Vite + JavaScript web UI with gamified rewards. Same core concepts, two interfaces.',
    diagram: `flowchart TB
  subgraph web["Vite + JavaScript"]
    UI[Todo + timer UI]
    GAME[Reward game]
  end

  subgraph cli["Python CLI (CS50P)"]
    TIMER[Pomodoro timer]
    TASKS[Todo list]
  end

  CORE[Focus & task logic]

  TIMER --> CORE
  TASKS --> CORE
  UI --> CORE
  GAME --> UI`,
  },
};
