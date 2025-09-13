"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.message}`);
        return;
      }

      // Guardar token en localStorage
      localStorage.setItem("token", data.token);

      alert("Login exitoso");
      router.push("/"); // Redirige a inicio
    } catch (error: any) {
      console.error("Error en login:", error);
      alert("Error en el servidor");
    }
  };

  return (
    <main className="login-container">
      <div className="login-content">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}