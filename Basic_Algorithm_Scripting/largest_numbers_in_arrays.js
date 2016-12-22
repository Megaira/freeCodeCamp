/* 
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access
each member with array syntax arr[i].
*/

function largestOfFour(arr) {
	var arrOfLargests = [];
  // For each element in arr
	for (var i = 0; i <= arr.length - 1; i++) {
	  	// Initialize largest with 0
	  	var largest = 0;
	  	// For each element in sub-array
	  	for (var j = 0; j <= arr[i].length - 1; j++) {
	  		// check if it is greater than largest and 
	  		if (arr[i][j] > largest) {
	  			// if so, assign it's value to largest
	  			largest = arr[i][j];
	  		}
	  	}
	  	// push largest into new array
	  	arrOfLargests.push(largest);
	}
  return arrOfLargests;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
