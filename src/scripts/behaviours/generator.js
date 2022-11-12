
const generateButton = document.querySelector('[data-js-generate-button]');
const strenghtIndicator = document.querySelector('[data-js-strenght-indicator]');
const lenghtSlider = document.querySelector('[data-js-lenght-slider]');
const passwordInput = document.querySelector('[data-js-password]');

const generatePassword = (length) => {
  
  let charset = '';

  const minusculas = document.getElementById('minusculas')
  const mayusculas = document.getElementById('mayusculas')
  const simbolos = document.getElementById('simbolos')
  const numeros = document.getElementById('numeros')
  
  if (minusculas.checked) charset += 'abcdefghijklmnñopqrstuvwxyz';
  if (mayusculas.checked) charset += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  if (simbolos.checked) charset += '!#$%&/()=?¡^*_';
  if (numeros.checked) charset += '0123456789';

  let password = "";

  if (length !== 0 && charset !== '') {
    changeStrenghtIndicator(length)

    for (let i = 0; i < length; i++) {
      let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
      randomNumber = randomNumber / 0x100000000;
      randomNumber = Math.floor(randomNumber * charset.length);
  
      password += charset[randomNumber];
    }
  }

  return password;
}

const changeStrenghtIndicator = (lenght) => {
  let strenght = ''

  if (lenght <= 8) strenght = 'weak'
  if (lenght > 8 && lenght <= 16) strenght = 'medium'
  if (lenght > 16 && lenght <= 50) strenght = 'strong'

  strenghtIndicator.setAttribute('data-js-strenght-indicator', strenght)
}

generateButton.addEventListener('click', (event) => {
  const length = Number(document.getElementById('longitud').value)
  passwordInput.value = generatePassword(length)
})

lenghtSlider.addEventListener('input', (event) => {
  const length = Number(document.getElementById('longitud').value)
  passwordInput.value = generatePassword(length)
  lenghtSlider.setAttribute('value', String(length))
})

const copyPasswordButton = document.querySelector('[data-js-copy-password]');
const password = document.querySelector('[data-js-password]')

copyPasswordButton.addEventListener('click', (event) => {
  navigator.clipboard.writeText(password.value);
})

copyPasswordButton.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    navigator.clipboard.writeText(password.value);
  }
})
