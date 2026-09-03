# Portfolio Frontend (React source)

This is the readable, editable React source of the portfolio frontend.

## Where things live (edit these files)
- src/pages/Home/Home.js            -> name + animated typewriter titles + Hire Me / Resume buttons
- src/pages/About/About.js          -> About Me text and profile photo
- src/utils/TechstackList.js        -> Tech Stack items and their icons
- src/pages/Techstack/Techstack.js  -> Tech Stack section layout
- src/pages/Projects/Projects.js    -> the 4 project cards (title, image, tags, link, hover description)
- src/pages/Projects/Projects.css   -> project card + hover-overlay styling
- src/pages/workExp/WorkExp.js      -> Work Experience timeline
- src/pages/Educations/Education.js -> Education timeline
- src/pages/Contact/Contact.js      -> contact form + LinkedIn/GitHub links
- src/App.js                        -> page order + footer
- src/assets/images/                -> project images and profile photo
- src/assets/docs/Aanand_Resume.pdf -> the resume served by the "My Resume" button

## Run locally
    npm install        (.npmrc already sets legacy-peer-deps, needed for react-reveal + React 18)
    npm start          (opens http://localhost:3000; contact form proxies to backend on :8080)

## Deploy on Vercel
1. Push this folder as `frontend/` in the repo.
2. In the Vercel project: Root Directory = frontend, Framework Preset = Create React App.
   Vercel runs `npm install` and `npm run build` automatically.
3. Edit `vercel.json`: replace REPLACE-WITH-YOUR-BACKEND with your real backend
   deployment URL (copy it from the backend project's Vercel dashboard),
   so the contact form's /api calls reach the backend.
