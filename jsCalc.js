function addition (a,b){
  return a+b;
}

function subtraction (a,b){
  return a-b;
}

function multiplication (a,b){
  return a*b;
}

function division (a,b){
  return a/b;
}

// when the user clicks on one of these squares,
 // it displays that number in the console log.
 // This can be done by assigning a function to the onclick() property of the div

 var squares = document.getElementsByTagName("div");

 function initiate() {
     clickNumber();

 }

 function clickNumber() {
     for (var i = 0; i < squares.length; i++) {
     	squares[i].addEventListener("click", function() {
         var toConsole = parseInt(this.getAttribute("number-value"));
         console.log(toConsole);

       });
     }
 }
initiate();
