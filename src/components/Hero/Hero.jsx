import { ArrowRight, Github, Linkedin } from 'lucide-react'
import PipelineDivider from '../PipelineDivider/PipelineDivider.jsx'
import './Hero.css'

// Replace with your real profile links
const SOCIAL = {
  github: 'https://github.com/Aliimran1074',
  linkedin: 'https://www.linkedin.com/in/ali-imran-3aa58128a/',
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="hero__path">~/ali_imran/portfolio</p>

        <h1 className="hero__heading">
          AI Engineer <span className="hero__amp">&amp;</span> Full Stack Developer
        </h1>

        <p className="hero__sub">
 I’m a MERN Stack Developer and AI Engineer, building scalable web applications and intelligent AI-powered solutions with LLMs, RAG, and Agentic AI.
        </p>

        <div className="hero__cta-row">
          <a href="#projects" className="btn btn-primary">
            View My Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="hero__socials">
          <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hero__social-link">
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hero__social-link">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="hero__pipeline">
          <PipelineDivider variant="full" />
        </div>
      </div>
    </section>
  )
}
