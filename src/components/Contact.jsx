import { sectionStyle } from '../fonts.js'
import { business, contact } from '../content.js'

export default function Contact() {
  // Opens the visitor's email app with the message filled in.
  // For delivery straight to an inbox, replace this with a Formspree / Netlify Forms / EmailJS call.
  const handleSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `Name: ${f.get('name')}\nContact: ${f.get('contact')}\nService: ${f.get('service')}\n\n${f.get('message')}`
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Care inquiry from website')}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="dark" style={sectionStyle('contact')}>
      <div className="wrap contact">
        <div>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
          <address>
            <span><small>Phone</small><a href={`tel:${business.phoneLink}`}>{business.phone}</a></span>
            <span><small>Email</small><a href={`mailto:${business.email}`}>{business.email}</a></span>
            <span><small>Office</small>{business.addressLine1}<br />{business.addressLine2}</span>
          </address>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Phone or email<input name="contact" required /></label>
          <label>Service of interest
            <select name="service">{contact.serviceOptions.map((o) => (<option key={o}>{o}</option>))}</select>
          </label>
          <label>How can we help?<textarea name="message" /></label>
          <button className="btn" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}
