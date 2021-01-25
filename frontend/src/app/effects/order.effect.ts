import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BeginGetOrders } from '../actions/order.actions';
import { OrderService } from '../services/orders.service';

@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    private orderService: OrderService) { }

  getOrderss$ = createEffect(() => this.actions$.pipe(
    ofType(BeginGetOrders),
    mergeMap(() => this.orderService.getOrders()
      .pipe(
        map(products => ({ type: '[Orders Component] Success Get Orders', payload: products })),
        catchError(() => EMPTY)
      ))
    )
  );
}