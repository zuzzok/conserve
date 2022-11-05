
const themeSwitcher = document.querySelector('[data-js-theme-switcher]');
const app = document.querySelector('html');

themeSwitcher.addEventListener('click', (event) => {

  const theme = app.getAttribute('data-theme')

  if (theme == 'dark') app.setAttribute('data-theme', 'light')
  if (theme == 'light') app.setAttribute('data-theme', 'dark')

})
