import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  [x: string]: any;
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
  navigateToCotizaciones() {
    this.router.navigate(['/cotizaciones']);
  }
  navigateToPortafolio() {
    this.router.navigate(['/portafolio']);
  }

  navigateToRegister() {
    this.router.navigate(['/registro']);
  }

  navigateToIngreso() {
    this.router.navigate(['/ingreso']);
  }

  navigateToCompra() {
    this.router.navigate(['/compra']);
  }
}
