import express from 'express';
// Usando import padrão
import handleFormSubmit from '../controllers/formController.js';

const router = express.Router();

router.post('/Brainstorming/Level1', handleFormSubmit);
router.post('/Brainstorming/Level2', handleFormSubmit);
router.post('/Brainstorming/Level3', handleFormSubmit);
router.get('/Brainstorming/Level1', handleFormSubmit);
router.get('/Brainstorming/Level2', handleFormSubmit);
router.get('/Brainstorming/Level3', handleFormSubmit);
router.post('/Brainstorming/Result', handleFormSubmit);
router.get('/Brainstorming/Result', handleFormSubmit);
export default router;
