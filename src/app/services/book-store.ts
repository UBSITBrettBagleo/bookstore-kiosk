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
      genres: ['Sci-Fi', 'Space Opera'],
      image: 'https://m.media-amazon.com/images/I/81IIc433V7L.jpg'
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      price: 420,
      genres: ['Sci-Fi', 'Space Opera'],
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 300,
      genres: ['Dystopian'],
      image: 'https://m.media-amazon.com/images/I/61HkdyBpKOL.jpg'
    },
    {
      id: 4,
      title: 'Red Rising',
      author: 'Pierce Brown',
      price: 480,
      genres: ['Sci-Fi', 'Dystopian', 'Space Opera'],
      image: 'https://static.wikia.nocookie.net/red-rising/images/b/b3/Red-rising-subpress.jpeg/revision/latest/scale-to-width/360?cb=20180602074240'
    },
    {
      id: 5,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 400,
      genres: ['Fantasy', 'Young Adult'],
      image: 'https://i.pinimg.com/originals/b2/d7/b6/b2d7b6822281373a2254ef576e95c280.jpg'
    },
    {
      id: 6,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 340,
      genres: ['Sci-Fi'],
      image: 'https://cdn.kobo.com/book-images/1ec4149b-5080-4aae-aa6c-6e27ed34b6e4/353/569/90/False/project-hail-mary.jpg'
    },
    {
      id: 7,
      title: 'World War Z',
      author: 'Max Brooks',
      price: 450,
      genres: ['Horror'],
      image: 'https://m.media-amazon.com/images/I/91KfFzGVkzL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 8,
      title: 'How to Date a Superhero (And Not Die Trying)',
      author: 'Cristina Fernandez',
      price: 250,
      genres: ['Romance', 'Superhero'],
      image: 'https://m.media-amazon.com/images/I/81BMgkHcCJL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 9,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 360,
      genres: ['Sci-Fi'],
      image: 'https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'Maze Runner',
      author: 'James Dasher',
      price: 290,
      genres: ['Dystopian', 'Young Adult'],
      image: 'https://cdn.kobo.com/book-images/5f4afbce-f9bf-4c87-92b1-806c2f3c7b41/1200/1200/False/the-maze-runner-maze-runner-book-one.jpg'
    },
    {
      id: 11,
      title: 'A Kingdom of Courage and Cruelty',
      author: 'A.P. Beswick',
      price: 330,
      genres: ['Fantasy'],
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1652151875i/61065561.jpg'
    },
    {
      id: 12,
      title: 'Sherlock Holes: A Study in Scarlet',
      author: 'Sir Arthur Conan Doyle',
      price: 320,
      genres: ['Mystery'],
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781847498724.jpg'
    },
    {
      id: 13,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 270,
      genres: ['Classic'],
      image: 'https://static.tvtropes.org/pmwiki/pub/images/selindjer_nad_propastyu_vo_rji.jpg'
    },
    {
      id: 14,
      title: 'How to Train Your Dragon',
      author: 'Cressida Cowell',
      price: 300,
      genres: ['Children', 'Fantasy'],
      image: 'https://m.media-amazon.com/images/I/81nXgAQcmAL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 15,
      title: 'The Witcher" Sword of Destiny',
      author: 'Andrzej Sapkowski',
      price: 400,
      genres: ['Fantasy'],
      image: 'https://preview.redd.it/making-my-own-kindle-book-covers-since-im-not-a-fan-of-the-v0-23bvx944d3b81.png?width=640&crop=smart&auto=webp&s=58c7b0e52b189c64c235fdd8a109b30fd420a61b'
    },
    {
      id: 16,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: 450,
      genres: ['Fantasy', 'Adventure'],
      image: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg'
    },
    {
      id: 17,
      title: 'Percy Jackson and the Lightning Thief',
      author: 'Rick Riordan',
      price: 320,
      genres: ['Fantasy', 'Young Adult'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2txrv-muFYTQtiLWbzVNKdNdOlWCCqYUJA&s'
    },
    {
      id: 18,
      title: 'Eragon',
      author: 'Brandon Sanderson',
      price: 1080,
      genres: ['Fantasy'],
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg'
    },
    {
      id: 19,
      title: 'The Fault in Our Stars',
      author: 'John Green',
      price: 300,
      genres: ['Romance', 'Young Adult'],
      image: 'https://bookquotemonster.wordpress.com/wp-content/uploads/2014/09/the_fault_in_our_stars_by_grodansnagel-d6rujir.jpg?w=640'
    },
    {
      id: 20,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 280,
      genres: ['Romance', 'Classic'],
      image: 'https://cdn.kobo.com/book-images/91a565c9-8a75-4e89-9250-a7c46362547c/1200/1200/False/pride-prejudice-13.jpg'
    },
    {
      id: 21,
      title: 'Dracula',
      author: 'Bram Stoker',
      price: 310,
      genres: ['Horror', 'Classic'],
      image: 'https://m.media-amazon.com/images/I/71xcDXkr1OL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 22,
      title: 'Frankenstein',
      author: 'Mary Shelley',
      price: 290,
      genres: ['Horror', 'Classic'],
      image: 'https://cdnb.artstation.com/p/assets/images/images/067/453/721/large/brandon-kim-frankensteinreimaginedfinalwithtext2.jpg?1695395353'
    },
    {
      id: 23,
      title: 'And Then There Were None',
      author: 'Agatha Christie',
      price: 340,
      genres: ['Mystery'],
      image: 'https://harpercollins.com.au/cdn/shop/files/9780008328924_ddc0ade2-fed1-417a-ba3c-b1742099b789.jpg?v=1776888147'
    },
    {
      id: 24,
      title: 'Murder on the Orient Express',
      author: 'Agatha Christie',
      price: 350,
      genres: ['Mystery'],
      image: 'https://lyceumtheatre.org/wp-content/uploads/2019/09/Murder-on-the-Orient-Express-WebPstr.jpg'
    },
    {
      id: 25,
      title: 'Treasure Island',
      author: 'Robert Louis Stevenson',
      price: 260,
      genres: ['Adventure'],
      image: 'https://cdn.kobo.com/book-images/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg'
    },
    {
      id: 26,
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      price: 270,
      genres: ['Adventure', 'Classic'],
      image: 'https://cdn.kobo.com/book-images/931cff10-8266-4630-a29a-96f338e9dcd3/1200/1200/False/the-adventures-of-tom-sawyer-113.jpg'
    },
    {
      id: 27,
      title: 'Charlotte\'s Web',
      author: 'E.B. White',
      price: 220,
      genres: ['Children', 'Classic'],
      image: 'https://www.dailybreeze.com/wp-content/uploads/2024/02/PVN-L-CHARLOTTE-0229-cover.jpg?fit=620%2C9999px&ssl=1'
    },
    {
      id: 28,
      title: 'Matilda',
      author: 'Roald Dahl',
      price: 240,
      genres: ['Children', 'Fantasy'],
      image: 'https://m.media-amazon.com/images/I/810Pui6CkDL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 29,
      title: 'Ender\'s Game',
      author: 'Orson Scott Card',
      price: 390,
      genres: ['Sci-Fi', 'Young Adult'],
      image: 'https://mpd-biblio-covers.imgix.net/9780765394866.jpg'
    },
    {
      id: 30,
      title: 'The Martian',
      author: 'Andy Weir',
      price: 410,
      genres: ['Sci-Fi'],
      image: 'https://www.bookxcess.com/cdn/shop/products/9781785033827_1.jpg?v=1648791941'
    },
    {
      id: 31,
      title: 'Journey to the Center of the Earth',
      author: 'Jules Verne',
      price: 320,
      genres: ['Adventure', 'Classic'],
      image: 'https://m.media-amazon.com/images/I/911A8d8aCYL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 32,
      title: 'The Long Walk',
      author: 'Stephen King',
      price: 500,
      genres: ['Horror', 'Dystopian'],
      image: 'https://m.media-amazon.com/images/I/81B8uLQ-nFL._AC_UF1000,1000_QL80_.jpg'
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