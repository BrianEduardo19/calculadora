import db from "../db.js";

export const obtenerUsuarios = (req, res) => {
  db.query("SELECT * FROM Usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const crearUsuario = (req, res) => {
  const { nombre_usuario, email } = req.body;

  if (!nombre_usuario) return res.status(400).json({ error: "El nombre es obligatorio" });

  db.query(
    "INSERT INTO Usuarios (nombre_usuario, email) VALUES (?, ?)",
    [nombre_usuario, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ mensaje: "Usuario creado correctamente" });
    }
  );
};
