import axios from 'axios';
import formatWords from '../models/ideas.js';

export const gerarIdeias = async (req, res) => {
  
  const palavra = req.query.tema;
  
  const messages = [
    { 
      role: 'system', 
      content: 'Você é um gerador de palavras curtas para brainstorm. Responda apenas com um array de palavras no formato JSON válido, sem explicações, sem markdown e sem quebras de linha.' 
    },
    { 
      role: 'user', 
      content: 'Dá-me 5 palavras  em português de Portugal para brainstorm relacionadas com '+ palavra +'. Apena palavras, no formato JSON válido, do tipo ["a", "b", "c", "d", "e"].' 
    }
  ];

  try {
    const resposta = await axios.post('http://localhost:1234/v1/chat/completions', {
      model: 'llama-3.2-1b-instruct',
      messages: messages,
      temperature: 0.9,
      stream: false
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    

    const conteudo = resposta.data.choices[0].message.content;
    
    if (!conteudo) {
      throw new Error("Conteúdo não encontrado na resposta da API");
    }
    const palavras = formatWords(conteudo);

    res.json({ ideas: palavras });

  } catch (erro) {
    res.status(500).json({ error: "Erro ao gerar ideias" });
  }
};
