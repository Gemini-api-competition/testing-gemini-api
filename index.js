const express = require("express");
const axios = require("axios");
const app = express();

const API_KEY = "";
app.use(express.json());
app.post("/api/gemini", async (req, res) => {
  try {
    const { input } = req.body;
    const response = await axios.post("https://api.google.com/ai/gemini", {
      input: input,
      key: API_KEY,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error calling Google AI Gemini API:", error);
    res.status(500).send("Error calling Google AI Gemini API");
  }
});

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});
