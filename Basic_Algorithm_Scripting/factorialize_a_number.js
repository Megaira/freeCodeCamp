// Return the factorial of the provided integer.
// A factorial is the product of all positive integers less than or equal to n.
/*
Initialise factorial with 1, as it is the neutral element of multiplication.
Set counting variable i equal to num.
As long as i > 0 multiply it to factorial and decrement i by 1 in each loop.
 */

function factorialize(num) {
	var factorial = 1;
	var i = num;
	while(i > 0) {
		factorial *= i;
		i--;
	}
  return factorial;
}

factorialize(5);
// Testing:
console.log(typeof(factorialize(5)))
console.log(factorialize(5))
console.log(factorialize(10))
console.log(factorialize(20))
console.log(factorialize(0))

