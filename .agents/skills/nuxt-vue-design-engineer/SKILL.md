---
name: nuxt-vue-design-engineer
description: Design, build and refactor Nuxt 4 + Vue 3.5 + NuxtUI v4 applications with consistent design-engineering conventions. Use when working in Nuxt/NuxtUI Vue codebases to enforce stack defaults, Bun commands, semantic color tokens, NuxtUI-first component choices, and SFC/composable conventions.
---

# Nuxt Vue Design Engineer

## Overview

Apply consistent implementation standards for Nuxt 4 SPA projects using Vue 3.5, NuxtUI v4, Tailwind v4, Bun, and Zod.
Prioritize UI consistency, reusable NuxtUI components, and maintainable composition-based Vue code.

## Default Stack

- Framework: Nuxt 4 with SSR disabled (pure SPA).
- UI framework: Vue 3.5 with Composition API and `<script setup>`.
- Package manager and bundler: use `bun` and `bunx`; do not use `npm`, `npx`, or `yarn`.
- Component library: NuxtUI v4 first; build custom primitives only when no NuxtUI component fits.
- Styling: Tailwind CSS v4 via `@nuxt/ui`.
- Icons: Lucide via `@nuxt/icon`, format `lucide:icon-name`.
- Validation: Zod.

## Commands

- Run dev server: `bun run dev`
- Build production bundle: `bun run build`
- Preview production build: `bun run preview`

## UI System Rules

### NuxtUI-First Component Selection

Prefer existing NuxtUI components before writing custom markup.
Common components:

- `UButton`
- `UIcon`
- `UTabs`
- `UAvatar`
- `UDropdownMenu`
- `UContextMenu`
- `UModal`
- `UInput`

### Semantic Color Tokens

**Always use semantic utilities** and avoid raw Tailwind palette colours or hardcoded hex values in components:

- `bg-default`: main surfaces and panels
- `bg-elevated`: hover states and raised surfaces
- `border-default`: borders and dividers
- `text-default`: primary text
- `text-muted`: secondary text
- `text-dimmed`: tertiary or disabled text
- `text-primary`: active and selected text

7 semantic colors (`primary`, `secondary`, `success`, `info`, `warning`, `error`, `neutral`)

### Global CSS Helpers

Prefer shared helpers from `main.css` over equivalent inline utility groups:

- `.flex-h-2`: `flex items-center gap-2`
- `.flex-h-4`: `flex items-center gap-4`
- `.flex-h-between`: `flex items-center justify-between gap-4`
- `.flex-v-2`: `flex flex-col gap-2`
- `.flex-v-4`: `flex flex-col gap-4`
- `.pd-x`: `px-4`
- `.pd-y`: `py-4`

## Code Conventions

- Keep Vue SFC order as `<template>` then `<script setup lang="ts">`.
- Prefer no local `<style>` blocks; use Tailwind utilities and shared global helpers.
- Use strict TypeScript; import shared types from `~/../shared/types` when needed.
- Use `~` alias for imports from `app/`.
- Organize composables with section comments in the form `// === Section === //`.
- Use `toastError()` and `toastSuccess()` for user-facing feedback.
- Use `console.error` for internal logging.
- If local component CSS is unavoidable, add `@reference "@/assets/main.css";` before `@apply`.

## Execution Checklist

1. Confirm the task is in a Nuxt + Vue + NuxtUI codebase.
2. Use Bun-based commands and scripts.
3. Prefer NuxtUI components and semantic color tokens.
4. Reuse global helper classes from `main.css`.
5. Keep SFC structure and composable conventions consistent.
6. Avoid custom CSS and hardcoded visual constants unless required.

## References

See the following for references of components and styles

- `design-system.vue` page for tokens, type sizes and components laid out (if it exists)
- `theme.css` for colour and type tokens (if it exists)
- `main.css` for utility classess
- `app/utils` folder for functional utility classes to use
