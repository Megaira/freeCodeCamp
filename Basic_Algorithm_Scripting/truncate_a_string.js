/* 
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in 
determining the truncated string.
*/
// str.concat(string2): function adds sting(s) in it's argument to str

function truncateString(str, num) {
	var truncated;
	// If str.length = num, return original str
	if (str.length <= num) {
		truncated = str;
	// Else if num is less than or equal to 3
	} else if (num <= 3) {
		// slice str up to num
		truncated = str.slice(0, num);
		// add ... at the end
		truncated = truncated.concat('...');
	} else {
		// slice str from index 0 to num-3
		truncated = str.slice(0, num - 3);
  		// add ... at the end
  		truncated = truncated.concat('...');
	}
  return truncated;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));