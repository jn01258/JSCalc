var x = "Ready or not, here I come," +
  "you can't hide";
var positionFound=0;
var vowelCount=0;

  // this is for finding the letter a only
while (positionFound != -1){
  positionFound = x.indexOf("a", positionFound);

  if (positionFound != -1){
    vowelCount++;
    positionFound++;
  }

}

document.write("There are "+ vowelCount + " occurences of the letter a");
