import { Pipe, PipeTransform } from '@angular/core';
import { Productos } from '../interfaces/products.interface';

@Pipe({
  name: 'filter',
})
export class FiltroPipe implements PipeTransform {
  transform(
    products: Productos[],
    page: number = 0,
    search: string = ''
  ): Productos[] {
    if (search.length === 0) return products.slice(page, page + 16);

    const filteredProducts = products.filter((msj) =>
      msj.title.toLowerCase().includes(search.toLowerCase())
    );

    return filteredProducts.slice(page, page + 16);
  }
}
