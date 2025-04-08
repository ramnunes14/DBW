import pages from "../models/menu.js";

const getSignUp = (req, res) => {
    res.render("signup", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getSignUp };
