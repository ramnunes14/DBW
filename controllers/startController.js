import pages from "../models/menu.js";
import { gerarIdeias } from "../controllers/ideasController.js";  // Importando o controlador

const getStart = async (req, res) => {
  console.log(req.baseUrl);

  try {
    // Chama o controlador 'gerarIdeias' para obter as ideias
    const palavras = await gerarIdeias();  // Aqui estamos assumindo que 'gerarIdeias' retorna um array

    // Verifique se palavras é um array
    if (!Array.isArray(palavras)) {
      throw new Error("As ideias não foram retornadas como um array.");
    }

    console.log(palavras);  // Verifica se as ideias estão corretas

    // Renderiza a página com as palavras
    res.render("start", {
      pages,
      ideas: palavras,  // Passa as palavras para a view
      tema: null,
      decisao: null,
      caminho: req.baseUrl.slice(1)
    });

  } catch (erro) {
    console.error("Erro ao gerar ideias:", erro.message);
    res.status(500).send("Erro ao gerar ideias");
  }
};

export { getStart };
