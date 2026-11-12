<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Holt

Designer-built web app. Prefer working UI over clever architecture.

## Product

A handbook shell that explains the harness (ideate → design → develop → ship) and the allowlisted stack. This repo is also the first test of the harness: new features must reuse the sidebar, cards, and tokens already here.

## Stack (do not change without asking)

- Next.js App Router + TypeScript
- shadcn/ui + Tailwind only. Never add MUI, Chakra, or raw HTML buttons
- Vercel for hosting
- Convex, Clerk, Resend, Polar: documented in the sidebar, not installed until a feature needs them

## Modes

Name the mode in the first line of a prompt.

- **Ideate** — evidence and copy in the catalog. Do not add routes that write app data.
- **Design** — tokens and `design.md`. Do not add npm packages.
- **Build** — search `components/ui` and shadcn MCP first. Reuse Card, Badge, Sidebar, Empty, Button.
- **Review** — list token violations, new CSS files, new vendors, and one-off spacing. Before a pull request, run the prompt on Ship → Level up. Do not open the pull request if the label is Rewrites.

## How to work

- Server Components by default. `"use client"` only for clicks, hooks, or browser APIs.
- Reuse components in `components/ui`. Do not rebuild Button, Input, Dialog, Card, or Sidebar.
- `className` is for layout (`flex`, `gap`, `max-w-*`), not for recolouring primitives.
- After each UI change: name the user path and three ways it can break.
- Ask before adding a vendor.

## Design

- Spacing and type from existing tokens only. No `p-[13px]`, no raw hex, no extra CSS files.
- Mobile first. Empty states use `Empty`.
- No lorem. Copy stays in `lib/catalog.ts`.

## Roadmap

- `roadmap.md` is the short index a session reads first: live status, next, open questions. Keep it under about 80 lines / 6 KB.
- Detail goes in `roadmap/`: `log/YYYY-MM-DD.md` for sessions, `done.md`, `decisions.md`, and `NN-topic.md` for plans that last more than a day. Read those only when the task needs them.
- Edit status lines in place. Never stack a new "Resume here" section. Tick or delete items when done.
