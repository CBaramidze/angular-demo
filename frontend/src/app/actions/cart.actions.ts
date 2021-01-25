import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products.model';

export const AddToCart = createAction('[Cart Component] Add To cart', props<{ product: Product }>());
export const CartQuantityAdd = createAction('[Cart Component] Add Quantity to product', props<{ productIndex: number }>());
export const CartQuantityRemove = createAction('[Cart Component] Remove Quantity to product', props<{ productIndex: number }>());
export const CartProductRemove = createAction('[Cart Component] Remove product', props<{ productIndex: number }>());

export const BeginCartOrderSubmit = createAction('[Cart Component] Begin Submit order', props<{ products: Product[] }>());
export const SuccessCartOrderSubmit = createAction('[Cart Component] Success Submit order');
