# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

-   🎨 Modern and clean design
-   📱 Fully responsive layout
-   ⚡ Fast loading with Vite
-   🎯 Smooth scrolling navigation
-   📧 Contact form ready
-   🔧 Easy to customize

## Project Structure

```
src/
├── components/         # React components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero/landing section
│   ├── About/          # About section
│   ├── Projects/       # Projects showcase
│   ├── Contact/        # Contact form
│   └── Footer/         # Footer section
├── data/               # Data files
│   └── portfolioData.js # Main data configuration
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── pages/              # Additional pages (if needed)
```

## Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start development server:**

    ```bash
    npm run dev
    ```

3. **Build for production:**
    ```bash
    npm run build
    ```

## Customization

### Personal Information

Edit `src/data/portfolioData.js` to update:

-   Personal details (name, title, contact info)
-   Skills and technologies
-   Project information
-   Social media links

### Styling

The project uses Tailwind CSS for styling. You can:

-   Modify colors in `tailwind.config.js`
-   Update component styles directly in JSX files
-   Add custom CSS in `src/index.css`

### Components

Each section is a separate component that you can:

-   Modify independently
-   Remove or add sections
-   Rearrange order in `App.jsx`

## Sections

1. **Header** - Navigation with smooth scroll links
2. **Hero** - Introduction and call-to-action buttons
3. **About** - Personal description and key skills
4. **Projects** - Portfolio projects with live/GitHub links
5. **Contact** - Contact form and information
6. **Footer** - Social links and copyright

## Technologies Used

-   React 18
-   Vite
-   Tailwind CSS
-   JavaScript/JSX

## Next Steps

To make this portfolio your own:

1. Replace placeholder content with your information
2. Add your actual projects and descriptions
3. Update social media and contact links
4. Add your profile photo and project images
5. Deploy to your preferred hosting platform

## Deployment

This project can be deployed to:

-   Vercel
-   Netlify
-   GitHub Pages
-   Any static hosting service

Run `npm run build` to create the production build in the `dist` folder.
