import { useState } from 'react'
import { sectionStyle } from '../fonts.js'
import { faqs } from '../content.js'

export default function FAQ() {
  const [open, setOpen] = useState(null) // index of the open question, or null

  return (
    <section id="faq" className="band" style={sectionStyle('faq')}>
      <div className="wrap narrow">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={f.q}>
                <button
                  type="button"
                  className="faq-q"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}