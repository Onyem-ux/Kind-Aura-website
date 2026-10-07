import { sectionStyle } from '../fonts.js'
import { hero, business } from '../content.js'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function Hero() {
  return (
    <section className="hero" style={sectionStyle('hero')}>
      <div className="wrap hero-grid">
        <div>
          <h1>{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="actions">
            <a className="btn" href="#contact">{hero.primaryCta}</a>
            <a className="btn alt" href={`tel:${business.phoneLink}`}>Call {business.phone}</a>
          </div>
        </div>
        {/* Replace with: src="/images/hero.jpg" alt="Caregiver sharing a moment with a client at home" */}
        <ImagePlaceholder label="Hero photo: caregiver with client at home" size="800 x 700 px" />
      </div>
    </section>
  )
}
