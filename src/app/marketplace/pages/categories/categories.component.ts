import { Component } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  public categories: Categories[] = [];
  constructor(private categoriesService: AllProductsService) {}
  ngOnInit() {
    this.categoriesService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
