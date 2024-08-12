AOS.init();


lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-fade',
  cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
  // thumbnail: true,
  // currentPagerPosition : 'middle',
  // thumbWidth:100,


}); 


function navopen(){
  document.querySelector(".menu").style.width="75%";
  // document.querySelector(".menu").style.display="block";
}
function navclose(){
  document.querySelector(".menu").style.width="0px";
  // document.querySelector(".menu").style.display="none";
}
$(document).ready(function(){
  $("select").niceSelect();

  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true,
            // loop:false
        }
    }
  });

  // $(".cancel").click(function(){
  //   $(".menu").slideToggle();
  // });
  // $(".burger").click(function(){
  //   $(".menu").toggle();
  //   alert("hello");
  // });

  $('.count1').counterUp({
    delay: 10,
    time: 1000
  });
});