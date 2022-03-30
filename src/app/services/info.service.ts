import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http' ;



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private http: HttpClient) { }
    
  getInfoPagina(){
    return this.http.get('assets/data/infoPag.json')
  }

  getInfoEquipo(){
    return this.http.get('https://portfolio-2f3a2-default-rtdb.firebaseio.com/equipo.json')
  }
  
}


