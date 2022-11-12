
const themeSwitcher = document.querySelector('[data-js-theme-switcher]');
const themeSwitcherIcon = document.querySelector('[data-js-theme-switcher] > .icon');
const app = document.querySelector('html');

const changeTheme = () => {
  const theme = app.getAttribute('data-theme')
  
  if (theme == 'dark') { 
    app.setAttribute('data-theme', 'light') 
    themeSwitcherIcon.classList.remove('bx-sun')
    themeSwitcherIcon.classList.add('bx-moon')
  }
  
  if (theme == 'light') {
    app.setAttribute('data-theme', 'dark')
    themeSwitcherIcon.classList.remove('bx-moon')
    themeSwitcherIcon.classList.add('bx-sun')
  }
}

themeSwitcher.addEventListener('click', (event) => {
  changeTheme()
})

themeSwitcher.addEventListener('keyup', (event) => {
  if (event.code === 'Space') { changeTheme() }
})
