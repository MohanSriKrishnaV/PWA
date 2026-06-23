import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartStore } from './core/stores/cart.store';
import { MATERIAL_IMPORTS } from './shared/material-imports';
import { SyncService } from './core/services/sync';
import { OrderDbService } from './core/services/db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ...MATERIAL_IMPORTS,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pwa');
  constructor(public cartStore: CartStore) {
  }
  network = inject(SyncService);
}
