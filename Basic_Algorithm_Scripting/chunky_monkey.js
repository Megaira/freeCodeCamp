// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	var newArr = [];
	// so long as arr.length > size
	while (arr.length >= size) {
		// slice size elements of starting at the head
		var sliced = arr.slice(0,size);
		newArr.push(sliced);
		// chop size elements of array head
		arr.splice(0,size);
	}
	// if the remaining arr has a length > 0, push it to newArr
	if (arr.length > 0) {
		newArr.push(arr);
	}
  	return newArr;
}
// Testing:
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));