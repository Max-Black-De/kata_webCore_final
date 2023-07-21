import {app, menuModal, toggle} from './menu-modal.js'
const callModal = document.querySelector('.call')
const menuOpenCallBtn = document.querySelector('.footer-buttons-block__call')
const closeCallBtn = document.querySelector('.call__close-btn')
const generalOpenCallBtn= document.querySelector('.buttons__call-button')

menuOpenCallBtn.addEventListener('click', () => {
    callModal.style.display = 'flex'
    if (window.innerWidth < 1120) {
        toggle(menuModal)
    }
    app.style.overflow = 'hidden'
})
closeCallBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    callModal.style.display = 'none'
})
generalOpenCallBtn.addEventListener('click', () => {
    callModal.style.display = 'flex'
    app.style.overflow = 'hidden'
})
window.addEventListener('click', (event) => {
    if(event.target == callModal) {
        app.style.overflow = 'scroll'
        callModal.style.display = 'none'
    }
})