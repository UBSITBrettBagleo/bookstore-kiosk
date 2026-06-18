import { Component } from '@angular/core';
import { BookStoreService } from '../../services/book-store';
import { BookCard } from '../../components/book-card/book-card';

@Component({
  selector: 'app-catalog',
  imports: [BookCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

  constructor(
    public store: BookStoreService
  ) {}

}

