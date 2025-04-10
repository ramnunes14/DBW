import express from 'express';
import { gerarIdeias } from '../controllers/ideasControllerHTTPS.js';  // Importa a função do controlador

const router = express.Router();

// Rota para gerar as ideias
router.get('/gerar-ideias', gerarIdeias);

export default router;