import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err) => {
        alert('something went wrong!');
      },
    });
  }
}
