# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Working Principles

Follow these principles in order:

1. Make requirements less dumb: question assumptions, especially when the requested behavior looks more complex than the site needs.
2. Delete before improving: remove dead paths, stale copy, unused config, or unnecessary process before optimizing it.
3. Simplify before optimizing: avoid new abstractions unless they remove real complexity in this small static site.
4. Accelerate cycle time: prefer small, inspectable changes and quick local verification after the first three principles are satisfied.
5. Automate only after the flow is understood.

For UI-heavy work, prototype the visible experience first. For backend-heavy work, define the data model first. For mixed work, lock the JSON/data shape early; if the shape is unclear, prototype the UI until it is.

## Development Commands

- Dependencies: `bundle install`
- Local development: `bundle exec jekyll serve`
- Build verification: `bundle exec jekyll build`

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

## Implementation Notes

- Keep changes small and static-site friendly; this repo should not grow a backend unless the requirement has been reduced and still clearly needs one.
- Preserve the markdown-doc feel of the homepage and post pages. Prefer simple HTML/CSS over framework-style component systems.
- Navigation labels live in `_data/navigation.yml`; update that file rather than hard-coding sidebar links.
- Homepage positioning copy lives in `index.md`; corresponding homepage styles live in `assets/css/styles.css`.
- Analytics belongs in `_includes/analytics.html` and is included only for `jekyll.environment == 'production'`.
- Generated output goes to `_site/` and should not be edited directly.
- If search tooling is unavailable, use `find`, `sed`, and other standard shell tools without changing repo behavior.

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
- 2026-03-11: Removed the dead `site.email` contact path from `index.md` and `_config.yml`; homepage hero contact should only expose working options; homepage social links should live in the top `intro-actions` row, not a bottom `Find me on` section, and should use the SVG assets in `assets/icons`; homepage availability copy should be structured as `Open to` with `Full-time` and `Consulting` sublabels, with consulting positioned as AI agent development and product direction; right-nav labels live in `_data/navigation.yml`, with `Startups` removed from the sidebar and `All Posts` renamed to `Blog`; `interests.md` should use `##` section headings to match the site’s section hierarchy.
- 2026-06-05: `AGENTS.md` now captures repo working principles and implementation notes so future agents reduce scope, delete stale paths, and verify with Jekyll before adding complexity.
- 2026-06-05: Local `bundle exec jekyll build` can fail when the active shell uses macOS system Ruby `2.6.10`; `Gemfile.lock` specifies Bundler `2.7.2`, which requires Ruby `>= 3.2.0`, so use a newer Ruby environment before verifying builds.
- 2026-06-05: `jekyll-seo-tag` already emits the canonical `<title>`; keep `_layouts/default.html` from adding a second manual title tag.
