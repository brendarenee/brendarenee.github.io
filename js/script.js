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

// $('.card').hover(
//   (e) => {
//     findCard(e);
//     $(card).find('p').show();
//
//     const project = $(card).find('h5').text();
//
//     switch (project) {
//       case 'Photo Gallery':
//         $('.pg').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//       case 'Game App':
//         $('.ga').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//       case 'Dashboard':
//         $('.db').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//       case 'Employee Directory':
//         $('.ed').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//     }
//
//   },
//   (e) => {
//     findCard(e);
//     $(card).find('p').hide();
//
//     const project = $(card).find('h5').text();
//
//     switch (project) {
//       case 'Photo Gallery':
//         $('.pg').css({
//           'transform' : 'scale(1)',
//           'font-weight:' : '300'});
//         break;
//       case 'Game App':
//         $('.ga').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//       case 'Dashboard':
//         $('.db').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//       case 'Employee Directory':
//         $('.ed').css({
//           'transform' : 'scale(1.2)',
//           'font-weight' : '600'});
//         break;
//     }
//   }
// )
