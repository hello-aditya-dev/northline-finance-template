# Contact Form Setup

## Current Behavior

The contact form at `/api/contact` currently:
1. Validates the submission with zod schema
2. Logs the submission to the console
3. Returns a success response

This works for demonstration but doesn't send emails. To send actual email notifications, configure an email provider.

## Setting Up with Resend (Recommended)

[Resend](https://resend.com) is a modern email API that's simple to configure.

### 1. Create a Resend Account

- Sign up at [resend.com](https://resend.com)
- Verify your sending domain
- Create an API key

### 2. Set Environment Variables

Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_FORM_RECIPIENT=your-email@yourfirm.com
```

### 3. Update the API Route

Edit `src/app/api/contact/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate (existing zod validation)
  // ...

  // Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (resendApiKey && recipient) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Northline Finance <onboarding@your-domain.com>",
        to: [recipient],
        subject: `New inquiry from ${body.name} at ${body.company}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company}</p>
          ${body.website ? `<p><strong>Website:</strong> ${body.website}</p>` : ''}
          <p><strong>Stage:</strong> ${body.companyStage}</p>
          <p><strong>Interest:</strong> ${body.serviceInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
```

## Alternative Providers

The same pattern works with:

- **SendGrid**: Replace the Resend API call with SendGrid's API
- **Postmark**: Use Postmark's email API
- **AWS SES**: Use AWS SDK to send via SES

## Demo Mode

Without `RESEND_API_KEY` set, the form still:
- Validates all fields
- Shows success state to the user
- Logs submissions to the server console

This is fine for development and demo purposes.
