
// Variables and functions for dynamically adding in project links
const projects = document.querySelectorAll('.project-about');

let portfolioDiv = document.querySelector('.portfolio-cards');
let portfolioContent = '';

const projectLinks = [
  "https://brendarenee.github.io/techdegree-project-5/",
  "https://brendarenee.github.io/techdegree-project-6/",
  "https://brendarenee.github.io/techdegree-project-7/",
  "https://brendarenee.github.io/techdegree-project-8/",
  "https://brendarenee.github.io/techdegree-project-4/"
]

// Function generating html for each project tile link

  // Instructions on adding additional project tile links:

      // 1. Add hidden project description in HTML with id in same format, using hyphens for multiple words, and a class of 'project-about'.

      // 2. File name of tile image should MATCH the id (be in the same format) and be in the images/projects/ folder.

function loadProjects () {
  projects.forEach( (project, index) => {
    let id = project.getAttribute('id');
    let description = project.textContent;
    let title = id.split('-').join(' ').toUpperCase();
    portfolioContent +=
      `<a href="${projectLinks[index]}" target="_blank"><div class="col mb-4 bg-transparent px-0"><div class="card bg-transparent border-0 mx-auto ${id}" style="width:280px;"><div class="flip-card bg-transparent" style="width: 280px; height: 280px;"><div class="flip-card-inner position-relative w-100 h-100 text-center"><div class="flip-card-front w-100 h-100 d-flex flex-column justify-content-center position-absolute text-dark rounded-3" style="background:url('images/projects/${id}.png')"><h5 class="card-title px-3 display-6">${title}</h5></div><div class="flip-card-back rounded-3 w-100 h-100 d-flex flex-column justify-content-center position-absolute bg-light text-dark"><p class="card-text p-3">${description}</p></div></div></div></div></div></a>`;

  });
};

loadProjects();
portfolioDiv.innerHTML = portfolioContent;



// Variables and functions for highlighting project skills
const card = $('.card');

function highlightSkill (element) {
  element.removeClass('bg-dark').addClass('skills-highlight');
}

function unhighlightSkill (element) {
  element.removeClass('skills-highlight').addClass('bg-dark');
}

// Event listener to highlight project skills

  // Instructions to enable skills highlighting for additional projects:

    // 1. Add initials of project as a 'class' to the associated skill.

    // 2. Add both mouseenter and mouseleave events for the associated project using the class listed on the '.card' element, which should be in the format below, using hyphens for multiple word titles.

card
  .mouseenter( e => {
    let target = $(e.currentTarget);
    if (target.hasClass('photo-gallery')) {
      highlightSkill($('.pg'));
    } else if (target.hasClass('game-app')) {
      highlightSkill($('.ga'));
    } else if (target.hasClass('dashboard')) {
      highlightSkill($('.db'));
    } else if (target.hasClass('employee-directory')) {
      highlightSkill($('.ed'));
    }
  })
  .mouseleave( e => {
    let target = $(e.currentTarget);
      if (target.hasClass('photo-gallery')) {
        unhighlightSkill($('.pg'));
      } else if (target.hasClass('game-app')) {
        unhighlightSkill($('.ga'));
      } else if (target.hasClass('dashboard')) {
        unhighlightSkill($('.db'));
      } else if (target.hasClass('employee-directory')) {
        unhighlightSkill($('.ed'));
      }
  })


// About 'Read More' buttons

const readBtn = $('.read');

readBtn.click( (e) => {
  let target = $(e.currentTarget);
  if (target.hasClass('collapsed')) {
    readBtn.text('Read more...');
  } else {
    readBtn.text('Read less...');
  }
});



//Change style and animation for social media svg links

  const svgLink = $('.custom-icon');

  svgLink
    .mouseenter( e => {
      let svg = $(e.currentTarget);
      let svgCircle = svg.find('circle');
      svg.css('transform', 'scale(1.2)');
      svgCircle.css('fill', 'rgb(105, 122, 108)');

    })
    .mouseleave( e => {
      let svg = $(e.currentTarget);
      let svgCircle = svg.find('circle');
      svg.css('transform', 'scale(1)');
      svgCircle.css('fill', 'rgb(160, 185, 165)');
    })
