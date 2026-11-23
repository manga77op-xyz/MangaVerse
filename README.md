# MangaVerse

A responsive React + Vite starter for discovering and reading Manga, Manhwa, and Manhua.

## Project package

The complete starter source package is available from the ChatGPT conversation as **MangaVerse-Starter.zip**. Extract it, then run:

```bash
npm install
cp .env.example .env
npm run dev
```

Configure Firebase Email/Password Authentication, Firestore, and Storage in `.env` before using authentication or uploads. See the package README for setup details and security guidance.

## Notes

- Demo catalog content and sample artwork are placeholders.
- Add only content you own or are licensed to distribute.
- Protect admin operations with Firebase custom claims and Firestore/Storage security rules; a client-side email check is not security.
