// components/Contact.tsx
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@paydibujos",
      url: "https://www.instagram.com/paydibujos/",
      icon: "📷",
      gradient: "instagram-gradient",
      description: "Ilustraciones y proceso creativo"
    },
    {
      name: "Facebook", 
      handle: "Pay-dibujos",
      url: "https://www.facebook.com/profile.php?id=100069477485724",
      icon: "📘",
      gradient: "facebook-gradient",
      description: "Actualizaciones y proyectos"
    },
    {
      name: "Tumblr",
      handle: "the-artistic-pie", 
      url: "https://the-artistic-pie.tumblr.com/",
      icon: "🎨",
      gradient: "tumblr-gradient",
      description: "Portfolio y experimentos artísticos"
    }
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Visual Column */}
          <div className="contact-visual-column">
            <div className="contact-visual-container">
              {/* Glow effect */}
              <div className="contact-glow-effect"></div>
              
              {/* Main illustration card */}
              <div className="contact-main-card">
                <div className="contact-glass-effect">
                  <div className="contact-illustration">
                    <div className="contact-illustration-icon">📧</div>
                    <div className="contact-illustration-text">¡Conectemos!</div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="contact-decorative-top">
                <span className="contact-decorative-icon">✨</span>
              </div>
              <div className="contact-decorative-bottom">
                <span className="contact-decorative-icon">💫</span>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="contact-content-column">
            <div className="contact-title-container">
              <h2 className="contact-title">¡Hablemos!</h2>
              <div className="contact-title-decoration"></div>
            </div>
            
            <p className="contact-description">
              ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y trabajar juntos para hacerla realidad.
            </p>
            
            {/* Social Links */}
            <div className="contact-social-container">
              <h3 className="contact-social-title">Encuéntrame en:</h3>
              
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="contact-social-link"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="contact-social-card">
                      <div className="contact-social-content">
                        <div className={`contact-social-icon ${social.gradient}`}>
                          {social.icon}
                        </div>
                        <div className="contact-social-info">
                          <div className="contact-social-handle">
                            <span className="contact-social-name">
                              {social.name}:
                            </span>
                            <span className="contact-social-username">
                              {social.handle}
                              <span className="contact-social-underline"></span>
                            </span>
                          </div>
                          <p className="contact-social-desc">{social.description}</p>
                        </div>
                        <div className="contact-social-arrow">
                          <svg className="contact-social-arrow-icon" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Info Card */}
            <div className="contact-tip-card">
              <div className="contact-tip-content">
                <div className="contact-tip-icon">💡</div>
                <div>
                  <p className="contact-tip-text">
                    <span className="contact-tip-highlight">Tip:</span> Para colaboraciones y cotizaciones, 
                    envíame un mensaje directo con los detalles de tu proyecto. ¡Incluye referencias visuales si las tienes!
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="contact-cta-container">
              <a 
                href="#portafolio" 
                className="contact-cta-button"
              >
                Ver más trabajos
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Contact Info */}
        <div className="contact-email-container">
          <div className="contact-email-card">
            <div className="contact-email-icon">📬</div>
            <h3 className="contact-email-title">¿Prefieres email?</h3>
            <p className="contact-email-description">
              También puedes contactarme directamente para proyectos más formales o colaboraciones profesionales.
            </p>
            <div className="contact-email-note">
              Respondo en menos de 24 horas ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;