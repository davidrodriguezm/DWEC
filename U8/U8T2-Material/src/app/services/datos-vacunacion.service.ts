import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { comunidad } from '../interfaces/comunidad';

@Injectable({
  providedIn: 'root'
})
export class DatosVacunacionService {
  api_url: string = 'https://covid-vacuna.app/data/latest.json';

  constructor(private respuesta : HttpClient) {
    this.get_vaccination();
  }

  get_vaccination() : Observable<comunidad[]> {
    return this.respuesta.get<comunidad[]>(this.api_url);
  }

}

