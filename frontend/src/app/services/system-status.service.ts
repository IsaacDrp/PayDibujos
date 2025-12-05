import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemStatusService {
  private http = inject(HttpClient);

  // Signal reactiva para la UI
  status = signal<'CHECKING' | 'ONLINE' | 'OFFLINE'>('CHECKING');
  systemVersion = signal<string>('');

  checkBackendHealth() {
    // Usamos la ruta relativa '/api'. El proxy (en dev) o Nginx (en prod) la redirigen.
    this.http.get<any>('/api/health').pipe(
      catchError(error => {
        console.error('❌ Error contactando al Backend:', error);
        return of(null); // Retorna null si falla
      })
    ).subscribe(response => {
      if (response && response.status === 'OPERATIONAL') {
        this.status.set('ONLINE');
        this.systemVersion.set(response.version);
        console.log('✅ Conexión con Backend exitosa:', response);
      } else {
        this.status.set('OFFLINE');
      }
    });
  }
}