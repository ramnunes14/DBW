import axios from 'axios';
import formatWords from '../models/ideas.js';

export const gerarIdeias = async (req, res) => {
  const messages = [
    { 
      role: 'system', 
      content: 'Você é um gerador de palavras curtas para brainstorm. Responda apenas com um array de palavras no formato JSON válido, sem explicações, sem markdown e sem quebras de linha.' 
    },
    { 
      role: 'user', 
      content: 'Dá-me 5 palavras diferentes em português de Portugal para brainstorm relacionadas com . Apenas palavras, no formato JSON válido, como ["Musica", "Arte", "Desporto", "Tecnologia", "Yoga"], mas não pode ser estas palavras.' 
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

    console.log('Resposta completa:', JSON.stringify(resposta.data, null, 2));

    const conteudo = resposta.data.choices[0].message.content;
    
    if (!conteudo) {
      throw new Error("Conteúdo não encontrado na resposta da API");
    }
    const palavras = formatWords(conteudo);

    res.json({ ideas: palavras });

  } catch (erro) {
    console.error("Erro ao gerar ideias:", erro.message);
    res.status(500).json({ error: "Erro ao gerar ideias" });
  }
};
