import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { Resend } from "resend";

dotenv.config();

const app = express();

// ======================
// ES MODULE FIX
// ======================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======================
// RESEND SETUP
// ======================
const resend = new Resend(process.env.RESEND_API_KEY);

// ======================
// MIDDLEWARE
// ======================
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  })
);

app.use(express.json());

// ======================
// API TEST ROUTE
// ======================
app.get("/api", (req, res) => {
  res.send("Backend is running 🚀");
});

// ======================
// EMAIL ROUTE
// ======================
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("Email sent:", response);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Resend Error:", error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

// ======================
// FRONTEND BUILD PATH
// ======================
const possiblePaths = [
  path.join(__dirname, "dist"),
  path.join(__dirname, "portfolio", "dist"),
  path.join(__dirname, "../portfolio/dist"),
];

let frontendPath = possiblePaths.find((p) => fs.existsSync(p));

// ======================
// SERVE FRONTEND
// ======================
if (frontendPath) {
  app.use(express.static(frontendPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  console.log("⚠️ Frontend build folder not found");
}

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
