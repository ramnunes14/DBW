import express from "express";
import { getMySessions } from "../controllers/mysessionsController.js";

const router = express.Router();

// Usa o controlador corretamente
router.get("/", getMySessions);

export default router;