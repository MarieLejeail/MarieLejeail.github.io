spotClickCount = 0;

function makeGreen() {
  $('.header--bouton-blue').removeClass('header--bouton-blue').addClass('header--button-green')
}

function sayGoodbye() {
  document.getElementById("header").innerText = "Au revoir"
}

function answer() {
  document.getElementById("copy").innerText = "Très bien et toi?"
}

function markBox(boite) {
  if(spotClickCount % 2 == 0) {
    marker = 'X';
  }else {
    marker = 'O';
  }
  $(".spot")[boite].innerText = marker;
    
  spotClickCount = spotClickCount+1;
}

$( document ).ready(function() {
   $('.button').click(function(){
     alert(this.className);
   })

   $('.spot').click(function(){
    markBox($(this).data("box"));
   })



});
