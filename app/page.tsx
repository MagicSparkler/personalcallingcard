import { ArrowUpRight, Mail } from 'lucide-react'

export default function Page() {
  return (
    <main className="calling-card-page">
      <article className="calling-card" aria-labelledby="card-name">
        <div className="card-topline">
          <span className="monogram" aria-hidden="true">MS</span>
          <span className="card-label">Personal calling card</span>
        </div>

        <div className="card-content">
          <p className="card-intro">Hello, I&apos;m</p>
          <h1 id="card-name">Mahita<br />Shankar<span className="name-period">.</span></h1>
          <p className="card-description">Computer Science student<br />at CSU East Bay</p>
        </div>

        <a className="email-link" href="mailto:mahita.lion@gmail.com">
          <span className="email-icon"><Mail aria-hidden="true" /></span>
          <span className="email-address">mahita.lion@gmail.com</span>
          <ArrowUpRight className="email-arrow" aria-hidden="true" />
        </a>

        <div className="card-bottomline" aria-hidden="true">
          <span />
          <span className="bottom-ornament">✳</span>
          <span />
        </div>
      </article>
    </main>
  )
}

