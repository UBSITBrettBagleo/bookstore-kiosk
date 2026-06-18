import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Genres } from './pages/genres/genres';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'catalog',
    component: Catalog
  },
  {
    path: 'genres',
    component: Genres
  },
  {
    path: 'cart',
    component: Cart
  }
];