import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth'
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // 1. LÓGICA DE SERVIDOR (SSR) - SEGURIDAD MÁXIMA
  // Si soy el servidor, NO tengo acceso al token. Por seguridad, asumo que NO eres admin.
  // Esto evita que se renderice el HTML del Dashboard en el servidor.
  if (!isPlatformBrowser(platformId)) {
    // Redirigimos al login para que el servidor renderice esa página segura
    return router.createUrlTree(['/synectura-access']);
  }

  // 2. LÓGICA DE NAVEGADOR (Cliente)
  // Aquí sí podemos ver el token.
  if (authService.getToken()) {
    return true; // Pase usted, tiene llave.
  }

  // 3. Si no hay token en el navegador, rebote real.
  console.warn('⛔ Acceso denegado.');
  return router.createUrlTree(['/synectura-access']);
};