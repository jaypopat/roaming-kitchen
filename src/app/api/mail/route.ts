import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

let schema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  let user = process.env.GMAIL_USER;
  let pass = process.env.GMAIL_PWD;
  try {
    const data = await request.json();
    const { name, phone, email, message } = schema.parse(data);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user, pass },
    });

    const mailOptions = {
      from: "contact-submissions@roaming.kitchen",
      to: user,
      subject: `New Contact Form Submission from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
          Phone: ${phone}
        `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response("Email sent successfully", { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response("Error sending email", { status: 500 });
    }
  } catch (error: any) {
    return new Response("Error parsing form data", { status: 400 });
  }
}
