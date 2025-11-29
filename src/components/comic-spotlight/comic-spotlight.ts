import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

// 1. Definimos la estructura de datos
interface ComicSlide {
  title: string;
  synopsis: string;
  coverImage: string;
  tags: string[];
  link: string;
  type: 'NEW' | 'POPULAR' | 'FEATURED'; // Para poner una etiqueta especial
}

@Component({
  selector: 'app-comic-spotlight',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comic-spotlight.html',
  styleUrls: ['./comic-spotlight.css'],
  // 2. MAGIA DE ANGULAR: Animación de Fade
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
  
  // 3. Tus diapositivas (Simulando datos de una API)
  slides: ComicSlide[] = [
    {
      title: "Puño & Corazón",
      synopsis: "En un mundo donde las emociones otorgan fuerza física, un joven sin sentimientos deberá aprender a luchar.",
      coverImage: "/assets/images/p&c.png", // Asegúrate de que esta ruta exista
      tags: ['Shonen', 'Acción', 'Estreno'],
      link: '/comics/puno-y-corazon',
      type: 'NEW'
    },
    {
      title: "Princesa Coralina",
      synopsis: "Un cuento submarino sobre identidad, monstruos marinos y la belleza de lo desconocido.",
      coverImage: "/assets/images/princesa-coralina.jpg",
      tags: ['Fantasía', 'Drama'],
      link: '/portafolio/personajes',
      type: 'FEATURED'
    },
    {
      title: "Crónicas del Cisne",
      synopsis: "Ilustración narrativa ganadora del concurso nacional de arte digital 2024.",
      coverImage: "/assets/images/cisnes.png",
      tags: ['Arte', 'Narrativa'],
      link: '/portafolio/ilustracion',
      type: 'POPULAR'
    }
  ];

  currentIndex: number = 0;
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay(); // Muy importante para no dejar procesos memoria
  }

  // Getters para facilitar el HTML
  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  // --- LÓGICA DE NAVEGACIÓN ---

  nextSlide() {
    this.stopAutoPlay(); // Pausamos si el usuario interactúa
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.startAutoPlay(); // Reiniciamos el contador
  }

  prevSlide() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.startAutoPlay();
  }

  goToSlide(index: number) {
    this.stopAutoPlay();
    this.currentIndex = index;
    this.startAutoPlay();
  }

  // --- LÓGICA DEL TEMPORIZADOR ---
  
  startAutoPlay() {
    // Cambia cada 7 segundos
    this.autoPlayInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 7000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}