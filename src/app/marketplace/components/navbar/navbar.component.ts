import { Component } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cantidadCarrito: number = 0;
  constructor(
    private productsService: AllProductsService,
    private carritoService: CarritoService
  ) {}
  ngOnInit() {
    this.carritoService.conteo$.subscribe((res) => {
      this.cantidadCarrito = res;
    });
  }
}
