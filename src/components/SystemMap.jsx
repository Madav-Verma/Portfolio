import { useEffect } from "react";
import { useReveal } from "../hooks/useReveal.js";
import "./SystemMap.css";

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

/* Scrub schedule matching the retired timeline (ease "none"): each
   trace draws over 1s at a 0.7s stride; the tag/dot fade runs 0.4s
   with a 0.15s stagger starting at 0.5s. The scrubbed duration is the
   last trace's end — (N-1) * 0.7 + 1 — the fade finishes earlier. */
const TRACE_STEP = 0.7;
const TRACE_DRAW = 1;
const TAG_START = 0.5;
const TAG_FADE = 0.4;
const TAG_STAGGER = 0.15;

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

    const trigger = el.querySelector(".sysmap");
    if (!trigger) return undefined;

    const lens = [];
    traces.forEach((p) => {
      const len = p.getTotalLength();
      lens.push(len);
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const tags = el.querySelectorAll(".sysmap__tag, .sysmap__dot");
    tags.forEach((t) => {
      t.style.opacity = "0";
    });

    /* Scrubbed duration = the last trace's end; fade finishes earlier. */
    const total = (traces.length - 1) * TRACE_STEP + TRACE_DRAW;

    /* Dependency-free mirror of the retired scrubbed line-draw: one
       passive scroll listener wakes a rAF loop that maps scroll
       progress between the trigger's top at 78% of the viewport and
       its bottom at 45% onto the same draw/fade schedule (see the
       module constants). Geometry is re-read live each frame; the loop
       idles — and style writes stop — whenever progress is unchanged. */
    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    let raf = 0;
    let running = false;
    let dirty = true;
    let last = -1;

    const frame = () => {
      running = false;
      if (!dirty) return;
      dirty = false;

      /* p = 0 when the trigger's top meets 78% of the viewport height,
         p = 1 when its bottom meets 45%; linear in between. */
      const vh = window.innerHeight;
      const rect = trigger.getBoundingClientRect();
      const span = rect.height + vh * (0.78 - 0.45);
      const p =
        span > 0 ? clamp01((vh * 0.78 - rect.top) / span) : 1;
      if (p === last) return;
      last = p;

      const t = p * total;
      for (let i = 0; i < traces.length; i++) {
        const draw = clamp01((t - i * TRACE_STEP) / TRACE_DRAW);
        traces[i].style.strokeDashoffset = `${lens[i] * (1 - draw)}`;
      }
      tags.forEach((tag, j) => {
        const fade = clamp01((t - (TAG_START + j * TAG_STAGGER)) / TAG_FADE);
        tag.style.opacity = `${fade}`;
      });
    };

    const onScroll = () => {
      dirty = true;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    /* The initial frame applies the state for the current scroll
       position (a deep link may already sit mid-scrub), then the loop
       only runs while scroll events keep arriving. */
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      tags.forEach((t) => t.style.removeProperty("opacity"));
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
