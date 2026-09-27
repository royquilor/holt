import Link from "next/link"

import { CopyPrompt } from "@/components/copy-prompt"
import { type CatalogGroup, type CatalogItem, nextItem } from "@/lib/catalog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * Shared article layout for every handbook topic.
 * Reuses Card and Badge so a later feature has existing components to copy.
 */
export function TopicView({
  group,
  item,
}: {
  group: CatalogGroup
  item: CatalogItem
}) {
  const next = nextItem(item.href)

  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Holt</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{group.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="flex flex-col gap-3">
        <Badge variant="secondary">{group.label}</Badge>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-balance">
          {item.title}
        </h1>
        <p className="text-base leading-relaxed text-pretty text-muted-foreground">
          {item.summary}
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Why this is in the harness</CardTitle>
          <CardDescription>
            What goes wrong if the agent skips this item.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-pretty">{item.why}</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Must</CardTitle>
            <CardDescription>Do this every run.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex list-disc flex-col gap-2 pl-4 text-pretty">
              {item.must.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>Never</CardTitle>
            <CardDescription>Drift the agent will try.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex list-disc flex-col gap-2 pl-4 text-pretty">
              {item.never.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How it connects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-pretty">{item.connects}</p>
        </CardContent>
      </Card>

      {item.prompt ? (
        <Card>
          <CardHeader>
            <CardTitle>Prompt</CardTitle>
            <CardDescription>
              Paste this on the branch before you open the pull request.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CopyPrompt text={item.prompt} />
          </CardContent>
        </Card>
      ) : null}

      {next ? (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Next in the handbook</p>
          <Link href={next.href} className={buttonVariants({ variant: "outline" })}>
            {next.title}
          </Link>
        </div>
      ) : null}
    </article>
  )
}
