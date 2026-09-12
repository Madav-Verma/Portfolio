import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";
import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import Work from "./components/Work.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Process from "./components/Process.jsx";
import Journey from "./components/Journey.jsx";
import Notes from "./components/Notes.jsx";
import Faq from "./components/Faq.jsx";
import CertRail from "./components/CertRail.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <NotFound />
        <Hero />
        <Ticker />
        <Work />
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
