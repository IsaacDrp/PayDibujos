"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // default
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      router.push("/user/login"); // Redirige al login
    } catch (error: any) {
      console.error("Error en el registro:", error);
      alert("Error en el servidor");
    }
  };

  return (
    <main className="register-container">
      <div className="register-content">
        <h1 className="register-title">Registro</h1>
        <form onSubmit={handleSubmit} className="register-form">
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
          <div>
            <span className="register-role-label">Tipo de cuenta:</span>
            <select name="role" value={form.role} onChange={handleChange} required>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </main>
  );
}