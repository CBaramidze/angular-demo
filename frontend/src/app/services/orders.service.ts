import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Order } from "../models/orders.model";
import { Product } from "../models/products.model";
import { ApiService } from "./api.service";

@Injectable()
export class OrderService {
  constructor(
    private apiService: ApiService
  ) { }

  getOrders(): Observable<Order[]> {
    return this.apiService.get(environment.orders_endpoint);
  }

  postOrder(order: Product[]): Observable<Order> {
    return this.apiService.post(environment.orders_endpoint, order);
  }
}
