/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  	// Convert every element of the array to Boolean object and 
  	// Create new array with not false elements by .filter()
  	var trueArr = arr.filter(Boolean);
  	return trueArr;
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));