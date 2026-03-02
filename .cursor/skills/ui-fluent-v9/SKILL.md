---
name: ui-fluent-v9
description: UI rules for Fluent UI v9 components and shared components. Use when creating or editing React UI in src/**/*.tsx — default to Fluent v9, avoid custom primitives when Fluent has an equivalent, and prefer existing shared components with backward-compatible changes.
---

# UI (Fluent UI v9)

- Default to **Fluent UI v9 components** and design patterns.
- Avoid custom primitives when Fluent provides an equivalent.

## Shared components first

- Before creating a new component, **search for an existing shared/common component** used widely.
- Prefer adapting via props/variants/slots/composition so it still works elsewhere.
- Changes must remain backward-compatible unless explicitly requested otherwise.
