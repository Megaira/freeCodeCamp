/*
Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.
*/

function mutation(arr) {
	// Convert both strings to lower case
	arr[0] = arr[0].replace(arr[0], arr[0].toLowerCase());
	arr[1] = arr[1].replace(arr[1], arr[1].toLowerCase());
	
	// Create an empty array for indices
	var indices = [];

	// Loop through all characters of second string in array
	for (var i = 0; i <= arr[1].length - 1; i++) {
		// Check for every character if it is present in first string in array
		var index = arr[0].indexOf(arr[1][i]); 
		// Push index values in indices array
		indices.push(index);
	}
	// Check if indices array contains -1
	if (indices.indexOf(-1) > -1) {
		return false;
	} else {
		return true;
	}
}

mutation(["hello", "hey"]);

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));