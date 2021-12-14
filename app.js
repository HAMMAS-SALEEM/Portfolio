const main = document.querySelector('.mobile_menu');
const modal = document.querySelector('.modal');
const { body } = document;
const dynamicWork = document.querySelector('.works2');

function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

openMain();
closeMain();

const array = [{
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/SP.png',
  imagedesktop: 'images/Snap01.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imagedesktop: 'images/snap02.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps.png',
  imagedesktop: 'images/snap03.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imagedesktop: 'images/snap04.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
];


for(let i=0; i<array.length; i++){
document.write(
 `<div class='cr-grid'><div class='w1contain'><img class='pti' src='./images/SP.png' alt='Portfolio Title Image'><img class='snap01 img13' src='./images/Snap01.png' alt='Portfolio'><div class='for-fullscreen'><header><h2 class='works-title'>${array[i].name}</h2></header><ul class='specs w11contain'><li class='spec1'>CANOPY</li><li class='spec2'>Back End Dev</li><li class='spec2'>2015</li></ul><p class='w1par'>A daily selection of privately personalized reads; no accounts or sign-upsrequired.</p><div class='bcontain'><button type='button' class='w1btn' disabled>html</button><button type='button' class='w1btn w1b' disabled>css</button><button type='button' class='w1btn w1b' disabled>javaScript</button></div><button onclick='openModal()' type='button' class='w1btn2'>See Project</button></div></img></img></div></div>`
 )
}