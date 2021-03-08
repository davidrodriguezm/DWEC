import { Component, Input, OnInit } from '@angular/core';
import { FilaTabla } from 'src/app/clases/FilaTabla';
import { Centro } from 'src/app/intefaces/Centro';
import { Curso } from 'src/app/intefaces/Curso';
import { FiltrosComponent } from '../filtros/filtros.component';
import { Formulario } from 'src/app/clases/Formulario';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input()
  filtros: FiltrosComponent;

  filas: Array<FilaTabla>;

  constructor() {
    this.filas = new Array<FilaTabla>();
  }

  ngOnInit(): void {
  }

  crear_tabla(): void {
    let filtrado = this.filtros.formulario;
    let nueva_fila: Array<FilaTabla> = new Array<FilaTabla>();
    for (let cur of this.filtros.cursos) {
      let valido: boolean = true;
      let centro: Centro;
      for (let cen of this.filtros.centros) {
        if ( cen.codigo == cur.codigo ) {
          centro = cen;
          break;
        }
      }
      if ( ( filtrado.familia == cur.familia || filtrado.familia == "" ) && ( filtrado.nombre == cur.nombre_ciclo || filtrado.nombre == "" )
        && ( filtrado.tipo == cur.tipo || filtrado.tipo == "" ) && ( filtrado.turno == cur.turno || filtrado.turno == "" ) &&
        ( filtrado.bilingue == cur.bilingue || filtrado.bilingue == "" ) && ( filtrado.dual == cur.dual || filtrado.dual == "" )
        && ( filtrado.provincia == this.select_provincia( centro ) || filtrado.provincia == "" )
        ) {
        let filaTabla = new FilaTabla(centro, cur.familia, cur.nombre_ciclo, cur.tipo , cur.turno, cur.bilingue, cur.dual);
        nueva_fila.push(filaTabla);
      }
    }
    this.filas = nueva_fila;
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
