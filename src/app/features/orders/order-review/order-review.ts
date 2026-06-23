import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-order-review',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './order-review.html',
  styleUrl: './order-review.scss',
})
export class OrderReview {}
