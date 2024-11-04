import express from "express"; // Use import instead of require
import cors from "cors"; // Use import instead of require
import nodemailer from "nodemailer"; // Use import instead of require
import dotenv from "dotenv"; // Use import instead of require

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an instance of express
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

const PORT = 3001; // Define the port

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Set up nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify the nodemailer setup
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send emails");
  }
});

// Handle contact form submissions
app.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Failed to send message" });
    } else {
      res.json({ code: 200, status: "Message sent" });
    }
  });
});
