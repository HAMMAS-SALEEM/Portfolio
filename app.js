const main = document.querySelector('.mobile_menu');
const modal = document.querySelector('.modal');
const { body } = document.body;
const dynamicWork = document.querySelector('.works');
const modelView = document.querySelector('.bg_model');
const cross_btn = document.getElementsByClassName('cross_btn');
let project_title = document.querySelector('.project_title');

function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

function closeModel() {
  modelView.style.visibility = 'hidden'
}

function openModel(id) {
  modelView.style.visibility = 'visible'
  console.log(id);
  for ( let i=0; i<array.length; i++){
    if (id == array[i].id){
      modelView.innerHTML = `
      <div class="model_content" id="modelcontent">
      <div class="model_header">
          <h2 class="project_title">${array[i].name}</h2>
          <span onclick="closeModel()" class="cross_btn">&times;</span>
      </div>
      <ul class="info_list">
          <li class="item1">${array[i].featured[0]}</li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[1]}</span></li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[2]}</span></li>
      </ul>
      <img class="img_project" src=${array[i].image} alt="project">
      <img class="img_desktop" src=${array[i].imageDesktop} alt="project desktop screenshot">
      <p class="project_description">${array[i].longDescription}</p>
      <ul class="tech_list">
          <li>${array[i].technologies[0]}</li>
          <li class="margin_li">${array[i].technologies[1]}</li>
          <li class="margin_li">${array[i].technologies[2]}</li>
      </ul>
      <div class="buttons">
          <a class="model_btn live" href=${array[i].live_version}>See live</a>
          <a class="model_btn source" href=${array[i].source_link}>See project</a>
      </div>
  </div>`
     } 
  }
}

openMain();
closeMain();

const array = [{
  id: 1,
  name: 'Tonic',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/SP.png',
  imageDesktop: 'images/Snap01.png',
  technologies: ['html', 'css', 'javascript'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  id: 2,
  name: 'Multi-Post Stories',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imageDesktop: 'images/snap02.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  id: 3,
  name: 'Tonic',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps.png',
  imageDesktop: 'images/snap03.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
{
  id: 4,
  name: 'Multi-Post Stories',
  shortDescription:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/mps2.png',
  imageDesktop: 'images/snap04.png',
  technologies: ['html', 'css', 'red'],
  live_version: 'https://hammas-saleem.github.io/Portfolio',
  source_link: '',
},
];

for(let i=0; i<array.length; i++){
dynamicWork.innerHTML += `<div class="cr-grid">
  <div id=${array[i].id} class="w1contain">
      <img class="pti" src=${array[i].image} alt="Portfolio Title Image"/>
      <img class="snap01 img13" src=${array[i].imageDesktop} alt="Portfolio"/>
      <div class="for-fullscreen">
          <header>
              <h2 class="works-title">${array[i].name}</h2>
          </header>
          <ul class="specs w11contain">
              <li class="spec1">${array[i].featured[0]}</li>
              <li class="spec2">${array[i].featured[1]}</li>
              <li class="spec2">${array[i].featured[2]}</li>
          </ul>
          <p class="w1par">${array[i].shortDescription}
          </p>
          <div class="bcontain">
              <button type="button" class="w1btn" disabled>html</button>
              <button type="button" class="w1btn" disabled>css</button>
              <button type="button" class="w1btn" disabled>javaScript</button>
          </div>
          <button id=${array[i].id} onclick="openModel(this.id)" type="button" class="w1btn2"><a  href="#model">See Project</a></button>
      </div>
  </div>
  </div>
  `
}

