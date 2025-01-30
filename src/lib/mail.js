import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yarul8406@gmail.com",
    pass: process.env.EMAIL_KEY,
  },
});

const sendEmail = async (to, subject,con) => {
  const mailOptions = {
    from: '"WAST RALLY" yarul8406@gmail.com', // Custom name with email
    to: to, // Recipient's email address
    subject: subject, // Email subject
    html: con
  
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response.includes("OK")) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;