import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productos: any = [];
  productos_encontrados: any = [];

  textoBusq: any = ''; 

  loading = true;

  constructor(private productsService: ProductsService,
              private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.textoBusq = this.activeRoute.snapshot.paramMap.get('textoBusq');

    this.textoBusq = this.textoBusq.toLowerCase();

    this.productsService.getProductsidx()
    .subscribe((resp : any) => {
      this.productos = resp;

      this.productos.forEach((prod: any) =>{
        let categoria = prod.categoria.toLowerCase();

        if (prod.categoria.indexOf(this.textoBusq) >= 0) {
          this.productos_encontrados.push(prod);
 
        }


      });

      setTimeout(() => {
        this.loading = false;
      }, 2000);
      


    });
  }

}
