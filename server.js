import express from "express";

const app = express();
const API_KEY = process.env.API_KEY || "your-secret-key-here";

// Authentication middleware
app.use((req, res, next) => {
  const key = req.headers['x-api-key'] || req.query.key;
  
  if (!key || key !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized - Invalid or missing API key" });
  }
  next();
});

/*  THIS IS THE KEY - AUTHENTICATION REQUIRED */
app.use(express.static("public"));

app.get("/api/products", async (req, res) => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
  console.log("API Key required: Set X-API-Key header or ?key=YOUR_KEY");
});
