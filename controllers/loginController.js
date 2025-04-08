import pages from "../models/menu.js";

const getLogin = (req, res) => {
    res.render("login", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getLogin };
