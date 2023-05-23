import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { Productos } from '../../interfaces/products.interface';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor(private productService: AllProductsService) {}
  imagenes: Productos[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.imagenes = data;
    });
  }
}
