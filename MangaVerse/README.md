# MangaVerse

A responsive React + Vite starter for discovering and reading Manga, Manhwa and Manhua.

## Included
- Responsive homepage and catalog with search, filters and sorting
- Title details, sample chapter navigation and reader layout
- Local bookmarks
- Firebase Email/Password authentication starter
- Firebase Storage + Firestore upload starter

## Run locally
1. Install Node.js 20+.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and add Firebase web app values.
5. Run `npm run dev`; build with `npm run build`.

## Firebase
Create a Firebase project, add a Web App, enable Email/Password Authentication, create Firestore and enable Storage. Fill the variables in `.env.local`.

**Security:** The admin email check in the browser is not a security boundary. Before production, enforce roles using Firebase custom claims and Firestore/Storage Security Rules. The reader/catalog currently use demo data and sample artwork. Replace these with content you own or are licensed to distribute.

## Deploy
Build output is in `dist/`. For Render static hosting use build command `npm install && npm run build`, publish directory `dist`, and rewrite `/*` to `/index.html` for SPA routing.

Only host or distribute content you own or have explicit permission to use. This project does not scrape third-party manga sites.