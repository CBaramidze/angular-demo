import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from "../models/products.model";
import { BeginGetProducts, ProductQuantityAdd, ProductQuantityRemove, SuccessGetProducts } from '../actions/products.actions';

export interface ProductState {
  products: Array<Product>,
  loaded: Boolean
}

export const initialState: ProductState = {
  products: [],
  loaded: false
};

const _productReducer = createReducer(
  initialState,
  on(BeginGetProducts, (state) => {
    return {
      ...state
    }
  }),
  on(SuccessGetProducts, (state, { payload }) => {
    return {
      ...state,
      products: payload.map((product) => ({
        ...product,
        quantity: 1
      })),
      loaded: true
    }
  }),
  on(ProductQuantityAdd, (state, { productIndex }) => {
    return {
      ...state,
      products: state.products.map((product, index) => index == productIndex ? 
      { ...product, quantity: product.quantity + 1 } : { ...product })
    }
  }),
  on(ProductQuantityRemove, (state, { productIndex }) => {
    return {
      ...state,
      products: state.products.map((product, index) => index == productIndex ?
        { ...product, quantity: product.quantity - 1 < 1 ? 1 : product.quantity - 1} : { ...product })
    }
  })
);

export const getProductState = createFeatureSelector<ProductState>('products');

export const getproducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);

export const getLoaded = createSelector(
  getProductState,
  (state: ProductState) => state.loaded
);

export function productReducer(state: ProductState | undefined, action: any) {
  return _productReducer(state, action);
}