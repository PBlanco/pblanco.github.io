import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Peter Blanco - Product Manager & Tech Professional',
  description: 'Product Manager focused on AI and Big Data. Senior PM at ActionIQ/Uniphore. Writing about tech, travel, and product management.',
}

export default function HomePage() {
  return (
    <>
      <div className="intro-section">
        <div className="intro-greeting">
          <span className="wave">👋</span> Hi, I'm <span className="intro-name">Peter Blanco</span>
        </div>
        <div className="intro-desc">
          I'm exploring how to{' '}
          <span className="intro-highlight">
            help enterprise product teams move faster from user feedback to roadmap
          </span>
          . Talking to PMs, trying prototypes, and looking for early partners 🚀.{' '}
          <span className="intro-muted">Stay tuned!</span>
        </div>
      </div>

      <img src="/assets/home.jpg" alt="Peter Blanco - Product Manager and Tech Professional" className="intro-img" />

      <h2>Latest projects</h2>
      <ul>
        <li>
          <strong>June 2025</strong>: <em>ThirdSpace</em> - Discover, book, and pay in minutes for private bar events in NYC.
        </li>
        <li>
          <strong>June 2025</strong>: <a href="https://www.trailway.ai" target="_blank" rel="noopener noreferrer">Trailway</a> - AI-powered user interviews.
        </li>
        <li>
          <strong>May 2025</strong>: <a href="http://dateabase.vercel.app" target="_blank" rel="noopener noreferrer">Date-a-base (unfinished)</a> - Date ideas in the Upper West Side.
        </li>
        <li>
          <strong>March 2025</strong>: <a href="https://github.com/PBlanco/SafeSend" target="_blank" rel="noopener noreferrer">SafeSend</a> - An open-source safe way to share files.
        </li>
        <li>
          <strong>Feb 2025</strong>: <a href="https://hnpostformatter.blancotech.com/" target="_blank" rel="noopener noreferrer">HackerNews Post Formatter</a> - Format your HackerNews post with ease.
        </li>
        <li>
          <strong>Jan 2025</strong>: <a href="https://lowlow.bot" target="_blank" rel="noopener noreferrer">LowLow</a> - A privacy-focused price tracking app.
        </li>
      </ul>

      <h2>Previously</h2>
      <ol>
        <li>
          <strong>Senior Product Manager</strong> at <a href="https://actioniq.com" target="_blank" rel="noopener noreferrer">ActionIQ</a> → Led product strategy for AI, Analytics, and Data Platforms for Fortune 500 clients. Acquired by <a href="https://uniphore.com" target="_blank" rel="noopener noreferrer">Uniphore</a>.
        </li>
        <li>
          <strong>Software Engineer</strong> at <a href="https://www.synconset.com" target="_blank" rel="noopener noreferrer">SyncOnSet</a> → Built Emmy-winning software. Later acquired by <a href="https://www.ep.com" target="_blank" rel="noopener noreferrer">Entertainment Partners</a>.
        </li>
        <li>
          <strong>Founding team member</strong> of <a href="https://www.rosieapp.com" target="_blank" rel="noopener noreferrer">RosieApp</a> → Built iOS app for local grocery delivery, landing first customers and winning $100k in funding. Later acquired by <a href="https://www.instacart.com" target="_blank" rel="noopener noreferrer">Instacart</a>.
        </li>
      </ol>

      <h2>Find me on</h2>
      <ul>
        <li>
          💼 <a href="https://www.linkedin.com/in/peterblanco" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          👨🏻‍💻 <a href="https://github.com/pblanco" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          🐦 <a href="https://x.com/blancotech" target="_blank" rel="noopener noreferrer">X</a>
        </li>
      </ul>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/blog" className="back-link">
          → View all blog posts
        </Link>
      </div>
    </>
  )
}