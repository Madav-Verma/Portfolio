import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/archivo";
import "@fontsource/fragment-mono";
import "./styles/tokens.css";
import "./styles/base.css";
import App from "./App.jsx";

// Gate the reveal engine: without JS, everything stays visible.
document.documentElement.classList.add("js");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
