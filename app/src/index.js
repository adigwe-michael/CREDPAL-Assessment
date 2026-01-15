const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/status", (req, res) => {
  res.json({ uptime: process.uptime() });
});

app.post("/process", (req, res) => {
  console.log("Processing payload:", req.body);
  res.json({ result: "processed" });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
