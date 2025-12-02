# Moomen Eltelbany Portfolio

Modern, responsive portfolio built with React, Vite, and Tailwind CSS. It showcases my work, skills, and ways to get in touch—all wrapped in a clean, developer-friendly UI with smooth interactions.

## Live Demo

-   https://moomen-portfolio.vercel.app/profile

## Features

-   Responsive layout with a sticky navigation panel and section shortcuts for quick exploration.
-   Typing hero header and 3D-inspired cube animation to introduce the profile with personality.
-   Projects gallery with covers, tech stack tags, GitHub links, and live demos.
-   Contact page with social links plus a validated EmailJS-powered form built on `react-hook-form`.
-   Downloadable CV link and dedicated About section to summarize skills and experience.

## Tech Stack

-   React 19 + Vite 6
-   Tailwind CSS for styling
-   React Router for page routing
-   GSAP animations and custom UI components
-   EmailJS + React Hook Form for contact handling

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

5. Lint the project

```bash
npm run lint
```

## Project Structure

-   `src/pages`: Route-level views (Profile, About, Projects, Contact, Card).
-   `src/components`: Reusable UI elements, navigation, header/footer, and contact form.
-   `src/constants/projectsData.js`: Portfolio projects with images, descriptions, and links.
-   `public/resume.pdf`: Downloadable CV referenced from the profile page.

## Deployment

The site is deployed on Vercel. Build output lives in `dist/` after running `npm run build`. Deploy the `dist` folder or connect the repository directly to Vercel for automatic builds on push.
