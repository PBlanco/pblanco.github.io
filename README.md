# Peter Blanco's Personal Website

A modern personal website built with Next.js, React, and TypeScript. Features a blog, travel guides, and information about my work as a product manager.

## Tech Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: CSS-in-JS with styled-jsx
- **Deployment**: Vercel
- **Content**: Markdown-based blog posts with gray-matter

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### Deployment

The site is configured for deployment on Vercel. Simply connect your repository to Vercel and it will automatically deploy when you push to the main branch.

## Project Structure

- `pages/` - Next.js pages (routes)
- `components/` - React components
- `lib/` - Utility functions
- `_posts/` - Blog posts in Markdown format
- `assets/` - Static assets (images, favicons)
- `public/` - Public assets served by Next.js

## Blog Posts

Blog posts are written in Markdown and stored in the `_posts/` directory. Each post should have frontmatter with:

- `title`: Post title
- `date`: Publication date
- `categories`: Post categories (optional)

## Features

- Static site generation for optimal performance
- Responsive design
- SEO optimized with meta tags
- Blog with Markdown support
- Travel guides section
- Dark mode support (coming soon)

## License

This project is open source and available under the [MIT License](LICENSE).
