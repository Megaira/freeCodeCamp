// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.
// .str.repeat(count): function constructs and returns a new string
// which contains the specified number of copies of the original string.
// count: int, gives the number of times to repeat the string

function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat;
  if (num < 0) {
  	repeat = '';
  } else {
  	repeat = str.repeat(num);
  }
  return repeat;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));