import { sectionStyle } from '../fonts.js'
import { mission } from '../content.js'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function About() {
  return (
    <section id="about" style={sectionStyle('about')}>
      <div className="wrap">
        <div className="mission">
          <blockquote>{mission.quote}</blockquote>
          <div>
            <h2>Our mission</h2>
            {mission.paragraphs.map((p) => (<p key={p}>{p}</p>))}
          </div>
        </div>
        <ImagePlaceholder className="wide" label="Photo: the Kind Aura care team" size="1200 x 450 px" />
      </div>
    </section>
  )
}
