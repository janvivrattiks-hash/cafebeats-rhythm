import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { user_name, user_email, subject, message } = req.body;

  // Configure Nodemailer with Hostinger SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.HOSTINGER_EMAIL, // Your Hostinger email (e.g., info@cafebeats.com)
      pass: process.env.HOSTINGER_PASSWORD, // Your Hostinger email password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${user_name}" <${process.env.HOSTINGER_EMAIL}>`, // Must send FROM your authenticated email
      replyTo: user_email, // If you click "reply", it goes to the customer
      to: process.env.HOSTINGER_EMAIL, // Destination email
      subject: `New Lead: ${subject}`,
      text: `
        Name: ${user_name}
        Email: ${user_email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("SMTP Error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
