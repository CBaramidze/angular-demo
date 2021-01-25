import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { BeginCartOrderSubmit } from '../actions/cart.actions';
import { OrderService } from '../services/orders.service';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private orderService: OrderService) { }

  postOrder$ = createEffect(() => this.actions$.pipe(
    ofType(BeginCartOrderSubmit),
    mergeMap((action) => this.orderService.postOrder(action.products)
      .pipe(
        map(order => ({ type: '[Cart Component] Success Submit order', payload: order })),
        catchError(() => EMPTY)
      ))
    )
  );
}