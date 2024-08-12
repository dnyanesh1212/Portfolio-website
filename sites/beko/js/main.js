AOS.init();
function navopen(){
    document.querySelector(".menus").style.width="85%";
  }
  function navclose(){
    document.querySelector(".menus").style.width="0px";
  }

  $(document).ready(function(){
   
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
            576:{
                items:3,
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


    //   $(".owl-carousel1").owlCarousel({
    //     loop:true,
    //     // nav:true,
    //     autoplay:true,
    //     autoplayTimeout:2000,
    //     autoplayHoverPause:true,
    //     responsiveClass:true,
    //     responsive:{
    //         320:{
    //             items:1,
    //             nav:false
    //         },
    //         576:{
    //             items:1,
    //             nav:false
    //         },
    //         768:{
    //             items:2,
    //             nav:false
    //         },
    //     }
    //   });

    $('.count1').counterUp({
			delay: 10,
			time: 1000
		});
  });