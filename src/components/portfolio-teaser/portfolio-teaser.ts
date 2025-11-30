import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // <--- IMPORTANTE
import { RouterModule } from '@angular/router';

interface PortfolioItem {
  src: string;
  alt: string;
  size: 'wide' | 'tall' | 'normal'; 
  width: number;
  height: number;
}

@Component({
  selector: 'app-portfolio-teaser',
  standalone: true,
  // 👇 AQUÍ AGREGAMOS NgOptimizedImage PARA QUE EL HTML LO RECONOZCA
  imports: [CommonModule, RouterModule, NgOptimizedImage], 
  templateUrl: './portfolio-teaser.html',
  styleUrls: ['./portfolio-teaser.css']
})
export class PortfolioTeaser {

  // Tus datos calculados basados en las dimensiones reales
  galleryItems: PortfolioItem[] = [
    { 
      src: 'assets/ilustraciones/princesa-pez /princesitapezturnaround.webp', 
      alt: 'Concept Art - Princesa Pez', 
      size: 'wide',
      width: 3932, height: 1364
    },
    { 
      src: 'assets/comics/la-hidra/la-hidra-pagina-02.webp', 
      alt: 'Página de Cómic - La Hidra', 
      size: 'tall',
      width: 2464, height: 3510
    },
    { 
      src: 'assets/ilustraciones/temo/-mascotita.webp', 
      alt: 'Diseño de Mascota - Temo', 
      size: 'normal',
      width: 2646, height: 2268
    },
    { 
      src: 'assets/comics/puno-y-corazon/005.webp', 
      alt: 'Página de Cómic - Puño y Corazón', 
      size: 'tall',
      width: 2550, height: 3318
    },
    { 
      src: 'assets/ilustraciones/modelado-3d/munequitas.webp', 
      alt: 'Modelado 3D Blender', 
      size: 'wide',
      width: 1920, height: 1080
    },
    { 
      src: 'assets/ilustraciones/ilustracion-cuento/cisnes.webp', 
      alt: 'Ilustración Narrativa - Cisnes', 
      size: 'normal',
      width: 2263, height: 2041
    },
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/franziska.webp', 
      alt: 'Fanart - Franziska', 
      size: 'tall',
      width: 1492, height: 1992
    },
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/ajolote.webp', 
      alt: 'Ilustración - Ajolote', 
      size: 'wide',
      width: 2406, height: 1506
    },
    { 
      src: 'assets/ilustraciones/fotografia /dsc-0085.webp', 
      alt: 'Fotografía Artística', 
      size: 'wide',
      width: 600, height: 400
    },
    { 
      src: 'assets/comics/puno-y-corazon/portada-01.webp', 
      alt: 'Portada - Puño y Corazón', 
      size: 'wide',
      width: 5101, height: 3316
    },
    { 
      src: 'assets/comics/el-llamado-del-rey-del-hadal/numero-3.webp', 
      alt: 'Página de Cómic - Rey del Hadal', 
      size: 'tall',
      width: 1512, height: 2041
    },
    { 
      src: 'assets/ilustraciones/otras-ilustraciones/maguitos.webp', 
      alt: 'Diseño de Personajes - Maguitos', 
      size: 'normal',
      width: 1890, height: 1411
    },
    { 
      src: 'assets/ilustraciones/princesa-pez /amigos-y-familia.webp', 
      alt: 'Concept Art - Personajes Grupales', 
      size: 'wide',
      width: 3024, height: 1890
    }
  ];
}