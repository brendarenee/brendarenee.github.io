

const skills = $('.skills-list').children();
let card;
// Locate the .card element for the event

function findCard(e) {
  let target = e.target;
  if ( $(target).hasClass('card') ) {
    card = target;
    return card;
  } else {
    card = e.target.closest('.card');
    return card;
  }
}

const projects = document.querySelectorAll('.project-about');

let portfolioDiv = document.querySelector('.portfolio-cards');
let portfolioContent = '';

console.log(projects);

function loadProjects () {
  projects.forEach( project => {
    let id = project.getAttribute('id');
    let description = project.textContent;
    let title = id.split('-').join(' ').toUpperCase();
    portfolioContent +=
      `<div class="col mb-4 bg-transparent"><div class="card bg-transparent border-0 mx-auto" style="width:280px;"><div class="flip-card bg-transparent" style="width: 280px; height: 280px;"><div class="flip-card-inner position-relative w-100 h-100 text-center"><div class="flip-card-front w-100 h-100 d-flex flex-column justify-content-center position-absolute text-dark rounded-3 border border-dark border-3" style="background:url('images/projects/${id}.png')"><h5 class="card-title px-3 display-6">${title}</h5></div><div class="flip-card-back rounded-3 w-100 h-100 d-flex flex-column justify-content-center position-absolute bg-light text-dark"><p class="card-text p-3">${description}</p></div></div></div></div></div>`;
  });
};

loadProjects();
portfolioDiv.innerHTML = portfolioContent;
