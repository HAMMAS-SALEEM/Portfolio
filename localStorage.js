const form2 = document.querySelector('#');

form2.addEventListener('submit', (e) => {
  e.preventDefault();
    const obj = {
    fullname: document.querySelector('#name').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

let getData = localStorage.getItem('DATA');
let get_data = JSON.parse(getData);

form2.addEventListener('load', (e) => {
    fullname.value = get_data.fullname;
    EmailAdress.value = get_data.EmailAdress;
    message.value = get_data.message; 
}
);
