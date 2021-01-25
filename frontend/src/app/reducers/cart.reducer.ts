import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AddToCart, CartQuantityAdd, CartQuantityRemove, CartProductRemove, SuccessCartOrderSubmit } from '../actions/cart.actions';
import { Product } from "../models/products.model";
import * as _ from "lodash";

export interface CartState {
  products: Array<Product>,
  total: number,
  count: number
}

export const initialState: CartState = {
  products: [],
  total: 0.00,
  count: 0
};

const _cartReducer = createReducer(
  initialState,
  on(AddToCart, (state, { product }) => {
    let productIndex = state.products.findIndex(a => a.name === product.name);
    
    let uniqueProducts =  _.uniqBy([...state.products, product], (product) => {
      return product.name
    });
    if(productIndex >= 0) {
      uniqueProducts = uniqueProducts.map((uniqueProduct) => {
        if (uniqueProduct.name === product.name) {
          return {
            ...product,
            quantity: uniqueProduct.quantity + product.quantity
          }
        } else {
          return { ...uniqueProduct }
        }
      });
    } else {
      [...state.products, product]
    }
    return {
      ...state,
      products: uniqueProducts,
      total: [...state.products, product].map((product) => product.quantity * product.price).reduce((a,b) =>  a + b, 0),
      count: uniqueProducts.map((product) => product.quantity).reduce((a,b) => a + b)
    }
  }),
  on(CartQuantityAdd, (state, { productIndex }) => {
    const products = state.products.map((product, index) => index == productIndex ?
      { ...product, quantity: product.quantity + 1 } : { ...product })
    return {
      ...state,
      products,
      total: products.map((product) => product.quantity * product.price).reduce((a, b) => a + b, 0),
      count: state.count + 1
    }
  }),
  on(CartQuantityRemove, (state, { productIndex }) => {
    const products = state.products.map((product, index) => index == productIndex ?
      { ...product, quantity: product.quantity - 1 < 1 ? 1 : product.quantity - 1 } : { ...product });
    return {
      ...state,
      products,
      total: products.map((product) => product.quantity * product.price).reduce((a, b) => a + b, 0),
      count: state.count - 1
    }
  }),
  on(CartProductRemove, (state, { productIndex }) => {
    const products = state.products.filter((item, index) => index !== productIndex);
    return {
      ...state,
      products,
      total: products.map((product) => product.quantity * product.price).reduce((a, b) => a + b, 0),
      count: products.length
    }
  }),
  on(SuccessCartOrderSubmit, (state) => {
    return {
      ...initialState
    }
  })
);

export const getProductState = createFeatureSelector<CartState>('cart');

export const getproducts = createSelector(
  getProductState,
  (state: CartState) => state.products
);

export const getTotal = createSelector(
  getProductState,
  (state: CartState) => state.total
);

export const getCount = createSelector(
  getProductState,
  (state: CartState) => state.count
);


export function cartReducer(state: CartState | undefined, action: any) {
  return _cartReducer(state, action);
}