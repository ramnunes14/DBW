import pages from "../models/menu.js";

const getProfile = (req, res) => {
    res.render("profile", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getProfile };
