import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core'; // 1. Importar PLATFORM_ID
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // 2. Importar isPlatformBrowser

interface LoginResponse {
  token: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  // 3. Inyectar el ID de la plataforma
  private platformId = inject(PLATFORM_ID); 

  currentUser = signal<string | null>(null);
  private readonly TOKEN_KEY = 'synectura_jwt';

  constructor() {
    // 4. EL ARREGLO: Solo acceder a localStorage si es el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedToken = localStorage.getItem(this.TOKEN_KEY);
      if (savedToken) {
        // Opcional: Aquí podrías decodificar el token para sacar el email real
        this.currentUser.set('Admin'); 
      }
    }
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<LoginResponse>('/api/auth/login', credentials).pipe(
      tap(response => {
        // Guardamos solo si estamos en el navegador (aunque el login suele ser evento de usuario)
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem(this.TOKEN_KEY, response.token);
        }
        this.currentUser.set(response.email);
        console.log('🔐 Login exitoso. Token guardado.');
      })
    );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
    this.currentUser.set(null);
    this.router.navigate(['/']);
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }
}