import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the inquiry (in production, this would send to an email service or CRM)
    console.log("[Contact Form Submission]", {
      name: body.name,
      email: body.email,
      company: body.company,
      website: body.website || "(none)",
      companyStage: body.companyStage,
      serviceInterest: body.serviceInterest,
      message:
        body.message.substring(0, 200) +
        (body.message.length > 200 ? "..." : ""),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Inquiry received. We will respond within one business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
