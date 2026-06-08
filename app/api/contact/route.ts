import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmails } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    await sendContactEmails(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try calling us instead." },
      { status: 500 },
    );
  }
}
