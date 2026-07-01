# Noah Bennett — Portfolio

Personal portfolio website built with React and Vite.

## Tech Stack

- **React** — component-based UI
- **Vite** — build tooling and dev server
- **Google Fonts** — Syne & DM Sans typography

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components
│   ├── ExperienceCard.jsx
│   ├── FadeIn.jsx
│   ├── Footer.jsx
│   ├── GradientOrb.jsx
│   ├── Nav.jsx
│   ├── OrgCard.jsx
│   ├── SectionTitle.jsx
│   └── SkillBadge.jsx
├── pages/           # Page-level components
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   └── ProjectsPage.jsx
├── App.jsx          # Root component and routing
├── colors.js        # Design tokens
└── main.jsx         # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Output goes to `dist/`. Deployed automatically via GitHub Actions.
