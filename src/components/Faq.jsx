import { useEffect, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { FAQS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Faq.css";

export default function Faq() {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useReveal();

  useEffect(() => {
    if (openId === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        const btn = document.querySelector(`[aria-controls="faq-panel-${openId}"]`);
        setOpenId(null);
        btn?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openId]);

  return (
    <section className="section" id="faq" ref={sectionRef} aria-label="Frequently asked questions">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Questions, answered.</h2>
          <p className="plate-meta">
            <span>{FAQS.length} answers</span>
            <span>From shipped work</span>
          </p>
        </header>

        <div className="faq__list">
          {FAQS.map((f, i) => {
            const open = openId === i;
            return (
              <article
                key={f.q}
                className={`faq__item ${open ? "is-open" : ""}`}
                data-reveal
                style={{ "--d": Math.min(i, 4) }}
              >
                <h3 className="faq__row-h">
                  <button
                    type="button"
                    className="faq__row"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenId(open ? null : i)}
                  >
                    <span className="faq__q">{f.q}</span>
                    <CaretDown size={18} weight="bold" aria-hidden="true" className="faq__caret" />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} className="faq__panel" role="region" aria-label={f.q}>
                  <div className="faq__panel-inner">
                    <p className="faq__a">{f.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
