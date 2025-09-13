"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.message}`);
        return;
      }

      alert("Registro exitoso");
      router.push("/user/login"); // Redireccion corregida
    } catch (error: any) {
      console.error("Error en el registro:", error);
      alert("Error en el servidor");
    }
  };

  return (
    <main className="container">
      <h1 className="title">Registro</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
          required
        />
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
        <button type="submit">Crear cuenta</button>
      </form>
    </main>
  );
}
