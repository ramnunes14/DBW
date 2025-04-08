import express from "express";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

// Usa o controlador corretamente
router.get("/", getProfile);

export default router;