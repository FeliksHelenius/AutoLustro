---
name: frontend-react-standards
description: Defines frontend non-negotiables for this project: React 19.2 without React Compiler, react-router v7 routing patterns, and region-based component organization. Use when creating or modifying React frontend code, routing, or component structure.
---

# Frontend React Standards

## When to use this skill

Use this skill whenever you:

- Create or modify React components.
- Add or change routing and navigation.
- Refactor frontend structure or move logic between components.

## Core rules

### React version and compiler

- Use React 19.2 as the mental model for APIs and behavior.
- **Assume React Compiler is NOT enabled.**
- Do **not** rely on compiler-only optimizations or transforms (e.g., automatic memoization, effect deduplication, or compiler-specific annotations).
- Prefer explicit, idiomatic React patterns that work without any compile-time magic.

### Routing

- Use **react-router v7** patterns and APIs for navigation and route composition.
- Prefer the current v7 primitives (e.g., `createBrowserRouter`, `RouterProvider`, nested routes, data APIs) over legacy v5/v6 patterns.
- Use route-based code splitting where appropriate via react-router’s recommended mechanisms for v7.
- For navigation:
  - Use hooks like `useNavigate`, `useParams`, `useLocation` instead of ad-hoc URL handling.
  - Avoid manually constructing URLs when a react-router helper or route object can be used instead.

### Component code organization

In React component files, organize code using **explicit regions** in this order:

1. Imports
2. Types/interfaces (if applicable)
3. Component definition with regions inside

Inside each component/module, structure implementation sections using regions:

```ts
//#region -------------------- States
// ...hooks/state...
//#endregion ----------------- States

//#region -------------------- Effects
// ...effects...
//#endregion ----------------- Effects

//#region -------------------- Helpers
// ...helper functions and derived values...
//#endregion ----------------- Helpers

//#region -------------------- Event handlers
// ...callbacks and event handlers...
//#endregion ----------------- Event handlers

//#region -------------------- Render
// ...JSX / render logic...
//#endregion ----------------- Render
```

Guidance:

- Regions are **inside** the component body when they refer to hooks, effects, handlers, and render logic for that component.
- Keep related logic together within the same region; avoid scattering a single concern across multiple regions.
- Prefer a small number of well-defined helpers inside the Helpers region over inline complex logic in the Render region.
- If a file contains multiple components, either:
  - Use regions per primary component, or
  - Extract secondary components into separate files when they grow complex.

## Checklist for new or updated components

When creating or editing a component, ensure:

- [ ] Uses React 19.2-compatible patterns and does not rely on React Compiler-specific behavior.
- [ ] Routing uses react-router v7 primitives and patterns where navigation is involved.
- [ ] Component file is organized with the standard regions: **States**, **Effects**, **Helpers**, **Event handlers**, **Render** (even if some regions are temporarily empty).

## Examples

### Simple component skeleton

```tsx
import { useState, useEffect } from "react";

type Props = {
  initialCount?: number;
};

export function Counter({ initialCount = 0 }: Props) {
  //#region -------------------- States
  const [count, setCount] = useState(initialCount);
  //#endregion ----------------- States

  //#region -------------------- Effects
  useEffect(() => {
    // e.g. sync with localStorage or analytics
  }, [count]);
  //#endregion ----------------- Effects

  //#region -------------------- Helpers
  const isEven = count % 2 === 0;
  //#endregion ----------------- Helpers

  //#region -------------------- Event handlers
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  //#endregion ----------------- Event handlers

  //#region -------------------- Render
  return (
    <div>
      <p>Count: {count}</p>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
  //#endregion ----------------- Render
}
```

### Route-focused example (react-router v7 style)

When working with routing, prefer v7 primitives and nested routes:

```ts
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { HomePage } from "./HomePage";
import { DetailsPage } from "./DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "details/:id", element: <DetailsPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
```

Always:

- Use react-router’s navigation hooks (e.g., `useNavigate`) inside components.
- Keep route configuration and component logic cleanly separated, while still following the region structure inside components.

