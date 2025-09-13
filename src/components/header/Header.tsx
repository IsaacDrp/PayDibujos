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
  role: string;
  exp: number;
}

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        setUser({ email: decoded.email, role: decoded.role });
      } catch (err) {
        console.error("Token inválido:", err);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
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

        {!user ? (
          <>
            <Link href="/user/login" className="header-nav-link">Login</Link>
            <Link href="/user/register" className="header-nav-link">Registro</Link>
          </>
        ) : (
          <>
            <span className="header-nav-link greeting">
              Hola, {user.email} ({user.role})
            </span>
            <button onClick={handleLogout} className="header-nav-link logout-button">
              Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
