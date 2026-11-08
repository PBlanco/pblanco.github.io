# Website cleanup: visual QA

Tested PR #9 at commit `c244941f7778e564de51ad40c061bf6e69c07998` on 2026-11-08. Screenshots and recordings show the local production Jekyll build. The before screenshots use the unchanged main branch (`e411984`). This evidence branch is separate from the production PR and is not intended to be merged.

## Review the result

| View | Before | After |
| --- | --- | --- |
| Desktop, 1440×900 | [Screenshot](before-1440.png) | [Screenshot](after-1440.png) |
| Phone, 390×844 | [Screenshot](before-390.png) | [Screenshot](after-390.png) |

| Small phone, 360×800 | Phone, 390×844 | Tablet, 768×1024 | Desktop, 1440×900 |
| --- | --- | --- | --- |
| [Screenshot](after-360.png) | [Screenshot](after-390.png) | [Screenshot](after-768.png) | [Screenshot](after-1440.png) |

Walkthrough recordings: [phone](walkthrough-390.mp4) · [desktop](walkthrough-1440.mp4). Each shows Home, scrolling, opening Interests, and returning Home. Download the MP4 if GitHub does not preview it.

The “Things I’ve built” section now presents the formatter and LowLow as illustrated cards, side by side on wider screens and stacked below 560px.

## What passed

- Production Jekyll build with the locked dependencies under Ruby 3.3.
- Both cards have visible keyboard focus and sequential Tab navigation; cards stack on phones and align in two columns on tablet/desktop.
- All four viewport sizes: homepage image loads, no horizontal overflow, and no uncaught page JavaScript errors.
- Home → Interests → Home navigation at all four sizes.
- Homepage says “Product manager at Coast,” and retains Coast, social, Hacker News Post Formatter, and LowLow links with the expected destinations.
- Recruiting messaging, career timeline, and retired projects are absent from the homepage.
- All six former post URLs, the blog/category indexes, and repository-only AGENTS.md/README.md/conductor.json return 404 from the local static server. See [route results](results.json).
- Removed content is absent from generated sitemap and RSS feed.
- `git diff --check` passes.

I visually inspected phone, tablet, and desktop captures: text wraps without clipping, images retain their proportions, and navigation changes from the desktop sidebar to the small-screen top bar.

## Coverage limits

Chromium 156.0.8078.79 with resized viewports; these are not physical-device, Safari, or Firefox tests. External app functionality and authentication were not tested. Screenshots show the PR build, not the currently deployed site. Public Git history still contains the removed source content; deleting website pages does not erase that history or search-engine caches.

Private travel guides are not included anywhere in this evidence branch.

The [capture script](capture.cjs) and [machine-readable results](results.json) document the checks. The script expects local PR and main-branch builds on ports 8000 and 8001 and an installed Chromium/FFmpeg.
