# MangaVerse

A responsive React + Vite starter for discovering and reading Manga, Manhwa and Manhua.

## Included
- Responsive homepage and catalog with search, filters and sorting
- Title details, sample chapter navigation and reader layout
- Local bookmarks
- Firebase Email/Password authentication
- Cloud Firestore database, Firebase Storage uploads and Analytics initialization

## Shared Firebase project
MangaVerse is currently configured to use the same Firebase project as AnimeVerse: `animeverse-238a8`.

In Firebase Console, open that project and ensure these products are enabled:
1. **Authentication** → Sign-in method → Email/Password.
2. **Firestore Database** → Create database (if not already created).
3. **Storage** → Get started (if not already enabled).
4. **Google Analytics** is optional; the app initializes it only when supported.

The Firebase web config is in `src/lib/firebase.js`. Firebase web API keys identify the project; they are not server secrets. Still apply API-key restrictions where practical.

## Important shared-project note
AnimeVerse and MangaVerse now point to the same Auth, Firestore and Storage project. Keep their data separated with collection paths/namespaces and restrictive Firebase Security Rules. The current admin email check in the browser is only a UI convenience, not a security boundary. Before production, enforce admin roles with Firebase custom claims and Firestore/Storage Security Rules.

## Run locally
1. Install Node.js 20+.
2. Open the `MangaVerse` folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`; build with `npm run build`.

## Current data status
The catalog and reader still display demo seed data. Admin upload writes title metadata to the Firestore `titles` collection and chapter page URLs to the `chapters` collection in Storage/Firestore. Replace sample metadata/artwork with content you own or are licensed to distribute.

## Deploy
Build output is in `dist/`. For Render static hosting use build command `npm install && npm run build`, publish directory `dist`, and rewrite `/*` to `/index.html` for SPA routing.

Only host or distribute content you own or have explicit permission to use. This project does not scrape third-party manga sites.
