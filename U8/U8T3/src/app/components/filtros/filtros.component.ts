import { Component, Input, OnInit } from '@angular/core';
import { Formulario } from 'src/app/intefaces/Formulario';
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

  constructor( public peti: PeticionService ) { }

  ngOnInit(): void {
    this.peti.cargar_datos();
  }

  buscar_datos(): void {

  }

}
