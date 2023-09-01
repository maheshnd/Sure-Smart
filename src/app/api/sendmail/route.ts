import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { Email, Subject, Name, Phone, Message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "maheshddeshmukh068@gmail.com",
        pass: "puzrjfaekcctfhqm",
      },
    });
    const mailOption = {
      from: "deshmukh.mahesh.n@gmail.com",
      to: "deshmukh.mahesh.n@gmail.com",
      subject: "Counseling Session Enquiry",
      html: `
          <html>
              <head>
                  <style>
                      /* Add some basic styling here */
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                      }
                      .container {
                          max-width: 600px;
                          margin: 0 auto;
                          padding: 20px;
                          background-color: #ffffff;
                          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      }
                      h3 {
                          color: #333;
                      }
                      ul {
                          list-style: none;
                          padding: 0;
                      }
                      li {
                          margin-bottom: 10px;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <h3>Hello Mahesh</h3>
                      <ul>
                          <li><strong>Name:</strong> ${Name}</li>
                          <li><strong>Email:</strong> ${Email}</li>
                          <li><strong>Phone:</strong> ${Phone}</li>
                          <li><strong>Subject:</strong> ${Subject}</li>
                          <li><strong>Message:</strong> ${Message}</li>
                      </ul>
                  </div>
              </body>
          </html>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
