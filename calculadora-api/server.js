import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuariosRoutes from "./routes/usuarios.js";
import operacionesRoutes from "./routes/operaciones.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/operaciones", operacionesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
