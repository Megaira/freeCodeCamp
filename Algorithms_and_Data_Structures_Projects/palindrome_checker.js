function palindrome(str) {
  // Convert input string to lower case
  // remove special characters
  var original = str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '');
  // split string into characters
  // reverse cleaned created array and join to string
  var reverseStr = original.split('').reverse().join('');
  // check if original string equals reversed string
  return original === reverseStr;
}