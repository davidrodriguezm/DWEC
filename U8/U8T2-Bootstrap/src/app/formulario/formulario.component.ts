import { Component, Input, OnInit } from '@angular/core';
import { comunidad } from 'src/app/interfaces/comunidad';
import { DatosVacunacionService } from 'src/app/services/datos-vacunacion.service';
import { TablaComponent } from 'src/app/tabla/tabla.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  comunidades: comunidad[];

  @Input()
  tabla: TablaComponent;

  constructor(public vacunacion: DatosVacunacionService) { }

  ngOnInit(): void {

  }

  guardar_datos() : void {
    this.tabla.cargar_datos();
  }

}
