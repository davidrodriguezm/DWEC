import { Component, OnInit } from '@angular/core';
import { Filtro } from 'src/app/intefaces/filtro';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  filtros: Filtro;

  constructor() { }

  ngOnInit(): void {
  }

}
