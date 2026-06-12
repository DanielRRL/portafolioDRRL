import { lazy, Suspense } from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Hero from './components/sections/Hero/Hero'
import './App.css'

const About = lazy(() => import('./components/sections/About/About'))
const Technologies = lazy(() => import('./components/sections/Technologies/Technologies'))
const Projects = lazy(() => import('./components/sections/Projects/Projects'))
const Experience = lazy(() => import('./components/sections/Experience/Experience'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))

function SectionFallback() {
  return <div style={{ minHeight: '100dvh' }} />
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Technologies />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
