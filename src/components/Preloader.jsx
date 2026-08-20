import { useEffect, useState } from 'react'

/* Fast, elegant boot sequence — fades out in ~800ms and unmounts */
export default function Preloader() {
  const [phase, setPhase] = useState('boot') // boot → fade → gone
  const [lines, setLines] = useState([])

  useEffect(() => {
    const bootLines = [
      '> initializing daksh-verma portfolio…',
      '> loading modules: react, css, aurora…',
      '> connecting ai-orchestration stack…',
      '> system ready.',
    ]
    let i = 0
    const timeouts = []
    const push = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]])
        i += 1
      } else {
        clearInterval(push)
        timeouts.push(setTimeout(() => setPhase('fade'), 250))
        timeouts.push(setTimeout(() => setPhase('gone'), 950))
      }
    }, 160)
    return () => {
      clearInterval(push)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`preloader ${phase === 'fade' ? 'preloader-fade' : ''}`} aria-hidden="true">
      <div className="preloader-mono">
        <span className="preloader-prompt">➜</span> booting…
      </div>
      <div className="preloader-lines">
        {lines.map((l, i) => (
          <div key={i} className="preloader-line" style={{ animationDelay: `${i * 0.08}s` }}>
            {l}
          </div>
        ))}
      </div>
      <div className="preloader-bar">
        <div className="preloader-fill" />
      </div>
    </div>
  )
}
