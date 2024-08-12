AOS.init();
function navopen(){
  document.querySelector(".menus").style.width="70%";
}
function navclose(){
  document.querySelector(".menus").style.width="0px";
}
$(document).ready(function(){
    $("select").niceSelect();
  });