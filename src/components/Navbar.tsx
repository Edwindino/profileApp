import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Go to home section">
          <span className="brand-mark">ED</span>
          <span>Edwin Dino</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta" href="#contact" onClick={handleNavClick}>
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
