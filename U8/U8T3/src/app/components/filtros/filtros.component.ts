import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from 'src/app/clases/Formulario';
import { Centro } from 'src/app/intefaces/centro';
import { Curso } from 'src/app/intefaces/Curso';
import { Datos } from 'src/app/intefaces/Datos';
import { PeticionService } from 'src/app/services/peticion.service';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  formulario: Formulario;

  @Input()
  tabla : TablaComponent;

  familia_curso = new Set<String>();
  nombre_curso = new Set<String>();
  bilingue_curso = new Set<String>();
  datos_repues: Observable<Datos>;
  centros: Centro[] = new Array<Centro>();
  cursos: Curso[] = new Array<Curso>();

  constructor( public peti: PeticionService ) {
    this.formulario = new Formulario();
  }

  ngOnInit(): void {
    this.datos_repues = this.peti.get_datos();
    this.datos_repues.subscribe( datos => {
      for (let cen of datos.info_centros) {
        this.centros.push( cen );
      }
      for (let cur of datos.items) {
        this.cursos.push( cur );
      }
      for (let cur of this.cursos) {
        this.familia_curso.add(cur.familia);
        this.nombre_curso.add(cur.nombre_ciclo);
        this.bilingue_curso.add(cur.bilingue);
      }
    });
  }

  buscar_datos(): void {
    this.tabla.crear_tabla();
  }

}
