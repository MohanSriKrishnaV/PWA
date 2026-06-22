import { Component } from '@angular/core';
import { CUSTOMERS } from '../../../core/data/customers';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
    customers = CUSTOMERS;

}
