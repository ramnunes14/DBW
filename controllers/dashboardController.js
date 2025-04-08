import pages from "../models/menu.js";

const getDashboard = (req, res) => {
    res.render("dashboard", { 
        pages, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getDashboard };
