const circulo = document.getElementById('contador');
const ideasDiv = document.getElementById('sub-div');

let count = document.getElementById('contador').textContent;
let contadorAtivo = true;  


function decrementarContador() {
  if (count > 0) {
    count--; 
    circulo.textContent = count; 
  } else if(count === circulo.textContent){
        atualizarIdeias();
  }
  else if (count === 0 && contadorAtivo) {
    contadorAtivo = false;
    atualizarIdeias();
  }
}

function atualizarIdeias() {
  
  const temaElement = document.querySelector('.tema'); // Seleciona o <h1> com a classe "tema"
  const tema = temaElement ? temaElement.textContent : ''; // Pega o texto dentro do <h1>
  console.log(tema); // Aqui você pode verificar o conteúdo

  fetch('/gerar-ideias?tema='+ tema)
    .then(response => response.json()) 
    .then(data => {
      
      ideasDiv.innerHTML = ''; 

      
      data.ideas.forEach(idea => {
        const button = document.createElement('button');
        button.textContent = idea; 
        button.classList.add('myButton'); 
        ideasDiv.appendChild(button); 
      });
    })
    .catch(error => console.error('Erro ao atualizar as ideias:', error))
    .finally(() => {
      reiniciarContador();  
    });
}

function reiniciarContador() {
  count = 20;
  contadorAtivo = true;
  circulo.textContent = count;
}

setInterval(decrementarContador, 1000);
botoes.forEach(button => {
    button.addEventListener('click', () => {
        input.value = button.innerText;
    });
});