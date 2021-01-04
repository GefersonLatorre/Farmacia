import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ProductosComponent } from '../home/productos/productos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild(ProductosComponent) productosComponent: ProductosComponent;

  userDetails;
  panels: boolean = false;
  text: string = "Productos";
  idFactura: number;

  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  parent(id: any){
    if(id == 0){    
      this.panels = false;
      this.text = "Productos";
    }else{
      this.text = "Facturas"
      this.panels = true;
      this.idFactura = id;
    }
  }

  parentfuncD(data: any) {
    this.productosComponent.uploadDatosD(data);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
