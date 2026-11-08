"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
const fieldClass = "form-control";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
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
        throw new Error(body.error ?? "The message could not be sent. Please email me directly.");
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "The message could not be sent. Please email me directly.");
    }
  }

  if (status === "success") return <div className="contact-form contact-success" aria-live="polite"><CheckCircle2 size={26} aria-hidden="true" /><h3>Message sent.</h3><p>Thank you for reaching out. I’ll reply from {site.email}.</p><button type="button" className="text-link" onClick={() => setStatus("idle")}>Send another message</button></div>;

  return <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-row"><Field label="Name" name="name" autoComplete="name" required /><Field label="Email" name="email" type="email" autoComplete="email" required /></div>
    <Field label="Company (optional)" name="company" autoComplete="organization" />
    <div><label htmlFor="automate">How can I help? <span className="required-note">Required</span></label><textarea className={fieldClass} id="automate" name="automate" rows={4} required maxLength={4000} placeholder="A little about the role, team or opportunity…" /></div>
    <div><label htmlFor="process">Anything else I should know? <span className="required-note">Optional</span></label><textarea className={fieldClass} id="process" name="process" rows={3} maxLength={4000} placeholder="Add any useful context here." /></div>
    {status === "error" && <p className="form-error" role="alert"><AlertCircle size={17} aria-hidden="true" />{errorMessage}</p>}
    <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? <><LoaderCircle className="spin" size={17} aria-hidden="true" /> Sending…</> : <>Send a message <Send size={16} aria-hidden="true" /></>}</button>
    <p className="form-note">Your message goes directly to Arvin. Or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
  </form>;
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <div><label htmlFor={name}>{label} {!required && <span className="required-note">Optional</span>}</label><input className={fieldClass} id={name} name={name} type={type} autoComplete={autoComplete} required={required} maxLength={200} /></div>;
}
