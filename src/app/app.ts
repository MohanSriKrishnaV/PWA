import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CartStore } from './core/stores/cart.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pwa');
  constructor(private router: Router,public cartStore: CartStore) {
    console.log('App constructor',cartStore.totalItems(),cartStore);
  }
}
