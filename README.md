# Itzel Ruiz Pay | Official Portfolio Platform

![Angular](https://img.shields.io/badge/Angular-v20-dd0031?style=for-the-badge&logo=angular)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-v3-6db33f?style=for-the-badge&logo=springboot)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ed?style=for-the-badge&logo=docker)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)

> Plataforma web progresiva (PWA) de alto rendimiento para la exhibición de arte digital, lectura de cómics web y gestión de contenido narrativo.

---

## Sobre el Proyecto

Este proyecto es la plataforma oficial de la artista **Itzel Ruiz Pay**. No es solo un portafolio estático; es una aplicación **Fullstack** diseñada para ofrecer una experiencia de lectura inmersiva para cómics web y una galería de arte optimizada.

El sistema está construido con una arquitectura moderna separando el Frontend (Angular SSR) del Backend (Spring Boot), todo orquestado mediante contenedores para un despliegue ágil en infraestructura propia (Home Lab).

### Características Principales

* **⚡ Angular SSR (Server-Side Rendering):** Renderizado híbrido para máximo rendimiento y SEO optimizado.
* **Diseño Modular:** Arquitectura basada en componentes Standalone (Hero, Collage Teaser, Comic Spotlight).
* **Galería Masonry:** Grid dinámico que se adapta a obras verticales y horizontales.
---

## 🛠️ Tech Stack (Synectura Stack)

Este proyecto demuestra el dominio de ingeniería Fullstack y DevOps:

### Frontend
* **Framework:** Angular 19+ (Standalone Components).
* **Estilos:** CSS3 Moderno (Variables, Flexbox, Grid) + Angular Animations.
* **Renderizado:** Angular Universal / SSR (Hydration).
* **Estrategia de Carga:** Lazy Loading de rutas e imágenes.

### Backend (En Desarrollo)
* **Core:** Java 21 + Spring Boot 3.
* **Base de Datos:** PostgreSQL.
* **Seguridad:** Spring Security (JWT).
* **API:** REST.

### Infraestructura & DevOps
* **Servidor:** Ubuntu Server (Self-Hosted en Gateway Ryzen 7 Home Lab).
* **Contenedores:** Docker & Docker Compose.
* **Proxy Reverso:** Nginx.

---

## Arquitectura del Sistema

```mermaid
graph TD
    Client[Browser / Mobile] -->|HTTPS| Nginx[Nginx Proxy]
    Nginx -->|SSR / Static| Angular[Angular Frontend Container]
    Nginx -->|API Requests| Spring[Spring Boot API Container]
    Spring -->|SQL| DB[(PostgreSQL DB)]
    Angular -->|Hydration| Client