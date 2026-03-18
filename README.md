# slm-code

A lightweight OpenCode starter pack for small local model frontend development.

## Goal

This repository provides a practical workflow for using small local models for React/frontend development without relying on long-context autonomy.

The design is based on four principles:

- externalize current state
- keep prompts small
- use skills for reusable procedures
- prefer one-action loops over broad agent autonomy

## Core components

- `AGENTS.md` — project behavior and operating constraints
- `scratchpad.md` — source of truth for the current task
- `.opencode/skills/` — reusable workflows for debugging, planning, and small changes
- `.opencode/plugins/frontend-session-guard.ts` — compaction guard to preserve task continuity

## Intended use

Best for:
- React UI bugs
- component-level enhancements
- frontend build/type issues
- focused debugging loops

Not intended for:
- broad refactors
- repo-wide redesign
- long autonomous implementation without checkpoints

## Workflow

1. Open or update `scratchpad.md`
2. Ask OpenCode/Codex to classify the task
3. Use the right skill
4. Ask for one next action only
5. Verify
6. Update scratchpad
7. Repeat

## Philosophy

- evidence over guesswork
- minimal change first
- verify before claiming done
- keep local models inside bounded tasks
