import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitio-web',
  standalone: true,
  imports: [],
  templateUrl: './sitio-web.component.html',
  styleUrl: './sitio-web.component.css'
})
export class SitioWebComponent {
    rutas = inject(Router);

    ir_contacto(){
      this.rutas.navigate(["contacto"]);
    }
}
