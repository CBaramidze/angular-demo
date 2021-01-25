import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/products.model";
import { ApiService } from "./api.service";

@Injectable()
export class ProductService {
  constructor(
    private apiService: ApiService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get(environment.products_endpoint);
  }
}
