import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, date, people, payment, price } =
      body;

    const inputDate = new Date(date);

    const now = new Date();
    
    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date format");
    }
    
    if (inputDate <= now) {
      throw new Error("Date must be in the future");
    }

    if (!Number.isInteger(people) || people <= 0) {
      throw new Error("People must be a positive integer");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `No Reply <azerbaijanbrillianttravel@gmail.com>`,
      to: email,
      subject: "Tour Booking Confirmation",
      html: `
        <h2>Hello ${firstName} ${lastName},</h2>
        <p>Thank you! Your tour booking has been confirmed.</p>
        <p><b>Tour date:</b> ${date}</p>
        <p><b>Number of travelers:</b> ${people}</p>
        <p><b>Total price:</b> $${price * people}</p>
        <p><b>Payment method:</b> ${
          payment === "later" ? "Book now, pay later" : "Pay by card"
        }</p>
        <p>We will contact you soon with more details.</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Booking Record: ${firstName} ${lastName}`,
      html: `
        <h2>Booking record</h2>
        <p><b>Full name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Number of travelers:</b> ${people}</p>
        <p><b>Total price:</b> $${price * people}</p>
        <p><b>Payment method:</b> ${
          payment === "later" ? "Book now, pay later" : "Pay by card"
        }</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
