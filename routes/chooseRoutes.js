import express from "express";
import { getChoose } from "../controllers/chooseController.js";

const router = express.Router();


router.get("/", getChoose);

export default router;