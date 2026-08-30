import { useState } from 'react'
import { projects } from '../../../public/projects/projects.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import './Projects.css'

export default function Projects() {
  const ref = useScrollReveal()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">~/projects</p>
          <h2>Featured Projects</h2>
          <p>
            Placeholder projects illustrating the kind of AI-powered products I build &mdash; ready to be replaced
            with real work. Click any card for the full breakdown.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={project.id} className="reveal" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard project={project} onOpen={setActiveProject} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
