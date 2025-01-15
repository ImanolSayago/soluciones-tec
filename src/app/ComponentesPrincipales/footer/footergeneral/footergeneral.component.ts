import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footergeneral',
  standalone: true,
  imports: [],
  templateUrl: './footergeneral.component.html',
  styleUrl: './footergeneral.component.css'
})
export class FootergeneralComponent {
rutas = inject(Router)
ircontacto(){
  this.rutas.navigate(["contacto"]);
}
}
