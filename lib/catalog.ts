import type { LucideIcon } from "lucide-react"
import {
  BlocksIcon,
  BookOpenIcon,
  CloudIcon,
  CreditCardIcon,
  DatabaseIcon,
  FileTextIcon,
  FrameIcon,
  FlagIcon,
  GitPullRequestIcon,
  LayersIcon,
  ListChecksIcon,
  LayoutGridIcon,
  LibraryIcon,
  LightbulbIcon,
  MailIcon,
  CircleAlertIcon,
  ScaleIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
  TriangleIcon,
  UsersIcon,
} from "lucide-react"

/**
 * Sidebar map for Holt.
 * Harness sits at the top so every run starts with the workshop, not a vendor.
 */
export type GroupId = "harness" | "ideate" | "design" | "develop" | "ship"

export type CatalogItem = {
  slug: string
  title: string
  href: string
  summary: string
  icon: LucideIcon
  why: string
  must: string[]
  never: string[]
  connects: string
  /** Paste-ready check. Set on Ship topics the author runs before a pull request. */
  prompt?: string
}

export type CatalogGroup = {
  id: GroupId
  label: string
  hint: string
  items: CatalogItem[]
}

export const catalog: CatalogGroup[] = [
  {
    id: "harness",
    label: "Harness",
    hint: "The workshop around the agent",
    items: [
      {
        slug: "overview",
        title: "The harness",
        href: "/",
        icon: LayersIcon,
        summary:
          "Code and files that wrap Cursor so the same job is done the same way: specific context, tools, and outcomes.",
        why: "A general coding agent will invent a stack, a second button, and custom CSS. The harness is the straps: house rules, inventory, and a graded run.",
        must: [
          "Start every feature in a mode: ideate, design, build, or review.",
          "Write an artifact (this page, a bet file, a drift report) before calling the job done.",
          "Reuse what already exists in this repo before generating anything new.",
        ],
        never: [
          "Treat Cursor chat as the source of truth. The files are.",
          "Add a vendor because a tutorial used it.",
          "Skip review because the preview 'looks fine'.",
        ],
        connects:
          "Ideate decides if the job is worth doing. Design locks taste. Develop is the allowlisted stack. Ship is the check before a pull request, when the author does not fully read the code.",
      },
      {
        slug: "rules",
        title: "House rules",
        href: "/harness/rules",
        icon: BookOpenIcon,
        summary:
          "AGENTS.md and .cursor/rules are the job description. Skills help. These files are what the agent must follow every time.",
        why: "Skills still need babysitting. House rules in the repo fire on every run, including when a new person opens the project.",
        must: [
          "Read AGENTS.md and design.md before touching UI.",
          "Keep stack, taste, and never-do lists in files — not only in chat.",
          "Update the rules when a run goes wrong, so the next run starts warmer.",
        ],
        never: [
          "Invent a parallel wiki the agent cannot see.",
          "Paste a 2,000-word prompt instead of editing AGENTS.md.",
          "Leave 'we should remember this' in a Slack thread.",
        ],
        connects:
          "Rules point at design.md for taste and at the Develop group for vendors. Drift check is how you know they held.",
      },
      {
        slug: "modes",
        title: "Modes",
        href: "/harness/modes",
        icon: FlagIcon,
        summary:
          "Investigate vs fix, for a studio. Ideate cannot write app code. Build cannot invent a UI kit. Review cannot silently patch.",
        why: "Without flags, every prompt becomes a full product. Modes are how you micromanage a specific job without rewriting the intern.",
        must: [
          "Name the mode in the first line of a prompt.",
          "Ideate and design produce files, not npm packages.",
          "Build searches components/ui before writing JSX.",
        ],
        never: [
          "Let build-mode install Clerk 'while we are here'.",
          "Let ideate-mode scaffold routes.",
          "Call a screen done without a review pass.",
        ],
        connects:
          "Same idea as a Sentry harness with I (investigate) vs F (fix). Your flags are ideate, design, build, review. Ship is that review, before the pull request.",
      },
    ],
  },
  {
    id: "ideate",
    label: "Ideate",
    hint: "Evidence before implementation",
    items: [
      {
        slug: "why-now",
        title: "Why now",
        href: "/ideate/why-now",
        icon: LightbulbIcon,
        summary:
          "Timing: is this a market moment, or a tool you want to play with? Trajectory beats a clever category.",
        why: "AI makes it cheap to build the wrong thing faster. Why-now is the first gate so the harness does not sprint into a dead idea.",
        must: [
          "Cite a recent shift (tools, distribution, behaviour) in one sentence.",
          "Label AI research as hypothesis, not evidence.",
          "Kill or park if you cannot name why this week beats last year.",
        ],
        never: [
          "Use 'AI is hot' as the timing argument.",
          "Skip this because a Figma file already exists.",
        ],
        connects:
          "Feeds demand and competition. If why-now is weak, do not open Develop.",
      },
      {
        slug: "demand",
        title: "Demand",
        href: "/ideate/demand",
        icon: SearchIcon,
        summary:
          "People already talking about the pain, in their words. Comments beat upvotes. Behaviour beats 'I would use this'.",
        why: "The handbook should not let you jump to shadcn because the UI would look nice. Demand is the reason a build run is allowed.",
        must: [
          "Capture firsthand quotes or named threads.",
          "Note where the ICP already lives (sub, X, nowhere).",
          "Prefer a small, painful job over a broad platform.",
        ],
        never: [
          "Count ChatGPT market-size slides as demand.",
          "Treat your own excitement as a user.",
        ],
        connects: "Problem and ICP sharpen who hurts. Competition checks who already gets paid.",
      },
      {
        slug: "competition",
        title: "Competition",
        href: "/ideate/competition",
        icon: ScaleIcon,
        summary:
          "Paid tools in the space prove willingness to pay. Default is narrow, not kill — unless you cannot name a wedge.",
        why: "A designer-led studio still needs a landscape pass. The harness should refuse 'greenfield' as a reason to skip research.",
        must: [
          "List 3 products with prices if they have them.",
          "Name the gap in one line, or write a kill reason.",
          "Prefer a narrower ICP over a feature war.",
        ],
        never: [
          "Kill only because a big incumbent exists.",
          "Ignore negative reviews — gaps often live there.",
        ],
        connects: "If the landscape says proceed, write the problem and ICP next. Then taste, then stack.",
      },
      {
        slug: "problem",
        title: "The problem",
        href: "/ideate/problem",
        icon: CircleAlertIcon,
        summary:
          "One embarrassing moment, not a category. Painkiller over gain. The current workaround is part of the problem.",
        why: "Agents love abstract problem statements. The harness should force a scene: what happened, what was awkward, what they do today.",
        must: [
          "Write the moment in one paragraph.",
          "Name the workaround (spreadsheet, chat, memory).",
          "Say whether this removes pain or adds a nice-to-have.",
        ],
        never: [
          "Start with 'people need a better way to…'.",
          "Bundle five problems so the first release cannot ship.",
        ],
        connects: "ICP is who feels that moment. Design turns it into one user path. Develop implements only that path.",
      },
      {
        slug: "icp",
        title: "ICP",
        href: "/ideate/icp",
        icon: UsersIcon,
        summary:
          "The person who feels the pain. For this studio: designers and creative founders who can vibe-code but lose the plot on stack and taste.",
        why: "Without a named ICP, the agent designs for 'users'. Copy, density, and stack choices all drift.",
        must: [
          "Name a person, not a demographic salad.",
          "State what they can judge (UI) and what they cannot (auth webhooks).",
          "Keep the first release on the web, not mobile or marketplace.",
        ],
        never: [
          "Target 'anyone using AI'.",
          "Switch ICP mid-build because a new feature sounds fun.",
        ],
        connects: "Taste lock is for this ICP's eye. Stack is for this ICP's agent helpers. Not a generic SaaS kit.",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    hint: "Taste lock so the UI stays yours",
    items: [
      {
        slug: "taste",
        title: "Taste lock",
        href: "/design/taste",
        icon: SparklesIcon,
        summary:
          "The real product of a designer harness. Stop Inter, purple glow, 13px padding, and three button radii.",
        why: "Agents optimise for 'looks like a modern app'. If tokens and no-go patterns are missing, you get average Dribbble.",
        must: [
          "One brand colour, one accent, neutrals. No extra accents.",
          "One spacing scale. Ban arbitrary values like p-[13px].",
          "After every UI change, list token violations.",
        ],
        never: [
          "Hero glow, 3D blobs, icon soup, or a second font 'for personality'.",
          "Cheerful empty copy ('Unlock your potential').",
        ],
        connects: "Written down in design.md. Enforced in review. Components are the only legal UI atoms.",
      },
      {
        slug: "design-md",
        title: "design.md",
        href: "/design/design-md",
        icon: FileTextIcon,
        summary:
          "The law file. Type, colour, space, radius, voice, anti-slop. The agent reads it before it touches UI.",
        why: "Chat taste dies with the tab. A file survives a new developer, a new model, and next week's feature.",
        must: [
          "Keep design.md short enough to load every UI session.",
          "Store good and slop examples under references/ when you have them.",
          "Tighten the file when a review still feels off.",
        ],
        never: [
          "Hide tokens only in Figma with no export the agent can read.",
          "Add a second design-system file that disagrees with this one.",
        ],
        connects: "Figma is the picture. design.md is the law. shadcn is the implementation.",
      },
      {
        slug: "figma",
        title: "Figma",
        href: "/design/figma",
        icon: FrameIcon,
        summary:
          "Source pictures and, if mapped, Code Connect. The agent should match existing components, not generate a parallel kit.",
        why: "Design-to-code without an inventory is how you get a third card component. Figma is context, not a license to invent CSS.",
        must: [
          "Pull only the selected frame and tokens you already named.",
          "If a node maps to Button, Card, or Dialog, reuse those.",
          "Ask before adding a new primitive that Figma implied.",
        ],
        never: [
          "Screenshot-to-custom-CSS for a screen this app already has primitives for.",
          "Install another UI kit because the file used a different button.",
        ],
        connects: "Storybook (optional) is the living catalog. Until then, components/ui is the catalog.",
      },
      {
        slug: "components",
        title: "Reuse components",
        href: "/design/components",
        icon: BlocksIcon,
        summary:
          "Search components/ui and shadcn MCP first. Compose Card + Empty + Dialog. Do not hand-roll a settings page from divs.",
        why: "This is the onboarding test. A new person adding a feature should be steered back onto the house kit, nicely but firmly.",
        must: [
          "First tool call: what UI already exists.",
          "Use variants before custom className on colours or type.",
          "Use semantic tokens (bg-primary), never bg-blue-500.",
        ],
        never: [
          "Add MUI, Chakra, or a random registry for one widget.",
          "Create a new CSS module for a feature.",
          "Rebuild Button, Input, or Dialog.",
        ],
        connects: "shadcn/ui in Develop is how those primitives get into the repo. Review fails the PR that ignored them.",
      },
      {
        slug: "storybook",
        title: "Storybook",
        href: "/design/storybook",
        icon: LibraryIcon,
        summary:
          "Nice to have. A queryable catalog of house components. Skip it until the kit is actually reused in the app.",
        why: "Storybook is memory for the agent. It is also weight. The harness should not require it on day one.",
        must: [
          "Until Storybook exists, treat components/ui plus shadcn info as the catalog.",
          "If you add it later, stories become the first search target in build mode.",
        ],
        never: [
          "Stand up Storybook before the sidebar shell has real screens.",
          "Let stories drift from production components.",
        ],
        connects: "Optional layer on top of shadcn. Not a replacement for design.md.",
      },
    ],
  },
  {
    id: "develop",
    label: "Develop",
    hint: "Allowlisted stack — do not freelance vendors",
    items: [
      {
        slug: "nextjs",
        title: "Next.js",
        href: "/develop/nextjs",
        icon: TriangleIcon,
        summary:
          "App Router, TypeScript, server components by default. Auth, payments, and email all fit here. Prefer this over Vite for the product app.",
        why: "Clerk, Polar, and Resend want server routes. Vite is fine for a marketing site, messy once money and mail exist.",
        must: [
          "Server Components by default. use client only for clicks, forms, or browser APIs.",
          "Read bundled Next docs in node_modules before guessing APIs.",
          "Keep the product on App Router. Do not split a second Vite app 'for speed'.",
        ],
        never: [
          "Add a Pages Router island.",
          "Fetch from the client when a Server Component can do it.",
        ],
        connects: "Hosted on Vercel. UI from shadcn. Data in Convex when you actually have data.",
      },
      {
        slug: "shadcn",
        title: "shadcn/ui",
        href: "/develop/shadcn",
        icon: LayoutGridIcon,
        summary:
          "Source-owned primitives. MCP and CLI exist so the agent installs Button instead of drawing one.",
        why: "This is the UI adapter. Generic 'make a nice card' is how slop starts. shadcn is the opinionated Sentry-style connector for interface.",
        must: [
          "npx shadcn add / MCP search before custom markup.",
          "className is for layout (flex, gap), not for recolouring primitives.",
          "Compose settings from Tabs + Card + Field, not a new kit.",
        ],
        never: [
          "Override component colours with raw Tailwind palettes.",
          "Use space-y-* — use flex + gap.",
          "Hand-roll Empty, Alert, or Separator.",
        ],
        connects: "Taste lives in design.md. These components are how taste hits the screen.",
      },
      {
        slug: "vercel",
        title: "Vercel",
        href: "/develop/vercel",
        icon: CloudIcon,
        summary:
          "Hosting for the Next.js app. Preview URLs are how you share a prototype without a backend tour.",
        why: "A harness needs a real outcome. 'It runs on localhost' is not a shareable artifact.",
        must: [
          "Ship a preview URL when the artifact is a working UI.",
          "Keep env vars on the host, not in the repo.",
        ],
        never: [
          "Introduce a second host for the same Next app.",
          "Treat Vercel as a reason to add edge-only patterns you do not need.",
        ],
        connects: "Next.js builds here. Convex and Clerk have their own clouds; this one is the frontend.",
      },
      {
        slug: "convex",
        title: "Convex",
        href: "/develop/convex",
        icon: DatabaseIcon,
        summary:
          "Agent-friendly backend: MCP, schema, functions. Cheap for a first product. Do not add it until a screen must persist data.",
        why: "This shell is content. Wiring Convex now would violate the harness (no extra vendors until the feature needs them). The page exists so the next feature knows where data goes.",
        must: [
          "Wait until a user-generated record must survive refresh.",
          "Use the Convex plugin/MCP instead of guessing the API.",
          "Keep git/markdown as source of truth until that moment.",
        ],
        never: [
          "Add Drizzle + Postgres 'for flexibility' on a vibe-coded v1.",
          "Store secrets in client components.",
        ],
        connects: "Clerk identifies the user. Convex stores app state. Polar can live as a Convex component later.",
      },
      {
        slug: "clerk",
        title: "Clerk",
        href: "/develop/clerk",
        icon: ShieldIcon,
        summary:
          "Auth with installable agent skills. Protect paid routes in middleware. Not needed until a user must be someone.",
        why: "Same as Convex: documented in the harness, not installed in the shell. Skills exist so the agent does not invent fake auth.",
        must: [
          "Install Clerk skills when you add auth, then follow them.",
          "Protect paid or private routes on the server, not with a client boolean.",
        ],
        never: [
          "Roll your own JWT playground on this stack.",
          "Trust a 'isPro' flag set only in the browser.",
        ],
        connects: "Pairs with Polar for paid access and Convex for user-owned data.",
      },
      {
        slug: "resend",
        title: "Resend",
        href: "/develop/resend",
        icon: MailIcon,
        summary:
          "Transactional email. Official Convex component if the backend is Convex. Skip until something must leave the app.",
        why: "Email is a side effect with real-world blast radius. The harness should not let an agent mail users from a prototype.",
        must: [
          "Add Resend when a real message must send (invite, receipt, magic).",
          "Keep templates boring and token-based, not marketing-slop HTML.",
        ],
        never: [
          "Send from the client.",
          "Build a campaign tool inside the first product loop.",
        ],
        connects: "Usually triggered from Convex or a Next server path after Clerk knows who the user is.",
      },
      {
        slug: "polar",
        title: "Polar",
        href: "/develop/polar",
        icon: CreditCardIcon,
        summary:
          "Payments with a Next init path and a Convex component. Trust webhooks. Never a client-paid flag.",
        why: "Money is a permissioned tool, like 'message the customer' in a bug harness. The agent may draft, not freelance a Stripe stack.",
        must: [
          "Use Polar when you actually charge. Not before.",
          "Derive entitlements from webhooks / server state.",
        ],
        never: [
          "Swap in Stripe because a blog post used it.",
          "Hide a payment link in a Reddit comment (portfolio rule).",
        ],
        connects: "Clerk is who. Polar is paid. Convex remembers. This page is the contract; the SDK waits for a billing feature.",
      },
    ],
  },
  {
    id: "ship",
    label: "Ship",
    hint: "Before the pull request, when you do not fully read the code",
    items: [
      {
        slug: "reach",
        title: "Reach",
        href: "/ship/reach",
        icon: GitPullRequestIcon,
        summary:
          "The score before a pull request. Contained, Spreads, or Rewrites. It says how many screens change when this merges.",
        why: "Confidence in the component does not answer the reviewer. A new button sounds like every button in the app. If you cannot say whether this edit touches the shared file, the reviewer has to research the whole diff, and a PM will still ask why it is not already shipped.",
        must: [
          "Check the label before you open the pull request.",
          "Contained: a new file nothing imports yet. Merge changes nothing a user can click.",
          "Spreads: name the screens. None of them may be submit, pay, or delete.",
          "Rewrites: stop. This edits a shared component the app already uses. List every import, then try one low-risk screen.",
          "Say four things: what changed, what does not change on merge, where to try it, where to hold.",
        ],
        never: [
          "Open the pull request on Rewrites because the preview looks right.",
          "Explain the implementation. Explain reach, and what the click does now.",
          "Try the new component first on checkout, billing, sign-in, or a confirm dialog.",
          "Call the risk 'AI code'. The risk is how many screens change, and whether a dead click submits, pays, or deletes.",
        ],
        connects:
          "Level up is the prompt that reads the diff and picks the label. House rules still ban a second Button. This page is how you prove you did not silently edit the one the app already uses.",
      },
      {
        slug: "level-up",
        title: "Level up",
        href: "/ship/level-up",
        icon: ListChecksIcon,
        summary:
          "A prompt you paste before the pull request. It names the label, the risks, and the few things you should be able to explain.",
        why: "You do not need every line. You need the 80/20: did this edit the shared file, what the click does now, which screens import it, and what you left alone. The prompt pulls that out of the diff so you can say it in review.",
        must: [
          "Paste the prompt on the branch you are about to open.",
          "Read the label. If it says Rewrites, do not open the pull request yet.",
          "Keep the three to five level-up lines. Those are what you learn this time.",
          "Put the pull-request sentences in the description so the reviewer does not reconstruct reach.",
        ],
        never: [
          "Ask the writing agent 'is this fine?' without this prompt. It will agree with itself.",
          "Accept an answer that explains the whole component. Send it back and ask for the 80/20 only.",
          "Hide a Rewrites result because the PM wants it today. The card is how the team stays aligned.",
        ],
        connects:
          "Reach is what Contained, Spreads, and Rewrites mean. This prompt is the check that produces the label.",
        prompt: `You are reviewing a change the author is about to open as a pull request. They can see that the UI does what they want. They do not fully understand the code. Write for them, for the reviewer, and for a PM. Short sentences. No framework lecture.

Read the diff and the files it touches. Then answer only this:

1. Label
Pick one: Contained, Spreads, or Rewrites.
- Contained: a new file, or an edit nothing else imports. Merge changes no screen a user can click.
- Spreads: a listed handful of screens will change. Name each file or route.
- Rewrites: this edits a shared component, or swaps an import the app already uses. Every screen that imports it changes on deploy.

2. Reach
- Shared file edited, or new file?
- How many files import the old thing, and how many import the new thing?
- What actually changes on merge?

3. Hold
Name screens or flows where a dead click loses money or data: submit, pay, delete confirm, sign-in. Say whether this change touches them.

4. First try
Name one low-risk place to use it. Not a submit, not a confirm, not a payment. If you cannot find one, say so.

5. Risks
At most five. Each is one sentence a PM can read. Skip style nits. Include behaviour that changed (click, disabled, loading, submit), unknown call sites, and anything you cannot judge from the diff.

6. What to level up on
The 80/20 only. Three to five things the author should be able to say before review, in their own words. Not every line. For a component, that is usually: did I edit the shared file or add a second one, what the click does now, which screens import it, and what I deliberately left alone.
Skip API trivia that does not change reach or behaviour.

7. Sentences for the pull request
Write the note the author can paste:
- What I added or edited.
- What does not change when this merges.
- Where we will try it first.
- Where we will not put it yet.

If the label is Rewrites, say stop: list the call sites before opening the pull request.`,
      },
    ],
  },
]

export function allItems(): CatalogItem[] {
  return catalog.flatMap((group) => group.items)
}

export function findItem(groupId: string, slug: string): CatalogItem | undefined {
  const group = catalog.find((entry) => entry.id === groupId)
  return group?.items.find((item) => item.slug === slug)
}

export function findGroupForHref(href: string): CatalogGroup | undefined {
  return catalog.find((group) => group.items.some((item) => item.href === href))
}

export function findItemByHref(href: string): CatalogItem | undefined {
  return allItems().find((item) => item.href === href)
}

export function nextItem(href: string): CatalogItem | undefined {
  const items = allItems()
  const index = items.findIndex((item) => item.href === href)
  if (index === -1 || index === items.length - 1) {
    return undefined
  }
  return items[index + 1]
}
