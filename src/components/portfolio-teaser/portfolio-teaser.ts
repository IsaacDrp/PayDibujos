import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para ngClass si usas módulos antiguos
import { RouterModule } from '@angular/router';

// 1. Definimos una interfaz simple para tener autocompletado (opcional pero recomendado)
interface PortfolioItem {
  src: string;
  alt: string;
  size?: 'wide' | 'tall' | 'normal'; // '?' significa que es opcional
}

@Component({
  selector: 'app-portfolio-teaser',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './portfolio-teaser.html',
  styleUrls: ['./portfolio-teaser.css']
})
export class PortfolioTeaser {

  // 2. Tu lista de imágenes (Simulando una base de datos)
  galleryItems: PortfolioItem[] = [
    { 
      src: '/assets/images/princesa-coralina.jpg', 
      alt: 'Diseño de Personajes', 
      size: 'normal' 
    },
    { 
      src: '/assets/images/fotografia.jpg', 
      alt: 'Fotografía Artística', 
      size: 'tall' // Este será vertical
    },
    { 
      src: '/assets/images/cisnes.png', 
      alt: 'Ilustración Narrativa', 
      size: 'wide' // Este será ancho
    },
    { 
      src: '/assets/images/temo.png', 
      alt: 'Diseño de Mascota', 
      size: 'normal' 
    },
    { 
      src: '/assets/images/muñequitas.png', 
      alt: 'Modelado 3D Blender', 
      size: 'normal' 
    },
    { 
      src: '/assets/images/p&c.png', 
      alt: 'Cómic y Narrativa Visual', 
      size: 'wide' 
    }
  ];
}