import pages from "../models/menu.js";

const getSessions = (req, res) => {
    res.render("publicsessions", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getSessions };
