const express = require("express");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(express.json());
const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

app.post("/api/gemini", async (req, res) => {
  try {
    const { input } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(input);
    const response = await result.response;
    const text = response.text();

    res.json({ text: text });
  } catch (error) {
    console.error("Error calling Google AI Gemini API:", error);
    res.status(500).send("Error calling Google AI Gemini API");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
