import pages from "../models/menu.js";
import { gerarIdeias } from "../controllers/ideasController.js";  
const handleFormSubmit = async (req, res) => {
    try {
        const tema = req.body.tema; 
        const sim = req.body.yes;   
        
        let decisao;
        if(sim){
            decisao=true;
        }
        else{
            decisao=false;
    }
        
        const palavras = await gerarIdeias();  // Aqui estamos assumindo que 'gerarIdeias' retorna um array
    
        
        if (!Array.isArray(palavras)) {
          throw new Error("As ideias não foram retornadas como um array.");
        }
    
        console.log(palavras);  // Verifica se as ideias estão corretas
    
        // Renderiza a página com as palavras
        res.render("niveis/level1", { 
            caminho: "Brainstorming",
            pages,
            ideas:palavras,
            tema, 
            decisao });
      } catch (erro) {
        console.error("Erro ao gerar ideias:", erro.message);
        res.status(500).send("Erro ao gerar ideias");
      }
    };
    
    
    


export default handleFormSubmit;
