var Anagram = function(anagram) {
  this.anagram = anagram;
};

Anagram.prototype.matches = function(arguments) {
  var result= [];

  if(arguments[0].toLowerCase() === this.anagram.toLowerCase()) {
    return result
  } else {
    arguments.forEach((word)=> {
      var sortedWord = word.toLowerCase().split("").sort().join("");
      var sortedAnagram = this.anagram.toLowerCase().split("").sort().join("");

      if (sortedWord === sortedAnagram) {
        result.push(word)
      }
    })
    return result
  }
}

module.exports = Anagram
