import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Vueloservice {

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }
}