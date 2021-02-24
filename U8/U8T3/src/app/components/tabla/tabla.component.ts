import { Component, Input, OnInit } from '@angular/core';
import { FiltrosComponent } from '../filtros/filtros.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input()
  filtros : FiltrosComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
