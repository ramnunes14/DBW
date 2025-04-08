
const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
       
        document.querySelectorAll('.sel-boxn').forEach((box) => {
            box.style.display = 'none';
        });
        let content = this.parentElement.nextElementSibling;
        if (content && content.classList.contains('sel-boxn')) {
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        }
    });
});


 // Obtenha todos os botões com a classe 'myButton'
 const botoes = document.querySelectorAll('.myButton');
 const input = document.getElementById('myInput');

 // Adiciona um evento para cada botão
 botoes.forEach(button => {
     button.addEventListener('click', () => {
         // Altera o valor do input para o texto do botão
         input.value = button.innerText;
     });
 });
 // Selecione os checkboxes
 const yesCheckbox = document.getElementById('yes');
 const noCheckbox = document.getElementById('no');

 // Adiciona um evento para garantir que apenas um checkbox esteja selecionado
 yesCheckbox.addEventListener('change', function() {
   if (yesCheckbox.checked) {
     noCheckbox.checked = false; // Desmarcar o 'no' se o 'yes' for marcado
   }
 });

 noCheckbox.addEventListener('change', function() {
   if (noCheckbox.checked) {
     yesCheckbox.checked = false; // Desmarcar o 'yes' se o 'no' for marcado
   }
 });