var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(string) {
  var transcription = string.split("").map(function(letter) {

    if(letter === 'C') {
      return 'G'
    } else if (letter === 'G') {
      return 'C'
    } else if (letter === 'T') {
      return 'A'
    } else if (letter === 'A') {
      return 'U'
    } else {
      throw new Error('Invalid input')
    }
  })
  return transcription.join("")
}

module.exports = DnaTranscriber;
