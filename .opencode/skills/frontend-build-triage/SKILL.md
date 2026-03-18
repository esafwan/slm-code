---
name: frontend-build-triage
description: Use for Vite, TypeScript, ESLint, bundling, import, dependency, and frontend build failures.
---

# Frontend build triage

Use this exact loop.

## First classify the failure

- TypeScript type error
- missing import/export
- path alias resolution
- dependency/package issue
- Vite config issue
- env/config issue
- lint failure
- test/build mismatch

## Evidence to prioritize

- first error
- first user-code stack frame
- affected file
- import path or symbol name
- tsconfig/vite alias details if relevant

## Rules

- Focus on the earliest real failure, not the cascade
- Do not fix many files at once
- Prefer one minimal fix, then rerun
- Avoid speculative dependency changes unless clearly supported
- When in doubt, inspect config before changing code

## Output format

Return:
1. Primary failure
2. Why it is primary
3. Smallest next fix or check
4. Expected verification result
