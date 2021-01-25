import { createAction, props } from '@ngrx/store';
import { Order } from '../models/orders.model';
import { Product } from '../models/products.model';
import { OrdersComponent } from '../modules/orders/orders.component';

export const BeginGetOrders = createAction('[Orders Component] Begin Get Orders');
export const SuccessGetOrders = createAction('[Orders Component] Success Get Orders', props<{ payload: Order[] }>());
