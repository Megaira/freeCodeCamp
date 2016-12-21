/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/
function titleCase(str) {
	// Turn everything to lower case and 
	// split string into array of strings
	var stringArray = str.toLowerCase().split(' ');
	// Loop through array and turn every 0. letter to upper case
	for (var i = 0; i < stringArray.length; i++) {
		stringArray[i] = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase());
	}
	// Join array elemnts to string again with whitespace as separator
	var strUpperCase = stringArray.join(' ');
    return strUpperCase;
}

titleCase("I'm a little tea pot");

// Testing:
console.log(typeof(titleCase("I'm a little tea pot")))
console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))