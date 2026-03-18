---
name: react-component-change
description: Use when changing a React component, adding a small UI behavior, or making a focused JSX/TSX update.
---

# React component change

Use this for small local React edits.

## Goals

- Keep the change minimal
- Avoid unrelated refactors
- Preserve existing patterns
- Prefer clarity over cleverness

## Before editing

Identify:
- target component
- change intent
- nearby dependencies used by that component
- whether the change affects props, state, effects, styles, or events

## Edit policy

- Prefer changing one component first
- Avoid touching parent/child chains unless necessary
- Reuse existing UI patterns already present in the codebase
- Do not invent new abstractions for small tasks
- Keep naming aligned with nearby code
- Do not silently change data flow without calling it out

## Output format

Return:
1. What will change
2. Why this is the smallest safe change
3. File(s) affected
4. Verification step

## Verification

State exactly how to verify the change in the UI.
