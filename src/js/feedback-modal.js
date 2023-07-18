const feedbackModal = document.querySelector('.feedback')
const openFeedbackBtn = document.querySelector('.footer-buttons-block__chat')
const closeFeedbackBtn = document.querySelector('.feedback__close-btn')
const generalOpenFeedbackBtn= document.querySelector('.buttons__chat-button')

openFeedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex'
    if (window.innerWidth < 1120) {
        menuModal.classList.toggle('menu-modal')
        menuModal.classList.toggle('menu-modal--none')
    }
    app.style.overflow = 'hidden'
})
closeFeedbackBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    feedbackModal.style.display = 'none'
})
generalOpenFeedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex'
    app.style.overflow = 'hidden'
})
window.addEventListener('click', (event) => {
    if(event.target == feedbackModal) {
        app.style.overflow = 'scroll'
        feedbackModal.style.display = 'none'
    }
})