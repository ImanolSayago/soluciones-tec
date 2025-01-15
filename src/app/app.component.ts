import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ComponentesPrincipales/navbar/navbar.component";
import { FormContactoComponent } from "./ComponentesPrincipales/forms/form-contacto/form-contacto.component";
import { PagInicioComponent } from "./ComponentesPrincipales/home/pag-inicio/pag-inicio.component";
import { FootergeneralComponent } from "./ComponentesPrincipales/footer/footergeneral/footergeneral.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, FootergeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soluciones-tec';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Esto lleva la página al inicio
      }
    });
  }
}
