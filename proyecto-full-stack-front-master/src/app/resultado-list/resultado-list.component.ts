import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-list',
  templateUrl: './resultado-list.component.html',
  styleUrls: ['./resultado-list.component.scss']
})
export class ResultadoListComponent implements OnInit{
  @Input() codigoVuelo:string;
  @Input() tiempoVuelo:string;
  @Input() horaSalida:string;
  @Input() horaLlegada:string;
  @Input() monedaDestino:string;
  @Input() monedaCambio:string;

  constructor(){

  }

  ngOnInit(): void{
  }
}