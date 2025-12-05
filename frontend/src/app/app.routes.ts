import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Portfolio } from '../pages/portfolio/portfolio';
import { LoginComponent } from '../pages/login/login';

export const routes: Routes = 
[
    {
        "path": '',
        "component": Home
    },
    {
        "path": 'portfolio',
        "component": Portfolio
    },
    // RUTA DE ACCESO
    { "path": 'paydibujos-access', component: LoginComponent }, // URL "secreta" o poco obvia
    // Redirección por defecto
    { "path": '**', redirectTo: ''

    }
];
