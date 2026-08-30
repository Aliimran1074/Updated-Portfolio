import { useEffect, useRef, useState } from 'react'
import { X, Github, ExternalLink, FileText } from 'lucide-react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    setImgError(false)
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    // document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="project-modal__backdrop" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>

        <div className="project-modal__media">
          {!imgError ? (
            <img src={project.image} alt={`${project.title} screenshot`} onError={() => setImgError(true)} />
          ) : (
            <div className="project-modal__placeholder" aria-hidden="true">
              <span>{project.title.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="project-modal__body">
          <p className="project-modal__tagline">{project.tagline}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-modal__overview">{project.description}</p>

          <div className="project-modal__grid">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          {project.features?.length > 0 && (
            <div className="project-modal__block">
              <h4>Key features</h4>
              <ul className="project-modal__list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className="project-modal__block">
              <h4>Architecture &amp; technical approach</h4>
              <p>{project.architecture}</p>
            </div>
          )}

          <div className="project-modal__block">
            <h4>Technologies</h4>
            <div className="project-modal__tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-modal__actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Github size={16} /> View Code
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.caseStudy && (
              <a href={project.caseStudy} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FileText size={16} /> Full Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
