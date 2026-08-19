"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="bg-ink-900 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-50 md:text-4xl">
              Have a process that takes too much time?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
              Tell me what you&apos;re doing manually. I&apos;ll help you figure out what
              can be automated.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={`mailto:${site.email}`} variant="ghost">
                <Mail size={16} aria-hidden />
                Email Me
              </Button>
              <Link href="#projects" className="text-sm text-ink-400 hover:text-ink-100">
                View My Projects
              </Link>
            </div>

            <ul className="mt-12 space-y-3 border-t border-ink-50/10 pt-8 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-ink-300 hover:text-ink-50"
                >
                  <Mail size={16} aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 text-ink-300 hover:text-ink-50"
                >
                  <LinkedinIcon size={16} />
                  linkedin.com/in/arvin-philip-poliga
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 text-ink-300 hover:text-ink-50"
                >
                  <GithubIcon size={16} />
                  github.com/LuffyAnonymous
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-ink-50/10 bg-ink-50/[0.03] p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex h-full flex-col items-start justify-center gap-3 py-12 text-center sm:text-left">
                <CheckCircle2 className="text-accent-400" size={28} aria-hidden />
                <p className="font-display text-lg font-semibold text-ink-50">
                  Message sent.
                </p>
                <p className="text-sm text-ink-300">
                  Thanks for reaching out — I&apos;ll reply from {site.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" autoComplete="name" required />
                  <Field label="Email" name="email" type="email" autoComplete="email" required />
                </div>
                <Field
                  label="Company / business (optional)"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
                <div>
                  <label
                    htmlFor="automate"
                    className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400"
                  >
                    What would you like to automate?
                  </label>
                  <textarea
                    id="automate"
                    name="automate"
                    required
                    rows={3}
                    className="w-full rounded-md border border-ink-50/20 bg-transparent px-4 py-3 text-sm text-ink-50 outline-none transition-colors duration-200 placeholder:text-ink-500 focus:border-accent-500"
                    placeholder="e.g. Someone on my team copies order emails into a spreadsheet every morning."
                  />
                </div>
                <div>
                  <label
                    htmlFor="process"
                    className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400"
                  >
                    Current process or problem (optional)
                  </label>
                  <textarea
                    id="process"
                    name="process"
                    rows={3}
                    className="w-full rounded-md border border-ink-50/20 bg-transparent px-4 py-3 text-sm text-ink-50 outline-none transition-colors duration-200 placeholder:text-ink-500 focus:border-accent-500"
                    placeholder="e.g. Excel spreadsheet, Google Sheets, a specific tool you're using now."
                  />
                </div>
                <div>
                  <label
                    htmlFor="frequency"
                    className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400"
                  >
                    How often does this happen? (optional)
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    defaultValue=""
                    className="w-full rounded-md border border-ink-50/20 bg-ink-900 px-4 py-3 text-sm text-ink-50 outline-none transition-colors duration-200 focus:border-accent-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Occasionally">Occasionally</option>
                  </select>
                </div>

                {status === "error" ? (
                  <p className="flex items-center gap-2 text-sm text-red-300">
                    <AlertCircle size={16} aria-hidden />
                    {errorMessage}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    "Tell Me About Your Process"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-md border border-ink-50/20 bg-transparent px-4 py-3 text-sm text-ink-50 outline-none transition-colors duration-200 placeholder:text-ink-500 focus:border-accent-500"
      />
    </div>
  );
}
