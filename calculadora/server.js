// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("API de Calculadora funcionando correctamente ✅");
});

// Operaciones básicas
app.post("/sumar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a + b });
});

app.post("/restar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a - b });
});

app.post("/multiplicar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a * b });
});

app.post("/dividir", (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ error: "No se puede dividir entre 0" });
  res.json({ resultado: a / b });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
});
