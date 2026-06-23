import { Component, inject } from '@angular/core';
import { PRODUCTS } from '../../../core/data/products';
import { CartStore } from '../../../core/stores/cart.store';
import { Product } from '../../../core/models/product.model';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
    products = PRODUCTS;


    cartStore = inject(CartStore);

addToCart(product: Product) {
  this.cartStore.addToCart(product);
}
}
