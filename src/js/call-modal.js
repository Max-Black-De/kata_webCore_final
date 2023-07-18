// export default class Call {
    const callModal = document.querySelector('.call')
    const openCallBtn = document.querySelector('.footer-buttons-block__call')
    const closeCallBtn = document.querySelector('.call__close-btn')
    const generalOpenCallBtn= document.querySelector('.buttons__call-button')

    openCallBtn.addEventListener('click', () => {
        callModal.style.display = 'flex'
        if (window.innerWidth < 1120) {
            menuModal.classList.toggle('menu-modal')
            menuModal.classList.toggle('menu-modal--none')
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
// }