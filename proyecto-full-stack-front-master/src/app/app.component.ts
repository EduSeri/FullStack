import { Component } from '@angular/core';
import { write } from '@popperjs/core';
import { Climaservice } from './services/Clima.service';
import { Vueloservice } from './services/Vuelo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'angular-laclase';

  countries=[
    'MAD',
    'DUB',
    'EDI',
    'BCN',
    'PSA',
    'LIS'
  ]

  monedaForm=[
    'EUR',
    'DOL'
  ]

  ocultar:boolean=true;
  mostrar:boolean=false;

  aSalida:string="";
  aLlegada:string="";
  fSalida:string="";
  monedaLlegada:string="";

  public climaResult: any={};
  watherimg:string="";
  nube:string="";
  grado:string="";
  public vueloResult: any={};
  codigoVuelo:string="";
  tiempoVuelo:string="";
  horaSalida:string="";
  horaLlegada:string="";
  monedaDestino:string="";
  public monedaResult: any={};
  monedaCambio:string="";

  constructor (private servicio: Climaservice){
  }
  
  ngoninit(){
    this.cargaData();
  }

  cargaData(){
    this.servicio.get("http://localhost:3000/weathercurrent.json?q=MAD&aqi=no").subscribe(respuesta=>{
      this.climaResult=(respuesta)
    })
    this.nube=this.climaResult?.current?.condition?.icon;
    this.grado=this.climaResult?.current?.temp_C;
  }
  
  clickFunction() {
    this.ocultar = false;
    this.mostrar = true;

    this.cargarVuelo();
  }
  
  cargarVuelo(){

    this.servicio.get("http://localhost:3000/detail/flights?origin_code="+this.aSalida+"&destination_code="+this.aLlegada+"&origin_departure_date="+this.fSalida).subscribe(respuesta=>{
      this.vueloResult=(respuesta)
      console.log(this.aSalida+","+this.aLlegada+","+this.fSalida)
    })

    var auxStringLlegada = this.vueloResult?.origin_to_destination_trip?.arrival_datetime_utc;
    auxStringLlegada = auxStringLlegada.substring(11,8);
    var auxStringSalida = this.vueloResult?.origin_to_destination_trip?.departure_datetime_utc;
    auxStringSalida = auxStringSalida.substring(11,8);

    this.codigoVuelo=this.vueloResult?.origin_to_destination_trip?.fligth_number;
    this.tiempoVuelo=this.vueloResult?.origin_to_destination_trip?.duration_hours;
    this.horaLlegada= auxStringLlegada;
    this.horaSalida= auxStringSalida;
    this.monedaDestino=this.vueloResult?.origin_to_destination_trip?.currency;
  }

  cargaMoneda(){
    this.servicio.get("http://localhost:3000/detail/currency/convert?to="+this.monedaLlegada+"&from="+this.monedaDestino+"&amount=1").subscribe(respuesta=>{
      this.monedaResult=(respuesta)
    })
    this.monedaCambio=this.monedaResult?.current?.condition?.icon;
  }

}