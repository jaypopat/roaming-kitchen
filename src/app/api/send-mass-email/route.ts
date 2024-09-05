import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { Pool } from "pg";

const schema = z.object({
  subject: z.string(),
  message: z.string(),
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  // Check for API key
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.API_SECRET_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const client = await pool.connect();
  let user = process.env.GMAIL_USER;
  let pass = process.env.GMAIL_PWD;

  try {
    const data = await request.json();
    const { subject, message } = schema.parse(data);

    const result = await client.query("SELECT email, name FROM waitlist");
    const waitlistUsers = result.rows;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user, pass },
    });

    await Promise.all(
      waitlistUsers.map(async (user) => {
        const mailOptions = {
          from: user,
          to: user.email,
          subject: subject,
          text: `Hello ${user.name},\n\n${message}`,
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
