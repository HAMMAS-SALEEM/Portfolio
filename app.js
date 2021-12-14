const main = document.querySelector('.mobile_menu');
const modal = document.querySelector('.modal');
const body = document.body;

function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

function openModal () {
  modal.style.visibility = 'visibile'
  // body.style.overflow = 'hidden'
}

function closeModal() {
  modal.style.visibility = 'hidden'
  body.style.overflow = 'visible'
}

openMain();
closeMain();

