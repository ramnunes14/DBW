import express from "express";
import { getSessions } from "../controllers/publicsessionsController.js";

const router = express.Router();

router.get("/", getSessions);

export default router;