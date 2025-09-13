// components/Portfolio.tsx
'use client';

import Image from 'next/image';
import './Portfolio.css';

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
}

const Portfolio = () => {
  const items: PortfolioItem[] = [
    { 
      id: 1,
      title: "Ilustración de Cuento", 
      desc: "Serie de ilustraciones para libro infantil con técnicas digitales y acuarela.",
      category: "Ilustración",
      image: "/cuento.png" 
    },
    { 
      id: 2,
      title: "Diseño de Personajes", 
      desc: "Desarrollo completo de personajes para proyecto de animación independiente.",
      category: "Character Design",
      image: "/personaje.png"
    },
    { 
      id: 3,
      title: "Cómic Digital", 
      desc: "Historia corta de 12 páginas explorando temas de identidad y cultura.",
      category: "Cómic",
      image: "/comic.png"
    },
    { 
      id: 4,
      title: "Proyecto Editorial", 
      desc: "Ilustraciones para revista de arte y diseño con enfoque en sustentabilidad.",
      category: "Editorial",
      image: "/puntoD.png"
    },
  ];

  return (
    <section id="portafolio" className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Header Section */}
        <div className="portfolio-header">
          <div className="portfolio-title-container">
            <h2 className="portfolio-title">Portafolio</h2>
            <div className="portfolio-title-underline"></div>
          </div>
          <p className="portfolio-subtitle">
            Una selección de mis trabajos más recientes en ilustración, diseño de personajes y narrativa visual.
          </p>
        </div>
        
        {/* Portfolio Grid - Single Column */}
        <div className="portfolio-grid">
          {items.map((item, index) => (
            <article
              key={item.id}
              className="portfolio-item"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image/Preview Area */}
              <div className="portfolio-image-container">
                {/* Overlay pattern */}
                <div className="portfolio-image-pattern"></div>
                
                {/* Category badge */}
                <div className="portfolio-category-badge">
                  <span>{item.category}</span>
                </div>
                
                {/* Main image - Adjusted for rectangular images */}
                <div className="portfolio-image-wrapper">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={400}
                    height={500}
                    className="portfolio-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="portfolio-image-overlay"></div>
              </div>
              
              {/* Content Area */}
              <div className="portfolio-content">
                <h3 className="portfolio-item-title">
                  {item.title}
                </h3>
                <p className="portfolio-item-desc">
                  {item.desc}
                </p>
                
                {/* CTA Button */}
                <button className="portfolio-cta">
                  Ver más 
                  <span className="portfolio-cta-arrow">→</span>
                  <span className="portfolio-cta-underline"></span>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="portfolio-footer">
          <div className="portfolio-footer-card">
            <p className="portfolio-footer-text">¿Te interesa ver más de mi trabajo?</p>
            <a 
              href="#contacto" 
              className="portfolio-footer-button"
            >
              Solicitar portafolio completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;