import express from "express";

const app = express();

// Définition de la route principale
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

export { app };
