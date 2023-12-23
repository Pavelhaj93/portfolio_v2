// pages/api/message.js

import { transporter, mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    // Update mailOptions with the dynamic values
    const updatedMailOptions = {
      ...mailOptions,
      to,
      subject,
      text,
    };

    try {
      // Send the email using the transporter and updated mailOptions
      const info = await transporter.sendMail(updatedMailOptions);

      console.log("Email sent:", info.response);
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }
}
