import { MARQUEE } from "../data.js";
import "./Ticker.css";

export default function Ticker() {
  const row = (hidden) => (
    <span className="ticker__row" aria-hidden={hidden || undefined}>
      {MARQUEE.map((item) => (
        <span key={item} className="ticker__item">
          {item}
          <span className="ticker__tick" aria-hidden="true">/</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="ticker" role="marquee" aria-label="Tools and technologies">
      {row(false)}
      {row(true)}
    </div>
  );
}
