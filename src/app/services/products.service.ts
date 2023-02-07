import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL);
  }
}
