import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { WORKFLOW } from '../data.js'

function AgenticOrbitalCore() {
  const steps = WORKFLOW.loop
  return (
    <div className="orbital-core-wrapper reveal">
      {/* Scan lines overlay */}
      <div className="orbital-scanlines" aria-hidden="true" />

      <h3 className="workflow-loop-title">
        <Icon name="flow" size={17} /> The Agentic Loop
        <span className="orbital-badge">LIVE PIPELINE</span>
      </h3>

      <div className="orbital-arena">
        {/* Left: Core with rings */}
        <div className="orbital-core-col">
          <div className="orbital-center">
            <div className="core-outer-ring" />
            <div className="core-mid-ring" />
            <div className="core-inner-ring" />
            <div className="core-orb">
              <span className="core-dot" />
            </div>
          </div>
          <div className="core-label">AGENTIC CORE</div>
          {/* Orbiting dots */}
          <div className="orbit-dot orbit-dot-1" />
          <div className="orbit-dot orbit-dot-2" />
        </div>

        {/* Right: Vertical pipeline */}
        <div className="orbital-pipeline">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="pipeline-step"
              style={{ '--i': i, '--delay': `${i * 0.5}s` }}
            >
              {/* Beam from core */}
              <div className="step-beam" aria-hidden="true">
                <span className="beam-line" />
                <span className="beam-pulse" />
              </div>

              {/* Step content */}
              <div className="step-node">
                <div className="step-num">{step.step}</div>
                <div className="step-info">
                  <span className="step-label">{step.label}</span>
                  <span className="step-desc">{step.desc}</span>
                </div>
                <div className="step-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkflowPillar({ pillar, index }) {
  return (
    <article
      className="workflow-card reveal"
      style={{ '--accent': pillar.accent, '--i': index * 0.08 }}
    >
      <div className="workflow-card-icon">
        <Icon name={pillar.icon} size={22} />
      </div>
      <h3 className="workflow-card-title">{pillar.title}</h3>
      <p className="workflow-card-desc">{pillar.desc}</p>
      <div className="workflow-card-tools">
        {pillar.tools.map((tool) => (
          <span key={tool} className="workflow-card-tool">{tool}</span>
        ))}
      </div>
    </article>
  )
}

export default function Workflow() {
  const ref = useReveal()
  return (
    <section className="section workflow-section" id="workflow" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker={WORKFLOW.kicker}
          title={WORKFLOW.title}
          sub={WORKFLOW.subtitle}
        />

        <div className="workflow-grid">
          {WORKFLOW.pillars.map((pillar, i) => (
            <WorkflowPillar key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        <AgenticOrbitalCore />
      </div>
    </section>
  )
}
