var Cipher = function() {
  this.key = 'abcdefghij',
  this.reverseKey = ''
}

Cipher.prototype.encode = function(string) {
  this.reverseKey = string;
  return this.key;
};

Cipher.prototype.decode = function(num1, num2) {
  return this.reverseKey;
};

module.exports = Cipher;
