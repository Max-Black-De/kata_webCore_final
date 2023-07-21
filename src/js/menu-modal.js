export const app = document.querySelector('.application')
export const menuModal = document.querySelector('.menu-modal--none')
const openMenuBtn = document.querySelector('.buttons-block__burger-button')
const closeMenuBtn = document.querySelector('.menu-header__close-button')
const mediaQuery = window.matchMedia('(min-width: 1120px)')

export const toggle = () => {
    menuModal.classList.toggle('menu-modal--none')
    menuModal.classList.toggle('menu-modal')
}

openMenuBtn.addEventListener('click', () => {
    toggle()
    app.style.overflow = 'hidden'
})
closeMenuBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    toggle()
})
let handleTableChange = (event) => {
    if (event.matches) {
        if (menuModal.className === 'menu-modal') {
            toggle()
        }
        menuModal.classList.add('menu-modal--static')
        app.style.overflow = 'scroll'
    } else {
        menuModal.classList.remove('menu-modal--static')
    }
}
window.addEventListener('click', (event) => {
    if (event.target == menuModal) {
        app.style.overflow = 'scroll'
        toggle()
    }
})
mediaQuery.addListener(handleTableChange)
handleTableChange(mediaQuery)