import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "../hooks/useReveal.js";
import "./SystemMap.css";

gsap.registerPlugin(ScrollTrigger);

/* Desktop plates: [x, y] top-left in the 1200×420 viewBox. */
const WIDE = [
  { x: 20, y: 44 },
  { x: 20, y: 248 },
  { x: 490, y: 146 },
  { x: 960, y: 44 },
  { x: 960, y: 248 },
];

/* Mobile plates: stacked in the 400×860 viewBox. */
const NARROW = [
  { x: 70, y: 16 },
  { x: 70, y: 176 },
  { x: 70, y: 336 },
  { x: 70, y: 508 },
  { x: 70, y: 680 },
];

const NODES = [
  { title: "Web platform", rows: ["Next.js 16", "24 routes", "96 models"] },
  { title: "Assistant", rows: ["RAG", "Gemini / GPT", "Rule fallback"] },
  { title: "Data", rows: ["Supabase", "Postgres + RLS", "Realtime"] },
  { title: "ERP · CRM", rows: ["8 modules", "145 routes", "10 staff"] },
  { title: "Field", rows: ["P1–P5 triage", "Serial photo + GPS", "FSR"] },
];

const NODE_W = 220;
const NODE_H = 128;

function NodePlates({ positions }) {
  return (
    <g className="sysmap__nodes">
      {NODES.map((n, i) => {
        const { x, y } = positions[i];
        return (
          <g key={n.title} className="sysmap__node">
            <rect
              className="sysmap__plate"
              x={x}
              y={y}
              width={NODE_W}
              height={NODE_H}
            />
            <text className="sysmap__idx" x={x + 12} y={y + 22}>
              {`0${i + 1}`}
            </text>
            <text className="sysmap__title" x={x + 12} y={y + 48}>
              {n.title}
            </text>
            {n.rows.map((r, j) => (
              <text
                key={r}
                className="sysmap__row"
                x={x + 12}
                y={y + 70 + j * 18}
              >
                {r}
              </text>
            ))}
          </g>
        );
      })}
    </g>
  );
}

export default function SystemMap() {
  const ref = useReveal();

  /* Trace draw: one scrubbed timeline draws the five accent traces
     as the instrument zone crosses the viewport. The SVG ships fully
     drawn — dash hiding is applied from JS only when animating, so
     no-JS and reduced-motion render the complete static diagram. */
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    const traces = el.querySelectorAll(".sysmap__trace");
    if (traces.length === 0) return undefined;

    traces.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const tags = el.querySelectorAll(".sysmap__tag, .sysmap__dot");
    gsap.set(tags, { opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: el.querySelector(".sysmap"),
        start: "top 78%",
        end: "bottom 45%",
        scrub: 1,
      },
    });

    traces.forEach((p, i) => {
      tl.to(p, { strokeDashoffset: 0, duration: 1 }, i * 0.7);
    });
    tl.to(tags, { opacity: 1, duration: 0.4, stagger: 0.15 }, 0.5);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.set(tags, { clearProps: "opacity" });
      traces.forEach((p) => {
        p.style.strokeDasharray = "";
        p.style.strokeDashoffset = "";
      });
    };
  }, [ref]);

  return (
    <section className="section" id="systems" ref={ref} aria-label="Systems map">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Systems map.</h2>
          <p className="plate-meta">
            <span>Prokon stack</span>
            <span>5 nodes</span>
            <span>Scroll to draw</span>
          </p>
        </header>

        <div className="sysmap" data-reveal>
          <span className="sysmap__tick sysmap__tick--tl" aria-hidden="true" />
          <span className="sysmap__tick sysmap__tick--tr" aria-hidden="true" />
          <span className="sysmap__tick sysmap__tick--bl" aria-hidden="true" />
          <span className="sysmap__tick sysmap__tick--br" aria-hidden="true" />

          {/* Desktop: horizontal 5-node flow */}
          <svg
            className="sysmap__svg sysmap__svg--wide"
            viewBox="0 0 1200 420"
            aria-hidden="true"
            focusable="false"
          >
            <g className="sysmap__traces">
              <path
                className="sysmap__trace"
                d="M 240 108 H 365 V 182 H 490"
              />
              <path
                className="sysmap__trace"
                d="M 240 312 H 365 V 248 H 490"
              />
              <path
                className="sysmap__trace"
                d="M 960 108 H 835 V 182 H 710"
              />
              <path
                className="sysmap__trace"
                d="M 710 216 H 820 V 128 H 960"
              />
              <path className="sysmap__trace" d="M 1070 172 V 248" />
              <text className="sysmap__tag" x={368} y={148}>
                catalogue reads
              </text>
              <text className="sysmap__tag" x={368} y={292}>
                grounded answers
              </text>
              <text className="sysmap__tag" x={716} y={148}>
                single source of truth
              </text>
              <text className="sysmap__tag" x={826} y={188}>
                live counts
              </text>
              <text className="sysmap__tag" x={1080} y={216}>
                proof from the field
              </text>
              <rect className="sysmap__dot" x={486} y={178} width={8} height={8} />
              <rect className="sysmap__dot" x={486} y={244} width={8} height={8} />
              <rect className="sysmap__dot" x={706} y={178} width={8} height={8} />
              <rect className="sysmap__dot" x={956} y={124} width={8} height={8} />
              <rect className="sysmap__dot" x={1066} y={244} width={8} height={8} />
            </g>
            <NodePlates positions={WIDE} />
          </svg>

          {/* Mobile: vertical stack, traces on a centre spine */}
          <svg
            className="sysmap__svg sysmap__svg--narrow"
            viewBox="0 0 400 860"
            aria-hidden="true"
            focusable="false"
          >
            <g className="sysmap__traces">
              <path className="sysmap__trace" d="M 200 144 V 176" />
              <path className="sysmap__trace" d="M 200 304 V 336" />
              <path className="sysmap__trace" d="M 200 464 V 508" />
              <path className="sysmap__trace" d="M 228 536 V 636 H 200 V 680" />
              <path className="sysmap__trace" d="M 200 636 V 680" />
              <text className="sysmap__tag" x={212} y={164}>
                catalogue reads
              </text>
              <text className="sysmap__tag" x={212} y={324}>
                grounded answers
              </text>
              <text className="sysmap__tag" x={212} y={492}>
                single source of truth
              </text>
              <text className="sysmap__tag" x={240} y={590}>
                live counts
              </text>
              <text className="sysmap__tag" x={212} y={662}>
                proof from the field
              </text>
              <rect className="sysmap__dot" x={196} y={172} width={8} height={8} />
              <rect className="sysmap__dot" x={196} y={332} width={8} height={8} />
              <rect className="sysmap__dot" x={196} y={504} width={8} height={8} />
              <rect className="sysmap__dot" x={224} y={632} width={8} height={8} />
              <rect className="sysmap__dot" x={196} y={676} width={8} height={8} />
            </g>
            <NodePlates positions={NARROW} />
          </svg>

          <p className="caption sysmap__caption">
            Data sits in the middle — everything reads from it, everything
            writes back to it.
          </p>
        </div>

        <p className="visually-hidden">
          Systems map: five nodes. Web platform (Next.js 16, 24 routes, 96
          models) feeds Data via catalogue reads. Assistant (RAG, Gemini and
          GPT, rule fallback) feeds Data via grounded answers. ERP and CRM (8
          modules, 145 routes, 10 staff) feeds Data as the single source of
          truth and receives live counts back. ERP and CRM feeds Field (P1 to
          P5 triage, serial photo plus GPS, FSR) as proof from the field.
        </p>
      </div>
    </section>
  );
}
