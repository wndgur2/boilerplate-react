# Features Layer

This directory contains feature-specific modules following Feature Sliced Design architecture.

## Counter Example

The `counter` feature demonstrates the FSD structure:

```
counter/
├── model/          # Business logic (hooks, stores)
│   └── useCounter.ts
├── ui/             # UI components
│   └── Counter.tsx
└── index.ts        # Public API
```

## Creating a New Feature

1. Create a directory for your feature: `features/feature-name/`
2. Add subdirectories as needed:
   - `model/` - Business logic, hooks, state management
   - `ui/` - UI components
   - `api/` - API calls specific to this feature
   - `lib/` - Utility functions
3. Export public API through `index.ts`

Example:

```typescript
// features/my-feature/index.ts
export { MyComponent } from './ui/MyComponent';
export { useMyFeature } from './model/useMyFeature';
```
