import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { SKILLS, CORE_SKILLS } from '../data.js'

function SkillBar({ skill }) {
  return (
    <div className="skill-bar" style={{ '--w': `${skill.pct}%` }}>
      <div className="skill-bar-head">
        <span className="skill-bar-name">{skill.name}</span>
        <span className="skill-bar-pct" style={{ color: skill.accent }}>{skill.pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${skill.accent}55, ${skill.accent})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="Arsenal"
          title="Skills & Tools"
          sub="A modern AI-driven stack — the tools I orchestrate to build end-to-end solutions."
        />

        <div className="skills-layout">
          <div className="core-skills">
            <h3 className="skills-subhead reveal">
              <Icon name="chart" size={17} /> Core proficiency
            </h3>
            {CORE_SKILLS.map((s, i) => (
              <div key={s.name} className="reveal" style={{ '--i': i * 0.05 }}>
                <SkillBar skill={s} />
              </div>
            ))}
          </div>

          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <div key={i} className="skill-card reveal" style={{ '--accent': group.accent, '--i': i * 0.06 }}>
                <div className="skill-card-head">
                  <span className="skill-card-icon">
                    <Icon name={group.icon} size={20} />
                  </span>
                  <h3>{group.group}</h3>
                  <span className="skill-index">0{i + 1}</span>
                </div>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
