import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from "../models/products.model";
import { BeginGetProducts, ProductQuantityAdd, ProductQuantityRemove, SuccessGetProducts } from '../actions/products.actions';
import { Order } from '../models/orders.model';
import { SuccessGetOrders } from '../actions/order.actions';

export interface OrderState {
  orders: Array<Order>,
  loaded: Boolean
}

export const initialState: OrderState = {
  orders: [],
  loaded: false
};

const _productReducer = createReducer(
  initialState,
  on(BeginGetProducts, (state) => {
    return {
      ...state
    }
  }),
  on(SuccessGetOrders, (state, { payload }) => {
    return {
      ...state,
      orders: payload.map((order) => ({
        ...order
      })),
      loaded: true
    }
  })
);

export const getProductState = createFeatureSelector<OrderState>('orders');

export const getOrders = createSelector(
  getProductState,
  (state: OrderState) => state.orders
);

export const getLoaded = createSelector(
  getProductState,
  (state: OrderState) => state.loaded
);

export function orderReducer(state: OrderState | undefined, action: any) {
  return _productReducer(state, action);
}