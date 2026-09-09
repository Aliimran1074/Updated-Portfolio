import { useState } from 'react'
import { Mail, Github, Linkedin, Send, Check } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './Contact.css'


const CONTACT = {
  email: 'aliimransachwani4@gmail.com',
  github: 'https://github.com/Aliimran1074',
  linkedin: 'https://www.linkedin.com/in/ali-imran-3aa58128a/'
}

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: no backend is wired up yet. This just confirms the UI works.
    // Connect this handler to your email service / API route of choice
    // (e.g. Formspree, Resend, or a custom backend endpoint) when ready.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">~/contact</p>
          <h2>Let&apos;s Work Together</h2>
          <p>Have a role, project, or idea in mind? I&apos;d like to hear about it.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal" data-reveal>
            <a href={`mailto:${CONTACT.email}`} className="contact__info-item">
              <Mail size={18} />
              <span>{CONTACT.email}</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact__info-item">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact__info-item">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <form className="contact__form reveal" data-reveal onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={submitted}>
              {submitted ? (
                <>
                  <Check size={16} /> Message ready
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            {submitted && (
              <p className="contact__note">
                Form UI is working. Connect this form to an email service or backend endpoint to actually deliver
                messages.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
