var Anagram = function(anagram) {
  this.anagram = anagram;
};

Anagram.prototype.matches = function(arguments) {
  var result= [];
  arguments.forEach((word)=> {
    if (word.length === this.anagram.length) {
      result.push(word)
    }
  })
  return result
}


module.exports = Anagram
