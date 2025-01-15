import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl = 'http://localhost:8080/contacto/contacto'; // URL del endpoint de tu backend
  
  http = inject(HttpClient);
  constructor() { }
  postEmail(data : any): Observable<any>{
    return this.http.post(this.apiUrl,data);
  }

  
}
