import pages from "../models/menu.js"; 

const get404 = (req, res) => {
    const caminho = "404"; 
    res.status(404).render("404", {
        pages,  
        caminho,
        message: "Página não encontrada!" 
    });
};

export { get404 };
