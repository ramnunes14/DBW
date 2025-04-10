import axios from 'axios';
import formatWords from '../models/ideas.js';

export const gerarIdeias = async () => {
  const messages = [
    { 
      role: 'system', 
      content: 'Você é um gerador de palavras curtas para brainstorm. Responda apenas com um array de palavras no formato JSON válido, sem explicações, sem markdown e sem quebras de linha.' 
    },
    { 
      role: 'user', 
      content: 'Dá-me 5 palavras diferentes em português de Portugal para brainstorm. Apenas palavras, no formato JSON válido, como ["Musica", "Arte", "Desporto", "Tecnologia", "Yoga"], mas não pode ser estas palavras.' 
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
    console.log('Resposta da API:', resposta.data);  // Log da resposta da API

    return palavras;  // Retorna as palavras para o controlador 'getStart'

  } catch (erro) {
    console.error("Erro ao gerar ideias:", erro.message);
    throw new Error("Erro ao gerar ideias"); // Lança um erro se algo der errado
  }
};
