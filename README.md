# Terminal Portfolio

A React portfolio styled like a terminal window. It includes:

- ASCII portrait space
- About and contact sections
- Resume download link
- Social links
- Placeholder area for future projects
- GitHub Pages deployment script

## Run locally

```bash
npm install
npm run dev
```

## Customize

Edit the `profile` object and `asciiPortrait` in `src/App.jsx`.

Replace `public/resume.pdf` with your real resume. Keep the filename the same, or update `profile.resume`.

## Deploy to GitHub Pages

Push this project to GitHub, then run:

```bash
npm run deploy
```

The Vite `base` is set to `./`, so the built assets work whether the site is hosted at a user page or a project page path.
