function navopen(){
    document.querySelector(".menus").style.width="60%";
  }
  function navclose(){
    document.querySelector(".menus").style.width="0px";
  }
$(document).ready(function(){
    AOS.init();
   
    $(".owl-carousel").owlCarousel({
        loop:true,
        // nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            320:{
                items:2,
                nav:false
            },
            768:{
                items:4,
                nav:false
            },
            992:{
                items:5,
                nav:false,
                // loop:false
            }
        }
      });
  });