import express from 'express';
// Usando import padrão
import handleFormSubmit from '../controllers/formController.js';

const router = express.Router();

router.post('/Brainstorming/Level1', handleFormSubmit);

export default router;
