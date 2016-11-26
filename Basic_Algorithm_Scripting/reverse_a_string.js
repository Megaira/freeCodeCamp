//Reverse the provided string.

/*
.split(): function that splits a string into an array of strings using a 
specified separator 
(here: empty - string should be converted to an array of characters )

.reverse(): function that reverses an array

.join(): function that joins all elements of an array into a string
*/

//split() returns an array on which reverse() and join() can be applied:

function reverseString(str) {
	var strReverse = str.split('').reverse().join('');
  	return strReverse;
}

reverseString("hello");

console.log(reverseString("hello"))
console.log(reverseString("Howdy"))
console.log(reverseString("Greetings from Earth"))