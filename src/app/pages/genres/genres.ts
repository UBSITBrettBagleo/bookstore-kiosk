import { Component } from '@angular/core';
import { BookStoreService } from '../../services/book-store';
import { BookCard } from '../../components/book-card/book-card';

@Component({
  selector: 'app-genres',
  imports: [BookCard],
  templateUrl: './genres.html',
  styleUrl: './genres.css'
})
export class Genres {

  selectedGenre = 'Fantasy';

  constructor(
    public store: BookStoreService
  ) {}

}