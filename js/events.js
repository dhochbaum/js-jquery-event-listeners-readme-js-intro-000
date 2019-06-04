//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});



function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('click', function(image){
    //console.log(image.attributes.className);
    //image[0].className = "tasty";
    //$('img').addClass = "tasty";
    image.addClass = "tasty";
    //$('img:className').val() = "tasty";
    console.log($('img'));
  });
}
