import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log("endpoint got hit");
    const formData = await request.json();

    console.log(formData, "formdata from server");

    const { name, phone, email, message } = formData;

    console.log(name, phone, email, message, "name, phone, email, message");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
          Phone: ${phone}
        `,
    };

    try {
      // Send the email
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
