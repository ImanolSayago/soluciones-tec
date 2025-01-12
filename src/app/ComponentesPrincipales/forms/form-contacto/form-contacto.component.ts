import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.css'
})
export class FormContactoComponent {
fb= inject(FormBuilder)
router = inject(Router);
route = inject(ActivatedRoute);

formulario= this.fb.nonNullable.group(
 {
  name:["",Validators.required],
  email:["",Validators.required],
  nro:["",Validators.required],
  razon:["",Validators.required],
 }
);




}
