import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {
  patente:string='';
  destino:string='';
  Cpasajeros:string='';
  conductor:string='';
  costo:number=0;

  constructor() { }

  ngOnInit() {
  }

}
