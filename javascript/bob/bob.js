var Bob = function() {}

Bob.prototype.hey = function(string) {
  if (this.allUpperCase(string)) return 'Whoa, chill out!';
  if (string.endsWith("?")) return 'Sure.';
  if (string.trim("") == '') return 'Fine. Be that way!';
  return "Whatever."
}

Bob.prototype.allUpperCase = function(string) {
  return string.toUpperCase() == string && string.split('').some(letter => letter != letter.toLowerCase())
}

// Final iteration submitted from incomplete 1st iteration 14/17 tests passing. 

module.exports = Bob;
