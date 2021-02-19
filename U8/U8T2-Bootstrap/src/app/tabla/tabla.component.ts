import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { comunidad } from 'src/app/interfaces/comunidad';
import { FormularioComponent } from '../formulario/formulario.component';
import { DatosVacunacionService } from '../services/datos-vacunacion.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  comunidades : comunidad[];

  @Input()
  formulario : FormularioComponent;

  constructor(public vacunacion: DatosVacunacionService) {

  }

  ngOnInit(): void {
  }

  cargar_datos() {
    let ccaa_filtradas = [];
    let ccaa_nombres = [];
    this.vacunacion.get_vaccination().subscribe((response) => {
      console.log(response);
      for (const ccaa of response) {
        console.log(ccaa);
        if (ccaa.ccaa !== 'Totales') {
          ccaa_filtradas.push(ccaa);
          ccaa_nombres.push(ccaa.ccaa);
        }
      }
      this.comunidades = ccaa_filtradas;
      this.formulario.comunidades = ccaa_nombres;
    });
  }

}
