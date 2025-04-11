import pages from "../models/menu.js";
import { gerarIdeias } from "../controllers/ideasController.js";  

const handleFormSubmit = async (req, res) => {
    try {
        const tema = req.body.tema || '';  // Default to empty string if tema is undefined
        const sim = req.body.yes === 'on'; // Consider checking if 'sim' is true
        
        const decisao = sim;  // Directly assign sim to decisao, no need for extra condition
        
        // Verifica se o tema é válido
        if (!tema.trim()) {
            throw new Error("O tema é obrigatório.");
        }

        // Gera as ideias baseadas no tema
        const palavras = await gerarIdeias(tema);
        
        // Verifica se o resultado é um array
        if (!Array.isArray(palavras)) {
            throw new Error("As ideias não foram retornadas como um array.");
        }

        
        console.log(req.path);
        // Determina qual página renderizar
        const page = req.path.slice(1);  // Pode substituir com o nome de página desejada

        
        res.render(page, { 
            caminho: "Brainstorming",
            pages,
            ideas: palavras,
            tema, 
            decisao
        });

    } catch (erro) {
        console.error("Erro ao gerar ideias:", erro.message);
        res.status(500).send(`Erro ao gerar ideias: ${erro.message}`);
    }
};

export default handleFormSubmit;
