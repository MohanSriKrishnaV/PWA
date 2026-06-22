import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/home/home')
        .then(m => m.Home)
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(m => m.ProductList)
  },

  {
    path: 'customers',
    loadComponent: () =>
      import('./features/customers/customer-list/customer-list')
        .then(m => m.CustomerList)
  },

  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/order-list/order-list/order-list')
        .then(m => m.OrderList)
  }
  ,

  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports/reports')
        .then(m => m.Reports)
  },
  {
  path: 'orders/create',
  loadComponent: () =>
    import('./features/orders/create-order/create-order')
      .then(m => m.CreateOrder)
},
{
  path: 'cart',
  loadComponent: () =>
    import('./features/cart/cart/cart')
      .then(m => m.Cart)
}
];