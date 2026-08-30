import { skillGroups } from '../../data/skills.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './Skills.css'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        {/* ---- AI Engineering Skills (primary) ---- */}
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">~/skills/ai-engineering</p>
          <h2>AI Engineering</h2>
          <p>
            Grouped by where each skill sits in a typical AI application pipeline &mdash; from raw input to a served
            response.
          </p>
        </div>

        <div className="skills__ai-grid">
          {skillGroups.map((group, i) => (
            <div key={group.id} className="skills__ai-card reveal" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skills__ai-card-head">
                <span className="skills__stage-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skills__tag-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag skills__tag--ai">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---- Full Stack Skills (secondary) ---- */}
        {/* <div className="section-head skills__fs-head reveal" data-reveal>
          <p className="eyebrow full">~/skills/full-stack</p>
          <h2>Full Stack Development</h2>
          <p>The tools I use to turn an AI system into a complete, usable application.</p>
        </div> */}

        {/* <div className="skills__fs-grid">
          {fullStackGroups.map((group) => (
            <div key={group.id} className="skills__fs-card reveal" data-reveal>
              <h4>{group.label}</h4>
              <div className="skills__tag-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
