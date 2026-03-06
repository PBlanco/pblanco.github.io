# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Development Commands

- Local development: `bundle exec jekyll serve`
- Dependencies: `bundle install`

## Architecture Overview

This is a Jekyll-based static site for Peter Blanco's personal blog and portfolio.

## Core Configuration

- `_config.yml`: Main Jekyll configuration with site metadata, plugins, and build settings
- `Gemfile`: Ruby gem dependencies, including Jekyll and plugins

## Content Structure

- `_posts/`: Blog posts in Markdown format with Jekyll front matter, organized by date
- `_layouts/`: HTML templates (`default.html` for base layout and `post.html` for blog posts)
- `_includes/`: Reusable HTML components (`analytics.html`, `navigation.html`)
- `_data/navigation.yml`: Site navigation menu structure
- `assets/`: Static files (CSS, images, favicons)

## Key Features

- SEO optimization via `jekyll-seo-tag`
- Sitemap generation via `jekyll-sitemap`
- Custom permalink structure: `/:categories/:title/`
- Google Analytics integration (production only)
- Responsive design with custom CSS

## Content Categories

Posts are categorized as travel guides, startup content, and satirical pieces. The site includes dedicated index pages for different content types.

## Build Output

Generated site files are output to `_site/` (not tracked in git).

## Memory Management

When you discover something valuable for future sessions — architectural decisions, bug fixes, gotchas, environment quirks — immediately append it to AGENTS.md

Don't wait to be asked. Don't wait for session end.

Keep entries short: date, what, why. If multiple things change on the same day, keep them on one line.

- 2026-02-28: Removed Datadog RUM snippet from `_includes/analytics.html`; Datadog is no longer a vendor, so production analytics should only include active providers.
- 2026-03-06: Homepage recruiting-positioning copy lives in `index.md` intro; intro layout uses `intro-summary` and `intro-meta` in `index.md` with matching styles in `assets/css/styles.css`; hero CTAs use `site.email` and `site.linkedin_username` from `_config.yml`; keep hero actions text-link simple to preserve the markdown-doc feel.
