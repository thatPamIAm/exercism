var Anagram = function(anagram) {
  this.anagram = anagram;
};

function checkLetters(string, anagram) {
  console.log(string.sort())
}

Anagram.prototype.matches = function(arguments) {
  var result= [];

  arguments.forEach((word)=> {
    var sortedWord = word.toLowerCase().split("").sort().join("");
    var sortedAnagram = this.anagram.toLowerCase().split("").sort().join("");
    if (sortedWord === sortedAnagram) {
      result.push(word)
    }
  })
  return result
}

module.exports = Anagram
