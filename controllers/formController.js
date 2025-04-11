import pages from "../models/menu.js";
import { gerarIdeias } from "../controllers/ideasController.js";  

const handleFormSubmit = async (req, res) => {
    try {
        const tema = req.body.tema || '';
        if (!req.session.tema) {
          req.session.tema = [];  
        }
        
        req.session.tema.push(req.body.tema);  
        
        const sim = req.body.yes === 'on'; 
        const decisao = sim;  
        if (!tema.trim()) {
            throw new Error("O tema é obrigatório.");
        }
        const palavras = await gerarIdeias(tema);
        
       
        if (!Array.isArray(palavras)) {
            throw new Error("As ideias não foram retornadas como um array.");
        }

  
        const page = req.path.slice(1);  
        res.render(page, { 
            caminho: "Brainstorming",
            pages,
            ideas: palavras,
            tema, 
            ideasdecididas:req.session.tema,
            decisao
        });

    } catch (erro) {
        console.error("Erro ao gerar ideias:", erro.message);
        res.status(500).send(`Erro ao gerar ideias: ${erro.message}`);
    }
};

export default handleFormSubmit;
