/* Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
*/

$(document).ready(function(){

  $('.next').click(slideRight);
  $('.prev').click(slideLeft);

  $(document).keydown(function(){
   arrowNav();
 });

})



function slideRight(){
  var slideImgEl= $('img.active');
  slideImgEl.removeClass('active');

  if(slideImgEl.hasClass('last')){
    $('img.first').addClass('active');
  } else{
    slideImgEl.next().addClass('active');
  }
}

function slideLeft(){
  var slideImgEl= $('img.active');
  slideImgEl.removeClass('active');

  if(slideImgEl.hasClass('first')){
    $('img.last').addClass('active');
  } else{
    slideImgEl.prev().addClass('active');
  }
}

function arrowNav() {
  if (event.which == 39) { // right
    slideRight();

  } else if (event.which == 37) { //left
    slideLeft();
  }
}
