import express from "express";
import { getFaq } from "../controllers/FaqController.js";

const router = express.Router();

// Usa o controlador corretamente
router.get("/", getFaq);

export default router;