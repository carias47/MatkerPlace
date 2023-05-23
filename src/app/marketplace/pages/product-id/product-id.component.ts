import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Productos } from '../../interfaces/products.interface';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css'],
})
export class ProductIdComponent implements OnInit {
  public product?: Productos;
  public contador: number = 0;

  constructor(
    private productServices: AllProductsService,
    private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productServices.getProductById(id)))
      .subscribe((product) => {
        if (!product) return this.router.navigate(['/market/productos']);

        this.product = product;

        return;
      });
  }
  addCarrito(product: Productos) {
    return this.carritoService.addProduct(product);
  }
  addContador() {
    this.contador++;
    return this.carritoService.contador(this.contador);
  }
}
