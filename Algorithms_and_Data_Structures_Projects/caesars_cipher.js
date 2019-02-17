/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known
as a shift cipher. In a shift cipher the meanings of the letters are shifted by
some set amount.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.
*/

function rot13(str) { // LBH QVQ VG!
	var strList = [];
	var strUnicode = [];
	var rot13 = [];

	/* Iterate over string 'str' */
	for (var i = 0; i <= str.length - 1; i++) {
		/* Translate each character into unicode and write unicode for each
		character into list 'strUnicode' */
		strUnicode.push(str.charCodeAt(i));

		/* Check if unicode value is outside the range for uppercase alphabetic
		characters */
		if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
			/* if yes: push character into list 'rot13' without change */
			rot13.push(str.charCodeAt(i));
		} else {
			/* if no: */
				/* add 13 to unicode value */
			var shifted = str.charCodeAt(i) + 13;

			/* Check if new 'shifted' unicode value is larger than 90 */
			if (shifted > 90) {
			/* if yes: */
				/* calculate difference 'diff' between 'shifted' and 90 */
				var diff = shifted - 90;
				/* add 'diff' - 1 to lowest possible value of 65 */
				shifted = 65 + diff - 1;
				/* push calculated value to list 'rot13' */
				rot13.push(shifted);
			} else {
			/* if no: push value to list 'rot13' */
				rot13.push(shifted);
			}
		}
	}
	/* Create a string from character code list 'rot13' */
	var decipher = String.fromCharCode.apply(String, rot13);
	
  console.log(decipher);
  return decipher;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");