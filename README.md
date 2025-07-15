# Peter Blanco's Personal Website

A modern personal website built with Next.js, React, and TypeScript. Features a blog, travel guides, and information about my work as a product manager.

## Tech Stack

- **Framework**: Next.js 14 with React 18 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Typography**: @tailwindcss/typography for blog posts
- **Deployment**: Vercel
- **Content**: Markdown-based blog posts with gray-matter
- **Architecture**: React Server Components for optimal performance

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

- `app/` - Next.js App Router pages and layouts
- `lib/` - Utility functions
- `styles/` - Global styles and Tailwind configuration
- `_posts/` - Blog posts in Markdown format
- `public/assets/` - Static assets (images, favicons)

### App Router Structure
- `app/layout.tsx` - Root layout component
- `app/page.tsx` - Home page
- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Individual blog post pages
- `app/interests/page.tsx` - Interests page
- `app/travel-guides/page.tsx` - Travel guides listing
- `app/not-found.tsx` - 404 error page

## Blog Posts

Blog posts are written in Markdown and stored in the `_posts/` directory. Each post should have frontmatter with:

- `title`: Post title
- `date`: Publication date
- `categories`: Post categories (optional)

## Features

- **App Router**: Modern Next.js 14 App Router with React Server Components
- **Static Generation**: All pages pre-generated at build time for optimal performance
- **SEO Optimized**: Built-in metadata API for better search engine optimization
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Blog System**: Markdown-based blog posts with syntax highlighting
- **Travel Guides**: Dedicated section for travel content
- **Modern CSS**: Tailwind CSS v4 with custom design system
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized bundle sizes and loading times

## License

This project is open source and available under the [MIT License](LICENSE).
