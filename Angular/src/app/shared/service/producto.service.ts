import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  readonly rootURL = 'http://localhost:51358/api';
  list: Producto[];

  constructor(private http: HttpClient) { }

  postProducto(formDataCrud: Producto) {    
    return this.http.post(this.rootURL + '/Producto', formDataCrud);
  }
  putProducto(formDataCrud: Producto) {
    return this.http.put(this.rootURL + '/Producto/'+ formDataCrud.codigo, formDataCrud);
  }
  getProductos() {
    console.log('1', this.http.get(this.rootURL + '/Producto'))
    return this.http.get(this.rootURL + '/Producto')
  }
  refreshList(){
    this.http.get(this.rootURL + '/Producto')
    .toPromise()
    .then(res => this.list = res as Producto[]);
  }
}
