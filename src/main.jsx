import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/archivo";
import "@fontsource/fragment-mono";
import archivoWoff from "@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2?url";
import fragWoff from "@fontsource/fragment-mono/files/fragment-mono-latin-400-normal.woff2?url";
import "./styles/tokens.css";
import "./styles/base.css";
import App from "./App.jsx";

// Gate the reveal engine: without JS, everything stays visible.
document.documentElement.classList.add("js");

// Reveal safety: if the observer never fires (JS error mid-flight), force all
// staged content visible after a short grace period so nothing stays hidden.
setTimeout(() => document.documentElement.classList.add("reveal-safety"), 3000);

// Self-hosted font preload (improves LCP). Vite resolves these to hashed URLs.
for (const href of [archivoWoff, fragWoff]) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "font";
  link.type = "font/woff2";
  link.href = href;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

// Privacy-respecting analytics (Plausible, cookieless). Disabled unless a
// domain is configured via VITE_ANALYTICS_DOMAIN — no network call by default.
const analyticsDomain = import.meta.env.VITE_ANALYTICS_DOMAIN;
if (analyticsDomain) {
  const s = document.createElement("script");
  s.defer = true;
  s.src = "https://plausible.io/js/script.js";
  s.setAttribute("data-domain", analyticsDomain);
  document.head.appendChild(s);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
