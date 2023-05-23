import { Component, Input, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { Productos } from '../../interfaces/products.interface';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public search: string = '';
  public pageNum: number = 0;
  public contador: number = 0;
  public productos: Productos[] = [];

  constructor(
    private allProductsService: AllProductsService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.allProductsService.getProducts().subscribe((resp) => {
      this.productos = resp;
    });
  }
  onSearchProduct(search: string = '') {
    this.pageNum = 0;
    this.search = search;
  }

  addToCart(product: Productos) {
    return this.carritoService.addProduct(product);
  }
  addContador() {
    this.contador++;
    return this.carritoService.contador(this.contador);
  }
}
