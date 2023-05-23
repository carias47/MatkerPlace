import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'market',
    loadChildren: () =>
      import('./marketplace/market.module').then((m) => m.MarketModule),
  },
  {
    path: '**',
    redirectTo: 'market',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
