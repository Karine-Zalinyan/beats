const openButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
const body = document.querySelector('body');

openButton.addEventListener('click', () => {
    modal.classList.add('modal_opened')
    body.classList.add('body_closed')
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_opened')
    body.classList.remove('body_closed')
})