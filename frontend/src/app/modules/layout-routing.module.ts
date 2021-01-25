import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'products', loadChildren: () => ProductsModule},
      { path: 'orders', loadChildren: () => OrdersModule },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
