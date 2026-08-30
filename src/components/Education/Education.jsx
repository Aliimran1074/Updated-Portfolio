import { GraduationCap } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './Education.css'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">~/education</p>
          <h2>Education</h2>
        </div>

        <div className="education__card reveal" data-reveal>
          <div className="education__icon">
            <GraduationCap size={22} strokeWidth={1.8} />
          </div>
          <div>
            <h3>Bachelor of Science in Software Engineering</h3>
            <p>Indus University</p>
          </div>
        </div>
      </div>
    </section>
  )
}
