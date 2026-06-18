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
      genre: ['Sci-fi, Space opera'],
      image: 'https://m.media-amazon.com/images/I/81IIc433V7L.jpg'
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      price: 420,
      genre: ['Sci-Fi, Space opera'],
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 300,
      genre: ['Dystopian'],
      image: 'https://m.media-amazon.com/images/I/61HkdyBpKOL.jpg'
    },
    {
      id: 4,
      title: 'Red Rising',
      author: 'Pierce Brown',
      price: 480,
      genre: ['Sci-Fi, Distopian'],
      image: 'https://static.wikia.nocookie.net/red-rising/images/b/b3/Red-rising-subpress.jpeg/revision/latest/scale-to-width/360?cb=20180602074240'
    },
    {
      id: 5,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 400,
      genre: ['Fantasy, Young adult'],
      image: 'https://i.pinimg.com/originals/b2/d7/b6/b2d7b6822281373a2254ef576e95c280.jpg'
    },
    {
      id: 6,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 340,
      genre: ['Sci-Fi'],
      image: 'https://cdn.kobo.com/book-images/1ec4149b-5080-4aae-aa6c-6e27ed34b6e4/353/569/90/False/project-hail-mary.jpg'
    },
    {
      id: 7,
      title: 'World War Z',
      author: 'Max Brooks',
      price: 450,
      genre: ['Horror'],
      image: 'https://m.media-amazon.com/images/I/91KfFzGVkzL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 8,
      title: 'How to Date a Superhero (And Not Die Trying)',
      author: 'Cristina Fernandez',
      price: 250,
      genre: ['Romance, Superhero'],
      image: 'https://m.media-amazon.com/images/I/81BMgkHcCJL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 9,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 360,
      genre: ['Sci-Fi'],
      image: 'https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'Maze Runner',
      author: 'James Dasher',
      price: 290,
      genre: ['Dystopian, Young adult'],
      image: 'https://cdn.kobo.com/book-images/5f4afbce-f9bf-4c87-92b1-806c2f3c7b41/1200/1200/False/the-maze-runner-maze-runner-book-one.jpg'
    },
    {
      id: 11,
      title: 'A Kingdom of Courage and Cruelty',
      author: 'A.P. Beswick',
      price: 330,
      genre: ['Fantasy'],
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1652151875i/61065561.jpg'
    },
    {
      id: 12,
      title: 'Sherlock Holes: A Study in Scarlet',
      author: 'Sir Arthur Conan Doyle',
      price: 320,
      genre: ['Mystery'],
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781847498724.jpg'
    },
    {
      id: 13,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 270,
      genre: ['Classic'],
      image: 'https://static.tvtropes.org/pmwiki/pub/images/selindjer_nad_propastyu_vo_rji.jpg'
    },
    {
      id: 14,
      title: 'How to Train Your Dragon',
      author: 'Cressida Cowell',
      price: 300,
      genre: ["Children's literature, Fantasy"],
      image: 'https://m.media-amazon.com/images/I/81nXgAQcmAL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 15,
      title: 'The Witcher" Sword of Destiny',
      author: 'Andrzej Sapkowski',
      price: 400,
      genre: ['Fantasy'],
      image: 'https://preview.redd.it/making-my-own-kindle-book-covers-since-im-not-a-fan-of-the-v0-23bvx944d3b81.png?width=640&crop=smart&auto=webp&s=58c7b0e52b189c64c235fdd8a109b30fd420a61b'
    }
  ]);

  cart = signal<Book[]>([]);

  cartTotal = computed(() =>
    this.cart().reduce(
      (total, book) => total + book.price,
      0
    )
  );

  getBooksByGenre(genre: string) {
    return this.books().filter(book =>
      book.genres.includes(genre)
    );
  }

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