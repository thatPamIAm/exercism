var Year = function(input) {
  this.value = input;
};

Year.prototype.isLeap = function() {
  if (this.value % 4 === 0 && this.value % 100 !== 0) {
    return true
  } else if (this.value % 400 === 0 ) {
    return true
  } else {
    return false
  }
};

module.exports = Year;

//
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
