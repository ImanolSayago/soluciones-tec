import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from '../../../servicios/formulario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.css'
})
export class FormContactoComponent {

  servicioEmail= inject(FormularioService);
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

navegarinicio(){
  this.router.navigate([""]);
}

onSubmit() {
  if (this.formulario.valid) {
    // Obtener los valores del formulario
    const contacto = this.formulario.value;

 
    this.servicioEmail.postEmail(contacto).subscribe(
      response => {
        console.log('Formulario enviado con éxito', response);
        this.notificacionenviado();
        this.formulario.reset();  // Opcional: Resetear el formulario
      },
      error => {
        console.error('Error al enviar formulario', error);
        alert('Hubo un error al enviar el formulario');
      }
    );
  }
}


  notificacionenviado()
  {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Correo enviado con exito",
      showConfirmButton: false,
      timer: 1500
    });
  }



}
