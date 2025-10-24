import express from "express";
import { obtenerOperaciones, realizarOperacion } from "../controllers/operacionesController.js";

const router = express.Router();

router.get("/", obtenerOperaciones);
router.post("/", realizarOperacion);

export default router;
