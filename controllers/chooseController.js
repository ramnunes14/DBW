import pagesHome from "../models/menuHome.js"; 

const getChoose = (req, res) => {
    res.render("whychooseus", { 
        pagesHome, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getChoose };
