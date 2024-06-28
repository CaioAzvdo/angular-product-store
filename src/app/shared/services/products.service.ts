import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<Product[]>('/api/products');
  }
}
