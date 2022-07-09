const array = [{
  id: '1',
  name: 'PWW 2022',
  shortDescription: 'This web app shares information about Pakistan Watch Week 2022.',
  longDescription: 'This website project serves the objective of notifying people about a forthcoming Watch Week 2022, complete with an about page that provides further information.',
  featured: ['CANOPY', 'Back End Dev', 2015],
  image: 'images/watch_mobile.gif',
  imageDesktop: 'images/watch_desktop.gif',
  technologies: ['html', 'css', 'javascript'],
  live_version: 'https://hammas-saleem.github.io/Pakistan-Watch-Week-2022/',
  source_link: 'https://github.com/HAMMAS-SALEEM/Pakistan-Watch-Week-2022',
},
{
  id: '2',
  name: 'ToDoList',
  shortDescription: 'A convenient way to keep track of their daily routine works.',
  longDescription: 'A simple to-do app for managing daily tasks built with Webpack, JavaScript, HTML, and CSS. With the functionality to manipulate multiple completed tasks and store them to local storage.',
  featured: ['Interactive', 'Local Storage', 2021],
  image: 'images/todolist-mobile.GIF',
  imageDesktop: 'images/todolist-desktop.GIF',
  technologies: ['html', 'css', 'javascript'],
  live_version: 'https://hammas-saleem.github.io/ToDoList/',
  source_link: 'https://github.com/HAMMAS-SALEEM/ToDoList',
},
// {
//   id: '3',
//   name: 'INFLIX',
//   shortDescription: 'This web application is a type of a showcase of movies with details.',
//   longDescription: 'This web application is a type of showcase of movies with details of
// the movies and an option to get comments on each movie. which is using APIs to get
// and set data.',
//   featured: ['Interactive', 'Responsive', 2022],
//   image: 'images/INFLIX-mobile.gif',
//   imageDesktop: 'images/INFLIX-desktop.GIF',
//   technologies: ['html', 'css', 'javascript'],
//   live_version: 'https://hammas-saleem.github.io/INFLIX/',
//   source_link: 'https://github.com/HAMMAS-SALEEM/INFLIX',
// },
{
  id: '4',
  name: 'CovidMonitor',
  shortDescription: 'This web application is a type of a showcase of movies with details.',
  longDescription: 'This web application is a type of showcase of movies with details of the movies and an option to get comments on each movie. which is using APIs to get and set data.',
  featured: ['Interactive', 'Responsive', 2022],
  image: 'images/covidMonitor-mobile.gif',
  imageDesktop: 'images/covidMonitor.GIF',
  technologies: ['html', 'css', 'javascript'],
  live_version: 'https://hammascovidmonitor.netlify.app/',
  source_link: 'https://github.com/HAMMAS-SALEEM/CovidMonitor',
},
{
  id: '5',
  name: 'MyBudget',
  shortDescription: 'MyBudget is a budget manager application.',
  longDescription: '"MyBudget" is a budget manager web application that allows users to keep track of their budget with different categories.',
  featured: ['Interactive', 'Responsive', 2022],
  image: 'images/my_budget.png',
  imageDesktop: 'images/my_budget.png',
  technologies: ['Ruby on Rails', 'ReactJS', 'PostgreSQL'],
  live_version: 'https://quiet-sierra-22121.herokuapp.com/',
  source_link: 'https://github.com/HAMMAS-SALEEM/MyBudget',
},
];

const main = document.querySelector('.mobile_menu');
const dynamicWork = document.querySelector('.works');
const modelView = document.querySelector('.bg_model');

function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

function closeModel() {
  modelView.style.visibility = 'hidden';
}

function openModel(id) {
  modelView.style.visibility = 'visible';
  for (let i = 0; i < array.length; i += 1) {
    if (id === array[i].id) {
      modelView.innerHTML = `
      <div class="model_content" id="modelcontent">
      <div class="model_header">
          <h2 class="project_title">${array[i].name}</h2>
          <span onclick="closeModel()" class="crossBtn">&times;</span>
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
      <img src="./images/border_line.png" alt="border line" class="button_line">
      <div class="buttons">
          <a class="model_btn live" href=${array[i].live_version}>See live<img class="_icon" src="./images/Icon.svg" alt="live icon"></a>
          <a class="model_btn source" href=${array[i].source_link}>See project<img class="_icon" src="./images/Vector.svg" alt="github icon"></a>
      </div>
  </div>`;
    }
  }
}

openMain();
closeMain();
openModel();
closeModel();
for (let i = 0; i < array.length; i += 1) {
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
              <button type="button" class="w1btn" disabled>${array[i].technologies[0]}</button>
              <button type="button" class="w1btn" disabled>${array[i].technologies[1]}</button>
              <button type="button" class="w1btn" disabled>${array[i].technologies[2]}</button>
          </div>
          <button id=${array[i].id} onclick="openModel(this.id)" type="button" class="w1btn2"><a  href="#model">See Project</a></button>
      </div>
  </div>
  </div>
  `;
}
