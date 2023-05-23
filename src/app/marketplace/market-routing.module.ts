import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductIdComponent } from './pages/product-id/product-id.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            component: ProductosComponent,
          },
          {
            path: ':id',
            component: ProductIdComponent,
          },
        ],
      },
      {
        path: 'categorias',
        component: CategoriesComponent,
      },
      {
        path: 'mi-carrito',
        component: CartComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
