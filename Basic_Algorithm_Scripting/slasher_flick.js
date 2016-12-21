// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.
// array.splice(start, deleteCount)
// start: index at which to start changing the array
// deleteCount: integer indicating the number of elements to remove starting from 'start'

function slasher(arr, howMany) {
	// start = 0, as we chop of elements from the head
	// deleteCount = howMany, as this is the number of elements we want to chop of
  arr.splice(0,howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
console.log(slasher([1, 2, 3], 4));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));