import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BeginGetProducts } from '../actions/products.actions';
import { ProductService } from '../services/products.service';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(BeginGetProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => ({ type: '[Products Component] Success Get Products', payload: products })),
        catchError(() => EMPTY)
      ))
    )
  );
}