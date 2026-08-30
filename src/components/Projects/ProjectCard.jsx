import { useState } from 'react'
import { Github, ExternalLink, FileText, ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, onOpen }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="project-card">
      <button type="button" className="project-card__media" onClick={() => onOpen(project)} aria-label={`View details for ${project.title}`}>
        {!imgError ? (
          <img src={project.image} alt={`${project.title} screenshot`} onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{project.title.charAt(0)}</span>
            <p>Add screenshot</p>
          </div>
        )}
      </button>

      <div className="project-card__body">
        <p className="project-card__tagline">{project.tagline}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <Github size={15} /> Code
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          <button type="button" className="btn btn-ghost btn-sm project-card__case-btn" onClick={() => onOpen(project)}>
            {project.caseStudy ? (
              <>
                <FileText size={15} /> Case Study
              </>
            ) : (
              <>
                Details <ArrowUpRight size={15} />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
