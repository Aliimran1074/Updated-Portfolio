import { Bot, Database, Bolt, Server, Layers, Code2 } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import PipelineDivider from '../PipelineDivider/PipelineDivider.jsx'
import './About.css'

const FOCUS_AREAS = [
  { icon: Bot, label: 'LLM Applications' },
  { icon: Database, label: 'RAG Systems' },
  { icon: Code2, label: 'React Development' },
  { icon: Layers, label: 'MERN Stack Development' },
  { icon: Bolt, label: 'AI Agents' },
  { icon: Layers, label: 'AI-Powered Automation' },
  { icon: Server, label: 'Backend APIs' },
  { icon: Layers, label: 'Full-Stack Applications' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__intro reveal" data-reveal>
            <p className="eyebrow">~/about</p>
            <h2>Software engineer, focused on building real AI products</h2>
            <p className="about__text">
              I come from a Software Engineering background and have built skills across both full-stack
              development and AI engineering. Rather than treating AI as a single API call bolted onto an app, I&apos;m
              interested in the full picture: how a model is grounded with real data, how it&apos;s wired into an
              agentic workflow, and how that logic is served through a reliable backend and a usable interface.
            </p>
            <p className="about__text">
              That combination &mdash; AI engineering, backend development, and full-stack development &mdash; is
              where I focus my time, and it&apos;s the kind of work I want to keep building.
            </p>
          </div>

          <div className="about__focus reveal" data-reveal>
            <p className="about__focus-title">Areas I work in</p>
            <ul className="about__focus-list">
              {FOCUS_AREAS.map(({ icon: Icon, label }) => (
                <li key={label} className="about__focus-item">
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <PipelineDivider variant="compact" className="about__divider" />
      </div>
    </section>
  )
}
