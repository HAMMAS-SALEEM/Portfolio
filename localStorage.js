const form2 = document.querySelector('#contact_info');

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector('#name').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
  document.querySelector('#name').value = getDataValue.fullname;
  document.querySelector('#email').value = getDataValue.EmailAdress;
  document.querySelector('#message').value = getDataValue.message;
  }
});
