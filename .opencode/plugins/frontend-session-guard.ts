import type { Plugin } from "@opencode-ai/plugin"

export const FrontendSessionGuard: Plugin = async ({ client }) => {
  await client.app.log({
    body: {
      service: "frontend-session-guard",
      level: "info",
      message: "Frontend session guard loaded",
    },
  })

  return {
    "experimental.session.compacting": async (_input, output) => {
      output.context.push(`
## Frontend continuation requirements

When continuing this session, preserve:
- current route/page being worked on
- active component/file
- current bug/change category
- verified facts only
- top 2 hypotheses
- last action taken
- exact next action pending
- files already modified
- verification still needed

Do not resume with a broad rewrite.
Do not invent new tasks.
Continue from the smallest active frontend unit.
`)
    },
  }
}
