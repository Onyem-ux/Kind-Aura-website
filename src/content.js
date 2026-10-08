// All website text lives here. Edit this file to change copy, contact details, services and FAQs.

export const business = {
  name: 'Kind Aura Healthcare Services LLC',
  shortName: 'Kind Aura Healthcare',
  phone: '470-416-5544',
  phoneLink: '+14704165544',
  email: 'Kaurahealthcare@gmail.com', // confirm with client: does not match the domain kindaurahealthcare.com
  addressLine1: '2311 Temple View Court',
  addressLine2: 'Snellville, GA 30078',
  website: 'kindaurahealthcare.com',
  formEndpoint: 'https://formspree.io/f/mjygyrrj', // Formspree form link: messages are delivered to the email set in your Formspree account
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our approach', href: '#approach' },
  { label: 'FAQs', href: '#faq' },
]

export const hero = {
  title: 'Skilled, caring support for your loved one, right at home.',
  text: 'Kind Aura Healthcare Services provides family-focused, cost-effective care for medically complex clients in Snellville and the surrounding Georgia community.',
  primaryCta: 'Request a consultation',
}

export const mission = {
  quote: 'Exceptional care belongs in the nurturing environment of home.',
  paragraphs: [
    'Kind Aura Healthcare Services LLC is dedicated to providing exceptional, cost-effective, family-focused care for the medically complex client.',
    "We meet each client's needs at home, minimize the impact of their condition on the family, and respect the role the family plays in their loved one's care.",
  ],
}

// icon: one of 'brain' | 'heart' | 'people' | 'clock' (see Services.jsx)
export const services = [
  { icon: 'brain', title: 'Memory care', text: "Patient, structured support for clients living with memory loss, including dementia and Alzheimer's, in a calm and familiar setting." },
  { icon: 'heart', title: 'Personal care', text: 'Respectful help with bathing, dressing, grooming, mobility and other daily routines that protect comfort and dignity.' },
  { icon: 'people', title: 'Companion care', text: 'Friendly company, conversation and activities that ease loneliness and keep clients engaged with daily life.' },
  { icon: 'clock', title: 'Respite care', text: 'Short-term relief for family caregivers, so you can rest, run errands or recharge knowing your loved one is in good hands.' },
]

export const approach = {
  title: 'Care that includes the whole family',
  points: [
    { title: 'At home', text: 'Familiar surroundings support comfort, routine and recovery.' },
    { title: 'Family-focused', text: "We work alongside you and respect your role in your loved one's care." },
    { title: 'Cost-effective', text: 'Quality, individualized care at home without unnecessary expense.' },
  ],
}

// Placeholder answers: have the client review every one before launch.
export const faqs = [
  { q: 'What types of care do you provide?', a: 'We offer memory care, personal care, companion care and respite care. Services can be combined and adjusted as your loved one’s needs change.' },
  { q: 'Where is care provided?', a: 'Care is provided in the client’s home, where they are most comfortable. Contact us to confirm that your address is within our service area.' },
  { q: 'Who is this care for?', a: 'Our care is designed for medically complex clients and their families, including seniors and others who need support with daily living.' },
  { q: 'What is the difference between personal care and companion care?', a: 'Personal care is hands-on help with daily routines such as bathing, dressing and grooming. Companion care focuses on company, conversation and activities.' },
  { q: 'What is respite care?', a: 'Respite care gives family caregivers a break. We step in for a few hours or longer so you can rest, work or handle errands.' },
  { q: 'Can family stay involved in the care plan?', a: 'Yes. We respect the family’s role and work with you to shape and update the care plan.' },
  { q: 'How do I get started?', a: 'Call us at 470-416-5544 or send a message through the form below. We will talk through your situation and arrange a consultation.' },
]

export const contact = {
  title: "Let's talk about the care your family needs",
  text: 'Tell us a little about your situation and we will get back to you.',
  serviceOptions: ['Memory care', 'Personal care', 'Companion care', 'Respite care', 'Not sure yet'],
}
