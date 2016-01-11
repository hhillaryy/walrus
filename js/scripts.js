$(document).ready(function(){

  $("h2").click(function(){
    alert("This is a heading2");
  });

  $("ul").dblclick(function(){
    alert("Don't you hate lists?");
  });

  $("h1").click(function(){
    prompt("Did this work?");
  });

  $("img").click(function(){
    alert("There should be an image here!");
  });

  $(".clickable").click(function() {
      $(".hidden").toggle();
      $(".appear").toggle();
  });

  $(".slide").click(function(){
    $(".intro").fadeToggle();
    $(".slide-in").fadeToggle();
  });

  $("h1").fadeOut("slow");

  $("h3").click(function() {
      $(".appear-p").slideDown();
    });


});
