import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Descipccion } from '../../interfaces/producto-descipcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Descipccion;
  id: string;
  // para leer el url
  constructor(private activateR: ActivatedRoute, public ps: ProductosService ) { }

  ngOnInit() {
    // esto estara pendiente de todos los cambios q ocurran con el url
    this.activateR.params
    .subscribe( parametros => {
      console.log(parametros['id']);
        this.ps.getProducto(parametros['id'])
        .subscribe( (product: Descipccion) => {
          console.log(product);
          this.id = parametros['id'];
          this.producto = product;
        });
    });
  }

}
