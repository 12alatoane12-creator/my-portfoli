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

  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>

</ul>
    </nav>
  )
}

export default Navbar