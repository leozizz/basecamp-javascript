
//Função responsável pela troca do modo escuro
function changeMode() {
    changeClass()
    changeText()
}

//Seleciona as classes e faz o toggle no Dark Mode
function changeClass() {
    h1.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
}

//Muda o texto visível de acordo com o tema atual
function changeText() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + 'ON'
        return
    }

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + 'ON'
}

//Seleção dos elementos HTML
const darkModeClass = 'dark-mode'
const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

//Evento que será acionado no click do mouse ativando a função changeMode
button.addEventListener("click", changeMode)
