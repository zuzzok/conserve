
const generateButton = document.querySelector('[data-js-generate-button]');

const longitud = document.getElementById('longitud')
const minusculas = document.getElementById('minusculas')
const mayusculas = document.getElementById('mayusculas')
const simbolos = document.getElementById('simbolos')
const numeros = document.getElementById('numeros')

generateButton.addEventListener('click', (event) => {
  let charset = '';
  
  if (minusculas.checked) charset += 'abcdefghijklmnñopqrstuvwxyz';
  if (mayusculas.checked) charset += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  if (simbolos.checked) charset += '!#$%&/()=?¡^*_';
  if (numeros.checked) charset += '0123456789';
  
  console.log(charset, longitud.value);
})

const copyPasswordButton = document.querySelector('[data-js-copy-password]');
const password = document.querySelector('[data-js-password]')

copyPasswordButton.addEventListener('click', (event) => {
  navigator.clipboard.writeText(password.value);
  alert('Contraseña copiada...')
})

copyPasswordButton.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    navigator.clipboard.writeText(password.value);
  }
})
