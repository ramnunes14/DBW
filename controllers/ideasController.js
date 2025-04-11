import axios from 'axios';
import formatWords from '../models/ideas.js';

export const gerarIdeias = async (tema = null) => {
  let content;
  if(tema==null){
    content='Dá-me 5 palavras diferentes em português de Portugal para brainstorm rec. Apenas palavras, no formato JSON válido, como ["Musica", "Televisao", "Praia", "Futebol", "Cristiano Ronaldo"], este é um exemplo de palavras, gera aleatoriamente.';
  }
  else{
    content='Dá-me 5 palavras  em português de Portugal para brainstorm relacionadas com '+ tema +'. Apena palavras, no formato JSON válido, do tipo ["a", "b", "c", "d", "e"].';
  }
  const messages = [
    { 
      role: 'system', 
      content: 'Você é um gerador de palavras curtas para brainstorm. Responda apenas com um array de palavras no formato JSON válido, sem explicações, sem markdown e sem quebras de linha.' 
    },
    { 
      role: 'user', 
      content: content 
    }
  ];

  try {
    const resposta = await axios.post('http://localhost:1234/v1/chat/completions', {
      model: 'llama-3.2-1b-instruct',
      messages: messages,
      temperature: 0.1,
      stream: false
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const conteudo = resposta.data.choices[0].message?.content;
    const palavras = formatWords(conteudo); // Formata as palavras
    

    return palavras;  // Retorna as palavras para o controlador 'getStart'

  } catch (erro) {
    
    throw new Error("Erro ao gerar ideias"); // Lança um erro se algo der errado
  }
};
