import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-inicio',
  standalone: true,
  imports: [],
  templateUrl: './pag-inicio.component.html',
  styleUrl: './pag-inicio.component.css',

})
export class PagInicioComponent implements OnInit {

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


  textoCompleto: string = 'Te ayudo a resolver tus problemas tecnológicos, rápido y sin complicaciones. ¡Descubrí lo que podemos hacer por vos!';
  textoMostrado: string = '';
  velocidadEscritura: number = 35; // Milisegundos por carácter

  ngOnInit() {
    this.escribirTexto();
  }

  escribirTexto() {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.textoCompleto.length) {
        this.textoMostrado += this.textoCompleto.charAt(i);
        i++;
      } else {
        clearInterval(interval); // Detenemos la animación al terminar
      }
    }, this.velocidadEscritura);
  }
}
