import { useState, useRef, useEffect } from 'react'

export default function Select({ label, name, options = [] }) {
  const list = Array.isArray(options) ? options : []
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(list[0] || '')
  const [active, setActive] = useState(0)
  const wrapRef = useRef(null)

  // Close when clicking outside (only listens while the menu is open)
  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const openMenu = () => {
    setActive(Math.max(list.indexOf(value), 0))
    setOpen(true)
  }

  const choose = (i) => {
    setValue(list[i])
    setActive(i)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) openMenu()
      else setActive((a) => Math.min(a + 1, list.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (open) setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (open) choose(active)
      else openMenu()
    }
  }

  return (
    <div className="field" ref={wrapRef}>
      <span className="field-label" id={`${name}-label`}>{label}</span>
      <div className={`select${open ? ' open' : ''}`}>
        <button
          type="button"
          className="select-btn"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${name}-label`}
          onClick={() => (open ? setOpen(false) : openMenu())}
          onKeyDown={onKeyDown}
        >
          <span>{value}</span>
          <svg className="select-arrow" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
            <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <ul className="select-menu" role="listbox" aria-labelledby={`${name}-label`}>
          {list.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              className={i === active ? 'active' : ''}
              style={{ '--i': i }}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span>{o}</span>
              <svg className="select-check" width="12" height="10" viewBox="0 0 12 10" aria-hidden="true">
                <path d="M1 5l3.5 3.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          ))}
        </ul>

        <input type="hidden" name={name} value={value} />
      </div>
    </div>
  )
}