import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true; // bandera
  productos: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }


  private cargarProductos() {
    this.http.get('https://angular-html-86d98.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {
      console.log(resp);
      setTimeout(() => {
        this.cargando = false;
      }, 2000);
      this.productos = resp;
    });
  }


  getProducto( id: string) {
    return this.http.get(`https://angular-html-86d98.firebaseio.com/productos/${id}.json`);

  }

}
