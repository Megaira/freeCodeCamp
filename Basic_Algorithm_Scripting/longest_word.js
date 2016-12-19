// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function findLongestWord(str) {
	var array = str.split(" ");
	console.log(array)
	var longest = 0;
	for (var i = 0; i < array.length; i++) {
		
		var word = array[i].length;
		if (longest < word) {
			longest = word;
		}	
	}
	return longest;	
}

// findLongestWord("The quick brown fox jumped over the lazy dog");

// Testing:
console.log(typeof(findLongestWord("The quick brown fox jumped over the lazy dog")))
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("May the force be with you"))
console.log(findLongestWord("Google do a barrel roll"))
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"))
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"))