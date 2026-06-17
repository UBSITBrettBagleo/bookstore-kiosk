import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {

  @Input() book!: Book;

  @Output() addBook = new EventEmitter<Book>();

  added = false;

  addToCart() {
    this.addBook.emit(this.book);

    this.added = true;

    setTimeout(() => {
      this.added = false;
    }, 1000);
  }

}