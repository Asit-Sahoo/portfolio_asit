import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ====== FIX __dirname for ES Modules ======
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ====== Middlewares ======
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));

app.use(express.json());

// ====== API ROUTE ======
app.get("/api", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// ====== EMAIL ROUTE ======
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Hire Me Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

// ====== SERVE FRONTEND BUILD ======
// (Vite = dist, CRA = build → change accordingly)

const frontendPath = path.join(__dirname, "dist");

app.use(express.static(frontendPath));

// ====== React Router FIX ======
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ====== START SERVER ======
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});