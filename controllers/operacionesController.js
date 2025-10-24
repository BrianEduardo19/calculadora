import db from "../db.js";

export const obtenerOperaciones = (req, res) => {
  db.query("SELECT * FROM Operaciones", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const realizarOperacion = (req, res) => {
  const { expresion, id_usuario } = req.body;

  try {
    // Evaluamos la operación matemática (usa mathjs en proyectos reales)
    const resultado = eval(expresion);
    db.query(
      "INSERT INTO Operaciones (expresion, resultado, id_usuario) VALUES (?, ?, ?)",
      [expresion, resultado.toString(), id_usuario],
      (err) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ expresion, resultado });
      }
    );
  } catch (error) {
    res.status(400).json({ error: "Expresión inválida", detalle: error.message });
  }
};
