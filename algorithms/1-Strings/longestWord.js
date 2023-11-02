/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWordLength = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength;
}

// another way using forEach
function findLongestWordLength2(str){
  let words= str.split(" ");
  let longestLength = 0;
    words.forEach((word)=>{
  if (word.length>longestLength){longestLength=word.length}; 
    })
    return longestLength;
  }
  console.log(findLongestWordLength2("find Longest Word Length"))


// find the shortest word

function shortestLength(str){
  let words=str.split(" ");
  let shortest=words[0];

  for(let i=0;i<words.length;i++){
    if(words[i].length<shortest.length){
      shortest=words[i].length;
  }
    return shortest;
}
}
console.log(shortestLength("The quick brown fox jumped over the lazy dog"));