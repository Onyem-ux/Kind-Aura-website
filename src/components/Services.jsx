import { sectionStyle } from '../fonts.js'
import { services } from '../content.js'

const icons = {
  brain: <><path d="M9 3a4 4 0 0 0-4 4v1a3 3 0 0 0-1 5 3.5 3.5 0 0 0 3 5.5h2V3z" /><path d="M15 3a4 4 0 0 1 4 4v1a3 3 0 0 1 1 5 3.5 3.5 0 0 1-3 5.5h-2V3z" /></>,
  heart: <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M15.5 14.4c.5-.3 1-.4 1.5-.4 2.2 0 4 1.8 4 4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
}

export default function Services() {
  return (
    <section id="services" className="band" style={sectionStyle('services')}>
      <div className="wrap">
        <h2>Our services</h2>
        <p className="intro">Every care plan is shaped around the client and the family. Choose one service or combine several as needs change.</p>
        <div className="services">
          {services.map((s) => (
            <article className="service" key={s.title}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{icons[s.icon]}</svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
