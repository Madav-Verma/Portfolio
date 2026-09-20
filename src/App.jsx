import Nav from "./components/Nav.jsx";
import PlotterSpine from "./components/PlotterSpine.jsx";
import NotFound from "./components/NotFound.jsx";
import { useHashScroll } from "./hooks/useHashScroll.js";
import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import Work from "./components/Work.jsx";
import StatementBand from "./components/StatementBand.jsx";
import Now from "./components/Now.jsx";
import SystemMap from "./components/SystemMap.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Process from "./components/Process.jsx";
import Journey from "./components/Journey.jsx";
import Notes from "./components/Notes.jsx";
import Faq from "./components/Faq.jsx";
import CertRail from "./components/CertRail.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Re-resolve the URL hash once the tree exists (deep links / refresh).
  useHashScroll();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <PlotterSpine />
      <main id="main" tabIndex={-1}>
        <NotFound />
        <Hero />
        <Ticker />
        <Work />
        <StatementBand />
        <Now />
        <SystemMap />
        <Capabilities />
        <Process />
        <Journey />
        <Notes />
        <Faq />
        <CertRail />
      </main>
      <Footer />
    </>
  );
}
