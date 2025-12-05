import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../app/services/auth/auth'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  private authService = inject(AuthService);

  // Custom Hello!
  currentUser = this.authService.currentUser; // Es un signal

  logout() {
    this.authService.logout();
  }
}