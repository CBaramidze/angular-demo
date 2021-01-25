import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { BeginCartOrderSubmit, CartProductRemove, CartQuantityAdd, CartQuantityRemove, SuccessCartOrderSubmit } from 'src/app/actions/cart.actions';
import { Product } from 'src/app/models/products.model';
import { getCount, getproducts, getTotal } from 'src/app/reducers/cart.reducer';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartDialog implements OnInit {
  products$ = this.store.pipe(select(getproducts));
  count$ = this.store.pipe(select(getCount));
  total$ = this.store.pipe(select(getTotal));

  constructor(
    private store: Store<{ products: Product[], total: number }>,
    private actions$: Actions,
    private dialogRef: MatDialogRef<CartDialog>
  ) { 
  }

  ngOnInit() {
    this.actions$
      .pipe(
        ofType(SuccessCartOrderSubmit)
      )
      .subscribe(() => {
        this.dialogRef.close()
      });
  }

  addQuantity(index: number) {
    this.store.dispatch(CartQuantityAdd({ productIndex: index }));
  }

  removeQuantity(index: number) {
    this.store.dispatch(CartQuantityRemove({ productIndex: index }));
  }

  CartProductRemove(index: number){
    this.store.dispatch(CartProductRemove({ productIndex: index }));
  }

  async submitOrder() {
    let products = await this.products$.pipe(take(1)).toPromise();
    this.store.dispatch(BeginCartOrderSubmit({ products }));
  }
}