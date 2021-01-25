import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products.model';

export const BeginGetProducts = createAction('[Products Component] Begin Get Products');
export const SuccessGetProducts = createAction('[Products Component] Success Get Products', props<{payload: Product[]}>());

export const ProductQuantityAdd = createAction('[Products Component] Add Quantity to product', props<{ productIndex: number }>());
export const ProductQuantityRemove = createAction('[Products Component] Remove Quantity to product', props<{ productIndex: number }>());
