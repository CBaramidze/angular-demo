import { Product } from "./products.model";

export interface Order {
  products: Product[],
  total: number
}