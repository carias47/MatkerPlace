import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FiltroPipe } from './pipes/filter.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductIdComponent } from './pages/product-id/product-id.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    NavbarComponent,
    FiltroPipe,
    PaginatorComponent,
    CategoriesComponent,
    CarouselComponent,
    ProductIdComponent,
    SpinnerComponent,
    CartComponent,
  ],
  imports: [CommonModule, MarketRoutingModule],
})
export class MarketModule {}
