import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"));

app.get("/products", async (req, res) => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  res.json(data);
});

app.listen(3000);
