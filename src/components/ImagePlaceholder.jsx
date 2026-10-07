// Shows a labelled placeholder until you pass a real image.
// Usage: <ImagePlaceholder label="Caregiver with client" size="800 x 600" src="/images/hero.jpg" alt="..." />
// Put image files in the /public/images folder, then reference them as "/images/filename.jpg".
export default function ImagePlaceholder({ label, size, src, alt = '', className = '' }) {
  if (src) return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" />
  return (
    <div className={`placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="m4 18 5-5 4 4 3-3 4 4" /></svg>
      <strong>{label}</strong>
      {size && <span>Suggested size: {size}</span>}
    </div>
  )
}
