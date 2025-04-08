import pages from "../models/menu.js";
import ideas from "../models/ideas.js";
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
