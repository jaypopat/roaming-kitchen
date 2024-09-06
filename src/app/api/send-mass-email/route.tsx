import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { Pool } from "pg";
import { render } from "@react-email/render";
import { Email } from "@/components/Email";

const schema = z.object({
  subject: z.string(),
  message: z.string(),
});

interface WaitlistUser {
  email: string;
  name: string;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.API_SECRET_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const client = await pool.connect();
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PWD;

  try {
    const data = await request.json();
    const { subject, message } = schema.parse(data);

    const result = await client.query<WaitlistUser>(
      "SELECT email, name FROM waitlist",
    );
    const waitlistUsers = result.rows;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await Promise.all(
      waitlistUsers.map(async (user: WaitlistUser) => {
        const emailHtml = await render(
          <Email name={user.name} description={message} />,
        );
        const mailOptions = {
          from: gmailUser,
          to: user.email,
          subject: subject,
          html: emailHtml,
        };
        try {
          await transporter.sendMail(mailOptions);
        } catch (error) {
          console.error(`Error sending email to ${user.email}:`, error);
        }
      }),
    );

    return new Response("Mass email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending mass email:", error);
    return new Response("Error sending mass email", { status: 500 });
  } finally {
    client.release();
  }
}
