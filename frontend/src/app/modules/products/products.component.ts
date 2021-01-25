import { state } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AddToCart } from 'src/app/actions/cart.actions';
import { BeginGetProducts, ProductQuantityAdd, ProductQuantityRemove } from 'src/app/actions/products.actions';
import { Product } from 'src/app/models/products.model';
import { getLoaded, getproducts } from 'src/app/reducers/products.reducer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.store.pipe(select(getproducts));
  loaded$ = this.store.pipe(select(getLoaded));
  
  constructor(private store: Store<{products: Product[], loaded: boolean}>) { 
  }

  ngOnInit() {
    this.store.dispatch(BeginGetProducts());
  }

  getImageUrl(image: String){
    return `${environment.api_url}/public/${image}`
  }

  addQuantity(index: number) {
    this.store.dispatch(ProductQuantityAdd({ productIndex: index}));
  }

  removeQuantity(index: number) {
    this.store.dispatch(ProductQuantityRemove({ productIndex: index }));
  }

  itemTrackBy(index: number, product: Product) {
    return product.name;
  }

  addToCart(product: Product){
    this.store.dispatch(AddToCart({ product }))
  }

}