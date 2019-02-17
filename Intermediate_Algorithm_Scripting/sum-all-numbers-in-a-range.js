// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    'use strict';
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var range = [];
    var sum;

    for (var i = min; i <= max; i++) {
      range.push(i);
    }
    sum = range.reduce(function(a, b) {
      return a + b;
    }, 0);

    console.log(sum);
    return sum;
}

sumAll([1, 4]);
