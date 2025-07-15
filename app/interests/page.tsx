import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interests - Peter Blanco',
  description: 'My hobbies and continuous learning interests',
}

export default function InterestsPage() {
  return (
    <>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      
      <h1>Hobbies</h1>
      <ul>
        <li>
          🏃‍♂️ <strong>Running</strong>: An avid runner since 2015, I completed my first half marathon in 2019 and most recently ran the{' '}
          <a href="https://www.strava.com/activities/13899267283" target="_blank" rel="noopener noreferrer">
            2025 United Airlines NYC Half Marathon
          </a>
          , overcoming a challenging injury in 2023.
        </li>
        <li>
          🚴‍♂️ <strong>Cycling</strong>: I started cycling in 2025. My goal is to ride from Manhattan to Poughkeepsie by the end of the year.
        </li>
        <li>
          🦜 <strong>Birding</strong>: You can find me in Central Park during April-May and Sept-Oct in the early mornings looking for migrating birds. My favorite spot is The Pool. The rest of the year, I'm on Larkwire getting ready for the season.
        </li>
        <li>
          🎮 <strong>Gaming</strong>: The{' '}
          <a href="https://polytopia.io/polytopia-weekly-challenge/" target="_blank" rel="noopener noreferrer">
            Polytopia
          </a>{' '}
          weekly challenge on iPhone and Mario Kart on Nintendo Switch are my go-to games.
        </li>
      </ul>

      <h1>Continuous Learning</h1>
      <ul>
        <li>
          <strong>YouTube</strong>: I enjoy educational channels like{' '}
          <a href="https://www.youtube.com/@SmarterEveryDay" target="_blank" rel="noopener noreferrer">
            Smarter Every Day
          </a>
          ,{' '}
          <a href="https://www.youtube.com/@realengineering" target="_blank" rel="noopener noreferrer">
            Real Engineering
          </a>
          ,{' '}
          <a href="https://www.youtube.com/@Computerphile" target="_blank" rel="noopener noreferrer">
            Computerphile
          </a>
          , and{' '}
          <a href="https://www.youtube.com/@numberphile" target="_blank" rel="noopener noreferrer">
            Numberphile
          </a>
          .
        </li>
        <li>
          <strong>Reading</strong>: My interests span Sci-Fi, Fantasy, Biographies, History, and Psychology. Check out my favorites on{' '}
          <a href="https://www.goodreads.com/user/show/66203612-peter" target="_blank" rel="noopener noreferrer">
            Goodreads
          </a>
          .
        </li>
        <li>
          <strong>Languages</strong>: I'm a forever spanish student. No matter how much time I spend practicing, I still have difficulty speaking. Duolingo's marketing won me over.
        </li>
      </ul>
    </>
  )
}