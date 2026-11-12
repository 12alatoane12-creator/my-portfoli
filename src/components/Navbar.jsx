import './Navbar.css'
import { useState } from 'react'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (

    <nav className="navbar">
      <h2 className="logo">بروفايلي ولكم </h2>
<button
  className="menu-toggle"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle menu"
  aria-expanded={isOpen}
>
  {isOpen ? '✕' : '☰'}
</button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>

  <li>
  <a href="#home" onClick={() => setIsOpen(false)}>
    Home
  </a>
</li>
  <li><a href="#about" onClick={() => setIsOpen(false)}>
    About
  </a></li>
  <li><a href="#skills" onClick={() => setIsOpen(false)}>
    Skills
  </a></li>
  <li><a href="#projects" onClick={() => setIsOpen(false)}>
    Projects
  </a></li>
  <li><a href="#contact" onClick={() => setIsOpen(false)}>
    Contact
  </a></li>

</ul>
    </nav>
  )
}

export default Navbar