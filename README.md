# AI Engineer & Full Stack Developer Portfolio

A React + Vite portfolio built to present AI Engineering and Full Stack Development
work to recruiters. No TypeScript, no CSS framework — plain CSS with design tokens
(CSS variables) and reusable components.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  components/       One folder per component, each with its own .jsx + .css
    Navbar/
    Hero/
    PipelineDivider/  ← the repeating "signal pipeline" visual used in the hero
                        and as section dividers
    About/
    Skills/
    Projects/          Projects.jsx (grid) + ProjectCard.jsx + ProjectModal.jsx
    Services/
    Education/
    Contact/
    Footer/
  data/
    projects.js       All project content — edit this to add/change projects
    skills.js         AI + full-stack skill groups
  context/
    ThemeContext.jsx  Dark/light mode (persisted to localStorage)
  hooks/
    useScrollReveal.js  Fade-in-on-scroll behavior used across sections
  App.jsx / App.css
  index.css           Design tokens (colors, type, spacing) + shared utilities
public/
  projects/           Put real project screenshots here (see README.txt inside)
  favicon.svg
```

## What you need to personalize before publishing

Everything below is a placeholder — search for these in the code and replace them:

- **Social / contact links** — `SOCIAL` in `Hero.jsx`, `CONTACT` in `Contact.jsx`
  and `Footer.jsx` (GitHub, LinkedIn, email).
- **Projects** — `src/data/projects.js`. Each project object supports `title`,
  `image`, `description`, `problem`, `solution`, `features`, `architecture`,
  `technologies`, and optional `github` / `liveDemo` / `caseStudy` links.
  Add more projects by pushing another object to the array — the grid and
  modal both scale automatically.
- **Project screenshots** — drop image files into `public/projects/` matching
  the `image` path in each project object. Missing images fall back to a
  generated placeholder graphic automatically, so nothing ever looks broken.
- **Skills** — `src/data/skills.js` if your tool stack changes.
- **Open Graph URL/image** — `index.html` (`og:url`, `og:image`) once you have
  a real domain and social preview image.

## Design notes

The visual language ("Signal Pipeline") is built around the actual shape of
an AI engineering pipeline — input → embed → retrieve → reason → output —
used as a recurring divider motif, plus a terminal/file-path style for
section labels (`~/about`, `~/skills/ai-engineering`, etc.) to reflect an
engineer's own tools rather than a generic template. Two accent colors
distinguish the two disciplines: teal for AI engineering, amber for full
stack. Dark mode is the default with a fully-tokenized light mode alternative.
