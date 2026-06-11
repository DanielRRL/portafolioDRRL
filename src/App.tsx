import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Technologies from './components/sections/Technologies/Technologies'
import Projects from './components/sections/Projects/Projects'
import Experience from './components/sections/Experience/Experience'
import Contact from './components/sections/Contact/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
