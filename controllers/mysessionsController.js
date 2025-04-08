import pages from "../models/menu.js";

const getMySessions = (req, res) => {
    res.render("mysessions", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getMySessions };
