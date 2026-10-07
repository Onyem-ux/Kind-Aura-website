import { sectionStyle } from '../fonts.js'
import { business } from '../content.js'

export default function Footer() {
  return (
    <footer style={sectionStyle('footer')}>
      <div className="wrap">&copy; {new Date().getFullYear()} {business.name}. {business.addressLine1}, {business.addressLine2}.</div>
    </footer>
  )
}
