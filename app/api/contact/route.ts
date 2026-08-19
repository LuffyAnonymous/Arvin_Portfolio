import { NextRequest, NextResponse } from "next/server";

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

  // TODO: delivery is not wired up yet — connect an email or CRM provider here
  // (e.g. Resend, Postmark) before relying on this endpoint in production.
  return NextResponse.json({ ok: true });
}
