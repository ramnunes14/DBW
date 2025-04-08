import pagesHome from "../models/menuHome.js"; 
const getIndex = (req, res) => {
    const caminho = "Início";
    res.render("index", { 
        pagesHome,
        caminho
    });
};

export { getIndex };
