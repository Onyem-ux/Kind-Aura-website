import { useState } from 'react'
import { sectionStyle } from '../fonts.js'
import { business, contact } from '../content.js'
import Select from './Select.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Sends the form to Formspree (endpoint is set in src/content.js).
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
          <Select label="Service of interest" name="service" options={contact.serviceOptions} />
          <label>How can we help?<textarea name="message" /></label>
          {/* Hidden spam trap: real visitors never see or fill this */}
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <div aria-live="polite">
            {status === 'success' && <p className="form-msg ok">Thank you! Your message was sent. We will be in touch soon.</p>}
            {status === 'error' && <p className="form-msg bad">Something went wrong. Please try again or call {business.phone}.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
