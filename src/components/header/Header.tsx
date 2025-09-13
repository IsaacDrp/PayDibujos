"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./Header.css";

interface TokenPayload {
  id: string;
  email: string;
  exp: number;
}

export default function Header() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Función para leer token desde localStorage
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        setUserEmail(decoded.email);
      } catch (err) {
        console.error("Token inválido:", err);
        localStorage.removeItem("token");
        setUserEmail(null);
      }
    } else {
      setUserEmail(null);
    }
  };

  // Revisar token al montar el componente
  useEffect(() => {
    checkToken();
    // Escuchar cambios en localStorage (por login/logout en otra pestaña)
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserEmail(null);
    router.push("/user/login");
  };

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
            <strong className="header-title">Pay Dibujos</strong>
            <span className="header-subtitle">Ilustración y cómic digital</span>
          </div>
        </div>
      </div>

      <nav aria-label="Navegación principal" className="header-nav">
        <Link href="/" className="header-nav-link">Inicio</Link>

        {!userEmail ? (
          <>
            <Link href="/user/login" className="header-nav-link">Login</Link>
            <Link href="/user/register" className="header-nav-link">Registro</Link>
          </>
        ) : (
          <>
            <span className="header-nav-link greeting">Hola, {userEmail}</span>
            <button onClick={handleLogout} className="header-nav-link logout-button">
              Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
