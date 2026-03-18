---
name: frontend-planning
description: Use before implementing a non-trivial frontend change to break work into small verifiable units.
---

# Frontend planning

Use this before implementing a non-trivial task.

## Objective

Turn a request into a short, concrete implementation plan suitable for a small model workflow.

## Planning rules

- Prefer the smallest possible implementation first
- Keep tasks independent where possible
- Each task must have one clear verification step
- Avoid mixing refactor work into feature work unless essential
- Call out unknowns explicitly
- Keep plan units small enough to fit into focused local-model execution

## Output format

Return:

1. Goal
2. Scope
3. Assumptions
4. Risks
5. Task breakdown

Each task must include:
- title
- files likely affected
- exact intent
- verification
- whether it is read-only, edit, or test

## Constraints

- Do not create a huge plan
- Do not plan repo-wide cleanup
- Prefer 3–7 tasks for the first version
