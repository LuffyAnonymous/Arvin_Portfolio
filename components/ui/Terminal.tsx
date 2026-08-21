"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

type Line = { type: "command" | "output"; text: string };

const COMMANDS = ["help", "status", "stack", "projects", "contact", "focus", "whoami", "clear"];

function runCommand(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "":
      return [];
    case "help":
      return [`available: ${COMMANDS.join(", ")}`];
    case "whoami":
      return [site.name, `${site.role} · ${site.location}`];
    case "status":
      return [
        "available_for_projects: true",
        `location: ${site.location.toLowerCase()}`,
        "timezone: utc+4",
      ];
    case "focus":
      return ["automation", "api-integrations", "data-workflows", "internal-tools", "dashboards"];
    case "stack":
      return [
        "automation: n8n, apis, webhooks",
        "data: python, sql, postgresql, pandas",
        "development: typescript, next.js",
        "integrations: telegram, google sheets, rest apis",
      ];
    case "projects":
      return projects.map((p) => `/projects/${p.slug} — ${p.title}`);
    case "contact":
      return [`email: ${site.email}`, `linkedin: ${site.linkedin.replace("https://", "")}`, `github: ${site.github.replace("https://", "")}`];
    case "clear":
      return ["__clear__"];
    default:
      return [`command not found: ${cmd}`, "type 'help' for a list"];
  }
}

const WELCOME: Line[] = [
  { type: "command", text: "help" },
  { type: "output", text: `available: ${COMMANDS.join(", ")}` },
];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const value = input;
    setInput("");
    if (!value.trim()) return;

    const result = runCommand(value);
    if (result[0] === "__clear__") {
      setLines([]);
      return;
    }

    setLines((prev) => [
      ...prev,
      { type: "command", text: value },
      ...result.map((text): Line => ({ type: "output", text })),
    ]);
  }

  return (
    <div
      className="rounded-md border border-ink-50/10 bg-ink-900 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 border-b border-ink-50/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
        <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-500">
          Try it — type a command
        </span>
      </div>
      <div ref={bodyRef} className="max-h-72 space-y-1.5 overflow-y-auto px-5 py-5">
        {lines.map((line, i) =>
          line.type === "command" ? (
            <p key={i} className="text-ink-100">
              <span className="text-accent-400">$</span> {line.text}
            </p>
          ) : (
            <p key={i} className="text-ink-400">
              {line.text}
            </p>
          ),
        )}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-ink-100">
          <span className="text-accent-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
            placeholder="help"
            className="w-full bg-transparent text-ink-100 outline-none placeholder:text-ink-600"
            style={{ caretColor: "var(--color-accent-500)" }}
          />
        </form>
      </div>
    </div>
  );
}
