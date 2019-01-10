// // Write your own functions -

// Expected Outputs
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

var words = ["ground", "control", "to", "major", "tom"];

var map = function (arr, doSomething) {
var newArr = [];

for(var i = 0; i < arr.length; i++) {
  newArr[i] = doSomething(arr[i]);
   }

return newArr;
}

word1 = map(words, function(word) {
  return word.length;
});

word2 = map(words, function(word) {
  return word.toUpperCase();
});

word3 =map(words, function(word) {
  return word.split('').reverse().join('');
});



