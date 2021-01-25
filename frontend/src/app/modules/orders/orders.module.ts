import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/effects/product.effects';
import { ProductService } from 'src/app/services/products.service';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { OrderService } from 'src/app/services/orders.service';
import { OrdersComponent } from './orders.component';
import { OrderRoutingModule } from './orders.routing.module';
import { OrderEffects } from 'src/app/effects/order.effect';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    EffectsModule.forFeature([OrderEffects]),
    MatListModule
  ],
  providers: [
    ApiService,
    OrderService
  ]
})
export class OrdersModule { }
