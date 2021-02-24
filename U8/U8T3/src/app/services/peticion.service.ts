import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  datos;

  constructor(private respuesta : HttpClient) {
    this.cargar_datos();
  }

  cargar_datos() {
    this.datos = this.respuesta.get("src/app/files/ofertas.json");
    console.log(this.datos);
    return this.datos;
  }
}
