import { sectionStyle } from '../fonts.js'
import { business, nav } from '../content.js'

export default function Header() {
  return (
    <header className="site-header" style={sectionStyle('header')}>
      <div className="wrap nav">
        <a className="brand" href="#top"><span className="dot" aria-hidden="true" />{business.shortName}</a>
        <nav aria-label="Main">
          <ul>
            {nav.map((n) => (<li key={n.href} className="nav-link"><a href={n.href}>{n.label}</a></li>))}
            <li><a href="#contact" className="btn small">Contact us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
