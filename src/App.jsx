import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Experience from './components/Experience.jsx'
import LearningLog from './components/LearningLog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import { Icon } from './components/Shared.jsx'

/* Paths that must never 404 — the host may serve index.html for them when the
   file is missing, so treat them as the app instead of a dead page. */
function isRealAssetPath(path) {
  return (
    path.startsWith('/certifications/') ||
    path.startsWith('/screenshots/') ||
    path.startsWith('/resume/') ||
    path === '/favicon.svg' ||
    path === '/og-image.png' ||
    path === '/apple-touch-icon.png' ||
    path === '/photo.jpg' ||
    path === '/robots.txt' ||
    path === '/sitemap.xml' ||
    path === '/site.webmanifest' ||
    path === '/llms.txt' ||
    /\.[a-z0-9]{2,5}$/i.test(path)
  )
}

function isUnknownRoute() {
  if (typeof window === 'undefined') return false
  let path = window.location.pathname
  try {
    path = decodeURIComponent(path)
  } catch {
    /* malformed encoding — keep raw value */
  }
  // Normalize: trailing slashes are the same page as /
  const normalized = path.replace(/\/+$/, '') || '/'
  // Root and the explicit index document are the app
  if (normalized === '/' || normalized === '/index.html') return false
  // Known static assets must never 404, even if the host serves
  // index.html for them (SPA fallback)
  if (isRealAssetPath(normalized)) return false
  return true
}

export default function App() {
  if (isUnknownRoute()) {
    return <NotFound />
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Preloader />
      <div className="bg-aurora" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Cursor />

      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <LearningLog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

function NotFound() {
  return (
    <main className="notfound" id="main">
      <div className="notfound-code">404</div>
      <h1 className="notfound-title">Lost in the pipeline</h1>
      <p className="notfound-sub">
        The page you are looking for was not found — probably never deployed.
      </p>
      <a className="notfound-link" href="/">
        <Icon name="arrow" size={14} /> Back to home
      </a>
    </main>
  )
}
