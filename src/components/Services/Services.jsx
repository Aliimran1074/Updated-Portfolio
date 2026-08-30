import { Bot, Search, Workflow, LayoutGrid, Plug } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import './Services.css'

const SERVICES = [
  {
    icon: Bot,
    title: 'AI Application Development',
    description: 'Building applications powered by LLMs and generative AI, from prototype through to a working product.',
  },
  {
    icon: Search,
    title: 'RAG Development',
    description: 'Building document-based question answering and knowledge-retrieval systems grounded in your own data.',
  },
  {
    icon: Workflow,
    title: 'AI Agent Development',
    description: 'Building AI agents and automated multi-step workflows using LangGraph and LangChain.',
  },
  {
    icon: LayoutGrid,
    title: 'Full Stack Development',
    description: 'Building complete web applications end-to-end with React, Node.js, Express and MongoDB.',
  },
  {
    icon: Plug,
    title: 'AI API Integration',
    description: 'Integrating AI capabilities into existing web applications and backend systems.',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">~/services</p>
          <h2>What I Can Help With</h2>
          <p>A focused set of services grounded in the stack I actually build with.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="services__card reveal" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="services__icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
