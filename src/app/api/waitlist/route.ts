import { NextRequest } from "next/server";
import { z } from "zod";
import { Pool } from "pg";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  const client = await pool.connect();
  try {
    const data = await request.json();
    const { name, email } = schema.parse(data);

    // Check if email already exists
    const checkResult = await client.query(
      "SELECT * FROM waitlist WHERE email = $1",
      [email],
    );

    if (checkResult.rows.length > 0) {
      return new Response("Email already exists in waitlist", { status: 400 });
    }

    // Insert new entry
    await client.query("INSERT INTO waitlist (name, email) VALUES ($1, $2)", [
      name,
      email,
    ]);

    return new Response("Waitlist signup successful", { status: 200 });
  } catch (error: any) {
    console.error("Error in waitlist signup:", error);
    if (error instanceof z.ZodError) {
      return new Response("Invalid input data", { status: 400 });
    }
    return new Response("Error processing waitlist signup", { status: 500 });
  } finally {
    client.release();
  }
}

// Optionally, you can add a GET method to retrieve the waitlist
export async function GET(request: NextRequest) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM waitlist ORDER BY created_at DESC",
    );
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return new Response("Error fetching waitlist", { status: 500 });
  } finally {
    client.release();
  }
}
