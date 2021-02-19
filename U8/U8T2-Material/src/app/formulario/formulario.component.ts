import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  l_comunidades : Array<string> = ['Andalucía','Aragón','Asturias','Baleares','Canarias','Cantabria','Castilla y Leon','Castilla La Mancha','Cataluña','C. Valenciana','Extremadura','Galicia','La Rioja','Madrid','Murcia','Navarra','País Vasco','Ceuta','Melilla'];

  constructor() { }

  ngOnInit(): void {
  }

}
