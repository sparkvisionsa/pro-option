# Email (Gmail / Google Workspace) setup — nodemailer

This project includes a server API endpoint at `/api/contact` that will send incoming contact messages to the configured email address using `nodemailer`.

Steps to enable sending with Gmail (recommended for Info@pro-option.sa):

1. Install nodemailer

```bash
npm install nodemailer
```

2. Use an App Password (recommended) — create App Password in your Google Account

- If your Google Workspace account has 2-step verification: go to `Google Account > Security > App passwords` and create a new app password for "Mail". This gives you a 16-character password that you can use as `SMTP_PASS`.
- If your account is not 2FA-protected, note that Google deprecated "Less secure apps" and using direct account password may be blocked. Using an App Password or OAuth2 is strongly recommended.

3. Copy `.env.example` to `.env.local` and fill in values:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=Info@pro-option.sa
SMTP_PASS=your_app_password_here
CONTACT_TO=Info@pro-option.sa
```

4. Restart your dev server

```
npm run dev
```

5. Submit the contact form — check your server console for warnings or errors if SMTP isn't configured.

Alternative: using Gmail OAuth2 (more secure, recommended for long-term use)

- Create an OAuth app in Google Cloud Console, set up OAuth2 credentials, and grant the `https://mail.google.com/` scope. This will give you a client ID, client secret and refresh token.
- Use nodemailer with OAuth2 transport. You can replace the transport creation in `src/app/api/contact/route.ts` with something like:

```ts
import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const accessToken = await oAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: SMTP_USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken.token,
  },
});
```

6. Security note: never commit credentials. Use `.env.local` for local development and set secrets in your production environment.

If you want, I can add the OAuth2 code path to the project and guide you through obtaining client credentials from Google Cloud.

### Debugging and verification

- Inspect network requests in your browser devtools: open the Network tab, submit the contact form then look for `POST /api/contact` and view the **response** JSON. The API returns helpful fields:

  - `ok: true` and `sent: true` — message was sent
  - `ok: true, warning: 'nodemailer-not-installed'` — `nodemailer` is not installed on the server; the payload is logged to the server console
  - `ok: true, warning: 'smtp-not-configured'` — SMTP vars are not set; the payload is logged
  - `error` in the JSON — a server-side error was thrown

- Check your server terminal where you run `npm run dev` — the API logs contact payloads and errors (`Contact message received: ...`, `Error in /api/contact: ...`). These messages help you identify missing credentials or exceptions.

- If SMTP is configured and you don't see an incoming email, check Gmail with the authenticated `SMTP_USER`:

  - Look for the message under **Sent** (the message is sent from the SMTP account), then check the recipient.
  - Common SMTP errors:
    - `535 5.7.8` — usually bad auth; re-check `SMTP_USER` and `SMTP_PASS` (App Password or OAuth2 token)
    - `534-5.7.14` — Google may block sign-in; ensure app password or OAuth2 is used
    - `Invalid login` — wrong credentials

- For production, prefer OAuth2 or a transactional email provider (SendGrid, Mailgun) to increase deliverability and reduce configuration issues.

If you want, I can add more logging to the API or produce a small test script to quickly verify a mailing operation outside the app.
