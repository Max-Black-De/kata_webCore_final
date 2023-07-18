const app = document.querySelector('.application')
const menuModal = document.querySelector('.menu-modal--none')
const openMenuBtn = document.querySelector('.buttons-block__burger-button')
const closeMenuBtn = document.querySelector('.menu-header__close-button')
const mediaQuery = window.matchMedia('(min-width: 1120px)')


openMenuBtn.addEventListener('click', () => {
    menuModal.classList.toggle('menu-modal--none')
    menuModal.classList.toggle('menu-modal')
    app.style.overflow = 'hidden'
})
closeMenuBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    menuModal.classList.toggle('menu-modal--none')
    menuModal.classList.toggle('menu-modal')
})

let handleTableChange = (event) => {
    if (event.matches) {
        menuModal.classList.add('menu-modal--static')
    } else {
        menuModal.classList.remove('menu-modal--static')
    }
}

window.addEventListener('click', (event) => {
    if (event.target == menuModal) {
        app.style.overflow = 'scroll'
        menuModal.classList.toggle('menu-modal')
        menuModal.classList.toggle('menu-modal--none')
    }
})

mediaQuery.addListener(handleTableChange)
handleTableChange(mediaQuery)