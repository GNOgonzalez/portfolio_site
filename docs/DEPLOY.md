# Deploy checklist

## Portfolio (this repo)

1. Push to GitHub.
2. [Vercel](https://vercel.com) → Import → root directory `.`
3. Optional env vars:
   - `PUBLIC_BOOKING_DEMO_URL`
   - `PUBLIC_POMODORO_DEMO_URL`

## Booking demo

See `../booking_scheduling_app/docs/portfolio-demo-deploy.md`

Quick summary:
- Render Blueprint from `render.yaml`
- Vercel frontend from `booking_scheduling_app/frontend`
- Set env vars on both; seed demo via Render Shell

## Pomodoro demo

```bash
cd ../todo_pomodoro/web && npm install && npm run build
```

Deploy `web/` folder to Vercel. Add URL to portfolio `PUBLIC_POMODORO_DEMO_URL`.
