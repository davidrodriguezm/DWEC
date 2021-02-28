import { Centro } from "../intefaces/centro";

export class FilaTabla {
  centro: Centro;
  familia: string;
  nombre_ciclo: string;
  provincia: string;
  tipo: string;
  turno: string;
  bilingue: string;
  dual: string;

  constructor( centro: Centro, familia: string, nombre: string, tipo: string, turno: string, bilingue: string, dual: string) {
    this.centro = centro;
    this.familia = familia;
    this.nombre_ciclo = nombre;
    this.provincia = this.select_provincia( centro );
    this.tipo = tipo;
    this.turno = turno;
    this.bilingue = bilingue;
    this.dual = dual;
  }

  select_provincia( centro ): string {
    let nombre_provincia = "";
    let codigo_pro = centro.codigo_provincia;
    switch(codigo_pro) {
      case "04": {
        nombre_provincia = "Almería";
        break;
      }
      case "11": {
        nombre_provincia = "Cádiz";
        break;
      }
      case "14": {
        nombre_provincia = "Córdoba";
        break;
      }
      case "18": {
        nombre_provincia = "Granada";
        break;
      }
      case "21": {
        nombre_provincia = "Huelva";
        break;
      }
      case "23": {
        nombre_provincia = "Jaén";
        break;
      }
      case "29": {
        nombre_provincia = "Málaga";
        break;
      }
      case "41": {
        nombre_provincia = "Sevilla";
        break;
      }
    }
    return nombre_provincia;
  }
}
