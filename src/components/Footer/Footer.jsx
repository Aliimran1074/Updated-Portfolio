import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const CONTACT = {
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Ali Imran</p>
          <p className="footer__role">AI Engineer &amp; Full Stack Developer</p>
        </div>

        <div className="footer__links">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer__copy">&copy; {year} Ali Imran. All rights reserved.</p>
      </div>
    </footer>
  )
}
