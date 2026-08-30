import './PipelineDivider.css'

const STAGES = ['input', 'embed', 'retrieve', 'reason', 'output']

/**
 * variant="full"    — large labeled diagram for the hero section
 * variant="compact" — small unlabeled rule used between sections
 */
export default function PipelineDivider({ variant = 'compact', className = '' }) {
  if (variant === 'compact') {
    return (
      <div className={`pipeline pipeline--compact ${className}`} aria-hidden="true">
        {STAGES.map((stage, i) => (
          <span key={stage} className="pipeline__segment">
            <span className="pipeline__node" />
            {i < STAGES.length - 1 && <span className="pipeline__line" />}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={`pipeline pipeline--full ${className}`} role="img" aria-label="Data pipeline: input, embed, retrieve, reason, output">
      {STAGES.map((stage, i) => (
        <div key={stage} className="pipeline__stage">
          <div className="pipeline__stage-row">
            <span className="pipeline__node pipeline__node--lg" style={{ animationDelay: `${i * 0.35}s` }} />
            {i < STAGES.length - 1 && <span className="pipeline__line pipeline__line--lg" />}
          </div>
          <span className="pipeline__label">{stage}</span>
        </div>
      ))}
    </div>
  )
}
