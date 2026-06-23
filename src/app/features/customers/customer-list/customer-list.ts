import { Component } from '@angular/core';
import { CUSTOMERS } from '../../../core/data/customers';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
    customers = CUSTOMERS;

}
