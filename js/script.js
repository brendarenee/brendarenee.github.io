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
      `<div class="col mb-4"><div class="card mx-auto" style="width:300px;"><div class="flip-card"><div class="flip-card-inner text-center"><div class="flip-card-front" style="background:url('images/projects/${id}.png')"><h5 class="card-title">${title}</h5></div><div class="flip-card-back"><p class="card-text p-3">${description}</p></div></div></div></div></div>`;
  });
};

loadProjects();
portfolioDiv.innerHTML = portfolioContent;
