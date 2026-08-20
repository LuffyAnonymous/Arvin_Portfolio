import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREQUENCIES = new Set(["Daily", "Weekly", "Monthly", "Occasionally"]);

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  automate?: string;
  process?: string;
  frequency?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendNotification(payload: Required<Pick<ContactPayload, "name" | "email" | "automate">> &
  ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — contact form submissions are validated but not delivered. See README.",
    );
    return;
  }

  const rows: [string, string | undefined][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company],
    ["Wants to automate", payload.automate],
    ["Current process", payload.process],
    ["Frequency", payload.frequency],
  ];

  const html = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value!)}</p>`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: site.email,
      reply_to: payload.email,
      subject: `New enquiry from ${payload.name}`,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend request failed (${response.status}): ${detail}`);
  }
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const automate = body.automate?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const process_ = body.process?.trim() ?? "";
  const frequency = body.frequency?.trim() ?? "";

  if (!name || !email || !automate) {
    return NextResponse.json(
      { error: "Name, email and what you'd like to automate are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (frequency && !FREQUENCIES.has(frequency)) {
    return NextResponse.json({ error: "Unrecognised frequency value." }, { status: 400 });
  }

  try {
    await sendNotification({ name, email, automate, company, process: process_, frequency });
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try emailing me directly." },
      { status: 502 },
    );
  }

  // TEMPORARY DIAGNOSTIC — remove once email delivery is confirmed working.
  const apiKey = process.env.RESEND_API_KEY;
  return NextResponse.json({
    ok: true,
    debug: { hasKey: Boolean(apiKey), keyLength: apiKey?.length ?? 0, keyPrefix: apiKey?.slice(0, 4) ?? null },
  });
}
