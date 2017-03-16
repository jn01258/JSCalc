// Warmup

// 1. Build a function my_max() which takes an array and returns the maximum number.
var priorArray=[3,0,2,3,8984,2,2];

function my_max(){
  var someArray = [3,0,2,3,8984,2,2];

  someArray.sort(function(a, b){return b-a});
  document.write("The largest number amongst [" +
      priorArray + "] is " + someArray[0]);
}
my_max();
