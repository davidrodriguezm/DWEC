import { Component, Input, OnInit } from '@angular/core';
import { FilaTabla } from 'src/app/clases/FilaTabla';
import { Centro } from 'src/app/intefaces/centro';
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
    console.log(filtrado);
    for (let cur of this.filtros.cursos) {
      let valido: boolean = true;
      let centro: Centro;
      for (let cen of this.filtros.centros) {
        if ( cen.codigo == cur.codigo ) {
          centro = cen;
          break;
        }
      }
      if ( filtrado.familia == cur.familia || filtrado.familia == "" ) {
        let filaTabla = new FilaTabla(centro, cur.familia, cur.nombre_ciclo, cur.tipo , cur.turno, cur.bilingue, cur.dual);
        this.filas.push(filaTabla);
      }
    }
  }

}
