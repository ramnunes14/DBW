const formatWords = (responseContent) => {
    
    let palavrasStr = responseContent
      .replace(/\*\*/g, '') 
      .replace(/\n/g, '')   
      .replace(/[^a-zA-ZÀ-ÿ0-9\s,"]/g, '')  
      .trim();             
  
    
    let palavrasJSON = palavrasStr;
  
    if (!palavrasJSON.startsWith('[')) {
      palavrasJSON = `[${palavrasJSON}]`;  
    }
  
    try {
      const palavras = JSON.parse(palavrasJSON);
      return palavras;
    } catch (erro) {
      throw new Error('Erro ao analisar a resposta como JSON');
    }
  };
  export default formatWords;