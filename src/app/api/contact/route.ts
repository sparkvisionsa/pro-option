import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = body as ContactPayload;

    if (!payload?.name || !payload?.email || !payload?.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Dynamically import nodemailer so the dev can add the dependency later
    let nodemailerPkg: any;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nodemailerPkg = await import("nodemailer");
    } catch (err) {
      console.warn("Nodemailer not installed. Logging contact to server console.", err);
      console.log("Contact message received:", payload);
      return NextResponse.json({ ok: true, warning: "nodemailer-not-installed", message: "Nodemailer not installed on server. Install nodemailer and configure SMTP in .env.local to enable email sending." });
    }

    const nodemailer = nodemailerPkg.default || nodemailerPkg;

    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER; // your gmail/business email (eg, Info@pro-option.sa)
    const SMTP_PASS = process.env.SMTP_PASS; // app password or OAuth token
    const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

    // If SMTP creds missing, log and return success so dev can test without alcohol
    if (!SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.warn("SMTP credentials not fully configured. Check env vars. Logging contact.");
      console.log("Contact message received:", payload);
      return NextResponse.json({ ok: true, warning: "smtp-not-configured", message: "SMTP credentials missing. Set SMTP_USER and SMTP_PASS in .env.local and restart the server." });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailSubject = `Website Contact: ${payload.service || "general"} - ${payload.name}`;
    const mailHtml = `<p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "-"}</p>
      <p><strong>Service:</strong> ${payload.service || "-"}</p>
      <hr/>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>`;

    // Use SMTP user as 'from' (Gmail often enforces the authenticated user as the sender)
    await transporter.sendMail({
      from: `${SMTP_USER}`,
      to: CONTACT_TO,
      replyTo: payload.email,
      subject: mailSubject,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\nService: ${payload.service || "-"}\n\nMessage:\n${payload.message}`,
      html: mailHtml,
    });

    return NextResponse.json({ ok: true, sent: true });
  } catch (err: any) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
