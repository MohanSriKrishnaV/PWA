import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material-imports';

@Component({
  selector: 'app-offline-banner',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './offline-banner.html',
  styleUrl: './offline-banner.scss',
})
export class OfflineBanner {}
