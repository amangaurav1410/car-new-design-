import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function sendEnquiryEmail(submission: any) {
  const { name, email, phone, vehicle, budget, message } = submission;
  const recipients = ["umzeautohaus11@gmail.com", "Info@umzeautohaus.com.au"];

  const results = [];

  for (const recipient of recipients) {
    const mailOptions = {
      from: `"UMZE Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email, // Allow replying directly to the customer
      subject: `New Enquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #25614F;">New Website Enquiry</h2>
          <hr/>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Customer Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${vehicle ? `<p><strong>Vehicle:</strong> ${vehicle}</p>` : ''}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          <div style="background: #f9f9f9; padding: 15px; margin-top: 15px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr/>
          <p style="font-size: 12px; color: #666;">View this enquiry in your <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/forms">Admin Dashboard</a>.</p>
        </div>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${recipient}: ${info.messageId}`);
      results.push({ recipient, success: true });
    } catch (error) {
      console.error(`FAILED to send email to ${recipient}:`, error);
      results.push({ recipient, success: false, error });
    }
  }

  return results;
}

