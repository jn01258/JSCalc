// Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).
function reverseString(string){

  var splitString=string.split("");
  var reverseArray=splitString.reverse();
  var joinArray=reverseArray.join("");
  document.write(joinArray);
}

reverseString(prompt("Enter words for us to reverse",""));
