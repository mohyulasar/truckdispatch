import { Resend } from "resend";
import type { ContactFormData } from "./validations";
import { SITE } from "./constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const contactEmail = process.env.CONTACT_EMAIL ?? SITE.email;
const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

function formatLeadEmail(data: ContactFormData): string {
  return `
New quote request from ${SITE.name}

Name: ${data.name}
Company: ${data.companyName}
Email: ${data.email}
Phone: ${data.phone}
Trucks: ${data.truckCount}
Equipment: ${data.equipmentType}
MC Number: ${data.mcNumber || "Not provided"}
Operating Region: ${data.operatingRegion}
Heard About Us: ${data.heardAbout || "Not provided"}

Message:
${data.message}
  `.trim();
}

export async function sendContactEmails(data: ContactFormData) {
  if (!resend) {
    console.log("[Contact Form] Email not configured. Submission:", data);
    return { success: true, devMode: true };
  }

  const [ownerResult, autoReplyResult] = await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `New Quote Request — ${data.name} (${data.companyName})`,
      text: formatLeadEmail(data),
    }),
    resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: `We received your request — ${SITE.name}`,
      text: `Hi ${data.name},

Thank you for contacting ${SITE.name}. We received your quote request and will reach out within 24 hours.

In the meantime, feel free to call us at ${SITE.phone}.

Best regards,
The ${SITE.name} Team
${SITE.phone}
${SITE.email}`,
    }),
  ]);

  if (ownerResult.error) {
    throw new Error(ownerResult.error.message);
  }

  if (autoReplyResult.error) {
    console.error("Auto-reply failed:", autoReplyResult.error);
  }

  return { success: true, devMode: false };
}
