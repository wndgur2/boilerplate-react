# Entities Layer

This directory contains business entities following Feature Sliced Design architecture.

## User Entity Example

The `user` entity demonstrates the FSD structure for business entities:

```
user/
├── model/          # Domain models, types, interfaces
│   └── types.ts
├── ui/             # Entity-specific UI components
│   └── UserCard.tsx
└── index.ts        # Public API
```

## What are Entities?

Entities represent core business concepts and domain models that are:

- **Reusable** across multiple features and pages
- **Domain-focused** (User, Product, Order, etc.)
- **Independent** of specific features or pages

## Creating a New Entity

1. Create a directory for your entity: `entities/entity-name/`
2. Add subdirectories as needed:
   - `model/` - Types, interfaces, schemas
   - `ui/` - Entity-specific display components
   - `api/` - Entity-specific API calls (optional)
   - `lib/` - Entity-specific utilities (optional)
3. Export public API through `index.ts`

Example:

```typescript
// entities/product/index.ts
export type { Product } from './model/types';
export { ProductCard } from './ui/ProductCard';
```

## Usage

Import entities in features or pages:

```typescript
import { User, UserCard } from '@/entities/user';

// Use in your component
const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  createdAt: new Date(),
};

<UserCard user={user} />
```
