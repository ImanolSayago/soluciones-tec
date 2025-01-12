import { Routes } from '@angular/router';
import { FormContactoComponent } from './ComponentesPrincipales/forms/form-contacto/form-contacto.component';
import { AppComponent } from './app.component';
import { PagInicioComponent } from './ComponentesPrincipales/home/pag-inicio/pag-inicio.component';
import { LandingPageComponent } from './ComponentesPrincipales/serviciosOfrecidos/landing-page/landing-page.component';
import { SitioWebComponent } from './ComponentesPrincipales/serviciosOfrecidos/sitio-web/sitio-web.component';
import { ECommerceComponent } from './ComponentesPrincipales/serviciosOfrecidos/e-commerce/e-commerce.component';

export const routes: Routes = [
    {
        path:'',
        component:PagInicioComponent
      },
    {
        path:'contacto',
        component:FormContactoComponent
      },
      {
        path:'landing',
        component:LandingPageComponent
      },
      {
        path:'sitioweb',
        component:SitioWebComponent
      },
      {
        path:'e-commerce',
        component:ECommerceComponent
      }
];
