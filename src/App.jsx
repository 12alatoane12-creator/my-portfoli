import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react'

function App() {
  const [isLight, setIsLight] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={isLight ? 'light-mode' : 'dark-mode'}>
      <Navbar
  isLight={isLight}
  onToggleTheme={() => setIsLight(!isLight)}
/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App