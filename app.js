const main = document.querySelector('.mobile_menu');
const modal = document.querySelector('.modal');
const { body } = document;
const dynamicWork = document.querySelector('.works');

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
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/SP.png',
  imagedesktop: 'images/Snap01.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Multi-Post Stories',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imagedesktop: 'images/snap02.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Tonic',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps.png',
  imagedesktop: 'images/snap03.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  name: 'Multi-Post Stories',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imagedesktop: 'images/snap04.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
];

// function tech () {
//   for(let i=0; i<=array.length; i++){
//     for(let j=1; j<array[i].featured.length; j++){

//     }
//   }
// }

function arrElem () {
  for(let i=0; i<array.length; i++){
    for(let j=1; j<=array[i].featured.length-1;j++){
     document.write(`<li>${array[i].featured[j]}</li>`)
    } 
  }
}



for(let i=0; i<array.length; i++){
dynamicWork.innerHTML += `<div class="cr-grid">
  <div class="w1contain">
      <img class="pti" src="./images/SP.png" alt="Portfolio Title Image"/>
      <img class="snap01 img13" src="./images/Snap01.png" alt="Portfolio"/>
      <div class="for-fullscreen">
          <header>
              <h2 class="works-title">${array[i].name}</h2>
          </header>
          <ul class="specs w11contain">
              <li class="spec1">${array[i].featured[0]}</li>
              <li class="spec2">${array[i].featured[i]}</li>
          </ul>
          <p class="w1par">${array[i].shortDescription}
          </p>
          <div class="bcontain">
              <button type="button" class="w1btn" disabled>html</button>
              <button type="button" class="w1btn" disabled>css</button>
              <button type="button" class="w1btn" disabled>javaScript</button>
          </div>
          <button onclick="openModal()" type="button" class="w1btn2">See Project</button>
      </div>
  </div>
  </div> 
  `

}
