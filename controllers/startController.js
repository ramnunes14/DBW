import pages from "../models/menu.js";
import ideas from '../models/ideas.js'; // Importa a função que gera as ideias
const getStart = (req, res) => {
    console.log(req.baseUrl);
    res.render("start", { 
        pages, 
        ideas,
        tema:null,
        decisao:null,
        caminho: req.baseUrl.slice(1) }); 
};
export { getStart };
