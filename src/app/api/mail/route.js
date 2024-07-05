import nodemailer from 'nodemailer';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    console.log("endpoint got hit");
    const { name, email, message } = req.body;

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
      res.status(200).json({ message:'Email sent successfully' });
      console.log("sent mf");
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
