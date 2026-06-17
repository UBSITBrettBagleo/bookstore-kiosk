import { Injectable, signal, computed } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books = signal<Book[]>([
    {
      id: 1,
      title: 'Empire of Silence',
      author: 'Christopher Ruocchio',
      price: 350,
      genre: 'Sci-fi, Space opera'
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      price: 420,
      genre: 'Sci-Fi'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 300,
      genre: 'Dystopian'
    },
    {
      id: 4,
      title: 'Red Rising',
      author: 'Pierce Brown',
      price: 480,
      genre: 'Sci-Fi, Distopian'
    },
    {
      id: 5,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 400,
      genre: 'Fantasy, Young adult'
    },
    {
      id: 6,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 340,
      genre: 'Hard Sci-Fi'
    },
    {
      id: 7,
      title: 'World War Z',
      author: 'Max Brooks',
      price: 450,
      genre: 'Horror, Military fiction'
    },
    {
      id: 8,
      title: 'How to Date a Superhero (And Not Die Trying)',
      author: 'Cristina Fernandez',
      price: 250,
      genre: 'Romance, Superhero'
    },
    {
      id: 9,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 360,
      genre: 'Sci-Fi'
    },
    {
      id: 10,
      title: 'Maze Runner',
      author: 'James Dasher',
      price: 290,
      genre: 'Dystopian, Young adult'
    },
    {
      id: 11,
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      price: 330,
      genre: 'Thriller'
    },
    {
      id: 12,
      title: 'Sherlock Holes: A Study in Scarlet',
      author: 'Sir Arthur Conan Doyle',
      price: 320,
      genre: 'Mystery'
    },
    {
      id: 13,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 270,
      genre: 'Classic'
    },
    {
      id: 14,
      title: 'How to Train Your Dragon',
      author: 'Cressida Cowell',
      price: 300,
      genre: 'Children literature'
    },
    {
      id: 15,
      title: 'The Witcher" Sword of Destiny',
      author: 'Andrzej Sapkowski',
      price: 400,
      genre: 'High Fantasy'
    }
  ]);

  cart = signal<Book[]>([]);

  cartTotal = computed(() =>
    this.cart().reduce(
      (total, book) => total + book.price,
      0
    )
  );

  addToCart(book: Book) {
    this.cart.update(cart => [...cart, book]);
  }

  removeFromCart(index: number) {
    this.cart.update(cart =>
      cart.filter((_, i) => i !== index)
    );
  }

  clearCart() {
    this.cart.set([]);
  }

}