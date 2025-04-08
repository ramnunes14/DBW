import pages from "../models/menu.js";
import ideas from "../models/ideas.js";
const handleFormSubmit = (req, res) => {
    const tema = req.body.tema; 
    const sim = req.body.yes;   
    let decisao;
    console.log('Tema enviado:', tema);
    if(sim){
        decisao=true;
    }
    else{
        decisao=false;
    }
    console.log(req.baseUrl);
    res.render("start", { 
        caminho: "Brainstorming",
        pages,
        ideas,
        tema, 
        decisao });
    
};

export default handleFormSubmit;
