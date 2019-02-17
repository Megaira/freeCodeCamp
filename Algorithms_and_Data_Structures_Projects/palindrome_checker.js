function palindrome(str) {
  // Good luck!
  console.log(str);
  var original = str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '');
  var reverseStr = original.split('').reverse().join('');
  console.log(original);
  console.log(reverseStr);
  console.log(original === reverseStr);
}

// palindrome("eye");
palindrome("_eye");
// palindrome("race car");
// palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
// palindrome("never odd or even");
// palindrome("nope");
// palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
