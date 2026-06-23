import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartStore } from './core/stores/cart.store';
import { MATERIAL_IMPORTS } from './shared/material-imports';
import { SyncService } from './core/services/sync';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ...MATERIAL_IMPORTS,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pwa');
  constructor(private router: Router, public cartStore: CartStore) {
    // console.log('App constructor', cartStore.totalItems(), cartStore);
  }
  network = inject(SyncService);
}
