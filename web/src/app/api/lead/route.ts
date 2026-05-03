import { NextRequest, NextResponse } from "next/server";

// In production, wire this to:
//  - Resend / SMTP (email owner)
//  - Google Sheets API (lead log)
//  - WhatsApp notification (CallMeBot or Twilio)
// For now: log to server console + persist to a JSONL file in /tmp during dev.

import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const lead = {
      ...data,
      receivedAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") ?? "unknown",
    };

    console.log("[LEAD]", JSON.stringify(lead, null, 2));

    // Dev convenience: append to .leads.jsonl in project root
    if (process.env.NODE_ENV !== "production") {
      try {
        const file = path.join(process.cwd(), ".leads.jsonl");
        await fs.appendFile(file, JSON.stringify(lead) + "\n", "utf8");
      } catch {
        /* ignore disk errors in dev */
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD ERROR]", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
