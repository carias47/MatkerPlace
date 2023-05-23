import { Component } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { Productos } from '../../interfaces/products.interface';
import { Observable } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  myCart$: Observable<Productos[]> = this.carritoService.myCart$;

  constructor(private carritoService: CarritoService) {}
  ngOnInit(): void {}

  totalProductos(price: number, units: number) {
    return price * units;
  }

  actualizarCantidad(operation: string, id: number) {
    const product = this.carritoService.findProductById(id);
    if (product) {
      if (operation === 'disminuir' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'aumentar') {
        product.cantidad = product.cantidad + 1;
      }
      if (product.cantidad === 0) {
        this.deleteProduct(id);
      }
    }
  }
  deleteProduct(id: number) {
    this.carritoService.deleteProduct(id);
  }

  totalCart() {
    const result = this.carritoService.totalCart();

    return result;
  }
  downloadCSV(): void {
    // Código para generar y descargar el archivo CSV
    this.myCart$.subscribe((data: any[]) => {
      let csvData = 'Nombre, Precio, Categoria, Cantidad\n';
      data.forEach((item: any) => {
        csvData += `${item.title}, ${item.price}, ${item.category.name}, ${item.cantidad}\n`;
      });
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'data.csv';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
