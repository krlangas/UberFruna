import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  origen:string='';
  destino:string='';
  costo:number=0;
  constructor() { }

  ngOnInit() {
  }

}
