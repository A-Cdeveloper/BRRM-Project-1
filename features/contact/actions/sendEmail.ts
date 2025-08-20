"use server";

import { FormData, contactSchema } from "@/types/formular";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(
  previousData: unknown,
  data: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed",
      };
    }

    // valid
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${
              data.company
                ? `<p><strong>Company:</strong> ${data.company}</p>`
                : ""
            }
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
          </div>
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${
              data.message
            }</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
