import pagesHome from "../models/menuHome.js"; 

const getFaq = (req, res) => {
    res.render("faq", { 
        pagesHome, 
        caminho: req.baseUrl.slice(1) }); 
};
export { getFaq };
