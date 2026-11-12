const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Home page">
          <span className="brand-mark">K</span>
          Kaido
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}

export default Navbar
