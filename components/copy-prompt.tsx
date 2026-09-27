"use client"

import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"

/**
 * Shows a prompt the author can paste into the agent.
 * Copy keeps them from retyping it, and from softening the questions.
 * If the clipboard is blocked, the prompt is selected so a manual copy still works.
 */
export function CopyPrompt({ text }: { text: string }) {
  const promptRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const node = promptRef.current
      if (!node) return
      const range = document.createRange()
      range.selectNodeContents(node)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <pre
        ref={promptRef}
        className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-pretty"
      >
        {text}
      </pre>
      <Button variant="outline" onClick={copy} className="self-start">
        {copied ? "Copied" : "Copy prompt"}
      </Button>
    </div>
  )
}
