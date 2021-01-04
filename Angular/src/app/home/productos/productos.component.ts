import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../shared/model/producto.model'
import { ProductoService } from '../../shared/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  datosD: Producto = new Producto();

  constructor(private serviceCrudD: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  uploadDatosD(data: Producto) {
    this.datosD = data;
  }

  resetForm() {
    this.datosD = new Producto();
  }

  onSubmit() {
    if (this.datosD.codigo == 0 || this.datosD.codigo == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudD.postProducto(this.datosD).subscribe(
      res => {
        this.toastr.success('Enviado correctamente', 'Producto Registrado');
        this.resetForm();
        this.serviceCrudD.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudD.putProducto(this.datosD).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Enviado correctamente', 'Producto Modificado');
        this.serviceCrudD.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
