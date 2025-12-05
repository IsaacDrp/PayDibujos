import { Routes } from '@angular/router';
import { Home } from '../pages/home/home'; // Este creo que sí lo llamaste home.ts manualmente
import { PortfolioTeaser } from '../components/portfolio-teaser/portfolio-teaser'; // Ajusta si es portfolio page
import { LoginComponent } from '../pages/login/login'; // <--- OJO AQUÍ (.component)
import { authGuard } from '../app/guards/auth-guard'; // <--- OJO AQUÍ (.guard)

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'portafolio',
        // Si aún no creas la página completa de portafolio, usa el Home temporalmente 
        // o crea el componente PortfolioPage
        component: Home 
    },
    // Access Route (Login)
    { 
        path: 'synectura-access', // O 'paydibujos-access' como prefieras
        component: LoginComponent 
    },
    // ZONA PRIVADA (Admin)
    { 
        path: 'admin',
        canActivate: [authGuard], // <--- EL CANDADO 🔒
        
        // Lazy Loading: Carga el dashboard solo si el usuario tiene permiso
        loadComponent: () => import('../pages/admin/dashboard/dashboard')
            .then(m => m.DashboardComponent) 
    },
    // Wildcard (404)
    { 
        path: '**', 
        redirectTo: ''
    }
];