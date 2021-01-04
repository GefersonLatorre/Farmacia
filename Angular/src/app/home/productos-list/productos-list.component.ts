import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../../shared/model/producto.model'
import { ProductoService } from '../../shared/service/producto.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styles: [
  ]
})
export class ProductosListComponent implements OnInit {
  @Output() public dataD: EventEmitter<Producto> = new EventEmitter();

  constructor(public serviceCrudD: ProductoService) { }

  ngOnInit(): void {
    this.serviceCrudD.refreshList();
  }

}
