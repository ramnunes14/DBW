import pages from "../models/menu.js";
import ideas from "../models/ideas.js";
const getStart = (req, res) => {
    res.render("start", { 
        pages, 
        ideas,
        caminho: req.baseUrl.slice(1) }); 
};
export { getStart };
