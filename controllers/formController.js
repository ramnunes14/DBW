const handleFormSubmit = (req, res) => {
    const tema = req.body.tema; 
    const sim = req.body.yes;   
    let decisao;
    console.log('Tema enviado:', tema);
    if(sim){
        decisao=true;
    }
    else{
        decisao=false;
    }
    
    res.send("Este é o tema: " + tema + " e a decisão é: " + decisao);
};

export default handleFormSubmit;
