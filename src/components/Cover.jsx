import "./Cover.css";

/**
 * Deterministic dial positions derived from the project sheet id,
 * so each instrument plate differs slightly without any randomness.
 */
function hashSheet(sheet) {
  const s = String(sheet ?? "X");
  let h = 0;
  for (let i = 0; i < s.length; i += 1) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function nodesFor(sheet) {
  const h = hashSheet(sheet);
  return [
    { x: 24 + (h % 18), y: 14 + ((h >> 4) % 20) },
    { x: 52 + ((h >> 2) % 16), y: 30 + ((h >> 6) % 16) },
    { x: 84 + ((h >> 5) % 14), y: 16 + ((h >> 8) % 28) },
  ];
}

export default function Cover({ project, large = false }) {
  const nodes = nodesFor(project.sheet ?? project.id);
  const trace = `M 0 ${nodes[0].y} H ${nodes[0].x} V ${nodes[1].y} H ${nodes[1].x} V ${nodes[2].y} H 120`;

  return (
    <div className={`cover${large ? " cover--lg" : ""}`} aria-hidden="true">
      <div className="cover__top">
        <span className="cover__sheet">{project.sheet}</span>
        <svg
          className="cover__schema"
          viewBox="0 0 120 64"
          role="presentation"
          focusable="false"
        >
          <rect
            x="1"
            y="1"
            width="118"
            height="62"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.55"
          />
          <path
            d={trace}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.7"
          />
          {nodes.map((n, i) => (
            <g key={i}>
              <circle
                cx={n.x}
                cy={n.y}
                r="4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.7"
              />
              <circle cx={n.x} cy={n.y} r="1.8" fill="currentColor" />
            </g>
          ))}
        </svg>
      </div>
      <div className="cover__foot">
        <span className="cover__title">{project.title}</span>
        <span className="cover__meta">
          {project.domain} · {project.year}
        </span>
      </div>
    </div>
  );
}
