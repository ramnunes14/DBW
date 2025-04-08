import express from "express";
import { getStart } from "../controllers/startController.js";
import handleFormSubmit from '../controllers/formController.js';

const router = express.Router();

router.get("/", getStart);
router.post('/submit', handleFormSubmit);
export default router;