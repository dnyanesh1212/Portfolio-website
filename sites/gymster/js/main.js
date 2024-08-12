AOS.init();
lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-fade',
  cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
}); 
function navopen(){
  document.querySelector(".menu").style.width="70%";
}
function navclose(){
  document.querySelector(".menu").style.width="0px";
}
function bmi() {
  var weight = document.querySelector(".weight").value;
  var height = document.querySelector(".height").value;
  var calculate = document.querySelector(".calculate");

  if(weight > 0 && height > 0){	
      var finalBmi = weight/(height/100*height/100);
      
        if(finalBmi < 18.5){
            // alert("That you are too thin.");
            var result=document.createElement("span");
            var result_txt= document.createTextNode(finalBmi);
            result.appendChild(result_txt);
            // var old=document.querySelector(".calculate");
            // document.querySelector(".form").insertBefore(result,old);
            var h=document.getElementById("bmih");
            h.innerHTML=result + "That you are too thin.";
            document.querySelector(".weight").value= null;
            document.querySelector(".height").value= null;  
        }
        if(finalBmi > 18.5 && finalBmi < 25){
            // alert("That you are healthy.");
             var result=document.createElement("span");
            var result_txt= document.createTextNode(finalBmi);
            result.appendChild(result_txt);
        }
        if(finalBmi > 25){
            // alert("That you have overweight.");
             var result=document.createElement("span");
            var result_txt= document.createTextNode(finalBmi);
            result.appendChild(result_txt);
        }
        }
    else{
    alert("Please Fill in everything correctly");
    }
  }


$(document).ready(function(){
  $("select").niceSelect();
});