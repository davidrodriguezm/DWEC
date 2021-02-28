import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Centro } from '../intefaces/centro';
import { Curso } from '../intefaces/Curso';
import { Datos } from '../intefaces/Datos';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  datos_repues: Observable<Datos>;

  constructor(private respuesta : HttpClient) {
    this.datos_repues = this.respuesta.get<Datos>("assets/ofertas.json");
  }

  get_datos(): Observable<Datos>{
    if ( this.datos_repues ) {
      return this.datos_repues;
    } else {
      this.datos_repues = this.respuesta.get<Datos>("assets/ofertas.json");
      return this.datos_repues
    }
  }
}
