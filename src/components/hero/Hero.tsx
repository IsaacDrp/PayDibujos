"use client";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="grid">
          
          {/* Image Column */}
          <div className="flex-center">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-8 gradient-glow"></div>
              
              {/* Main card container */}
              <div className="relative main-card">
                <div className="glass-effect">
                  <div className="avatar-container">
                    <Image
                      src="/hero-avatar.jpeg" // Ruta de la imagen
                      alt="Retrato de Itzel Ruiz Pay"
                      width={256}
                      height={256}
                      className="avatar-image"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute floating-badge">
                <span className="text-sm font-medium gradient-text-blue">✨ Arte con propósito</span>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="text-center text-left-lg">
            <div className="relative">
              {/* Decorative floating elements */}
              <div className="absolute decorative-circle-yellow"></div>
              <div className="absolute decorative-circle-purple"></div>
              
              <h1 className="heading-primary gradient-text-blue">
                Hola, soy <span className="gradient-text-warm">Itzel Ruiz</span> Pay
              </h1>
            </div>
            
            <div className="mt-8">
              <p className="text-xl highlight-text">
                Estudiante de la <span className="gradient-text-blue">Facultad de Artes y Diseño</span>, 
                especializada en ilustración.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-lg">
                Me apasiona crear personajes, narrativas visuales y cómics con un estilo propio 
                que combina técnicas tradicionales y digitales.
              </p>
            </div>
            
            <div className="buttons-container">
              <a 
                href="#portafolio" 
                className="primary-button"
              >
                Ver Portafolio
              </a>
              <a 
                href="#contacto" 
                className="secondary-button"
              >
                Contactar
              </a>
            </div>
            
            {/* Skills badges */}
            <div className="skills-container">
              <div className="skill-badge">
                <div className="skill-content">
                  <div className="skill-dot-blue"></div>
                  <span>Ilustración digital</span>
                </div>
              </div>
              <div className="skill-badge">
                <div className="skill-content">
                  <div className="skill-dot-yellow"></div>
                  <span>Personajes</span>
                </div>
              </div>
              <div className="skill-badge">
                <div className="skill-content">
                  <div className="skill-dot-pink"></div>
                  <span>Narrativa visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;