# Progressive Web App (PWA)

A modern, feature-rich Progressive Web Application built with **Angular 22** and **Material Design**. This PWA provides offline-first functionality with IndexedDB for data persistence and real-time synchronization capabilities.

---

## 🎯 Features

### ✅ Core Features Implemented

- **Dashboard** - Home page with overview of key metrics and navigation
- **Product Management** - Browse and view product catalog
- **Customer Management** - View and manage customer information
- **Order Management** - Create, view, and manage orders
- **Shopping Cart** - Add/remove products and manage cart state
- **Reports** - View and generate business reports
- **Offline Support** - Full offline-first capabilities with sync when online
- **Authentication** - User login and authentication system
- **Material UI** - Beautiful, responsive Material Design interface

### 🔌 Progressive Web App (PWA) Features

- Service Worker integration with `@angular/service-worker`
- Offline mode with automatic sync detection
- App shell caching strategy
- Web manifest for installability
- Responsive design for mobile and desktop

---

## 🏗️ Project Architecture

### Core Module (`src/app/core/`)

#### Services
- **`auth.ts`** - Authentication service for user login and authorization
- **`cart.ts`** - Shopping cart management service
- **`db.ts`** - Main database service for data operations
- **`job.ts`** - Background job handling service
- **`order.ts`** - Order management service
- **`product.ts`** - Product catalog service
- **`storage.ts`** - Local storage management service
- **`sync.ts`** - Synchronization service for offline/online data sync

#### State Management
- **`cart.store.ts`** - Cart state store for reactive cart management

#### Interceptors
- **`auth-interceptor.ts`** - HTTP interceptor for authentication token injection

#### Data Models
- `cart-item.model.ts`
- `customer.model.ts`
- `order-item.model.ts`
- `order.model.ts`
- `product.model.ts`

#### Database
- **`app-db.ts`** - IndexedDB configuration and setup using Dexie
- **Core Data Files**
  - `customers.ts` - Sample customer data
  - `products.ts` - Product catalog data

### Feature Modules (`src/app/features/`)

#### Dashboard
- **Home** - Main dashboard landing page with overview

#### Authentication
- **Login** - User authentication component

#### Products
- **ProductList** - Display all products with filtering and search

#### Customers
- **CustomerList** - Display and manage customer directory

#### Orders
- **OrderList** - View all orders
- **CreateOrder** - Create new orders from products
- **OrderReview** - Review order details before confirmation

#### Cart
- **Cart** - Shopping cart page

#### Additional Features
- **Drafts** - Draft order management
- **Inspections** - Inspection tracking module
- **Jobs** - Job list and detail pages
- **Notes** - Note-taking feature
- **Reports** - Business reports and analytics

### Shared Module (`src/app/shared/`)

#### Components
- **Navbar** - Navigation bar with routing links
- **OfflineBanner** - Display offline status indicator

#### Utilities
- **`material-imports.ts`** - Centralized Material module imports
- **`shared-module.ts`** - Shared utilities and components

---

## 📦 Tech Stack

- **Framework**: Angular 22
- **UI Library**: Angular Material 22
- **Database**: Dexie (IndexedDB wrapper)
- **State Management**: Angular Signals & Services
- **Testing**: Vitest 4
- **HTTP Client**: RxJS 7.8
- **TypeScript**: 6.0
- **Build Tool**: Angular CLI 22

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 10.9.8+

### Installation

1. Clone or navigate to the project:
```bash
cd PWA
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm start
```

Or use the Angular CLI directly:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`. The app will automatically reload when you modify source files.

---

## 🔨 Build & Deployment

### Production Build

Create an optimized production build:

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Serve Production Build Locally

After building, serve the production build with http-server:

```bash
npm run dist-runner
```

Or manually:

```bash
npx http-server dist/pwa/browser
```

---

## 🧪 Testing

### Unit Tests

Run unit tests using Vitest:

```bash
npm test
```

Or with Angular CLI:

```bash
ng test
```

Tests are configured to run with Vitest and jsdom for DOM simulation.

---

## 📂 Project Structure

```
PWA/
├── src/
│   ├── index.html
│   ├── main.ts                 # Application entry point
│   ├── styles.scss             # Global styles
│   └── app/
│       ├── app.ts              # Root component
│       ├── app.html
│       ├── app.scss
│       ├── app.routes.ts       # Route configuration
│       ├── app.config.ts       # App configuration
│       ├── core/               # Core module
│       │   ├── services/       # Business logic services
│       │   ├── stores/         # State management
│       │   ├── models/         # Data models
│       │   ├── interceptors/   # HTTP interceptors
│       │   └── db/             # Database setup
│       ├── features/           # Feature modules
│       │   ├── dashboard/
│       │   ├── products/
│       │   ├── customers/
│       │   ├── orders/
│       │   ├── cart/
│       │   ├── auth/
│       │   ├── reports/
│       │   └── ...
│       └── shared/             # Shared components & utilities
├── public/
│   ├── manifest.webmanifest    # PWA manifest
│   ├── icons/                  # App icons
│   └── data/
│       └── products.json       # Product data
├── angular.json                # Angular CLI config
├── tsconfig.json               # TypeScript config
├── ngsw-config.json            # Service Worker config
└── package.json

```

---

## 🔌 PWA Configuration

### Service Worker
- Configured via `ngsw-config.json`
- Automatic caching of app shell and assets
- Background sync for offline data

### Web Manifest
- Located at `public/manifest.webmanifest`
- Defines app name, icons, theme colors, and display mode

---

## 📝 Available npm Scripts

| Script | Purpose |
|--------|---------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm run watch` | Build with watch mode (development) |
| `npm test` | Run unit tests |
| `npm run dist-runner` | Serve production build locally |

---

## 🛠️ Development Commands

### Generate New Component
```bash
ng generate component features/your-feature/your-component
```

### Generate New Service
```bash
ng generate service core/services/your-service
```

### View All Schematics
```bash
ng generate --help
```

---

## 🌐 Routing Map

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Dashboard | Home page (redirected to dashboard) |
| `/dashboard` | Home | Main dashboard view |
| `/products` | ProductList | Product catalog |
| `/customers` | CustomerList | Customer directory |
| `/orders` | OrderList | Orders listing |
| `/orders/create` | CreateOrder | Create new order |
| `/cart` | Cart | Shopping cart |
| `/reports` | Reports | Business reports |

---

## 🔒 Features in Development

- Advanced job scheduling
- Detailed inspection tracking
- Draft order management
- Note-taking system
- Additional reporting features

---

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Dexie Documentation](https://dexie.org)
- [PWA Guidelines](https://web.dev/progressive-web-apps)

---

## 📄 License

This project is private and for internal use.
