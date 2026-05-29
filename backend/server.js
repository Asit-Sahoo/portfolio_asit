import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// ===== ES MODULE FIX =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== DEBUG: SHOW SERVER LOCATION =====
console.log("📁 __dirname:", __dirname);
console.log("📁 Current folder files:", fs.readdirSync(__dirname));

// ===== MIDDLEWARES =====
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));

app.use(express.json());

// ===== API TEST =====
app.get("/api", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// ===== EMAIL ROUTE =====
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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent" });

  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

// ==============================
// 🔥 FRONTEND PATH (AUTO FIX)
// ==============================

// possible locations (we detect automatically)
const possiblePaths = [
  path.join(__dirname, "dist"),
  path.join(__dirname, "portfolio", "dist"),
  path.join(__dirname, "../portfolio/dist"),
  path.join(__dirname, "../dist"),
];

let frontendPath = null;

for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    frontendPath = p;
    break;
  }
}

console.log("🌐 Frontend path detected:", frontendPath);

// serve static files if found
if (frontendPath) {
  app.use(express.static(frontendPath));
}

// ==============================
// React Router fallback
// ==============================
app.get("*", (req, res) => {
  const indexPath = frontendPath
    ? path.join(frontendPath, "index.html")
    : null;

  console.log("📄 Serving index.html from:", indexPath);

  if (indexPath && fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Frontend not found. Check build path.");
  }
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
