import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

// 1. Definimos la estructura de datos
interface ComicSlide {
  title: string;
  synopsis: string;
  coverImage: string;
  tags: string[];
  link: string;
  type: 'NEW' | 'POPULAR' | 'FEATURED';
}

@Component({
  selector: 'app-comic-spotlight',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comic-spotlight.html', // Asegúrate de que coincida con tu nombre de archivo
  styleUrls: ['./comic-spotlight.css'], // Asegúrate de que coincida con tu nombre de archivo
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ComicSpotlight implements OnInit, OnDestroy {
  
  slides: ComicSlide[] = [
    {
      title: "Puño & Corazón",
      synopsis: "En un mundo donde las emociones otorgan fuerza física, un joven sin sentimientos deberá aprender a luchar.",
      coverImage: "assets/comics/puno-y-corazon/portada-01.webp", // Actualizado
      tags: ['Shonen', 'Acción', 'Estreno'],
      link: '/comics/puno-y-corazon',
      type: 'NEW'
    },
    {
      title: "El llamado del Rey del hadal",
      synopsis: "Un cuento submarino sobre identidad, monstruos marinos y la belleza de lo desconocido.",
      coverImage: "assets/comics/el-llamado-del-rey-del-hadal/numero-4.webp", // Actualizado
      tags: ['Fantasía', 'Drama'],
      link: '/portafolio/personajes',
      type: 'FEATURED'
    },
    {
      title: "La Hidra",
      synopsis: "Una narrativa visual oscura sobre los demonios internos que se multiplican al intentar cortarlos.",
      coverImage: "assets/comics/la-hidra/la-hidra-pagina-04.webp", // Actualizado
      tags: ['Terror', 'Narrativa'],
      link: '/comics/la-hidra',
      type: 'POPULAR'
    }
  ];

  currentIndex: number = 0;
  autoPlayInterval: any;

  // --- 1. INYECCIÓN DE PLATAFORMA ---
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Solo inicia el carrusel si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  // --- LÓGICA DE NAVEGACIÓN ---

  nextSlide() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    // Solo reinicia el autoplay si es navegador (seguridad extra)
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  prevSlide() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  goToSlide(index: number) {
    this.stopAutoPlay();
    this.currentIndex = index;
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  // --- LÓGICA DEL TEMPORIZADOR (SSR SAFE) ---
  
  startAutoPlay() {
    // Limpiamos cualquier intervalo previo por seguridad
    this.stopAutoPlay();

    // --- 2. EL CAMBIO CRÍTICO ---
    // Verificamos si estamos en el navegador. 
    // Si estamos en el servidor (SSR), esto se salta y evita el cuelgue.
    if (isPlatformBrowser(this.platformId)) {
      this.autoPlayInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }, 7000); // 7 segundos
    }
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}