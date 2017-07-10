var Isogram = function(word) {
  this.word = removeChars(word);
}

Isogram.prototype.isIsogram = function() {
  var letterArray = this.word.toLowerCase().split("").sort()
    duplicates = []
    for (var i = 0; i < letterArray.length; i++) {
      if(letterArray[i] === letterArray[i+1]){
        duplicates.push(letterArray[i])
      }
    }
  return duplicates.length ? false : true
}

function removeChars (str) {
  return str.replace(/-|\s/g,"")
}

module.exports = Isogram;
