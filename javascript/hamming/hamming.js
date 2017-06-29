var Hamming = function() {};

Hamming.prototype.compute = function(strandA, strandB) {
  if (strandA === strandB) {
    return 0
  } else if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {
    var numDiffChar = 0;
    var index = 0;

      while (index < strandA.length) {
        if (strandA.charAt(index) !== strandB.charAt(index)) {
            numDiffChar++;
            index++;
        } else {
            index++;
        }
      }
      return numDiffChar
  }
};

module.exports = Hamming;
