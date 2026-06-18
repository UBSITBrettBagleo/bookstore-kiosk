import { Component } from '@angular/core';
import { BookStoreService } from '../../services/book-store';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  constructor(
    public store: BookStoreService
  ) {}


}