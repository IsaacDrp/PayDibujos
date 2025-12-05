import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../app/services/auth/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  errorMessage = '';
  isLoading = false;

  

  ngOnInit() {
    // SOLO EN EL NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      // Verificamos si ya existe una sesión válida
      if (this.authService.getToken()) {
        console.log('🔄 Sesión detectada, redirigiendo al Dashboard...');
        this.router.navigate(['/admin']);
      }
    }
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.authService.login({ email: email!, password: password! }).subscribe({
      next: () => {
        // Si todo sale bien, redirigir al Admin (o al Home por ahora)
        this.router.navigate(['/admin']); 
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        if (err.status === 401 || err.status === 403) {
          this.errorMessage = 'Credenciales incorrectas.';
        } else {
          this.errorMessage = 'Error de conexión con Synectura.';
        }
      }
    });
  }
}