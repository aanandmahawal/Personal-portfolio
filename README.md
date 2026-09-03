# Portfolio — Split for Separate Deployment

## Structure
- `frontend/` — the compiled React build (static site) + `vercel.json` that
  (a) proxies `/api/*` calls to the backend and (b) serves `index.html` for all
  routes (SPA fallback).
- `backend/`  — the Express API (contact form email). Runs locally via
  `node server.js` and on Vercel via `api/index.js`.

## IMPORTANT — before deploying
1. The old SendGrid API key was hard-coded in the source and must be treated as
   leaked. Log in to SendGrid, DELETE that key, and create a new one.
2. Copy `backend/.env.example` to `backend/.env` and fill in the new key and
   your email addresses. Never commit `.env`.
3. After the backend is deployed, open `frontend/vercel.json` and replace
   `REPLACE-WITH-YOUR-BACKEND.vercel.app` with your real backend URL, then
   redeploy the frontend.

## Local test
cd backend && npm install && node server.js
# then POST http://localhost:8080/api/v1/portfolio/sendEmail

## Note
The React source (client/src) was not present in the provided zip — only the
compiled build. The frontend deploys fine as-is, but to edit the frontend you
need the original source project.
