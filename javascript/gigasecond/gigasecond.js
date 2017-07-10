var Gigasecond = function(startDate) {
  this.startDate = startDate;
}

Gigasecond.prototype.date = function(){
  var seconds = this.startDate.getTime() + 1000000000000
  return new Date(seconds)
}

// Refactorded to remove hardcoded value for seconds

module.exports = Gigasecond;
