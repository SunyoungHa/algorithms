/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

// input: String
// output: string whose letters are alphabetical order

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/
// //.split()- input string / output array 
// .sort() - input array / output array 
// .join() - input array / output string 
// .trim() - input string / output string 



function alphabetSoup(str) {
	var splited = str.split('');
	var sorted = arr.sort();
	var joined = sorted.join('');
	return joined.trim()
  }
  
  
  
  var result1 = alphabetSoup("hello");
  var result2 = alphabetSoup("");
  var result3 = alphabetSoup("my string");
  var result4 = alphabetSoup("my string oh my");
  
  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)

  