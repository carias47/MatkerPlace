import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Productos } from '../interfaces/products.interface';
import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  _baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this._baseUrl}/products`);
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this._baseUrl}/categories`);
  }
  getProductById(id: number): Observable<Productos | undefined> {
    return this.http
      .get<Productos>(`${this._baseUrl}/products/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
}
