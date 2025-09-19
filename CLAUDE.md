# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Local development**: `bundle exec jekyll serve` - Runs the Jekyll site locally for development
- **Dependencies**: `bundle install` - Install Ruby gem dependencies

## Architecture Overview

This is a Jekyll-based static site for Peter Blanco's personal blog and portfolio. The site structure follows Jekyll conventions:

**Core Configuration:**
- `_config.yml` - Main Jekyll configuration with site metadata, plugins, and build settings
- `Gemfile` - Ruby gem dependencies including Jekyll 4.3.3 and plugins

**Content Structure:**
- `_posts/` - Blog posts in Markdown format with Jekyll front matter, organized by date
- `_layouts/` - HTML templates (`default.html` for base layout, `post.html` for blog posts)
- `_includes/` - Reusable HTML components (`analytics.html` for Google Analytics, `navigation.html`)
- `_data/navigation.yml` - Site navigation menu structure
- `assets/` - Static files (CSS, images, favicons)

**Key Features:**
- SEO optimization via jekyll-seo-tag plugin
- Sitemap generation via jekyll-sitemap plugin
- Custom permalink structure: `/:categories/:title/`
- Google Analytics integration (production only)
- Responsive design with custom CSS

**Content Categories:**
Posts are categorized as: travel guides, startup content, and satirical pieces. The site includes dedicated index pages for different content types.

**Build Output:**
Generated site files are output to `_site/` directory (excluded from git).