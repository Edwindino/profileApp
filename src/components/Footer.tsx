export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">ED</span>
            <span>Edwin Dino</span>
          </a>
          <p className="footer-tagline">Building thoughtful digital products.</p>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <a href="https://github.com/edwindino" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/edwin-dino-7a79a0217" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:edwindino1999@gmail.com">Email</a>
        </div>

        <a href="#home" className="back-to-top">
          ↑ Top
        </a>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Edwin Dino. All rights reserved.</p>
      </div>
    </footer>
  );
}
