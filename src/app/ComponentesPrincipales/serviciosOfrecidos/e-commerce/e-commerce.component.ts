import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  standalone: true,
  imports: [],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {
 rutas = inject(Router)

  ir_contacto()
  {
    this.rutas.navigate(["contacto"]);
  }
}
