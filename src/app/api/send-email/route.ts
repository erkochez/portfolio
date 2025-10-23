import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using Namecheap SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'coresense.org',
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER || 'eren.ahmed@coresense.org',
        pass: process.env.EMAIL_PASS || ';MVS5?)n[#=a',
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'eren.ahmed@coresense.org',
      to: process.env.EMAIL_TO || 'eren.ahmed@coresense.org',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        
        Sent from your portfolio contact form
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
