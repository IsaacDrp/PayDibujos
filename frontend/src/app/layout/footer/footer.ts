import { Component, OnInit, inject } from '@angular/core'; // Importar OnInit e inject
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemStatusService } from '../../services/system-status.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements OnInit {
  
  // Inyección del servicio
  public statusService = inject(SystemStatusService);

  ngOnInit() {
    // Al cargar el footer, revisamos si el backend está vivo
    this.statusService.checkBackendHealth();
  }
}