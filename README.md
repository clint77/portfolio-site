# pijuan.dev

The source for [pijuan.dev](https://pijuan.dev), built with Next.js, React, and
TypeScript.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The production build is exported as a static site in `out/`.

## Firebase preview

The repository targets the existing Firebase project
`react-portfolio-app-33e66`.

```bash
npm run preview
```

The Firebase Hosting emulator serves the production export locally.

## Deploy

Authenticate with the Google account that owns the Firebase project:

```bash
npx firebase-tools login
```

Then build and deploy:

```bash
npm run deploy
```

Firebase Hosting keeps the existing `pijuan.dev` custom-domain connection, so
no DNS change is required when deploying to the current project.
