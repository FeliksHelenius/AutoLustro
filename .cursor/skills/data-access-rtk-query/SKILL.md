---
name: data-access-rtk-query
description: Enforces data access through RTK Query only; no inline fetch or ad-hoc HTTP in components. Use when writing or reviewing TypeScript/TSX that fetches or mutates remote data, or when adding new API calls.
---

# Data Access (RTK Query only)

## When to use this skill

Use when:

- Adding or changing code that loads or updates remote data (`.ts` / `.tsx`).
- Reviewing or refactoring components/hooks that perform HTTP requests.
- Introducing new API endpoints or client-side data needs.

## Core rules

- **No inline `fetch()`** in components, hooks, or utilities.
- No ad-hoc HTTP clients inside React code (e.g. axios, `fetch`) in UI layer.
- All remote data goes through **RTK Query**:
  - Prefer existing API slice/endpoints first.
  - If new data is needed: add or extend endpoints in the API slice, then use the generated hooks.
- Mutations and queries must be cached and invalidated via RTK Query patterns (tags, `invalidatesTags`, `providesTags`), not manual refetch logic.

## Checklist

When adding or changing data access:

- [ ] No `fetch()` or axios (or similar) in components/hooks/utilities.
- [ ] New endpoints live in the RTK Query API slice; components use generated hooks.
- [ ] Cache invalidation/updates use RTK Query (tags, not manual refetch).
