// ============================================================
//  FONT SETTINGS: the only file you need to edit to change fonts
// ============================================================
// Use any font name from https://fonts.google.com (type it exactly, e.g. 'Playfair Display').
//
// "default" applies to the whole site. To give one section its own fonts,
// fill in that section's heading and/or body. Leave a value empty ('') to use the default.
//
// Sections: header, hero, about, services, approach, faq, contact, footer

export const fonts = {
  default:  { heading: 'Cormorant Garamond',        body: 'Archivo' },

  header:   { heading: '', body: '' },
  hero:     { heading: '', body: '' },
  about:    { heading: '', body: '' },
  services: { heading: '', body: '' },
  approach: { heading: '', body: '' },
  faq:      { heading: '', body: '' },
  contact:  { heading: '', body: '' },
  footer:   { heading: '', body: '' },
}

// Optional: some fonts only come in certain weights (the default request is 400 and 700).
// If a font looks wrong or does not load, list its weights here, e.g.
//   'Pacifico': '400',   'Montserrat': '400;600;700'
export const weights = {
  // 'Pacifico': '400',
}

// ---------------- No need to edit below this line ----------------
const HEADING_FALLBACK = 'Georgia, serif'
const BODY_FALLBACK = 'system-ui, sans-serif'
const stack = (name, fallback) => `'${name}', ${fallback}`

export function sectionStyle(section) {
  const f = fonts[section] || {}
  const style = {}
  if (f.heading) style['--font-heading'] = stack(f.heading, HEADING_FALLBACK)
  if (f.body) style['--font-body'] = stack(f.body, BODY_FALLBACK)
  return style
}

export function loadFonts() {
  const names = new Set()
  Object.values(fonts).forEach((f) => {
    if (f.heading) names.add(f.heading.trim())
    if (f.body) names.add(f.body.trim())
  })
  names.forEach((name) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, '+')}:wght@${weights[name] || '400;700'}&display=swap`
    document.head.appendChild(link)
  })
  const root = document.documentElement.style
  root.setProperty('--font-heading', stack(fonts.default.heading, HEADING_FALLBACK))
  root.setProperty('--font-body', stack(fonts.default.body, BODY_FALLBACK))
}
