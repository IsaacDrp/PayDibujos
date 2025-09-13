import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <footer className="footer-container">
      {/* Decorative background elements */}
      <div className="footer-background-elements">
        <div className="footer-bg-element footer-bg-element-1"></div>
        <div className="footer-bg-element footer-bg-element-2"></div>
      </div>
      
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-brand-content">
                <div className="footer-logo">
                  <span className="footer-logo-icon">🎨</span>
                </div>
                <div className="footer-brand-text">
                  <h3 className="footer-brand-title">Pay Dibujos</h3>
                  <p className="footer-brand-subtitle">Arte con propósito</p>
                </div>
              </div>
              <p className="footer-brand-description">
                Creando mundos visuales únicos a través de la ilustración y el storytelling.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-links-title">Navegación</h4>
              <nav className="footer-nav">
                {quickLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="footer-nav-link"
                  >
                    {link.name}
                    <span className="footer-nav-underline"></span>
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Call to Action */}
            <div className="footer-cta">
              <h4 className="footer-cta-title">¿Listo para comenzar?</h4>
              <p className="footer-cta-text">
                Explora mi trabajo o ponte en contacto para tu próximo proyecto.
              </p>
              <a 
                href="#contacto"
                className="footer-cta-button"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © {currentYear} — Portafolio Pay Dibujos. Todos los derechos reservados.
              </p>
              <p className="footer-message">
                Hecho con 💜 para compartir arte e historias
              </p>
            </div>
            
            <div className="footer-bottom-right">
              <span className="footer-availability">
                <span className="footer-availability-dot"></span>
                Disponible para proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;