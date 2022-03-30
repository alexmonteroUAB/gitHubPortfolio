import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http : HttpClient) { }

  public getProductsidx(){
    return this.http.get('https://portfolio-2f3a2-default-rtdb.firebaseio.com/productosidx.json')
  }

  public getProducts(){
    return this.http.get('https://portfolio-2f3a2-default-rtdb.firebaseio.com/productos.json')
  }

  public getProduct(id: string){
    return this.http.get(`https://portfolio-2f3a2-default-rtdb.firebaseio.com/productos/${id}.json`)
  }
}

