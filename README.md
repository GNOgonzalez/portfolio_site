# Portfolio Site

EdTech-focused developer portfolio for Gino M. Gonzalez — built with [Astro](https://astro.build).

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project story (chronological)

| # | Slug | Page |
|---|------|------|
| 01 | `reflet-ops` | `/projects/reflet-ops` |
| 02 | `reflet-booking` | `/projects/reflet-booking` |
| 03 | `booking-scheduling` | `/projects/booking-scheduling` |
| 04 | `pomodoro-game` | `/projects/pomodoro-game` |

Each page: **Problem → Solution → Build story → Where it is now** + screenshots.

## Updating content

Edit files in `src/data/`:

| File | What to change |
|------|----------------|
| `projects.ts` | Project overviews, screenshots, GitHub links |
| `demo.ts` | Reads env vars for live demo URLs |
| `experience.ts` | Work history |
| `profile.ts` | About, contact |
| `skills.ts` | Skill groups |

### Screenshots

Drop images into `public/screenshots/{slug}/` and update `screenshots[]` in `projects.ts`.

## Deploy portfolio (Vercel)

1. Push to GitHub and connect to [Vercel](https://vercel.com).
2. Zero config — uses `vercel.json`.
3. Optional env vars for live demo buttons:

| Variable | Value |
|----------|-------|
| `PUBLIC_BOOKING_DEMO_URL` | `https://your-booking-frontend.vercel.app` |
| `PUBLIC_POMODORO_DEMO_URL` | `https://your-pomodoro.vercel.app` |

When set, booking and pomodoro projects show **Launch demo** automatically.

## Deploy booking demo

See [`booking_scheduling_app/docs/portfolio-demo-deploy.md`](../booking_scheduling_app/docs/portfolio-demo-deploy.md):

- **Render** — `render.yaml` (API + Postgres + nightly demo reset cron)
- **Vercel** — `booking_scheduling_app/frontend/` with `VITE_API_BASE`

## Deploy pomodoro demo

```bash
cd ../todo_pomodoro/web
npm install && npm run build
```

Deploy `web/` to Vercel. Set `PUBLIC_POMODORO_DEMO_URL` on this portfolio project.

## Design

- Accent: dusty blue (`#3d6a85`)
- Accessibility: semantic HTML, skip link, keyboard focus, WCAG AA
- Layout: projects-first home page + chronological story navigation
