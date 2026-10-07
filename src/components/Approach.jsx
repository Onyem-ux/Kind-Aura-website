import { sectionStyle } from '../fonts.js'
import { approach } from '../content.js'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function Approach() {
  return (
    <section id="approach" style={sectionStyle('approach')}>
      <div className="wrap approach">
        <ImagePlaceholder label="Photo: family with their loved one" size="700 x 600 px" />
        <div>
          <h2>{approach.title}</h2>
          <div className="promise">
            {approach.points.map((p) => (<div key={p.title}><h3>{p.title}</h3><p>{p.text}</p></div>))}
          </div>
        </div>
      </div>
    </section>
  )
}
