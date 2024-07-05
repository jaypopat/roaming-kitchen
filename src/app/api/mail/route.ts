import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export default async function POST(req:NextRequest) {

    console.log("endpoint got hit");
    const formData = await req.json(); 

    const { name, email, message } = formData;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "contact.jaypopat@gmail.com",
        pass: "x",
      },  
    });

    // Define the email options
    const mailOptions = {
      from: "contact.jaypopat@gmail.com",
      to: "contact.jaypopat@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response('Error sending email', { status: 500 });
    }
  }
