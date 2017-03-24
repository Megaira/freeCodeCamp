/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
	var array = arguments[0]
	var args = [];

	// Create array with all arguments in 'arr' but the first
	for (var i = 1; i <= arguments.length - 1; i++) {
		args.push(arguments[i]);
	}

	// Conditional:
	for (var i = 0; i<= args.length - 1; i++) {
		console.log(args[i]);
		for (var j = 0; j <= array.length - 1; j++) {
      		if (args[i] == array[j]) {
        		array.splice(array.indexOf(array[j]), 1);
      		}
      		console.log(array);
    	}
	}


	// filter()-funtion:
	// for (var j = 0; j<= args.length - 1; j++) {
	// 	array = array.filter(callback, args[j]);
	// }

	// // Test function to test each element, return true to keep element
	// function callback(element, index, array){
	// 	if(element != this) {
	// 		return element;
	// 	}
	// }
	console.log(array);
   	return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

