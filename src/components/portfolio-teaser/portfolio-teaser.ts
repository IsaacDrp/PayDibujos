import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

interface PortfolioItem {
  src: string;
  alt: string;
  size?: 'wide' | 'tall' | 'normal'; 
}

@Component({
  selector: 'app-portfolio-teaser',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './portfolio-teaser.html',
  styleUrls: ['./portfolio-teaser.css']
})
export class PortfolioTeaser {

  // RUTAS SANITIZADAS (Linux Friendly)
  galleryItems: PortfolioItem[] = [
    // --- FILA 1 ---
    { 
      src: '/assets/ilustraciones/princesa-pez /princesitapezturnaround.webp', 
      alt: 'Concept Art - Princesa Pez', 
      size: 'wide' 
    },
    { 
      src: 'assets/comics/la-hidra/la-hidra-pagina-02.webp', 
      alt: 'Página de Cómic - La Hidra', 
      size: 'tall' 
    },
    
    // --- FILA 2 ---
    { 
      src: 'assets/ilustraciones/modelado-3d/munequitas.webp', 
      alt: 'Modelado 3D Blender', 
      size: 'normal' 
    },
    { 
      src: 'assets/ilustraciones/temo/-mascotita.webp', 
      alt: 'Diseño de Mascota - Temo', 
      size: 'normal' 
    },
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/ajolote.webp', 
      alt: 'Ilustración - Ajolote', 
      size: 'normal' 
    },

    // --- FILA 3 ---
    { 
      src: 'assets/ilustraciones/ilustracion-cuento/cisnes.webp', 
      alt: 'Ilustración Narrativa - Cisnes', 
      size: 'wide' 
    },
    { 
      src: 'assets/ilustraciones/fotografia /dsc-0085.webp', 
      alt: 'Fotografía Artística - Retrato', 
      size: 'tall' 
    },

    // --- FILA 4 ---
    { 
      src: 'assets/comics/puno-y-corazon/005.webp', 
      alt: 'Página de Cómic - Puño y Corazón', 
      size: 'tall' 
    },
    { 
      src: 'assets/comics/puno-y-corazon/portada-01.webp', 
      alt: 'Portada - Puño y Corazón', 
      size: 'wide' 
    },
    
    // --- FILA 5 ---
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/franziska.webp', 
      alt: 'Fanart - Franziska', 
      size: 'normal' 
    },
    { 
      src: 'assets/comics/el-llamado-del-rey-del-hadal/numero-3.webp', 
      alt: 'Página de Cómic - Rey del Hadal', 
      size: 'normal' 
    },
    
    // --- FILA 6 ---
    { 
      src: 'assets/ilustraciones/princesa-pez /amigos-y-familia.webp', 
      alt: 'Concept Art - Personajes Grupales', 
      size: 'wide' 
    },
    { 
      src: 'assets/ilustraciones/fotografia /dsc-0852.webp', 
      alt: 'Fotografía Paisaje/Urbana', 
      size: 'normal' 
    },
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/maguitos.webp', 
      alt: 'Diseño de Personajes - Maguitos', 
      size: 'normal' 
    }
  ];
}