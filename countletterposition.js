var array = process.argv.slice(2);
var newString = ""

for (x = 0 ; x < array.length; x++){
  newString += array[x];
}

newString = newString.toLowerCase();
newString = newString.split(" ").join("");
var object = {}

function countLettersPosition(newString){

  for ( i = 0 ; i < newString.length ; i++) {


    if (!object[newString[i]]) {
      object[newString[i]]= [i]
    }

    else {
      object[newString[i]].push(i)
    }
  }

return object;


}

console.log(countLettersPosition(newString))

