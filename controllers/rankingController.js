import pages from "../models/menu.js";

const getRanking = (req, res) => {
    res.render("ranking", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getRanking };
