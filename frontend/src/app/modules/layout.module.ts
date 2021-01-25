import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { LayoutRoutingModule } from './layout-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { CartDialog } from '../components/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from "../effects/cart.effects";
import { OrderService } from '../services/orders.service';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    CartDialog
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    EffectsModule.forFeature([CartEffects]),
  ],
  providers:[
    ApiService,
    OrderService
  ]
})
export class LayoutModule { }
