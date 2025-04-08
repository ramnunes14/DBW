import express from "express";
import { getInfo } from "../controllers/informacaoController.js";
const router = express.Router();
router.get("/", getInfo);
export default router;
