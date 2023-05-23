import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/products.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private myList: Productos[] = [];

  private contd = new BehaviorSubject(0);

  private myCart = new BehaviorSubject<Productos[]>([]);
  conteo$ = this.contd.asObservable();
  myCart$ = this.myCart.asObservable();
  constructor() {}

  addProduct(producto: Productos) {
    if (this.myList.length === 0) {
      producto.cantidad = 1;
      this.myList.push(producto);
      this.myCart.next(this.myList);
    } else {
      const productMod = this.myList.find((element) => {
        return element.id === producto.id;
      });
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        producto.cantidad = 1;
        this.myList.push(producto);
        this.myCart.next(this.myList);
      }
    }
  }

  deleteProduct(id: number) {
    this.myList = this.myList.filter((product) => {
      return product.id != id;
    });
    this.myCart.next(this.myList);
  }

  findProductById(id: number) {
    return this.myList.find((element) => {
      return element.id === id;
    });
  }

  totalCart() {
    const total = this.myList.reduce(function (acc, product) {
      return acc + product.cantidad * product.price;
    }, 0);

    return total;
  }

  contador(contador: number) {
    this.contd.next(contador);
  }
}
