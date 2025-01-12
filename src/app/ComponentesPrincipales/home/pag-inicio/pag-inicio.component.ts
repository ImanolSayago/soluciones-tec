import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-inicio',
  standalone: true,
  imports: [],
  templateUrl: './pag-inicio.component.html',
  styleUrl: './pag-inicio.component.css',

})
export class PagInicioComponent {

  rutas = inject(Router)
  navegar_info(){

    const serviciosElement = document.getElementById('servicios');
    if (serviciosElement) {
      serviciosElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
 

  navegar_landing(){
    this.rutas.navigate(["landing"]);
  }

  navegar_info_sitio(){
    this.rutas.navigate(["sitioweb"]);
  }

  navegar_info_ecommerce(){
    this.rutas.navigate(["e-commerce"]);
  }
  
}
