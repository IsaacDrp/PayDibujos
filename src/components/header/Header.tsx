"use client";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-wrapper">
          <div className="header-logo-padding">
            <Image
              src="/principal.png"
              alt="Logo de Pay Dibujos"
              width={80}
              height={80}
              className="header-logo-image"
              priority
            />
          </div>
          <div className="header-text">
            <strong className="header-title">
              Pay Dibujos
            </strong>
            <span className="header-subtitle">
              Ilustración y cómic digital
            </span>
          </div>
        </div>
      </div>
      <nav aria-label="Navegación principal" className="header-nav">
        <a href="#home" className="header-nav-link">
          Home
        </a>
        <a href="#portafolio" className="header-nav-link">
          Portafolio
        </a>
        <a href="#comics" className="header-nav-link">
          Cómics
        </a>
        <a href="#contacto" className="header-nav-link">
          Contacto
        </a>
      </nav>
    </header>
  );
}