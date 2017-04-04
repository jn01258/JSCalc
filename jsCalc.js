var squares = document.getElementsByClassName("square");


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


// Assign first number  pressed (to a variable or array)
// 2. and youll also need to "save" which operation has been chosen
// Once the equals sign is pressed, it should run a function which evaluates the
//  expression by calling the simple functions you created earlier
//   and outputting the result to the command line.
//    It may take some practice to be able to pass the values from your "buttons"
//    to your main calculator function. It's a bit tricky, but you can do it.

 function initiate() {
     firstNumber();
 }

 function firstNumber() {
     for (var i = 0; i < squares.length; i++) {
     	squares[i].addEventListener("click", function() {
         console.log(Number(this.getAttribute("number-value")));
       });
     }
 }
initiate();
