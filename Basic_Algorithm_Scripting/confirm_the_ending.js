/*
Check if a string (first argument, str) ends with the given target string
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced
in ES2015. But for the purpose of this challenge, we would like you to use one
of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  // Return the characters in a string starting at the character 
  // with the index = string length - target length
  var subStr = str.substr(str.length - target.length);
  // Compare target and substring
  if (subStr === target) {
  	return true;
  } else {
  	return false;
  }
}

confirmEnding("Bastian", "n");

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));