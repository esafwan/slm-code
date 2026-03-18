---
name: frontend-debug-loop
description: Use for React UI bugs, wrong rendering, broken state, event issues, and uncertain frontend root cause.
---

# Frontend debug loop

Follow this exact process.

## Step 1: classify the issue

Choose one primary category:

- rendering
- state
- props
- effect
- styling/layout
- routing
- forms
- API/data loading
- build/tooling

## Step 2: extract facts

List only verified facts.
Do not mix assumptions into facts.

## Step 3: list hypotheses

List at most 4 hypotheses.
Each hypothesis must be falsifiable.

## Step 4: choose one next action

Choose the cheapest next action that best distinguishes between the top hypotheses.

Allowed next actions:
- inspect one component
- inspect one hook/effect
- inspect one prop chain
- inspect one API call
- inspect one style source
- inspect one route definition
- inspect one console/build error
- add one temporary log
- make one minimal patch

## Step 5: return only

- Facts
- Hypotheses
- Next action
- Expected result if H1 is true
- Expected result if H2 is true

## Rules

- Do not suggest multiple actions at once.
- Do not suggest a refactor unless explicitly asked.
- Do not assume browser state not shown in evidence.
- Prefer inspection before editing.
