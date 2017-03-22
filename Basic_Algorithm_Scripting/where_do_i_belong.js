/*
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value
should be a number.
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index;

  // push num into arr
  arr.push(num);

  // sort array 'arr' from smallest to highest value
  arr.sort(compare);

  // Function that defines sort order
  function compare(a, b) {
  	return a - b;
  }

  // iterate over array items
  for (var i = 0; i <= arr.length - 1; i++) {
  	// Check if current array item equals given number
  	if (arr[i] == num) {
  		// if yes: set index to the index of array item
  		index = arr.indexOf(arr[i]);
  	}
  }
  console.log(index);
  return index;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);