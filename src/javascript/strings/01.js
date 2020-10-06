const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
* Match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
*/

function checkString(s) {
  /*
  * Explanation:
  * ^ matches the beginning of a string
  * () creates a group
  * [] single character of the list
  * .* any number of any characters
  * \1 backreference to group #1
  * $ end of the string
  */

  return /^([aeiou]).*\1$/.test(s);
}

readline.question('Input the string to be tested: ', s => {
  console.log(checkString(s));
  readline.close();
});