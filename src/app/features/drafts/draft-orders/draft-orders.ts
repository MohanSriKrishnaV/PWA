import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-draft-orders',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './draft-orders.html',
  styleUrl: './draft-orders.scss',
})
export class DraftOrders {}
