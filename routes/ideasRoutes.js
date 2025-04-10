import express from 'express';
import { gerarIdeias } from '../controllers/ideasController.js';  // Importa a função do controlador

const router = express.Router();

// Rota para gerar as ideias
router.get('/gerar', gerarIdeias);

export default router;