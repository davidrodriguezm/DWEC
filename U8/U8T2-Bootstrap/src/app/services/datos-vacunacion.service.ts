import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { comunidad } from '../interfaces/comunidad';

@Injectable({
  providedIn: 'root'
})
export class DatosVacunacionService {
  api_url: string = 'https://covid-vacuna.app/data/latest.json';

  constructor(private _http: HttpClient) {
    console.log('servicio creado');
    this.get_vaccination();
  }

  get_vaccination() : Observable<comunidad[]> {
    return this._http.get<comunidad[]>(this.api_url);
  }

}
