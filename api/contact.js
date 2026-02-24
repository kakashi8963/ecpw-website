export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let payload = req.body || {};
    if (typeof req.body === "string") {
      try {
        payload = JSON.parse(req.body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON payload" });
      }
    }

    const { name, email, phone, organization, message } = payload;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = "olaamigo2243@gmail.com";
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "ECPW Website <onboarding@resend.dev>";
    const RESEND_TEST_TO_EMAIL = process.env.RESEND_TEST_TO_EMAIL;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const usingResendTestSender = /onboarding@resend\.dev/i.test(RESEND_FROM_EMAIL);
    if (usingResendTestSender && !RESEND_TEST_TO_EMAIL) {
      return res.status(500).json({
        error: "Email sender configuration incomplete",
        details:
          "Using onboarding@resend.dev requires RESEND_TEST_TO_EMAIL. Prefer setting RESEND_FROM_EMAIL to a verified domain sender and CONTACT_TO_EMAIL to your inbox.",
      });
    }

    const toEmail = usingResendTestSender ? RESEND_TEST_TO_EMAIL : CONTACT_TO_EMAIL;

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td>
            <td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td>
            <td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td>
            <td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(phone || "Not provided")}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Organization</td>
            <td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(organization || "Not provided")}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td>
            <td style="padding:8px;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
      </table>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [toEmail],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const rawError = await response.text();
      let errorData = rawError;
      try {
        errorData = JSON.parse(rawError);
      } catch {
        // Keep non-JSON raw error body as-is for logs.
      }
      const providerMessage =
        typeof errorData === "object" && errorData !== null
          ? errorData.message || errorData.error || JSON.stringify(errorData)
          : String(errorData);
      console.error("Resend API error:", errorData);
      return res.status(502).json({
        error: "Failed to send email",
        details: `Resend rejected the request: ${providerMessage}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out. We will get back to you shortly.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
