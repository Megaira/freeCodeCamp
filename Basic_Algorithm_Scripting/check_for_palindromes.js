/* A palindrome is a word or sentence that's spelled the same way both forward 
and backward, ignoring punctuation, case, and spacing. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
https://wci.llnl.gov/codes/basis/manual/node161.html
http://www.w3schools.com/jsref/jsref_obj_regexp.asp
http://www.regular-expressions.info/javascript.html
http://www.regular-expressions.info/shorthand.html
*/


function palindrome(str) {
  // Remove all non-alphanumeric characters (punctuation, spaces and symbols),
  // turn everything to lower case:
  var input = str.toLowerCase().replace(/\W/g,"").replace("_","");
  // Reverse cleaned up string:
  var reverse = input.split('').reverse().join('');
  console.log(input, reverse);
  // Check if input == reverse:
  if (input === reverse) {
  	return true;
  } else {
  	return false;
  }
}



// palindrome("eye");

// Testing:
console.log(typeof(palindrome("eye")))
console.log(palindrome("eye"))
console.log(palindrome("_eye"))
console.log(palindrome("race car"))
console.log(palindrome("not a palindrome"))
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("never odd or even"))
console.log(palindrome("nope"))
console.log(palindrome("almostomla"))
console.log(palindrome("My age is 0, 0 si ega ym"))
console.log(palindrome("1 eye for of 1 eye."))
console.log(palindrome("0_0 (: /-\ :) 0-0"))
console.log(palindrome("five|\_/|four"))