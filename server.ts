import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3010;

app.use(express.json());
app.use("/Photos", express.static(path.join(process.cwd(), "Photos")));
app.use("/Photos", express.static(path.join(process.cwd(), "public/Photos")));
app.use("/docs", express.static(path.join(process.cwd(), "public/docs")));
app.use(express.static(path.join(process.cwd(), "public")));


// Lazy-initialized Gemini instance
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// System instructions for Charitarth Foundation AI Assistant
const CHARITARTH_SYSTEM_INSTRUCTION = `
You are Charitarth AI Impact & Guidance Assistant for Charitarth Foundation (Empowering Rural India Through Education, Employment & Entrepreneurship).
Charitarth Foundation works across 200+ rural villages in India (Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh, Odisha, Meghalaya, etc.).

Key Pillars:
1. Education: Quality Education, Digital Literacy, Career Guidance, Scholarships, Libraries, After-school Programs.
2. Employment: Skill Development, Vocational Training, Career Counselling, Livelihood Programs, Charitarth Employment Quality Index (CEQI).
3. Entrepreneurship: Women SHGs, Micro-enterprises, Rural Businesses, Financial Literacy, Business Mentorship, DAY-NRLM integration.

Tax Benefits: 80G & 12A Certified, 50% Tax Exemption on donations under Section 80G of Income Tax Act, India.
CSR Registration: CSR-1 Reg No: CSR00078921. Reg. No: CF-DEL/2025/001.

Your goal is to answer questions politely, warmly, and inspiringly. Suggest how a user's skills or donation amount can create direct impact.
Keep answers concise, structured, and warm.
`;

// AI Assistant endpoint
app.post("/api/ai-assistant", async (req, res) => {
  try {
    const { prompt, history } = req.body;
    const client = getGeminiClient();

    if (!client) {
      return res.status(200).json({
        reply: "Charitarth Foundation is dedicated to transforming rural lives through Education, Employment, and Entrepreneurship. Your contribution directly funds learning kits, skill hubs, and micro-business grants for rural youth and women. (Note: Add GEMINI_API_KEY in secrets for live AI dialogue)."
      });
    }

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: `${CHARITARTH_SYSTEM_INSTRUCTION}\n\nUser Question: ${prompt}` }] }
      ]
    });

    const reply = response.text || "Thank you for reaching out to Charitarth Foundation. Together, we can empower rural India.";
    return res.json({ reply });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({ error: "Failed to generate AI response. " + (err.message || "") });
  }
});

// Vite middleware for development vs production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Charitarth Foundation App running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
