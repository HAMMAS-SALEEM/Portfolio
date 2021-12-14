const main = document.querySelector('.mobile_menu');
const modal = document.querySelector('.modal');
const body = document.body;

function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

openMain();
closeMain();

let array = [{
  name:'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY','Back End Dev',2015],
  image: 'images/SP.png',
  imagedesktop : 'images/Snap01.png',
  technologies : ['html','css','red'],
  live_version : 'https://hammas-saleem.github.io/Portfolio',
  source_link  : ''
},
{
  name:'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY','Back End Dev',2015],
  image: 'images/mps2.png',
  imagedesktop : 'images/snap02.png',
  technologies : ['html','css','red'],
  live_version : 'https://hammas-saleem.github.io/Portfolio',
  source_link  : ''
},
{
  name:'Tonic',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY','Back End Dev',2015],
  image: 'images/mps.png',
  imagedesktop : 'images/snap03.png',
  technologies : ['html','css','red'],
  live_version : 'https://hammas-saleem.github.io/Portfolio',
  source_link  : ''
},
{
  name:'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY','Back End Dev',2015],
  image: 'images/mps2.png',
  imagedesktop : 'images/snap04.png',
  technologies : ['html','css','red'],
  live_version : 'https://hammas-saleem.github.io/Portfolio',
  source_link  : ''
}
]

