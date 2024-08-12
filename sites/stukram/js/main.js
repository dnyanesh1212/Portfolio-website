$(document).ready(function(){
    // $('.cnt').counterUp({
    //   delay: 10,
    //   time: 1000
    //   });


      $(".burger").click(function(){
        $(".menu").slideDown(function(){
          // $(".menu").slideUp();
        });
      });

      $(".close").click(function(){
        $(".menu").slideUp()
      });

      $('.count1').counterUp({
        delay: 10,
        time: 1000
      });
  });
  AOS.init();
  // lightGallery(document.getElementById('lightgallery'), {
  //   mode: 'lg-fade',
  //   cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
  // }); 

  