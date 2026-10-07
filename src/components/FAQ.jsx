import { sectionStyle } from '../fonts.js'
import { faqs } from '../content.js'

// Uses native <details> so it is keyboard accessible with no extra code.
export default function FAQ() {
  return (
    <section id="faq" className="band" style={sectionStyle('faq')}>
      <div className="wrap narrow">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
