
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


 const botoes = document.querySelectorAll('.myButton');
 const input = document.getElementById('myInput');

 
 botoes.forEach(button => {
     button.addEventListener('click', () => {
         input.value = button.innerText;
     });
 });
 
 const yesCheckbox = document.getElementById('yes');
 const noCheckbox = document.getElementById('no');

 
 yesCheckbox.addEventListener('change', function() {
   if (yesCheckbox.checked) {
     noCheckbox.checked = false; 
   }
 });

 noCheckbox.addEventListener('change', function() {
   if (noCheckbox.checked) {
     yesCheckbox.checked = false; 
   }
 });