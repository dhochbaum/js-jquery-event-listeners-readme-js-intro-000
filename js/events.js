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
    image.className = "tasty";
    //$('img').className() = "tasty";
    //$('img:className').val() = "tasty";
    console.log($('img'));
  });
}
